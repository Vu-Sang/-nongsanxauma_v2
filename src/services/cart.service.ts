import type { ApiResponse } from '@/types'
import { STORAGE_KEYS } from '@/utils'

export const cartService = {
  async addToCart(payload: {
    productId?: number
    mysteryBoxId?: number
    quantity?: number
    quantityKg?: number
  }): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 200))
    try {
      const saved: Record<string, number> = JSON.parse(
        localStorage.getItem(STORAGE_KEYS.CART) || '{}',
      )
      const itemKey = payload.productId
        ? String(payload.productId)
        : payload.mysteryBoxId
          ? `box-${payload.mysteryBoxId}`
          : 'item'
      const qty = payload.quantity || payload.quantityKg || 1
      saved[itemKey] = (saved[itemKey] || 0) + qty
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(saved))
    } catch {
      // silent
    }
    return { code: 200, result: true, message: 'Đã thêm vào giỏ hàng' }
  },
}
