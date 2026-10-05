import Hero from '../design/Hero'
import RescueProcess from '../design/RescueProcess'
import AiFeatures from '../design/AiFeatures'
import Categories from '../design/Categories'
import TodayRescue from '../design/TodayRescue'
import CombosTeaser from '../design/CombosTeaser'
import FarmerStory from '../design/FarmerStory'
import Testimonials from '../design/Testimonials'
import { Newsletter } from '@/features/home'
import type { Cart } from '../catalog'

type HomeProps = {
  onAdd: (id: string) => void
  onInfo: (title: string) => void
  cart?: Cart
}

/**
 * Trước đây Home bắt mọi click rồi đọc chữ trên link (regex "Đăng ký|Xem bảo chứng|...")
 * để quyết định hành động. Cách đó chặn nhầm link "Đăng ký mua nông sản" (mở popup demo
 * thay vì trang đăng ký) và hỏng ngay khi đổi chữ. Giờ mỗi section tự nhận handler rõ ràng.
 */
export default function Home({ onAdd, onInfo, cart }: HomeProps) {
  return (
    <>
      <Hero />
      <Categories />
      <TodayRescue onAdd={onAdd} cart={cart} />
      <CombosTeaser onAdd={onAdd} />
      <RescueProcess onInfo={onInfo} />
      <AiFeatures onInfo={onInfo} />
      <FarmerStory />
      <Testimonials />
      <Newsletter onInfo={onInfo} />
    </>
  )
}
