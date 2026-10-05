export type UserRole = 'buyer' | 'shop' | 'shipper' | 'admin' | 'staff'

export interface AuthUser {
  name: string
  email: string
  phone?: string
  role: UserRole
  avatar?: string
  detail?: string
  shopName?: string
  kycStatus?: 'APPROVED' | 'PENDING' | 'REJECTED'
}
