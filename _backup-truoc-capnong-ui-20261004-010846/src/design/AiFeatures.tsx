import { useState } from 'react';
import {
  Sparkles,
  Camera,
  Utensils,
  Sprout,
  ArrowRight,
  Zap,
  CheckCircle2,
  Scan,
  TrendingUp,
  Activity,
  Award,
  X,
  RefreshCw,
  Cpu,
  Clock,
  ShieldCheck,
  Flame,
  Truck,
  HeartHandshake,
} from 'lucide-react';

import aiVisionImg from '../assets/ai-vision.jpg';
import aiMealImg from '../assets/ai-meal.jpg';
import aiFarmerImg from '../assets/ai-farmer.jpg';

interface AiFeaturesProps {
  onInfo?: (title: string) => void;
}

export default function AiFeatures({ onInfo }: AiFeaturesProps) {
  const [activeModal, setActiveModal] = useState<'vision' | 'chef' | 'copilot' | null>(null);

  // Vision scanner demo state
  const [selectedScanSample, setSelectedScanSample] = useState<number>(0);
  const [isScanning, setIsScanning] = useState(false);

  const SCAN_SAMPLES = [
    {
      name: 'Cà rốt 2 nhánh Đà Lạt',
      freshness: '98/100',
      tag: 'Ngon ngọt 100%',
      defect: 'Chỉ lệch dáng tự nhiên',
      priceCut: 'Giảm 48%',
      price: '18.000đ/kg',
      oldPrice: '35.000đ',
    },
    {
      name: 'Bắp cải xanh lá xoăn',
      freshness: '97/100',
      tag: 'Chuẩn tươi giòn',
      defect: 'Bẹ ngoài sạm nắng nhẹ',
      priceCut: 'Giảm 50%',
      price: '14.000đ/kg',
      oldPrice: '28.000đ',
    },
    {
      name: 'Cà chua bi hữu cơ',
      freshness: '99/100',
      tag: 'Đạt đỉnh vitamin',
      defect: 'Trái không đều size',
      priceCut: 'Giảm 45%',
      price: '24.000đ/kg',
      oldPrice: '45.000đ',
    },
  ];

  // Chef AI Demo State
  const [chefDiet, setChefDiet] = useState<'eatclean' | 'family' | 'detox'>('eatclean');

  const CHEF_MENUS = {
    eatclean: {
      title: 'Salad Rau Củ Nướng & Sốt Mè',
      calories: '420 kcal',
      time: '15 phút',
      cost: '18.000đ / phần',
      tag: 'Eat Clean chuẩn dáng',
    },
    family: {
      title: 'Canh Củ Hầm & Cải Xào Tỏi',
      calories: '650 kcal',
      time: '20 phút',
      cost: '15.000đ / người',
      tag: 'Bữa cơm 4 người',
    },
    detox: {
      title: 'Nước Ép Cần Tây & Cà Rốt',
      calories: '180 kcal',
      time: '5 phút',
      cost: '12.000đ / ly',
      tag: '100% Vitamin tươi',
    },
  };

  const handleScanSample = (idx: number) => {
    setIsScanning(true);
    setSelectedScanSample(idx);
    setTimeout(() => {
      setIsScanning(false);
    }, 500);
  };

  const AI_BOXES = [
    {
      id: 'vision' as const,
      number: '01',
      title: 'AI Quét Độ Tươi 0.5s',
      subtitle: 'Thẩm định chất lượng & định giá giảm 50%',
      image: aiVisionImg,
      alt: 'Thị giác AI nhận diện độ tươi nông sản',
      buttonText: 'Thử quét ngay',
      overlayBadge: 'Thị giác máy tính AI',
      hudStats: [
        { label: 'Độ tươi', val: '98.6%', color: 'bg-[#2e7d32]' },
        { label: 'Định giá', val: '-50%', color: 'bg-[#8a4e1d]' },
        { label: 'Tốc độ', val: '0.5s', color: 'bg-[#1565c0]' },
      ],
      interactivePill: '📸 Quét nhận diện tự động',
    },
    {
      id: 'chef' as const,
      number: '02',
      title: 'AI Gợi Ý Món Ăn Eat Clean',
      subtitle: 'Tự lên thực đơn ngon lành từ rau củ giải cứu',
      image: aiMealImg,
      alt: 'Đầu bếp AI gợi ý thực đơn món ngon',
      buttonText: 'Lên món ngay',
      overlayBadge: 'Smart Chef Dinh Dưỡng',
      hudStats: [
        { label: 'Khẩu phần', val: '420 kcal', color: 'bg-[#2e7d32]' },
        { label: 'Chi phí', val: '18k/bữa', color: 'bg-[#8a4e1d]' },
        { label: 'Thời gian', val: '15 phút', color: 'bg-[#e65100]' },
      ],
      interactivePill: '🥗 Tính calo & thực đơn 0đ',
    },
    {
      id: 'copilot' as const,
      number: '03',
      title: 'Trợ Lý AI Cho Nhà Vườn',
      subtitle: 'Chụp 1 ảnh bán cả vườn trong 30 giây',
      image: aiFarmerImg,
      alt: 'Trợ lý số Farmer Copilot cho nông dân',
      buttonText: 'Bán nông sản',
      overlayBadge: 'Farmer Copilot 30s',
      hudStats: [
        { label: 'Đăng bán', val: '30 giây', color: 'bg-[#2e7d32]' },
        { label: 'Chứng nhận', val: 'VietGAP', color: 'bg-[#1565c0]' },
        { label: 'Giao hàng', val: '2–4 giờ', color: 'bg-[#8a4e1d]' },
      ],
      interactivePill: '🚜 Số hóa vườn siêu tốc',
    },
  ];

  return (
    <section
      id="cong-nghe-ai"
      className="w-full bg-[#fdfaf3] py-14 sm:py-20 lg:py-24 border-b border-[#ece6d9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-10 sm:gap-14">
        {/* ========================================================================= */}
        {/* SECTION HEADER: Pure Vietnamese & Concise                                 */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#ede7dc] pb-8">
          <div className="flex flex-col gap-2.5 max-w-2xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#f0ebd9] text-[#3d502a] border border-[#dad2bf] px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider w-fit">
              <Sparkles size={13} className="text-[#8a4e1d]" />
              <span>Công Nghệ Đổi Mới · CapNong AI Core</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1d2318] tracking-tight leading-[1.15]">
              Nông Sản Tươi Lành.
              <br />
              Công Nghệ Tiên Phong.
            </h2>

            <p className="text-xs sm:text-sm text-[#5a6252] leading-relaxed">
              3 công nghệ AI giúp bạn nhìn thấu chất lượng dinh dưỡng, ăn ngon tiết kiệm và kết nối trực tiếp với nhà vườn.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#e4decfae] shadow-sm shrink-0">
            <div className="flex items-center gap-2.5 pr-4 border-r border-[#ece6da]">
              <div className="w-8 h-8 rounded-xl bg-[#eaf5e1] text-[#326318] flex items-center justify-center font-bold">
                <Activity size={17} />
              </div>
              <div>
                <div className="text-sm font-black text-[#1c1c17]">98.6%</div>
                <div className="text-[10px] text-[#71796b]">Độ chính xác AI</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#fdf5eb] text-[#8a4e1d] flex items-center justify-center font-bold">
                <Cpu size={17} />
              </div>
              <div>
                <div className="text-sm font-black text-[#1c1c17]">0.5 Giây</div>
                <div className="text-[10px] text-[#71796b]">Tốc độ xử lý</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3 BOXES GRID (Layout 3 Hộp Chuẩn Hình Mẫu)                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {AI_BOXES.map((box) => (
            <div
              key={box.id}
              className="group bg-white rounded-[32px] border border-[#e7e3d8] p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden hover:-translate-y-1"
            >
              {/* TOP CONTENT: Minimal Text (Nhìn là hiểu ngay) */}
              <div className="relative z-10 flex flex-col gap-2.5">
                {/* Number Indicator & Interactive Pill */}
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-mono font-black text-[#889182] tracking-wider">
                    {box.number}
                  </span>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#f1faea] text-[#2c5f11] border border-[#c6e8b2]">
                    {box.interactivePill}
                  </span>
                </div>

                {/* Bold Vietnamese Feature Title */}
                <h3 className="text-lg sm:text-xl font-black text-[#1a2115] tracking-tight leading-snug group-hover:text-[#326318] transition-colors">
                  {box.title}
                </h3>

                {/* Short Subtitle */}
                <p className="text-xs text-[#586052] leading-relaxed">
                  {box.subtitle}
                </p>

                {/* Action Arrow Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setActiveModal(box.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f0ebd9] group-hover:bg-[#326318] text-[#2a3225] group-hover:text-white font-extrabold text-xs transition-all shadow-sm group-hover:shadow cursor-pointer"
                  >
                    <span>{box.buttonText}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* BOTTOM VISUAL DEMONSTRATION (Mô tả trọn vẹn công nghệ bằng hình ảnh) */}
              <div className="relative mt-5 -mx-5 -mb-6 h-56 sm:h-60 overflow-hidden rounded-b-[32px] bg-[#142313] border-t border-[#ede7db]">
                {/* Image */}
                <img
                  src={box.image}
                  alt={box.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                />

                {/* Gradient Scrim for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-[#86efac] flex items-center gap-1.5 shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86efac] animate-ping" />
                  <span>{box.overlayBadge}</span>
                </div>

                {/* Scanning Crosshair Overlay Effect on Card 1 */}
                {box.id === 'vision' && (
                  <div className="absolute inset-5 rounded-xl border border-dashed border-[#86efac]/70 flex items-center justify-center pointer-events-none">
                    <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#ffea79]" />
                    <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#ffea79]" />
                    <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#ffea79]" />
                    <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#ffea79]" />
                  </div>
                )}

                {/* Bottom 3 Floating Stat Pills */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10">
                  {box.hudStats.map((st, i) => (
                    <div
                      key={i}
                      className="flex-1 px-1.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-center flex flex-col"
                    >
                      <span className="text-[9px] text-white/75 font-medium">{st.label}</span>
                      <strong className="text-[11px] font-black text-white">{st.val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE EXPERIENCE MODALS (Trực quan, bấm vào dùng thử ngay)          */}
      {/* ========================================================================= */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-[#ede8df] relative max-h-[90vh] overflow-y-auto">
            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f4efe4] hover:bg-[#eae3d5] text-[#333a2e] flex items-center justify-center transition-colors"
              aria-label="Đóng"
            >
              <X size={18} />
            </button>

            {/* 1. VISION SCANNER LIVE */}
            {activeModal === 'vision' && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#326318] uppercase tracking-wider">
                  <Camera size={16} />
                  <span>Trải Nghiệm Live: CapNong Vision AI Scanner</span>
                </div>

                <h3 className="text-xl font-black text-[#1d2318]">
                  Quét Giám Định Độ Tươi &amp; Tính Giá Tự Động
                </h3>
                <p className="text-xs text-[#5a6252]">
                  Chọn một mẫu nông sản bên dưới để xem AI quét phân tích trong 0.5s:
                </p>

                {/* Sample Selector */}
                <div className="grid grid-cols-3 gap-2">
                  {SCAN_SAMPLES.map((sample, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleScanSample(idx)}
                      className={`p-2 rounded-xl border text-left transition-all ${
                        selectedScanSample === idx
                          ? 'border-[#326318] bg-[#f1faea] font-bold shadow-sm'
                          : 'border-[#e4ded2] bg-[#faf8f4] hover:bg-[#f3ede1]'
                      }`}
                    >
                      <div className="text-xs text-[#20271c] truncate">{sample.name}</div>
                      <div className="text-[10px] text-[#326318] font-bold mt-0.5">
                        Điểm: {sample.freshness}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Diagnostic Result */}
                <div className="p-4 rounded-2xl bg-[#faf8f2] border border-[#e8e2d4] space-y-3 relative overflow-hidden">
                  {isScanning && (
                    <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-2 animate-fadeIn">
                      <RefreshCw size={22} className="animate-spin text-[#326318]" />
                      <span className="text-xs font-bold text-[#326318]">
                        Đang quét ma trận điểm ảnh 0.5s...
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between border-b border-[#ede7dc] pb-2">
                    <span className="font-extrabold text-sm text-[#1d2318]">
                      {SCAN_SAMPLES[selectedScanSample].name}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#326318] text-white text-xs font-bold">
                      Độ tươi: {SCAN_SAMPLES[selectedScanSample].freshness}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-white rounded-xl border border-[#eae4d7]">
                      <span className="text-[10px] font-bold text-[#71796b] uppercase block">Chất lượng</span>
                      <strong className="text-[#2c5f11]">{SCAN_SAMPLES[selectedScanSample].tag}</strong>
                    </div>

                    <div className="p-2 bg-white rounded-xl border border-[#eae4d7]">
                      <span className="text-[10px] font-bold text-[#71796b] uppercase block">Dáng vẻ</span>
                      <strong className="text-[#8a4e1d]">{SCAN_SAMPLES[selectedScanSample].defect}</strong>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#eaf5e1] border border-[#cce4bf] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[#55614d] text-[11px]">Giá giải cứu ({SCAN_SAMPLES[selectedScanSample].priceCut}):</span>
                      <div className="font-black text-[#326318] text-base">
                        {SCAN_SAMPLES[selectedScanSample].price}
                      </div>
                    </div>
                    <span className="text-xs line-through text-[#80897b]">
                      Gốc: {SCAN_SAMPLES[selectedScanSample].oldPrice}
                    </span>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <a
                    href="#/nong-san-tuoi"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 rounded-full bg-[#326318] hover:bg-[#254b12] text-white font-bold text-xs transition-colors shadow"
                  >
                    Xem Nông Sản Đang Giảm Giá →
                  </a>
                </div>
              </div>
            )}

            {/* 2. SMART CHEF LIVE */}
            {activeModal === 'chef' && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8a4e1d] uppercase tracking-wider">
                  <Utensils size={16} />
                  <span>Trải Nghiệm Live: CapNong Smart Chef AI</span>
                </div>

                <h3 className="text-xl font-black text-[#1d2318]">
                  Gợi Ý Thực Đơn Tự Động Từ Rau Củ Xấu Mã
                </h3>

                {/* Diet Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'eatclean', label: '🥗 Eat Clean' },
                    { id: 'family', label: '🍲 Cơm Gia Đình' },
                    { id: 'detox', label: '🥤 Nước Ép Detox' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setChefDiet(tab.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition-all text-xs font-bold ${
                        chefDiet === tab.id
                          ? 'border-[#8a4e1d] bg-[#fdf5eb] text-[#8a4e1d] shadow-sm'
                          : 'border-[#e4ded2] bg-[#faf8f4] text-[#555d4e]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#fdfaf5] border border-[#eedec8] space-y-3">
                  <div className="flex items-center justify-between border-b border-[#ede0ce] pb-2">
                    <h4 className="font-extrabold text-sm sm:text-base text-[#703b0d]">
                      {CHEF_MENUS[chefDiet].title}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#ffeed6] text-[#8a4e1d] text-[11px] font-bold">
                      {CHEF_MENUS[chefDiet].calories}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-white rounded-xl border border-[#eedec8]">
                      <span className="text-[10px] text-[#71796b]">Thời gian nấu</span>
                      <div className="font-bold text-[#20271c]">{CHEF_MENUS[chefDiet].time}</div>
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-[#eedec8]">
                      <span className="text-[10px] text-[#71796b]">Chi phí nông sản</span>
                      <div className="font-bold text-[#326318]">{CHEF_MENUS[chefDiet].cost}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <a
                    href="#/combo-tui-mu"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 rounded-full bg-[#8a4e1d] hover:bg-[#6e3910] text-white font-bold text-xs transition-colors shadow"
                  >
                    Xem Combo Nấu Ăn Tuần →
                  </a>
                </div>
              </div>
            )}

            {/* 3. FARMER COPILOT LIVE */}
            {activeModal === 'copilot' && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2d6f78] uppercase tracking-wider">
                  <Sprout size={16} />
                  <span>Trải Nghiệm Live: CapNong Farmer Copilot</span>
                </div>

                <h3 className="text-xl font-black text-[#1d2318]">
                  Số Hóa Gian Hàng Nông Trại Trong 30 Giây
                </h3>

                <div className="p-4 rounded-2xl bg-[#f4f9f9] border border-[#cce4e7] space-y-2.5 text-xs">
                  <div className="p-2.5 bg-white rounded-xl border border-[#c4e0f0] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#2d6f78] text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
                    <div>
                      <strong>Chụp 1 ảnh tại ruộng:</strong> AI tự nhận diện loại nông sản và khối lượng.
                    </div>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-[#c4e0f0] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#2d6f78] text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
                    <div>
                      <strong>Tự động viết bài &amp; định giá:</strong> Gắn mã chuẩn VietGAP và niêm yết lên sàn.
                    </div>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-[#c4e0f0] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#2d6f78] text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
                    <div>
                      <strong>Tự động kết nối Shipper:</strong> Điều xe lấy hàng và giao ngay 2–4 giờ.
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <a
                    href="#/dang-ky?role=shop"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 rounded-full bg-[#2d6f78] hover:bg-[#205158] text-white font-bold text-xs transition-colors shadow"
                  >
                    Đăng Ký Gian Hàng Nhà Vườn →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
