import type { ApiResponse } from '../types';

export type ReturnStatus =
  | 'PENDING'
  | 'SHOP_APPROVED'
  | 'DISPUTED'
  | 'REFUND_PENDING'
  | 'COMPLETED'
  | 'REJECTED'
  | 'CANCELLED';

export interface ReturnRequestResponse {
  id: number;
  orderId: number;
  productName: string;
  refundAmount: number;
  reason: string;
  status: ReturnStatus;
  createdAt: string;
  updatedAt?: string;
  buyerName?: string;
  shopName?: string;
  evidence?: string;
  adminRemark?: string;
  shopResponse?: string;
  buyerPhone?: string;
  shopPhone?: string;
}

const mockDisputes: ReturnRequestResponse[] = [
  {
    id: 501,
    orderId: 10244,
    productName: 'Cam Sành Mọng Nước Hàm Yên (10kg)',
    refundAmount: 220000,
    reason: 'Trái cây bị dập nát quá nhiều khi vận chuyển xa, không sử dụng được phần lớn',
    status: 'DISPUTED',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    buyerName: 'Hoàng Anh Dũng',
    buyerPhone: '0912888999',
    shopName: 'Nhà Vườn Cam Sành',
    shopPhone: '0977665544',
    shopResponse: 'Vườn đã đóng gói xốp cẩn thận, nghi do bên đơn vị vận chuyển làm rơi.',
    evidence: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=600&q=80;https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=600&q=80',
    adminRemark: 'Chờ đối chiếu bằng chứng ảnh chụp của bên mua và bên bán',
  },
  {
    id: 502,
    orderId: 10289,
    productName: 'Túi Mù Rau Củ Hữu Cơ Đà Lạt 5kg',
    refundAmount: 79000,
    reason: 'Giao thiếu 1 loại nấm đùi gà so với mô tả gói combo',
    status: 'PENDING',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    buyerName: 'Nguyễn Bích Thảo',
    buyerPhone: '0988112233',
    shopName: 'Nông Trại Xanh Đà Lạt',
    shopPhone: '0909000111',
    shopResponse: 'Vườn đồng ý gửi bù sản phẩm vào đơn kế tiếp hoặc hoàn tiền phần thiếu.',
    evidence: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
  },
];

export const returnService = {
  async getDisputes(): Promise<ApiResponse<ReturnRequestResponse[]>> {
    await new Promise((r) => setTimeout(r, 400));
    return { code: 200, result: [...mockDisputes] };
  },

  async autoCheckPayout(orderCode: number): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 300));
    return { code: 200, result: true, message: `Payout verified for order ${orderCode}` };
  },

  async checkPayoutStatus(id: number): Promise<ApiResponse<{ request: ReturnRequestResponse }>> {
    await new Promise((r) => setTimeout(r, 400));
    const d = mockDisputes.find((m) => m.id === id) || mockDisputes[0];
    return { code: 200, result: { request: { ...d, status: 'COMPLETED' } } };
  },

  async adminAction(
    id: number,
    payload: { accept: boolean; response: string; refundAmount: number }
  ): Promise<ApiResponse<{ request: ReturnRequestResponse; checkoutUrl?: string }>> {
    await new Promise((r) => setTimeout(r, 500));
    const target = mockDisputes.find((d) => d.id === id);
    if (target) {
      target.status = payload.accept ? 'COMPLETED' : 'REJECTED';
      target.adminRemark = payload.response;
      target.refundAmount = payload.refundAmount;
    }
    const updated = target || {
      id,
      orderId: 9999,
      productName: 'Sản phẩm mẫu',
      refundAmount: payload.refundAmount,
      reason: 'Ghi chú',
      status: (payload.accept ? 'COMPLETED' : 'REJECTED') as ReturnStatus,
      createdAt: new Date().toISOString(),
      adminRemark: payload.response,
    };
    return {
      code: 200,
      result: {
        request: updated,
      },
    };
  },
};
