import type { ApiResponse, PageResponse, BlogCategory } from '../types'

// ==========================================
// 1. USER TYPES & SERVICE
// ==========================================
export interface RoleResponse {
  id?: number
  name: string
  description?: string
}

export interface UserResponse {
  id: number
  username?: string
  fullName: string
  email: string
  phone?: string
  phoneNumber?: string
  avatar?: string
  logoUrl?: string
  status: 'ACTIVE' | 'PENDING' | 'INACTIVE' | 'REJECTED'
  kycStatus?: 'APPROVED' | 'PENDING' | 'REJECTED' | 'ACTIVE'
  roleName?: string
  role: RoleResponse
  shopName?: string
  address?: string
  createdAt?: string
  createAt?: string
  lockedAt?: string
  identityCardNumber?: string
  identityCardFrontUrl?: string
  identityCardBackUrl?: string
  businessLicenseUrl?: string
  bankName?: string
  bankAccountNumber?: string
  bankAccountName?: string
  bankAccountHolder?: string
  bankAccount?: string
  vehicleType?: string
  licensePlate?: string
  license?: string
  vehicleNumber?: string
  licenseImageUrl?: string
  vehicleDocImageUrl?: string
  rating?: number
  ratingAverage?: number
  totalOrders?: number
  completedOrders?: number
  reportCount?: number
  description?: string
  achievement?: string
}

export type AdminUserReportType = 'week' | 'month' | 'year' | 'all'

export interface AdminUserReportItem {
  period?: string
  date?: string
  buyers?: number
  shops?: number
  shippers?: number
  total?: number
  activeUsers?: number
  newUsers?: number
  locked?: number
  [key: string]: unknown
}

export interface AdminUserReport {
  totalUsers: number
  totalBuyers: number
  totalShops: number
  totalShipper: number
  totalActiveUsers: number
  totalInactiveUsers: number
  totalShopPending: number
  totalShopSelling: number
  totalShopNotSelling: number
  totalUserLock: number
  userReports: AdminUserReportItem[]
  summary?: {
    totalUsers: number
    activeUsers: number
    pendingKyc: number
    blockedUsers: number
    totalBuyers: number
    totalShops: number
    totalShippers: number
  }
  chartData?: AdminUserReportItem[]
}

let mockUsers: UserResponse[] = [
  {
    id: 1,
    username: 'admin',
    fullName: 'Quản trị viên Hệ thống',
    email: 'admin@capnong.vn',
    phone: '0901234567',
    phoneNumber: '0901234567',
    status: 'ACTIVE',
    kycStatus: 'APPROVED',
    roleName: 'ADMIN',
    role: { id: 1, name: 'ADMIN', description: 'Quản trị viên toàn quyền hệ thống' },
    createdAt: '2025-01-01T00:00:00Z',
    createAt: '2025-01-01T00:00:00Z',
  },
  {
    id: 101,
    username: 'dalatorganic',
    fullName: 'Nông Trại Hữu Cơ Đà Lạt',
    email: 'dalat.farm@capnong.vn',
    phone: '0912345678',
    phoneNumber: '0912345678',
    status: 'ACTIVE',
    kycStatus: 'APPROVED',
    roleName: 'SHOP_OWNER',
    role: { id: 2, name: 'SHOP_OWNER', description: 'Chủ gian hàng nông sản' },
    shopName: 'Nông Trại Hữu Cơ Đà Lạt',
    address: 'Xã Tà Nung, TP. Đà Lạt, Lâm Đồng',
    bankName: 'Vietcombank',
    bankAccountNumber: '0011004321987',
    bankAccountName: 'NONG TRAI HUU CO DA LAT',
    bankAccountHolder: 'NONG TRAI HUU CO DA LAT',
    bankAccount: '0011004321987 (Vietcombank)',
    identityCardNumber: '049092001122',
    rating: 4.9,
    ratingAverage: 4.9,
    totalOrders: 420,
    completedOrders: 412,
    description:
      'Chuyên cung cấp các dòng nông sản xấu mã chuẩn VietGAP, thu hái trực tiếp từ vườn hữu cơ Đà Lạt.',
    achievement: 'Top 1 Nhà Vườn Tiêu Biểu Tháng 3/2026 · Chứng nhận OCOP 4 sao',
    logoUrl:
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&q=80',
    createdAt: '2025-02-10T08:30:00Z',
    createAt: '2025-02-10T08:30:00Z',
  },
  {
    id: 102,
    username: 'baolocgreen',
    fullName: 'Hợp Tác Xã Rau Quả Bảo Lộc',
    email: 'baoloc.htx@capnong.vn',
    phone: '0988776655',
    phoneNumber: '0988776655',
    status: 'PENDING',
    kycStatus: 'PENDING',
    roleName: 'SHOP_OWNER',
    role: { id: 2, name: 'SHOP_OWNER', description: 'Chủ gian hàng nông sản' },
    shopName: 'HTX Nông Sản Bảo Lộc',
    address: 'Phường Lộc Phát, TP. Bảo Lộc, Lâm Đồng',
    bankName: 'MB Bank',
    bankAccountNumber: '88801999234',
    bankAccountName: 'HTX NONG SAN BAO LOC',
    bankAccountHolder: 'HTX NONG SAN BAO LOC',
    bankAccount: '88801999234 (MB Bank)',
    identityCardNumber: '049088009988',
    identityCardFrontUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    identityCardBackUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    businessLicenseUrl:
      'https://images.unsplash.com/photo-1554415707-9e4c29759c5d?auto=format&fit=crop&w=400&q=80',
    rating: 5.0,
    ratingAverage: 5.0,
    totalOrders: 15,
    description: 'Tổ hợp tác xã nông sản sạch Bảo Lộc chuyên bơ, chuối Laba, chanh dây giải cứu.',
    logoUrl:
      'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=200&q=80',
    createdAt: '2026-03-25T14:10:00Z',
    createAt: '2026-03-25T14:10:00Z',
  },
  {
    id: 201,
    username: 'shipper_hung',
    fullName: 'Nguyễn Văn Hùng',
    email: 'hung.shipper@capnong.vn',
    phone: '0987654321',
    phoneNumber: '0987654321',
    status: 'ACTIVE',
    kycStatus: 'APPROVED',
    roleName: 'SHIPPER',
    role: { id: 3, name: 'SHIPPER', description: 'Tài xế giao hàng nông sản' },
    vehicleType: 'Xe Tải Lạnh 1.5 Tấn',
    licensePlate: '49C-123.45',
    vehicleNumber: '49C-123.45',
    license: 'Bằng C - 790123456',
    licenseImageUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    vehicleDocImageUrl:
      'https://images.unsplash.com/photo-1554415707-9e4c29759c5d?auto=format&fit=crop&w=400&q=80',
    logoUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    address: 'Đường Phan Đình Phùng, TP. Đà Lạt',
    bankName: 'Techcombank',
    bankAccountNumber: '19034567890012',
    bankAccountName: 'NGUYEN VAN HUNG',
    bankAccountHolder: 'NGUYEN VAN HUNG',
    bankAccount: '19034567890012 (Techcombank)',
    rating: 4.8,
    ratingAverage: 4.8,
    totalOrders: 184,
    completedOrders: 180,
    createdAt: '2025-02-15T10:00:00Z',
    createAt: '2025-02-15T10:00:00Z',
  },
  {
    id: 202,
    username: 'shipper_tai',
    fullName: 'Phạm Tấn Tài',
    email: 'tai.shipper@capnong.vn',
    phone: '0933445566',
    phoneNumber: '0933445566',
    status: 'PENDING',
    kycStatus: 'PENDING',
    roleName: 'SHIPPER',
    role: { id: 3, name: 'SHIPPER', description: 'Tài xế giao hàng nông sản' },
    vehicleType: 'Xe Van Trung Chuyển',
    licensePlate: '49D-998.81',
    vehicleNumber: '49D-998.81',
    license: 'Bằng B2 - 820998877',
    licenseImageUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    vehicleDocImageUrl:
      'https://images.unsplash.com/photo-1554415707-9e4c29759c5d?auto=format&fit=crop&w=400&q=80',
    logoUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    address: 'Huyện Đức Trọng, Lâm Đồng',
    bankName: 'Agribank',
    bankAccountNumber: '5400205566778',
    bankAccountName: 'PHAM TAN TAI',
    bankAccountHolder: 'PHAM TAN TAI',
    bankAccount: '5400205566778 (Agribank)',
    identityCardNumber: '049095007766',
    identityCardFrontUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    identityCardBackUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    rating: 4.6,
    ratingAverage: 4.6,
    totalOrders: 28,
    createdAt: '2026-03-28T09:15:00Z',
    createAt: '2026-03-28T09:15:00Z',
  },
  {
    id: 301,
    username: 'buyer_mai',
    fullName: 'Trần Thị Mai',
    email: 'mai.tran@gmail.com',
    phone: '0908123456',
    phoneNumber: '0908123456',
    status: 'ACTIVE',
    kycStatus: 'APPROVED',
    roleName: 'BUYER',
    role: { id: 4, name: 'BUYER', description: 'Người mua hàng' },
    address: '124 Lê Lợi, P. Bến Nghé, Quận 1, TP. HCM',
    totalOrders: 24,
    completedOrders: 24,
    reportCount: 0,
    createdAt: '2025-03-01T11:20:00Z',
    createAt: '2025-03-01T11:20:00Z',
  },
  {
    id: 302,
    username: 'buyer_bad01',
    fullName: 'Vũ Quốc Bảo (Boom hàng)',
    email: 'bao.badbuyer@gmail.com',
    phone: '0977000111',
    phoneNumber: '0977000111',
    status: 'ACTIVE',
    kycStatus: 'APPROVED',
    roleName: 'BUYER',
    role: { id: 4, name: 'BUYER', description: 'Người mua hàng' },
    address: 'Khu dân cư An Lạc, Bình Tân, TP. HCM',
    totalOrders: 8,
    completedOrders: 2,
    reportCount: 4,
    lockedAt: '2026-03-12T14:20:00Z',
    createdAt: '2026-01-10T16:45:00Z',
    createAt: '2026-01-10T16:45:00Z',
  },
]

const mockReportData: AdminUserReport = {
  totalUsers: 1480,
  totalBuyers: 1120,
  totalShops: 210,
  totalShipper: 150,
  totalActiveUsers: 1395,
  totalInactiveUsers: 55,
  totalShopPending: 18,
  totalShopSelling: 192,
  totalShopNotSelling: 18,
  totalUserLock: 12,
  userReports: [
    {
      period: 'T2',
      date: '2026-03-24',
      buyers: 45,
      shops: 8,
      shippers: 4,
      total: 57,
      activeUsers: 50,
      newUsers: 12,
      locked: 1,
    },
    {
      period: 'T3',
      date: '2026-03-25',
      buyers: 52,
      shops: 10,
      shippers: 6,
      total: 68,
      activeUsers: 60,
      newUsers: 15,
      locked: 0,
    },
    {
      period: 'T4',
      date: '2026-03-26',
      buyers: 60,
      shops: 12,
      shippers: 5,
      total: 77,
      activeUsers: 72,
      newUsers: 18,
      locked: 2,
    },
    {
      period: 'T5',
      date: '2026-03-27',
      buyers: 58,
      shops: 9,
      shippers: 7,
      total: 74,
      activeUsers: 68,
      newUsers: 14,
      locked: 1,
    },
    {
      period: 'T6',
      date: '2026-03-28',
      buyers: 85,
      shops: 18,
      shippers: 12,
      total: 115,
      activeUsers: 105,
      newUsers: 28,
      locked: 3,
    },
    {
      period: 'T7',
      date: '2026-03-29',
      buyers: 120,
      shops: 25,
      shippers: 16,
      total: 161,
      activeUsers: 150,
      newUsers: 45,
      locked: 2,
    },
    {
      period: 'CN',
      date: '2026-03-30',
      buyers: 140,
      shops: 30,
      shippers: 20,
      total: 190,
      activeUsers: 180,
      newUsers: 50,
      locked: 3,
    },
  ],
}

export const userService = {
  async getAllUsers(): Promise<ApiResponse<UserResponse[]>> {
    await new Promise((r) => setTimeout(r, 200))
    return { code: 200, result: [...mockUsers] }
  },

  async getUserById(id: number): Promise<ApiResponse<UserResponse>> {
    await new Promise((r) => setTimeout(r, 150))
    const u = mockUsers.find((user) => user.id === id) || mockUsers[0]
    return { code: 200, result: u }
  },

  async getUsersByRolePaged(
    roles: string[],
    status: string | null = null,
    page: number = 0,
    size: number = 10,
  ): Promise<ApiResponse<PageResponse<UserResponse>>> {
    await new Promise((r) => setTimeout(r, 200))
    let filtered = mockUsers.filter((u) => roles.includes(u.role?.name))
    if (status) {
      filtered = filtered.filter((u) => u.status === status)
    }
    const totalElements = filtered.length
    const totalPages = Math.ceil(totalElements / size) || 1
    const start = page * size
    const content = filtered.slice(start, start + size)

    return {
      code: 200,
      result: {
        page,
        size,
        totalElements,
        totalPages,
        first: page === 0,
        last: page >= totalPages - 1,
        content,
      },
    }
  },

  async approveShopOwner(userId: number): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 300))
    const target = mockUsers.find((u) => u.id === userId)
    if (target) {
      target.status = 'ACTIVE'
      target.kycStatus = 'APPROVED'
    }
    return { code: 200, result: true, message: 'Duyệt Shop thành công' }
  },

  async approveShipper(userId: number): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 300))
    const target = mockUsers.find((u) => u.id === userId)
    if (target) {
      target.status = 'ACTIVE'
      target.kycStatus = 'APPROVED'
    }
    return { code: 200, result: true, message: 'Duyệt Shipper thành công' }
  },

  async deactivateUser(userId: number): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 300))
    const target = mockUsers.find((u) => u.id === userId)
    if (target) {
      target.status = 'INACTIVE'
      target.lockedAt = new Date().toISOString()
    }
    return { code: 200, result: true, message: 'Đã khóa tài khoản' }
  },

  async activateUser(userId: number): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 300))
    const target = mockUsers.find((u) => u.id === userId)
    if (target) {
      target.status = 'ACTIVE'
      delete target.lockedAt
    }
    return { code: 200, result: true, message: 'Đã kích hoạt tài khoản' }
  },

  async getAdminUserReport(
    _type?: unknown,
    _from?: string,
    _to?: string,
  ): Promise<ApiResponse<AdminUserReport>> {
    await new Promise((r) => setTimeout(r, 300))
    return {
      code: 200,
      result: mockReportData,
    }
  },

  async generateAdminUserReport(
    _param?: unknown,
    _from?: string,
    _to?: string,
  ): Promise<ApiResponse<AdminUserReport>> {
    await new Promise((r) => setTimeout(r, 300))
    return {
      code: 200,
      result: mockReportData,
    }
  },
}

// ==========================================
// 2. ORDER TYPES & SERVICE
// ==========================================
export interface OrderResponse {
  id: number
  orderCode?: string
  status: string
  totalAmount: number
  shippingFee: number
  buyerName?: string
  buyerPhone?: string
  shopName?: string
  createdAt: string
  itemsCount?: number
}

let mockOrders: OrderResponse[] = [
  {
    id: 1001,
    orderCode: 'ORD-1001',
    status: 'COMPLETED',
    totalAmount: 320000,
    shippingFee: 30000,
    buyerName: 'Trần Thị Mai',
    shopName: 'Nông Trại Hữu Cơ Đà Lạt',
    createdAt: '2026-03-30T10:15:00Z',
    itemsCount: 3,
  },
  {
    id: 1002,
    orderCode: 'ORD-1002',
    status: 'SHIPPING',
    totalAmount: 540000,
    shippingFee: 40000,
    buyerName: 'Lê Minh Quân',
    shopName: 'Vườn Cam Hữu Cơ Cao Phong',
    createdAt: '2026-04-01T08:30:00Z',
    itemsCount: 5,
  },
  {
    id: 1003,
    orderCode: 'ORD-1003',
    status: 'PENDING',
    totalAmount: 185000,
    shippingFee: 25000,
    buyerName: 'Nguyễn Văn Nam',
    shopName: 'HTX Rau Quả Bảo Lộc',
    createdAt: '2026-04-02T14:45:00Z',
    itemsCount: 2,
  },
  {
    id: 1004,
    orderCode: 'ORD-1004',
    status: 'QUALITY_CHECKING',
    totalAmount: 420000,
    shippingFee: 35000,
    buyerName: 'Hoàng Bích Phương',
    shopName: 'Nông Trại Hữu Cơ Đà Lạt',
    createdAt: '2026-04-02T16:00:00Z',
    itemsCount: 4,
  },
]

export const orderService = {
  async getAllOrders(): Promise<ApiResponse<OrderResponse[]>> {
    await new Promise((r) => setTimeout(r, 200))
    return { code: 200, result: [...mockOrders] }
  },
}

// ==========================================
// 3. PRODUCT TYPES & SERVICE
// ==========================================
export interface ProductImageResponse {
  id: number
  imageUrl: string
  isPrimary?: boolean
  displayOrder?: number
}

export interface ProductResponse {
  id: number
  productName: string
  name?: string
  description?: string
  price: number
  originalPrice?: number
  sellingPrice?: number
  salePrice?: number
  pricePerKg?: number
  discountPercent?: number
  discountEndDate?: string
  stock: number
  stockKg?: number
  stockQuantity?: number
  minOrderKg?: number
  expiryDate?: string
  unit: string
  category?: string
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'ACTIVE'
  shopName?: string
  shopId?: number
  shopOwnerId?: number
  createdAt: string
  image?: string
  imageUrl?: string
  primaryImageUrl?: string
  images?: ProductImageResponse[]
  region?: string
  defectReason?: string
}

let mockBuyerProducts: ProductResponse[] = [
  {
    id: 701,
    productName: 'Bơ 034 Xấu Mã Ruột Vàng Dẻo',
    price: 45000,
    sellingPrice: 45000,
    salePrice: 45000,
    originalPrice: 65000,
    pricePerKg: 45000,
    discountPercent: 30,
    stock: 250,
    stockKg: 250,
    stockQuantity: 250,
    minOrderKg: 1,
    unit: 'kg',
    category: 'Trái cây giải cứu',
    status: 'ACTIVE',
    shopName: 'Nông Trại Hữu Cơ Đà Lạt',
    shopId: 101,
    shopOwnerId: 101,
    createdAt: '2026-04-01T10:00:00Z',
    primaryImageUrl:
      'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80',
    region: 'Lâm Đồng',
    defectReason: 'Vỏ sần sùi do ong châm tự nhiên, thịt bơ béo dẻo không xơ',
    description:
      'Bơ quả dài 034 thu hoạch chuẩn độ già, vỏ xấu do canh tác thuận tự nhiên không dùng thuốc xịt bóng da. Bơ dẻo vàng ươm, thơm ngậy.',
    images: [
      {
        id: 1,
        imageUrl:
          'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        displayOrder: 1,
      },
      {
        id: 2,
        imageUrl:
          'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        displayOrder: 2,
      },
      {
        id: 3,
        imageUrl:
          'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        displayOrder: 3,
      },
    ],
  },
  {
    id: 702,
    productName: 'Cà Rốt Đà Lạt Cong Queo Tươi Giòn',
    price: 18000,
    sellingPrice: 18000,
    salePrice: 18000,
    originalPrice: 28000,
    pricePerKg: 18000,
    discountPercent: 35,
    stock: 400,
    stockKg: 400,
    stockQuantity: 400,
    minOrderKg: 1,
    unit: 'kg',
    category: 'Rau củ hữu cơ',
    status: 'ACTIVE',
    shopName: 'HTX Nông Sản Bảo Lộc',
    shopId: 102,
    shopOwnerId: 102,
    createdAt: '2026-04-02T08:30:00Z',
    primaryImageUrl:
      'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80',
    region: 'Lâm Đồng',
    defectReason: 'Dáng củ phân nhánh, cong queo do đất sét tự nhiên, chất lượng ngọt giòn 100%',
    description:
      'Cà rốt trồng tại Đơn Dương, ngọt nước đậm đà, cực kỳ thích hợp ép nước hoặc nấu canh dinh dưỡng.',
    images: [
      {
        id: 4,
        imageUrl:
          'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        displayOrder: 1,
      },
      {
        id: 5,
        imageUrl:
          'https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        displayOrder: 2,
      },
    ],
  },
  {
    id: 703,
    productName: 'Cam Sành Hàm Yên Da Nám Mọng Nước',
    price: 22000,
    sellingPrice: 22000,
    salePrice: 22000,
    originalPrice: 35000,
    pricePerKg: 22000,
    discountPercent: 37,
    stock: 600,
    stockKg: 600,
    stockQuantity: 600,
    minOrderKg: 2,
    unit: 'kg',
    category: 'Trái cây giải cứu',
    status: 'ACTIVE',
    shopName: 'Nông Trại Hữu Cơ Đà Lạt',
    shopId: 101,
    shopOwnerId: 101,
    createdAt: '2026-04-02T11:00:00Z',
    primaryImageUrl:
      'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=400&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=400&q=80',
    region: 'Tuyên Quang',
    defectReason: 'Da vỏ bị nám sạm do sương muối tự nhiên, tép cam vàng óng, mọng nước ngọt thanh',
    description:
      'Cam trồng sườn đồi Hàm Yên chuẩn vị, nhiều nước, cực hợp vắt nước uống giải nhiệt hoặc bồi bổ sức khỏe.',
    images: [
      {
        id: 6,
        imageUrl:
          'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        displayOrder: 1,
      },
    ],
  },
  {
    id: 704,
    productName: 'Cà Chua Beef Đà Lạt Nứt Vỏ Thơm Ngọt',
    price: 19000,
    sellingPrice: 19000,
    salePrice: 19000,
    originalPrice: 30000,
    pricePerKg: 19000,
    discountPercent: 36,
    stock: 350,
    stockKg: 350,
    stockQuantity: 350,
    minOrderKg: 1,
    unit: 'kg',
    category: 'Rau củ hữu cơ',
    status: 'ACTIVE',
    shopName: 'Nông Trại Hữu Cơ Đà Lạt',
    shopId: 101,
    shopOwnerId: 101,
    createdAt: '2026-04-03T09:00:00Z',
    primaryImageUrl:
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80',
    region: 'Lâm Đồng',
    defectReason:
      'Vỏ hơi rạn nứt cuống do trời mưa to đột ngột khi quả đang chín, cơm dày ngọt lịm',
    description:
      'Cà chua giống Beef size to, bột nhiều thơm nức, xào nấu canh hoặc làm sốt cực ngon.',
    images: [
      {
        id: 7,
        imageUrl:
          'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        displayOrder: 1,
      },
    ],
  },
  {
    id: 705,
    productName: 'Chuối Laba Đà Lạt Đốm Đồi Mồi Vị Mật',
    price: 25000,
    sellingPrice: 25000,
    salePrice: 25000,
    originalPrice: 38000,
    pricePerKg: 25000,
    discountPercent: 34,
    stock: 500,
    stockKg: 500,
    stockQuantity: 500,
    minOrderKg: 1,
    unit: 'kg',
    category: 'Trái cây giải cứu',
    status: 'ACTIVE',
    shopName: 'HTX Nông Sản Bảo Lộc',
    shopId: 102,
    shopOwnerId: 102,
    createdAt: '2026-04-03T10:30:00Z',
    primaryImageUrl:
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80',
    region: 'Lâm Đồng',
    defectReason: 'Vỏ xuất hiện chấm đồi mồi tự nhiên khi tiết mật ngọt nhất',
    description: 'Chuối Laba tiến vua trồng tại vùng đất đỏ bazan, vị dẻo thơm ngát mùi mật ong.',
    images: [
      {
        id: 8,
        imageUrl:
          'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        displayOrder: 1,
      },
    ],
  },
  {
    id: 706,
    productName: 'Củ dền đỏ Đơn Dương đậm vị giàu sắt',
    name: 'Củ dền đỏ Đơn Dương đậm vị giàu sắt',
    price: 22000,
    sellingPrice: 22000,
    salePrice: 22000,
    originalPrice: 38000,
    pricePerKg: 22000,
    discountPercent: 42,
    stock: 60,
    stockKg: 60,
    stockQuantity: 60,
    minOrderKg: 1,
    unit: 'kg',
    category: 'Củ quả',
    status: 'ACTIVE',
    shopName: 'HTX Nông Sản Bảo Lộc',
    shopId: 102,
    shopOwnerId: 102,
    createdAt: '2026-04-03T11:00:00Z',
    primaryImageUrl:
      'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=400&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=400&q=80',
    region: 'Lâm Đồng',
    defectReason:
      'Củ nhỏ lệch size tự nhiên, nhiều nước, màu đỏ thắm chứa hàm lượng sắt và vitamin cao',
    description:
      'Củ dền đỏ trồng hữu cơ tại Đơn Dương, vị ngọt thanh mát, màu nước đỏ tím tự nhiên rất thích hợp nấu canh xương, luộc hoặc làm nước ép thanh lọc cơ thể.',
    images: [
      {
        id: 9,
        imageUrl:
          'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        displayOrder: 1,
      },
    ],
  },
  {
    id: 707,
    productName: 'Bưởi da xanh vỏ rám ruột hồng mọng',
    name: 'Bưởi da xanh vỏ rám ruột hồng mọng',
    price: 38000,
    sellingPrice: 38000,
    salePrice: 38000,
    originalPrice: 60000,
    pricePerKg: 38000,
    discountPercent: 37,
    stock: 50,
    stockKg: 50,
    stockQuantity: 50,
    minOrderKg: 1,
    unit: 'kg',
    category: 'Trái cây',
    status: 'ACTIVE',
    shopName: 'Nông Trại Hữu Cơ Đà Lạt',
    shopId: 101,
    shopOwnerId: 101,
    createdAt: '2026-04-03T12:00:00Z',
    primaryImageUrl:
      'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?auto=format&fit=crop&w=400&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?auto=format&fit=crop&w=400&q=80',
    region: 'Bến Tre',
    defectReason:
      'Vỏ rám nắng ngoài da do không dùng túi bọc bóng, tép bưởi hồng tươi, mọng nước ngọt thanh',
    description:
      'Bưởi da xanh chuẩn gốc Bến Tre, vị ngọt đậm đà không đắng chát, tép róc múi căng mọng.',
    images: [
      {
        id: 10,
        imageUrl:
          'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        displayOrder: 1,
      },
    ],
  },
  {
    id: 708,
    productName: 'Khoai lang mật củ cong siêu ngọt',
    name: 'Khoai lang mật củ cong siêu ngọt',
    price: 15000,
    sellingPrice: 15000,
    salePrice: 15000,
    originalPrice: 30000,
    pricePerKg: 15000,
    discountPercent: 50,
    stock: 120,
    stockKg: 120,
    stockQuantity: 120,
    minOrderKg: 1,
    unit: 'kg',
    category: 'Củ quả',
    status: 'ACTIVE',
    shopName: 'Nông Trại Hữu Cơ Đà Lạt',
    shopId: 101,
    shopOwnerId: 101,
    createdAt: '2026-04-03T13:00:00Z',
    primaryImageUrl:
      'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=400&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=400&q=80',
    region: 'Gia Lai',
    defectReason:
      'Dáng củ cong queo do sinh trưởng trong sỏi đá bazan, ruột ứa mật vàng rộm khi nướng hấp',
    description:
      'Khoai lang mật nướng chảy mật thơm nức mũi, nhiều xơ và vitamin, cực kỳ dẻo ngọt.',
    images: [
      {
        id: 11,
        imageUrl:
          'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        displayOrder: 1,
      },
    ],
  },
]

let mockPendingProducts: ProductResponse[] = [
  ...mockBuyerProducts.map((p) => ({ ...p, status: 'PENDING' as const })),
]

export const productService = {
  async getAll(): Promise<ApiResponse<ProductResponse[]>> {
    await new Promise((r) => setTimeout(r, 200))
    return { code: 200, result: [...mockBuyerProducts] }
  },

  async getAllProducts(): Promise<ApiResponse<ProductResponse[]>> {
    await new Promise((r) => setTimeout(r, 200))
    return { code: 200, result: [...mockBuyerProducts] }
  },

  async getForBuyer(): Promise<ApiResponse<ProductResponse[]>> {
    await new Promise((r) => setTimeout(r, 200))
    return { code: 200, result: [...mockBuyerProducts] }
  },

  async getById(id: number): Promise<ApiResponse<ProductResponse | null>> {
    await new Promise((r) => setTimeout(r, 150))
    const found = mockBuyerProducts.find((p) => p.id === id)
    return { code: 200, result: found || null }
  },

  async getPendingProducts(): Promise<ApiResponse<ProductResponse[]>> {
    await new Promise((r) => setTimeout(r, 200))
    return { code: 200, result: mockPendingProducts.filter((p) => p.status === 'PENDING') }
  },

  async getImages(productId: number): Promise<ApiResponse<ProductImageResponse[]>> {
    await new Promise((r) => setTimeout(r, 100))
    const found = mockBuyerProducts.find((p) => p.id === productId)
    if (found?.images && found.images.length > 0) {
      return { code: 200, result: found.images }
    }
    return {
      code: 200,
      result: [
        {
          id: 1,
          imageUrl:
            found?.imageUrl ||
            'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80',
          isPrimary: true,
          displayOrder: 1,
        },
      ],
    }
  },

  async approveProduct(productId: number): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 300))
    const p = mockPendingProducts.find((item) => item.id === productId)
    if (p) p.status = 'APPROVED'
    return { code: 200, result: true, message: 'Duyệt sản phẩm thành công' }
  },

  async rejectProduct(productId: number, reason: string): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 300))
    const p = mockPendingProducts.find((item) => item.id === productId)
    if (p) {
      p.status = 'REJECTED'
      p.defectReason = reason
    }
    return { code: 200, result: true, message: 'Đã từ chối duyệt sản phẩm' }
  },
}

// ==========================================
// 3b. REVIEW TYPES & SERVICE
// ==========================================
export interface ReviewResponse {
  id: number
  productId?: number
  productName?: string
  boxType?: string
  shopId?: number
  buyerId?: number
  fullName?: string
  ratingStar: number
  comment?: string
  evidence?: string
  replyFromShop?: string
  createAt?: string
  createdAt?: string
  likeCount?: number
  dislikeCount?: number
  currentUserReaction?: 'LIKE' | 'DISLIKE' | null
}

let mockReviews: ReviewResponse[] = [
  {
    id: 801,
    productId: 701,
    shopId: 101,
    buyerId: 301,
    fullName: 'Trần Thị Mai',
    ratingStar: 5,
    comment:
      'Bơ vỏ ngoài hơi sần sùi nhưng bóc ra cơm vàng óng, dẻo quánh béo ngậy. Ăn rất ngon và an tâm vì không thuốc bảo quản!',
    evidence:
      'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=300&q=80',
    replyFromShop: 'Cảm ơn chị Mai đã ủng hộ nông sản thật chất của nhà vườn Đà Lạt ạ!',
    createAt: '2026-04-02T14:30:00Z',
    likeCount: 12,
    dislikeCount: 0,
    currentUserReaction: null,
  },
  {
    id: 802,
    productId: 701,
    shopId: 101,
    buyerId: 302,
    fullName: 'Nguyễn Văn Hoàng',
    ratingStar: 5,
    comment:
      'Giao nhanh, bơ già đều 2 ngày là chín tới. Giá 45k/kg quá rẻ so với chất lượng bơ 034!',
    createAt: '2026-04-03T09:15:00Z',
    likeCount: 6,
    dislikeCount: 0,
    currentUserReaction: null,
  },
  {
    id: 803,
    productId: 702,
    shopId: 102,
    buyerId: 301,
    fullName: 'Lê Minh Quân',
    ratingStar: 5,
    comment: 'Cà rốt dáng cong cong nhưng tươi rói, giòn ngọt, ép nước màu cam đậm rất thơm!',
    replyFromShop:
      'HTX Bảo Lộc cảm ơn quý khách. Chúng tôi cam kết rau củ thu hoạch tươi mới mỗi ngày!',
    createAt: '2026-04-03T11:00:00Z',
    likeCount: 8,
    dislikeCount: 0,
    currentUserReaction: null,
  },
]

export const reviewService = {
  async getByProductId(productId: number): Promise<ApiResponse<ReviewResponse[]>> {
    await new Promise((r) => setTimeout(r, 150))
    const list = mockReviews.filter((r) => !r.productId || r.productId === productId)
    return { code: 200, result: list }
  },

  async getByShopId(shopId: number): Promise<ApiResponse<ReviewResponse[]>> {
    await new Promise((r) => setTimeout(r, 150))
    const list = mockReviews.filter((r) => !r.shopId || r.shopId === shopId)
    return { code: 200, result: list }
  },

  async reactToReview(
    reviewId: number,
    reactionType: 'LIKE' | 'DISLIKE',
  ): Promise<ApiResponse<ReviewResponse>> {
    await new Promise((r) => setTimeout(r, 100))
    const rev = mockReviews.find((r) => r.id === reviewId)
    if (rev) {
      if (rev.currentUserReaction === reactionType) {
        rev.currentUserReaction = null
        if (reactionType === 'LIKE') rev.likeCount = Math.max(0, (rev.likeCount || 1) - 1)
        else rev.dislikeCount = Math.max(0, (rev.dislikeCount || 1) - 1)
      } else {
        if (rev.currentUserReaction === 'LIKE')
          rev.likeCount = Math.max(0, (rev.likeCount || 1) - 1)
        if (rev.currentUserReaction === 'DISLIKE')
          rev.dislikeCount = Math.max(0, (rev.dislikeCount || 1) - 1)
        rev.currentUserReaction = reactionType
        if (reactionType === 'LIKE') rev.likeCount = (rev.likeCount || 0) + 1
        else rev.dislikeCount = (rev.dislikeCount || 0) + 1
      }
      return { code: 200, result: { ...rev } }
    }
    return { code: 200, result: mockReviews[0] }
  },
}

// ==========================================
// 3c. MYSTERY BOX TYPES & SERVICE
// ==========================================
export interface MysteryBox {
  id: number
  boxType: string
  price: number
  description?: string
  imageUrl?: string
  shopId?: number
  shopOwnerId?: number
  status?: string
}

let mockMysteryBoxes: MysteryBox[] = [
  {
    id: 601,
    boxType: 'Túi Mù Nông Sản Giải Cứu Đà Lạt (3kg)',
    price: 59000,
    description:
      'Hộp bất ngờ chứa từ 3-4 loại củ quả hữu cơ Đà Lạt: cà rốt, bơ, cà chua, khoai lang ngọt lành.',
    imageUrl:
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=400&q=80',
    shopId: 101,
    status: 'ACTIVE',
  },
  {
    id: 602,
    boxType: 'Túi Mù Trái Cây Miền Tây Tươi Mát (5kg)',
    price: 89000,
    description: 'Gồm cam sành nám, bưởi da xanh vỏ rám, thanh long ruột đỏ thu hái tươi.',
    imageUrl:
      'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=400&q=80',
    shopId: 102,
    status: 'ACTIVE',
  },
]

export const mysteryBoxService = {
  async getForBuyer(): Promise<ApiResponse<MysteryBox[]>> {
    await new Promise((r) => setTimeout(r, 150))
    return { code: 200, result: [...mockMysteryBoxes] }
  },
}

// ==========================================
// 3d. VOUCHER TYPES & SERVICE
// ==========================================
export interface VoucherResponse {
  id?: number
  voucherCode: string
  voucherType?: 'SHOP' | 'PLATFORM'
  shopId?: number
  discountValue: number
  maxDiscount?: number
  minOrderValue?: number
  expiryDate?: string
  claimedCount?: number
  usageLimit?: number
}

let mockVouchers: VoucherResponse[] = [
  {
    id: 501,
    voucherCode: 'DALAT10K',
    voucherType: 'SHOP',
    shopId: 101,
    discountValue: 10,
    maxDiscount: 30000,
    minOrderValue: 100000,
    expiryDate: '2026-05-30T23:59:59Z',
    claimedCount: 45,
    usageLimit: 200,
  },
  {
    id: 502,
    voucherCode: 'FREESHIPFARM',
    voucherType: 'SHOP',
    shopId: 101,
    discountValue: 15,
    maxDiscount: 25000,
    minOrderValue: 150000,
    expiryDate: '2026-05-15T23:59:59Z',
    claimedCount: 88,
    usageLimit: 150,
  },
  {
    id: 503,
    voucherCode: 'BAOLOCGREEN',
    voucherType: 'SHOP',
    shopId: 102,
    discountValue: 12,
    maxDiscount: 20000,
    minOrderValue: 80000,
    expiryDate: '2026-05-20T23:59:59Z',
    claimedCount: 20,
    usageLimit: 100,
  },
]

export const voucherService = {
  async getBuyerShopVouchers(
    shopId: number,
    page: number = 0,
    size: number = 10,
  ): Promise<ApiResponse<PageResponse<VoucherResponse>>> {
    await new Promise((r) => setTimeout(r, 150))
    const list = mockVouchers.filter((v) => !v.shopId || v.shopId === Number(shopId))
    return {
      code: 200,
      result: {
        page,
        size,
        totalElements: list.length,
        totalPages: Math.ceil(list.length / size) || 1,
        first: page === 0,
        last: true,
        content: list,
      },
    }
  },

  async canReceiveVoucher(_voucherCode: string): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 100))
    return { code: 200, result: true }
  },

  async receiveVoucher(voucherCode: string): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 200))
    const v = mockVouchers.find((item) => item.voucherCode === voucherCode)
    if (v) {
      v.claimedCount = (v.claimedCount || 0) + 1
    }
    return { code: 200, result: true, message: 'Đã lưu voucher thành công!' }
  },
}

// ==========================================
// 3e. CART SERVICE
// ==========================================
export const cartService = {
  async addToCart(payload: {
    productId?: number
    mysteryBoxId?: number
    quantity?: number
    quantityKg?: number
  }): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 200))
    try {
      const saved: Record<string, number> = JSON.parse(localStorage.getItem('capnong-cart') || '{}')
      const itemKey = payload.productId
        ? String(payload.productId)
        : payload.mysteryBoxId
          ? `box-${payload.mysteryBoxId}`
          : 'item'
      const qty = payload.quantity || payload.quantityKg || 1
      saved[itemKey] = (saved[itemKey] || 0) + qty
      localStorage.setItem('capnong-cart', JSON.stringify(saved))
    } catch {
      // silent
    }
    return { code: 200, result: true, message: 'Đã thêm vào giỏ hàng' }
  },
}

// ==========================================
// 4. BLOG & NEWS TYPES & SERVICE
// ==========================================
export interface BlogResponse {
  id: number
  title: string
  content: string
  category: BlogCategory
  imageUrl?: string
  pictureUrl?: string
  status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED'
  createdAt?: string
  createAt?: string
  authorName?: string
  adminName?: string
  viewCount?: number
  views?: number
}

export interface BlogCreationRequest {
  title: string
  content: string
  category: BlogCategory
  status: string
  image?: File | null
}

let mockBlogs: BlogResponse[] = [
  {
    id: 1,
    title: 'Tại sao nông sản xấu mã lại giữ trọn vị ngọt tự nhiên?',
    content:
      'Nông sản xấu mã không dùng hóa chất kích thích tăng trưởng hay thuốc bóng vỏ giữ được hàm lượng chất dinh dưỡng và hương vị tự nhiên nguyên bản...',
    category: 'SUC_KHOE' as BlogCategory,
    imageUrl:
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    pictureUrl:
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    status: 'PUBLISHED',
    createdAt: '2026-03-15T09:00:00Z',
    createAt: '2026-03-15T09:00:00Z',
    authorName: 'Ban Biên Tập CapNong',
    adminName: 'Ban Biên Tập CapNong',
    viewCount: 1240,
    views: 1240,
  },
  {
    id: 2,
    title: 'Mô hình logistics ghép chuyến giúp nông dân giảm 40% chi phí vận chuyển',
    content:
      'Ứng dụng thuật toán ghép chuyến thông minh giúp bà con nông dân gom chung chuyến xe lạnh về kho trung chuyển...',
    category: 'NONG_NGHIEP' as BlogCategory,
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    pictureUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    status: 'PUBLISHED',
    createdAt: '2026-03-20T14:30:00Z',
    createAt: '2026-03-20T14:30:00Z',
    authorName: 'Ks. Nông Nghiệp Minh Hoàng',
    adminName: 'Ks. Nông Nghiệp Minh Hoàng',
    viewCount: 890,
    views: 890,
  },
]

export const blogService = {
  async getAllBlogs(
    page: number = 0,
    size: number = 10,
    _query?: string,
    _category?: string,
  ): Promise<ApiResponse<PageResponse<BlogResponse>>> {
    await new Promise((r) => setTimeout(r, 200))
    const totalElements = mockBlogs.length
    const totalPages = Math.ceil(totalElements / size) || 1
    return {
      code: 200,
      result: {
        page,
        size,
        totalElements,
        totalPages,
        first: page === 0,
        last: page >= totalPages - 1,
        content: [...mockBlogs],
      },
    }
  },

  async getAllBlogsPaged(
    page: number = 0,
    size: number = 10,
    query?: string,
    category?: string,
  ): Promise<ApiResponse<PageResponse<BlogResponse>>> {
    return this.getAllBlogs(page, size, query, category)
  },

  async createBlog(data: BlogCreationRequest): Promise<ApiResponse<BlogResponse>> {
    await new Promise((r) => setTimeout(r, 300))
    const newBlog: BlogResponse = {
      id: Date.now(),
      title: data.title,
      content: data.content,
      category: data.category,
      status: (data.status as 'PUBLISHED' | 'DRAFT') || 'DRAFT',
      createdAt: new Date().toISOString(),
      createAt: new Date().toISOString(),
      authorName: 'Admin CapNong',
      adminName: 'Admin CapNong',
      imageUrl:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      pictureUrl:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      viewCount: 0,
      views: 0,
    }
    mockBlogs.unshift(newBlog)
    return { code: 200, result: newBlog }
  },

  async updateBlog(id: number, data: Partial<BlogResponse>): Promise<ApiResponse<BlogResponse>> {
    await new Promise((r) => setTimeout(r, 300))
    const target = mockBlogs.find((b) => b.id === id)
    if (target) {
      Object.assign(target, data)
    }
    return { code: 200, result: target || mockBlogs[0] }
  },

  async deleteBlog(id: number): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 250))
    mockBlogs = mockBlogs.filter((b) => b.id !== id)
    return { code: 200, result: true }
  },
}

// ==========================================
// 5. NOTIFICATION SERVICE
// ==========================================
export interface NotificationItem {
  id: number
  title: string
  message: string
  targetRole?: string
  receiverType?: string
  receiverTypes?: string[]
  createdAt?: string
  createAt?: string
  isRead?: boolean
}

let mockNotifications: NotificationItem[] = [
  {
    id: 1,
    title: 'CapNong mở đợt trợ giá vận chuyển nông sản mùa khô 2026',
    message:
      'Toàn bộ các đơn hàng nông sản xấu mã giao trong tuần này được trợ giá 20.000đ/đơn từ quỹ hỗ trợ nhà vườn.',
    receiverTypes: ['BUYER', 'SHOP_OWNER', 'SHIPPER'],
    receiverType: 'Tất cả người dùng',
    createdAt: '2026-03-31T08:00:00Z',
    createAt: '2026-03-31T08:00:00Z',
  },
  {
    id: 2,
    title: 'Cập nhật chính sách đối soát tiền mặt COD cho Shipper',
    message:
      'Shipper có thể nộp tiền mặt COD đối soát trực tiếp tại các Hub trung chuyển vào 17h hàng ngày.',
    receiverTypes: ['SHIPPER'],
    receiverType: 'SHIPPER',
    createdAt: '2026-04-01T15:00:00Z',
    createAt: '2026-04-01T15:00:00Z',
  },
]

export const notificationService = {
  async getAllNotifications(): Promise<ApiResponse<NotificationItem[]>> {
    await new Promise((r) => setTimeout(r, 150))
    return { code: 200, result: [...mockNotifications] }
  },

  async adminSendToGroups(payload: {
    title: string
    message: string
    receiverTypes: string[]
  }): Promise<ApiResponse<NotificationItem>> {
    await new Promise((r) => setTimeout(r, 300))
    const newNotif: NotificationItem = {
      id: Date.now(),
      title: payload.title,
      message: payload.message,
      receiverTypes: payload.receiverTypes,
      receiverType: payload.receiverTypes.join(', '),
      createdAt: new Date().toISOString(),
      createAt: new Date().toISOString(),
    }
    mockNotifications.unshift(newNotif)
    return { code: 200, result: newNotif }
  },
}

// ==========================================
// 6. WALLET SERVICE
// ==========================================
export interface WithdrawRequestResponse {
  id: number
  amount: number
  receiveAmount?: number
  status: 'PENDING' | 'SUCCESS' | 'REJECTED'
  walletType?: 'MEMBER' | 'SHIPPER' | 'SHOP' | 'BUYER'
  walletId?: number
  buyerId?: number
  shopOwnerId?: number
  shipperId?: number
  bankName: string
  bankAccountNumber: string
  bankAccountName: string
  createdAt: string
  processedAt?: string
  note?: string
  adminNote?: string
}

export interface WalletResponse {
  id: number
  balance: number
  totalBalance?: number
  frozenBalance: number
  totalWithdrawn: number
  totalDeposited: number
  commissionEarned: number
}

let mockWithdrawRequests: WithdrawRequestResponse[] = [
  {
    id: 901,
    amount: 15400000,
    receiveAmount: 15400000,
    status: 'PENDING',
    walletType: 'SHOP',
    shopOwnerId: 101,
    bankName: 'Vietcombank',
    bankAccountNumber: '0011004321987',
    bankAccountName: 'NONG TRAI HUU CO DA LAT',
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
    note: 'Rút tiền doanh thu đợt giải cứu bơ và cà chua',
    adminNote: 'Đang chuẩn bị lệnh chuyển khoản liên ngân hàng',
  },
  {
    id: 902,
    amount: 3250000,
    receiveAmount: 3250000,
    status: 'PENDING',
    walletType: 'SHIPPER',
    shipperId: 201,
    bankName: 'Techcombank',
    bankAccountNumber: '19034567890012',
    bankAccountName: 'NGUYEN VAN HUNG',
    createdAt: new Date(Date.now() - 3600000 * 7).toISOString(),
    note: 'Rút tiền cước vận chuyển chuyến Đà Lạt - Sài Gòn',
    adminNote: 'Đã đối soát với bảng kê chuyến xe',
  },
  {
    id: 903,
    amount: 8600000,
    receiveAmount: 8600000,
    status: 'SUCCESS',
    walletType: 'SHOP',
    shopOwnerId: 102,
    bankName: 'MB Bank',
    bankAccountNumber: '88801999234',
    bankAccountName: 'HTX NONG SAN BAO LOC',
    createdAt: '2026-03-29T10:00:00Z',
    processedAt: '2026-03-29T11:15:00Z',
    note: 'Đã chuyển khoản qua Napas247',
    adminNote: 'Chuyển khoản thành công mã GD MB-99231',
  },
]

export const walletService = {
  async getAllPendingWithdrawRequests(): Promise<ApiResponse<WithdrawRequestResponse[]>> {
    await new Promise((r) => setTimeout(r, 200))
    return { code: 200, result: mockWithdrawRequests.filter((r) => r.status === 'PENDING') }
  },

  async getAllWithdrawRequests(): Promise<ApiResponse<WithdrawRequestResponse[]>> {
    await new Promise((r) => setTimeout(r, 200))
    return { code: 200, result: [...mockWithdrawRequests] }
  },

  async getPlatformWallet(): Promise<ApiResponse<WalletResponse>> {
    await new Promise((r) => setTimeout(r, 200))
    return {
      code: 200,
      result: {
        id: 1,
        balance: 185450000,
        totalBalance: 209750000,
        frozenBalance: 24300000,
        totalWithdrawn: 420500000,
        totalDeposited: 630250000,
        commissionEarned: 31512500,
      },
    }
  },

  async confirmTransfer(
    requestId: number,
    noteOrFiles?: any,
    files?: any,
  ): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 350))
    const target = mockWithdrawRequests.find((r) => r.id === requestId)
    if (target) {
      target.status = 'SUCCESS'
      if (typeof noteOrFiles === 'string') {
        target.adminNote = noteOrFiles
      }
      target.processedAt = new Date().toISOString()
    }
    return { code: 200, result: true, message: 'Đã giải ngân lệnh rút tiền thành công' }
  },

  async confirmWithdrawSuccess(
    requestId: number,
    noteOrFiles?: any,
    files?: any,
  ): Promise<ApiResponse<boolean>> {
    return this.confirmTransfer(requestId, noteOrFiles, files)
  },

  async createWithdrawQr(
    requestId: number,
  ): Promise<ApiResponse<{ qrCodeUrl: string; checkoutUrl?: string }>> {
    await new Promise((r) => setTimeout(r, 200))
    const target = mockWithdrawRequests.find((r) => r.id === requestId)
    const amount = target?.amount || 1000000
    const qrUrl = `https://img.vietqr.io/image/VCB-0011004321987-compact2.png?amount=${amount}&addInfo=CapNong%20RutTien%20${requestId}`
    return {
      code: 200,
      result: {
        qrCodeUrl: qrUrl,
        checkoutUrl: qrUrl,
      },
    }
  },

  async rejectWithdraw(
    requestId: number,
    note: string,
    _files?: File[],
  ): Promise<ApiResponse<boolean>> {
    await new Promise((r) => setTimeout(r, 350))
    const target = mockWithdrawRequests.find((r) => r.id === requestId)
    if (target) {
      target.status = 'REJECTED'
      target.note = note
      target.adminNote = note
      target.processedAt = new Date().toISOString()
    }
    return { code: 200, result: true, message: 'Đã từ chối lệnh rút tiền' }
  },
}
