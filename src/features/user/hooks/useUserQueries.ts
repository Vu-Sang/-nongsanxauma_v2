import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/services'

/** Query key của user; invalidate `userKeys.all` sau mọi thay đổi trạng thái user. */
export const userKeys = {
  all: ['users'] as const,
  byRole: (roles: string[], status: string | null, page: number, size: number) =>
    [...userKeys.all, 'by-role', { roles, status, page, size }] as const,
}

/** Danh sách user theo role/trạng thái, có phân trang. Giữ trang cũ trong lúc tải trang mới. */
export function useUsersByRole(roles: string[], status: string | null, page: number, size: number) {
  return useQuery({
    queryKey: userKeys.byRole(roles, status, page, size),
    queryFn: async () => {
      const res = await userService.getUsersByRolePaged(roles, status, page, size)
      return res.result ?? null
    },
    placeholderData: keepPreviousData,
  })
}

/** Duyệt hồ sơ KYC của Shop hoặc Shipper. */
export function useApproveKyc() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ userId, roleName }: { userId: number; roleName: string }) =>
      roleName === 'SHOP_OWNER'
        ? userService.approveShopOwner(userId)
        : userService.approveShipper(userId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: userKeys.all }),
  })
}
