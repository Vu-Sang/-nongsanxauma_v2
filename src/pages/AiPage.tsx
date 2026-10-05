import { useState } from 'react'
import { Sparkles, Camera, Utensils, Scan, Cpu, ArrowRight, Truck } from 'lucide-react'

import aiVisionImg from '../assets/ai-vision.jpg'
import aiMealImg from '../assets/ai-meal.jpg'

import aiCarrotImg from '../assets/ai-box-carrot.jpg'
import aiCabbageImg from '../assets/ai-box-cabbage.jpg'
import aiLettuceImg from '../assets/ai-box-lettuce.jpg'

import aiHeroBanner from '../assets/ai-hero-banner.jpg'

interface AiPageProps {
  onInfo?: (msg: string) => void
}

export default function AiPage({ onInfo }: AiPageProps) {
  // Vision Demo State
  const [selectedScan, setSelectedScan] = useState(0)
  const [isScanning, setIsScanning] = useState(false)

  const VISION_SAMPLES = [
    {
      name: 'Cà rốt 2 nhánh Đà Lạt',
      freshness: 98,
      vitamin: 'Vitamin A & Beta-Carotene 97%',
      flaw: 'Phân nhánh tự nhiên, không sâu bệnh',
      original: '35.000đ',
      rescuePrice: '18.000đ/kg',
      discount: '-48%',
      bestFor: 'Nước ép detox, súp hầm gia đình',
      image: aiCarrotImg,
    },
    {
      name: 'Bắp cải xanh lá xoăn Cầu Đất',
      freshness: 97,
      vitamin: 'Vitamin C & Chất xơ 99%',
      flaw: 'Bẹ ngoài sạm nắng nhẹ, ruột cuộn chặt',
      original: '28.000đ',
      rescuePrice: '14.000đ/kg',
      discount: '-50%',
      bestFor: 'Xào tỏi, luộc chấm kho quẹt, salad',
      image: aiCabbageImg,
    },
    {
      name: 'Xà lách Romaine hữu cơ',
      freshness: 99,
      vitamin: 'Khoáng chất & Nước 98%',
      flaw: 'Lá rìa ngoài dập nhẹ khi thu hoạch',
      original: '42.000đ',
      rescuePrice: '22.000đ/kg',
      discount: '-47%',
      bestFor: 'Salad sốt mè, cuốn bánh tráng',
      image: aiLettuceImg,
    },
  ]

  // Chef Demo State
  const [activeDiet, setActiveDiet] = useState<'eatclean' | 'family' | 'detox' | 'vegan'>(
    'eatclean',
  )

  const CHEF_PREVIEWS = {
    eatclean: {
      dish: 'Salad Cầu Vồng Rau Củ Nướng & Ức Gà',
      calo: '420 kcal',
      time: '15 phút',
      cost: '22.000đ / phần',
      items: ['Cà rốt 2 nhánh', 'Bắp cải tím', 'Xà lách Đà Lạt', 'Sốt mè rang Nhật'],
      tip: 'Hấp rau củ trong 3 phút để giữ trọn vẹn 98% hàm lượng enzyme và vitamin.',
    },
    family: {
      dish: 'Canh Củ Hầm Sườn & Bắp Cải Xào Thịt Bò',
      calo: '680 kcal',
      time: '25 phút',
      cost: '18.000đ / người',
      items: ['Cà rốt xấu mã', 'Khoai lang mật', 'Bắp cải xanh', 'Hành ngò'],
      tip: 'Rau củ xấu mã chứa độ ngọt tự nhiên đậm đà hơn khi hầm canh.',
    },
    detox: {
      dish: 'Nước Ép Xanh Cần Tây, Cà Rốt & Bưởi Da Xanh',
      calo: '160 kcal',
      time: '5 phút',
      cost: '14.000đ / ly 400ml',
      items: ['Cà rốt tươi', 'Cần tây Đà Lạt', 'Bưởi da xanh rám vỏ', 'Gừng'],
      tip: 'Bưởi rám vỏ giữ nguyên tép mọng nước, độ ngọt tự nhiên 100%.',
    },
    vegan: {
      dish: 'Lẩu Nấm Rau Củ Thanh Đạm & Đậu Hũ Non',
      calo: '390 kcal',
      time: '20 phút',
      cost: '25.000đ / phần',
      items: ['Nấm đùi gà', 'Bắp cải xoăn', 'Cà rốt', 'Cải thảo hữu cơ'],
      tip: 'Nước dùng ngọt thanh 100% từ rau củ tự nhiên không cần hạt nêm.',
    },
  }

  const handleScanChange = (idx: number) => {
    setIsScanning(true)
    setSelectedScan(idx)
    setTimeout(() => {
      setIsScanning(false)
    }, 450)
  }

  return (
    <div className="w-full bg-[#fdfaf3] text-[#1f241a]">
      {/* 1. Top Immersive Agricultural AI Hero Banner (Synchronized Design) */}
      <div className="relative w-full h-72 sm:h-84 md:h-96 lg:h-[380px] overflow-hidden flex items-center justify-center text-center shadow-lg">
        <img
          src={aiHeroBanner}
          alt="Công nghệ AI kiểm định và phân loại nông sản CapNong"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-700"
        />
        {/* Dark Vignette Overlay for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/40" />

        {/* Dynamic Title & Breadcrumb */}
        <div className="relative z-10 flex flex-col items-center gap-3 px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#ffea79] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles size={13} />
            <span>Hệ Thống 3 Công Nghệ AI Tiên Phong Cho Nông Nghiệp Việt</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg animate-fadeIn leading-tight">
            Công Nghệ AI Cốt Lõi
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/85 font-normal max-w-xl mx-auto leading-relaxed drop-shadow">
            Minh bạch 100% chất lượng nông sản, hỗ trợ định giá tự động và gợi ý thực đơn thông minh
            cho mọi gia đình.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-white/90 font-medium mt-1 shadow-sm">
            <a href="#/" className="hover:text-[#ffea79] transition-colors">
              Trang chủ
            </a>
            <span className="text-white/40">›</span>
            <span className="text-[#ffea79] font-bold">Công nghệ AI</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CÔNG NGHỆ 01: CAPNONG VISION AI (Thẩm định độ tươi 0.5s)               */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#ece6d9] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-black text-[#326318] uppercase tracking-widest">
                CÔNG NGHỆ 01 / 03
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c2216] tracking-tight mt-1">
                Thị Giác AI Quét &amp; Thẩm Định Độ Tươi 0.5s
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#586052] max-w-md">
              Chụp ảnh rau củ để AI tự động phân tích độ tươi ngon, bóc tách khuyết tật hình thái và
              định giá giảm trực tiếp 40% – 60%.
            </p>
          </div>

          {/* Interactive Live Scanner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#faf8f4] p-6 sm:p-8 rounded-[36px] border border-[#e7e1d5]">
            {/* Left Scanner Display Screen (7 Cols) */}
            <div className="lg:col-span-7 bg-[#142313] rounded-3xl overflow-hidden relative shadow-2xl min-h-[380px] flex items-center justify-center border border-[#326318]/40">
              <img
                src={aiVisionImg}
                alt="AI Quét nông sản"
                className="w-full h-full object-cover opacity-85"
              />

              {/* Scanning Target Overlay */}
              <div className="absolute inset-6 border-2 border-dashed border-[#86efac]/80 rounded-2xl pointer-events-none flex items-center justify-center">
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ffea79]" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ffea79]" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#ffea79]" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ffea79]" />
              </div>

              {/* HUD Tags */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-[#86efac] font-mono text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#86efac] animate-ping" />
                <span>VISION AI v3.2 ACTIVE</span>
              </div>

              {/* Bottom Live Result Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm sm:text-base text-white">
                    {VISION_SAMPLES[selectedScan].name}
                  </div>
                  <div className="text-xs text-[#ffea79] mt-0.5">
                    {VISION_SAMPLES[selectedScan].flaw}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/80">Điểm tươi:</div>
                  <div className="text-base sm:text-xl font-black text-[#a4e876]">
                    {VISION_SAMPLES[selectedScan].freshness}/100
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Controls (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="text-xs font-bold text-[#326318] uppercase tracking-wider flex items-center gap-1.5">
                <Scan size={16} />
                <span>Chọn mẫu nông sản để thử quét:</span>
              </div>

              {/* Sample Buttons */}
              <div className="flex flex-col gap-2.5">
                {VISION_SAMPLES.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleScanChange(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      selectedScan === idx
                        ? 'bg-white border-2 border-[#326318] shadow-md scale-[1.02]'
                        : 'bg-white/80 border-[#e5dfd2] hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="font-black text-xs sm:text-sm text-[#1c2216]">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-[#6d7567] mt-0.5">{item.vitamin}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#eaf5e1] text-[#2c5f11] font-black text-xs">
                      {item.discount}
                    </span>
                  </button>
                ))}
              </div>

              {/* Pricing breakdown */}
              <div className="p-4 rounded-2xl bg-white border border-[#e5dfd2] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#71786a] block">Giá giải cứu tự động:</span>
                  <span className="text-lg font-black text-[#326318]">
                    {VISION_SAMPLES[selectedScan].rescuePrice}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#71786a] block">Giá thị trường:</span>
                  <span className="text-xs line-through text-[#90988a]">
                    {VISION_SAMPLES[selectedScan].original}
                  </span>
                </div>
              </div>

              <a
                href="#/nong-san-tuoi"
                className="w-full py-3.5 rounded-2xl bg-[#326318] hover:bg-[#254b12] text-white font-extrabold text-xs sm:text-sm text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Xem nông sản đang giải cứu ngay</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CÔNG NGHỆ 02: SMART CHEF AI (Lên thực đơn dinh dưỡng 0đ)              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#ece6d9] bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-black text-[#8a4e1d] uppercase tracking-widest">
                CÔNG NGHỆ 02 / 03
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c2216] tracking-tight mt-1">
                Smart Chef AI: Lên Thực Đơn Dinh Dưỡng 0đ
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#586052] max-w-md">
              Tự động gợi ý các món ăn Eat Clean và mâm cơm gia đình chuẩn calo từ những loại rau củ
              đang cần giải cứu trong ngày.
            </p>
          </div>

          {/* Interactive Chef Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-[36px] border border-[#e7e1d5] shadow-sm">
            {/* Left Diet Selector & Recipe Card (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="text-xs font-bold text-[#8a4e1d] uppercase tracking-wider flex items-center gap-1.5">
                <Utensils size={16} />
                <span>Chọn chế độ ăn uống bạn quan tâm:</span>
              </div>

              {/* 4 Diet Options */}
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    { id: 'eatclean', label: '🥗 Eat Clean Chuẩn Dáng' },
                    { id: 'family', label: '🍲 Mâm Cơm Gia Đình' },
                    { id: 'detox', label: '🥤 Nước Ép Detox Sáng' },
                    { id: 'vegan', label: '🧘 Thực Dưỡng Chay' },
                  ] as const
                ).map((diet) => (
                  <button
                    key={diet.id}
                    type="button"
                    onClick={() => setActiveDiet(diet.id)}
                    className={`p-3 rounded-2xl border text-left font-bold text-xs transition-all ${
                      activeDiet === diet.id
                        ? 'bg-[#fdf5eb] border-2 border-[#8a4e1d] text-[#8a4e1d] shadow-sm'
                        : 'bg-[#faf8f4] border-[#e8e2d6] text-[#555d4e] hover:bg-white'
                    }`}
                  >
                    {diet.label}
                  </button>
                ))}
              </div>

              {/* Live Recipe Output */}
              <div className="p-5 rounded-3xl bg-[#fdfaf5] border border-[#eedec8] flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-[#eedec8] pb-3">
                  <h3 className="font-extrabold text-sm sm:text-base text-[#703b0d]">
                    {CHEF_PREVIEWS[activeDiet].dish}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ffeed6] text-[#8a4e1d] text-xs font-bold">
                    {CHEF_PREVIEWS[activeDiet].calo}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-[#eedec8]">
                    <span className="text-[10px] text-[#71796b] block font-medium">
                      Thời gian chuẩn bị:
                    </span>
                    <strong className="text-[#20271c]">{CHEF_PREVIEWS[activeDiet].time}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#eedec8]">
                    <span className="text-[10px] text-[#71796b] block font-medium">
                      Chi phí nguyên liệu:
                    </span>
                    <strong className="text-[#326318]">{CHEF_PREVIEWS[activeDiet].cost}</strong>
                  </div>
                </div>

                <p className="text-xs text-[#525a4d] leading-relaxed italic bg-white p-3 rounded-xl border border-[#eedec8]/60">
                  💡 {CHEF_PREVIEWS[activeDiet].tip}
                </p>
              </div>

              <a
                href="#/combo-tui-mu"
                className="w-full py-3.5 rounded-2xl bg-[#8a4e1d] hover:bg-[#6e3910] text-white font-extrabold text-xs sm:text-sm text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Khám phá Combo nấu ăn tiết kiệm</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Right Visual Image (6 Cols) */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden relative shadow-xl aspect-[4/3] border border-[#ede7db]">
              <img
                src={aiMealImg}
                alt="Đầu bếp AI CapNong"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold text-[#ffea79] uppercase tracking-wider">
                  100% Nguyên Liệu Giải Cứu Trong Ngày
                </div>
                <div className="text-sm sm:text-base font-bold text-white mt-1">
                  Đảm bảo dinh dưỡng trọn vẹn – Tiết kiệm chi phí nấu ăn mỗi tháng
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CÔNG NGHỆ 03: FARMER COPILOT (Trợ lý số 30s cho nhà vườn)              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#ece6d9] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-black text-[#2d6f78] uppercase tracking-widest">
                CÔNG NGHỆ 03 / 03
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c2216] tracking-tight mt-1">
                Farmer Copilot: Số Hóa Vườn Nông Sản 30s
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#586052] max-w-md">
              Nông dân chỉ cần chụp 1 tấm ảnh tại ruộng, hệ thống AI sẽ tự động tạo bài đăng, cấp mã
              VietGAP và phân phối xe giao hàng tận vườn.
            </p>
          </div>

          {/* 3 Step Workflow Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#f4f9f9] border border-[#cce4e7] flex flex-col justify-between gap-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-2xl bg-[#2d6f78] text-white flex items-center justify-center font-black text-sm">
                  1
                </span>
                <Camera size={20} className="text-[#2d6f78]" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#1c2216]">Chụp Ảnh Tại Luống</h3>
                <p className="text-xs text-[#525a4d] mt-1 leading-relaxed">
                  AI nhận diện giống rau củ, ước lượng sản lượng cần xuất vườn và tình trạng độ
                  chín.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#2d6f78]">Thời gian: 5 giây</div>
            </div>

            <div className="p-6 rounded-3xl bg-[#f4f9f9] border border-[#cce4e7] flex flex-col justify-between gap-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-2xl bg-[#2d6f78] text-white flex items-center justify-center font-black text-sm">
                  2
                </span>
                <Cpu size={20} className="text-[#2d6f78]" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#1c2216]">AI Viết Bài &amp; Định Giá</h3>
                <p className="text-xs text-[#525a4d] mt-1 leading-relaxed">
                  Tự động gắn mã chuẩn VietGAP, tạo mô tả hấp dẫn và tính giá thu mua công bằng cho
                  nông dân.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#2d6f78]">Thời gian: 15 giây</div>
            </div>

            <div className="p-6 rounded-3xl bg-[#f4f9f9] border border-[#cce4e7] flex flex-col justify-between gap-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-2xl bg-[#2d6f78] text-white flex items-center justify-center font-black text-sm">
                  3
                </span>
                <Truck size={20} className="text-[#2d6f78]" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#1c2216]">Điều Xe Giao Tận Ruộng</h3>
                <p className="text-xs text-[#525a4d] mt-1 leading-relaxed">
                  Hệ thống phân bổ đơn cho tài xế xe lạnh gần nhất để nhận nông sản chuyển về thành
                  phố trong 2–4 giờ.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#2d6f78]">Thời gian: 10 giây</div>
            </div>
          </div>

          {/* Direct CTA Bar */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#2d6f78] to-[#1c555d] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Bạn là Nhà Vườn / Nông Trại Cần Giải Cứu Nông Sản?
              </h3>
              <p className="text-xs text-white/80 mt-0.5">
                Đăng ký tham gia mạng lưới CapNong hoàn toàn 0đ phí sàn tháng đầu tiên.
              </p>
            </div>
            <a
              href="#/dang-ky?role=shop"
              className="px-6 py-3 rounded-2xl bg-white hover:bg-[#ffea79] text-[#1c555d] font-black text-xs sm:text-sm uppercase tracking-wide shrink-0 transition-all shadow-md"
            >
              Mở Gian Hàng Ngay →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
