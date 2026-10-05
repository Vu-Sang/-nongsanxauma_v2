import type { ApiResponse } from '../types'

export interface CodPendingOrderItem {
  id: number
  orderDetailId?: number
  orderMysteryBoxId?: number
  mysteryBoxType?: string
  productName?: string
  name?: string
  quantityKg?: number
  quantity?: number
  pricePerKg?: number
  unitPrice?: number
  imageUrl?: string
  image?: string
}

export interface CodPendingOrderResponse {
  id: number
  orderCode?: string
  status?: string
  totalAmount?: number
  shippingFee?: number
  prepaidAmount?: number
  collectAmount?: number
  codCollectAmount?: number
  codPrepaidAmount?: number
  codPaymentStatus?: string
  codPaymentOption?: string
  createdAt?: string
  deliveredAt?: string
  recipientName?: string
  recipientPhone?: string
  deliveryAddress?: string
  shippingAddress?: string
  note?: string
  refundAmount?: number
  refundReason?: string
  codSettled?: boolean
  buyerId?: number
  buyer?: {
    id: number
    fullName?: string
    phone?: string
    phoneNumber?: string
  }
  shipper?: {
    id: number
    fullName?: string
    phone?: string
    phoneNumber?: string
  }
  shop?: {
    id: number
    shopName?: string
  }
  items: CodPendingOrderItem[]
}

export function getCodCollectAmount(order: CodPendingOrderResponse): number {
  return order.codCollectAmount ?? order.collectAmount ?? order.totalAmount ?? 0
}

export function getCodPrepaidAmount(order: CodPendingOrderResponse): number {
  return (
    order.codPrepaidAmount ??
    order.prepaidAmount ??
    (order.totalAmount ? Math.round(order.totalAmount * 0.8) : 0)
  )
}

const mockCodOrders: CodPendingOrderResponse[] = [
  {
    id: 10452,
    orderCode: 'COD-10452',
    status: 'DELIVERED',
    totalAmount: 345000,
    shippingFee: 30000,
    codCollectAmount: 345000,
    codPrepaidAmount: 280000,
    codPaymentStatus: 'PAID',
    codPaymentOption: 'WALLET',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    deliveredAt: new Date(Date.now() - 3600000 * 1).toISOString(),
    recipientName: 'Trần Thị Mai',
    recipientPhone: '0908123456',
    deliveryAddress: '124 Lê Lợi, P. Bến Nghé, Quận 1, TP. HCM',
    shippingAddress: '124 Lê Lợi, P. Bến Nghé, Quận 1, TP. HCM',
    buyerId: 88,
    buyer: { id: 88, fullName: 'Trần Thị Mai', phone: '0908123456', phoneNumber: '0908123456' },
    shipper: {
      id: 14,
      fullName: 'Nguyễn Văn Hùng (Shipper)',
      phone: '0987654321',
      phoneNumber: '0987654321',
    },
    shop: { id: 5, shopName: 'Nông Trại Xanh Đà Lạt' },
    items: [
      { id: 1, productName: 'Khoai lang mật Đà Lạt', quantityKg: 5, pricePerKg: 32000 },
      { id: 2, productName: 'Cà chua Bi hữu cơ', quantityKg: 3, pricePerKg: 38000 },
    ],
  },
  {
    id: 10455,
    orderCode: 'COD-10455',
    status: 'DELIVERED',
    totalAmount: 520000,
    shippingFee: 45000,
    codCollectAmount: 520000,
    codPrepaidAmount: 420000,
    codPaymentStatus: 'PENDING_ADMIN_CONFIRM',
    codPaymentOption: 'CASH',
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    deliveredAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    recipientName: 'Lê Minh Quân',
    recipientPhone: '0912345678',
    deliveryAddress: '45 Nguyễn Đình Chiểu, Đa Kao, Quận 1, TP. HCM',
    shippingAddress: '45 Nguyễn Đình Chiểu, Đa Kao, Quận 1, TP. HCM',
    buyerId: 92,
    buyer: { id: 92, fullName: 'Lê Minh Quân', phone: '0912345678', phoneNumber: '0912345678' },
    shipper: {
      id: 19,
      fullName: 'Phạm Tấn Tài (Shipper)',
      phone: '0933445566',
      phoneNumber: '0933445566',
    },
    shop: { id: 8, shopName: 'Vườn Cam Hữu Cơ Cao Phong' },
    items: [
      { id: 3, productName: 'Cam sành loại 2 (giải cứu)', quantityKg: 10, pricePerKg: 28000 },
      { id: 4, productName: 'Bưởi da xanh xấu mã', quantityKg: 6, pricePerKg: 40000 },
    ],
  },
]

export const codSettlementService = {
  async getPendingCodOrders(): Promise<ApiResponse<CodPendingOrderResponse[]>> {
    await new Promise((r) => setTimeout(r, 400))
    return { code: 200, result: [...mockCodOrders] }
  },

  async settleCodOrder(orderId: number): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 400))
    const idx = mockCodOrders.findIndex((o) => o.id === orderId)
    if (idx !== -1) {
      mockCodOrders.splice(idx, 1)
    }
    return { code: 200, result: true, message: 'Đối soát COD thành công' }
  },

  async confirmShipperCashPayment(orderId: number): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 400))
    const target = mockCodOrders.find((o) => o.id === orderId)
    if (target) {
      target.codPaymentStatus = 'PAID'
    }
    return { code: 200, result: true, message: 'Đã xác nhận tiền mặt COD' }
  },

  async refundCodPrepaymentToShipper(orderId: number): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 400))
    const target = mockCodOrders.find((o) => o.id === orderId)
    if (target) {
      target.codPaymentStatus = 'REFUNDED'
    }
    return { code: 200, result: true, message: 'Đã hoàn tiền COD cho shipper' }
  },
}
