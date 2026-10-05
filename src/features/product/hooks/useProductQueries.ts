import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { productService, type ProductImageResponse } from '@/services'

/** Query key của sản phẩm; invalidate `productKeys.all` sau khi duyệt/từ chối. */
export const productKeys = {
  all: ['products'] as const,
  pending: () => [...productKeys.all, 'pending'] as const,
  images: (productId: number) => [...productKeys.all, 'images', productId] as const,
}

const byDisplayOrder = (a: ProductImageResponse, b: ProductImageResponse) => {
  if (a.isPrimary) return -1
  if (b.isPrimary) return 1
  return (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
}

export function usePendingProducts() {
  return useQuery({
    queryKey: productKeys.pending(),
    queryFn: async () => (await productService.getPendingProducts()).result ?? [],
  })
}

/** Ảnh của sản phẩm, ảnh chính lên đầu. Không gọi khi chưa chọn sản phẩm. */
export function useProductImages(productId: number | undefined) {
  return useQuery({
    queryKey: productKeys.images(productId ?? 0),
    queryFn: async () => (await productService.getImages(productId!)).result ?? [],
    enabled: productId != null,
    select: (images) => images.slice().sort(byDisplayOrder),
  })
}

export function useApproveProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (productId: number) => productService.approveProduct(productId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: productKeys.all }),
  })
}

export function useRejectProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ productId, reason }: { productId: number; reason: string }) =>
      productService.rejectProduct(productId, reason),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: productKeys.all }),
  })
}
