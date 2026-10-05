import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { voucherService, type VoucherResponse } from '@/services'

export type ShopVoucherPage = {
  vouchers: VoucherResponse[]
  totalPages: number
  /** voucherCode -> người dùng hiện tại còn nhận được không */
  canReceive: Record<string, boolean>
}

export const voucherKeys = {
  all: ['vouchers'] as const,
  shop: (shopId: number, page: number, size: number, signedIn: boolean) =>
    [...voucherKeys.all, 'shop', { shopId, page, size, signedIn }] as const,
}

const EMPTY: ShopVoucherPage = { vouchers: [], totalPages: 0, canReceive: {} }

async function fetchShopVouchers(
  shopId: number,
  page: number,
  size: number,
  signedIn: boolean,
): Promise<ShopVoucherPage> {
  try {
    const result = (await voucherService.getBuyerShopVouchers(shopId, page, size)).result
    const vouchers = (result?.content ?? []).filter(
      (v) => v.voucherType === 'SHOP' && Number(v.shopId) === shopId,
    )
    if (!signedIn || vouchers.length === 0) {
      return { vouchers, totalPages: result?.totalPages ?? 0, canReceive: {} }
    }
    const statuses = await Promise.all(
      vouchers.map(async (v) => {
        try {
          return [
            v.voucherCode,
            Boolean((await voucherService.canReceiveVoucher(v.voucherCode)).result),
          ] as const
        } catch {
          return [v.voucherCode, false] as const
        }
      }),
    )
    return {
      vouchers,
      totalPages: result?.totalPages ?? 0,
      canReceive: Object.fromEntries(statuses),
    }
  } catch {
    // Giữ hành vi cũ: lỗi tải thì hiện danh sách rỗng.
    return EMPTY
  }
}

/** Voucher của một shop (chỉ loại SHOP), kèm trạng thái "còn nhận được" khi đã đăng nhập. */
export function useShopVouchers(shopId: number, page: number, size: number, signedIn: boolean) {
  return useQuery({
    queryKey: voucherKeys.shop(shopId, page, size, signedIn),
    queryFn: () => fetchShopVouchers(shopId, page, size, signedIn),
    enabled: Number.isFinite(shopId) && shopId > 0,
  })
}

/** Nhận voucher; cập nhật ngay danh sách đang xem (hết nhận được, +1 lượt đã nhận). */
export function useReceiveVoucher() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (voucherCode: string) => voucherService.receiveVoucher(voucherCode),
    onSuccess: (_res, voucherCode) => {
      queryClient.setQueriesData<ShopVoucherPage>(
        { queryKey: voucherKeys.all },
        (old) =>
          old && {
            vouchers: old.vouchers.map((v) =>
              v.voucherCode === voucherCode ? { ...v, claimedCount: (v.claimedCount ?? 0) + 1 } : v,
            ),
            totalPages: old.totalPages,
            canReceive: { ...old.canReceive, [voucherCode]: false },
          },
      )
    },
  })
}
