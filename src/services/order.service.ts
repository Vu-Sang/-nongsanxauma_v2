import type { ApiResponse } from '@/types'
import type { OrderResponse } from './order.types'
import { mockOrders } from '@/mocks/order.mock'

export type * from './order.types'

export const orderService = {
  async getAllOrders(): Promise<ApiResponse<OrderResponse[]>> {
    await new Promise((r) => setTimeout(r, 200))
    return { code: 200, result: [...mockOrders] }
  },
}
