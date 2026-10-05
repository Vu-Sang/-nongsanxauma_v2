import { useState, useEffect } from 'react'
import { Sparkles, X, BookOpen, ChevronRight, Check } from 'lucide-react'

export interface OnboardingStep {
  tabId: string
  badge: string
  title: string
  desc: string
  detail: string
}

export const TOUR_STEPS: OnboardingStep[] = [
  {
    tabId: 'overview',
    badge: 'MỤC 1/8 – 📊 TỔNG QUAN',
    title: '📊 Tổng quan',
    desc: 'Đây là trang chủ của bạn. Xem doanh thu, đơn hàng mới và các thống kê quan trọng tại đây.',
    detail:
      'Theo dõi 4 chỉ số KPI quan trọng, danh sách sản phẩm đang bán và quản lý các đơn hàng mới nhất.',
  },
  {
    tabId: 'revenue-report',
    badge: 'MỤC 2/8 – 📈 BÁO CÁO DOANH THU',
    title: '📈 Báo cáo doanh thu',
    desc: 'Xem biểu đồ doanh thu theo tuần, tháng và tổng số lượng nông sản bạn đã giải cứu thành công.',
    detail:
      'Biểu đồ dòng tiền minh bạch, thống kê tỷ lệ hoàn thành đơn hàng và xếp hạng sản phẩm bán chạy.',
  },
  {
    tabId: 'products',
    badge: 'MỤC 3/8 – 📦 SẢN PHẨM',
    title: '📦 Quản lý sản phẩm',
    desc: 'Đăng bán nông sản mới, tạo Túi mù Blind Box và điều chỉnh giá bán giải cứu thuận tiện.',
    detail: 'Tạo túi mù giá sốc, quản lý số lượng tồn kho (kg) và chứng nhận VietGAP/Hữu cơ.',
  },
  {
    tabId: 'orders',
    badge: 'MỤC 4/8 – 🛒 ĐƠN HÀNG',
    title: '🛒 Quản lý đơn hàng',
    desc: 'Tiếp nhận đơn hàng mới từ khách mua, chuẩn bị đóng gói và bàn giao cho tài xế xe lạnh.',
    detail: 'Lọc đơn theo 6 trạng thái, in phiếu xuất kho và theo dõi tiến độ giao hàng.',
  },
  {
    tabId: 'vehicles',
    badge: 'MỤC 5/8 – 🚚 PHƯƠNG TIỆN',
    title: '🚚 Quản lý xe chở nông sản',
    desc: 'Đăng ký xe tải lạnh, xe ba gác hoặc thùng bảo ôn để sẵn sàng vận chuyển nông sản tới kho.',
    detail: 'Quản lý tải trọng, biển số xe và trạng thái sẵn sàng nhận chuyến giao nông sản.',
  },
  {
    tabId: 'trips',
    badge: 'MỤC 6/8 – 📍 VẬN CHUYỂN TỚI KHO',
    title: '📍 Chuyến xe tới kho tổng',
    desc: 'Lên lịch chuyển nông sản từ vườn về kho tổng CapNong hoặc ghép chuyến cùng nông hộ khác.',
    detail: 'Mạng lưới xe tải lạnh liên tỉnh giúp tiết kiệm tới 40% chi phí vận chuyển nông sản.',
  },
  {
    tabId: 'reviews',
    badge: 'MỤC 7/8 – 💬 ĐÁNH GIÁ',
    title: '💬 Đánh giá từ khách hàng',
    desc: 'Xem điểm chất lượng và lời cảm ơn, đánh giá từ người tiêu dùng sau khi nhận nông sản tươi.',
    detail:
      'Duy trì đánh giá 5 sao giúp gian hàng của bạn được CapNong ưu tiên hiển thị đầu trang.',
  },
  {
    tabId: 'wallet',
    badge: 'MỤC 8/8 – 💳 VÍ TIỀN & RÚT TIỀN',
    title: '💳 Ví tiền & Rút tiền 24h',
    desc: 'Doanh thu bán nông sản tự động giải ngân sau 24h khi khách nhận hàng. Rút tiền về ngân hàng tức thì.',
    detail: 'Không giam vốn, quyết toán nhanh chóng và minh bạch về tài khoản ngân hàng của bạn.',
  },
]

const STORAGE_KEY = 'capnong_farmer_tour_done'

interface OnboardingTourProps {
  currentTab: string
  isOpen: boolean
  onNavigate: (tabId: string) => void
  onCloseTour: () => void
}

export default function OnboardingTour({
  currentTab: _currentTab,
  isOpen,
  onNavigate,
  onCloseTour,
}: OnboardingTourProps) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0)
  const [showDetail, setShowDetail] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setCurrentStepIdx(0)
      setShowDetail(false)
      onNavigate(TOUR_STEPS[0].tabId)
    }
  }, [isOpen])

  if (!isOpen) return null

  const step = TOUR_STEPS[currentStepIdx]
  const isLastStep = currentStepIdx === TOUR_STEPS.length - 1

  const handleNext = () => {
    if (isLastStep) {
      handleSkip()
    } else {
      const nextIdx = currentStepIdx + 1
      setCurrentStepIdx(nextIdx)
      setShowDetail(false)
      onNavigate(TOUR_STEPS[nextIdx].tabId)
    }
  }

  const handleSkip = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    onCloseTour()
  }

  // Calculate approximate top offset for popover based on step index (each sidebar button is ~48px tall)
  const topPositions = [95, 142, 190, 238, 286, 334, 430, 560]
  const currentTop = topPositions[currentStepIdx] || 120

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Semi-transparent dark overlay */}
      <div
        onClick={handleSkip}
        className="absolute inset-0 bg-black/35 backdrop-blur-[1px] pointer-events-auto transition-opacity duration-300"
      />

      {/* Floating Tour Popover Box positioned next to Sidebar */}
      <div
        style={{ top: `${currentTop}px` }}
        className="absolute left-[295px] pointer-events-auto z-50 animate-fadeIn transition-all duration-300"
      >
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#d2dbcb] w-[350px] sm:w-[390px] text-[#1c2216] relative transition-all">
          {/* Tooltip Arrow pointing to Left Sidebar */}
          <div className="absolute -left-2.5 top-5 w-5 h-5 bg-white transform rotate-45 border-l border-b border-[#d2dbcb]" />

          {/* Top Badge & Close */}
          <div className="flex items-center justify-between pb-3 border-b border-[#f1f4ed] mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#326318]/10 text-[#326318] text-[11px] font-black uppercase tracking-wider">
              <Sparkles size={13} className="text-[#326318]" />
              <span>{step.badge}</span>
            </div>

            <button
              type="button"
              onClick={handleSkip}
              className="text-[#99a193] hover:text-[#2a3023] p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Step Content */}
          <div className="space-y-2 mb-4">
            <h4 className="text-base font-black text-[#1c2216] flex items-center gap-1.5">
              {step.title}
            </h4>
            <p className="text-xs text-[#525a4d] leading-relaxed font-medium">{step.desc}</p>

            {/* Expandable Details */}
            {showDetail && (
              <div className="p-3.5 rounded-2xl bg-[#f4f8f1] border border-[#dbe6d3] text-[11px] text-[#34402e] leading-relaxed mt-2 animate-fadeIn font-medium">
                💡 <span className="font-bold">Chi tiết:</span> {step.detail}
              </div>
            )}
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center gap-1.5 mb-5">
            {TOUR_STEPS.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentStepIdx
                    ? 'w-7 bg-[#326318]'
                    : idx < currentStepIdx
                      ? 'w-2 bg-[#8da77c]'
                      : 'w-2 bg-[#e4e8df]'
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={handleSkip}
              className="px-4 py-2 rounded-2xl border border-[#d8decb] hover:bg-[#f4f7f1] text-xs font-bold text-[#626b5d] transition-colors cursor-pointer"
            >
              Bỏ qua
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowDetail(!showDetail)}
                className={`px-3.5 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  showDetail
                    ? 'bg-[#326318]/10 border-[#326318] text-[#326318]'
                    : 'border-[#d8decb] hover:bg-[#f4f7f1] text-[#326318]'
                }`}
              >
                <BookOpen size={14} />
                <span>{showDetail ? 'Thu gọn' : 'Chi tiết'}</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2 rounded-2xl bg-[#326318] hover:bg-[#254b12] text-white text-xs font-black flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>{isLastStep ? 'Hoàn tất' : 'Tiếp'}</span>
                {isLastStep ? <Check size={14} /> : <ChevronRight size={14} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
