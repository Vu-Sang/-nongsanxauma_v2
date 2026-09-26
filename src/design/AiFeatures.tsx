import { useState } from 'react';
import {
  Sparkles,
  Camera,
  Utensils,
  Sprout,
  Award,
  Zap,
  ArrowRight,
  Activity,
  Cpu,
} from 'lucide-react';
import aiVisionImg from '../assets/ai-vision.jpg';
import aiMealImg from '../assets/ai-meal.jpg';
import aiFarmerImg from '../assets/ai-farmer.jpg';

interface AiFeaturesProps {
  onInfo?: (title: string) => void;
}

export default function AiFeatures({ onInfo }: AiFeaturesProps) {
  const [activeTab, setActiveTab] = useState<'vision' | 'meal' | 'farmer'>('vision');

  const TECH_TABS = [
    {
      id: 'vision' as const,
      icon: Camera,
      badge: 'Thị giác máy tính 0.5s',
      title: '1. Nhận diện & Thẩm định Độ Tươi',
      shortDesc: 'Quét hình ảnh, phát hiện khuyết tật thẩm mỹ và phân tích độ tươi, dinh dưỡng với độ chính xác 98.6%.',
      stats: [
        { label: 'Độ chính xác', value: '98.6%' },
        { label: 'Tốc độ quét', value: '0.5s' },
        { label: 'Định giá tự động', value: '-30% đến -60%' },
      ],
      image: aiVisionImg,
      screenTag: 'CAPNONG VISION AI v3.2',
      screenTitle: 'Cà chua bi hữu cơ & Rau xanh Đà Lạt',
      screenDetails: [
        { name: 'Độ tươi & Vitamin', val: '97/100 (Thượng hạng)', color: 'text-[#2e7d32]' },
        { name: 'Khuyết tật hình thái', val: 'Vỏ sần, lệch size nhẹ (100% ngon)', color: 'text-[#8a4e1d]' },
        { name: 'Định giá tối ưu', val: 'Tiết kiệm 45% so với mua lẻ', color: 'text-[#1565c0]' },
      ],
      actionLabel: 'Thử quét nông sản bằng AI ngay',
      infoAction: 'Tìm bằng ảnh AI',
    },
    {
      id: 'meal' as const,
      icon: Utensils,
      badge: 'Mô hình ẩm thực & Dinh dưỡng',
      title: '2. Lên Thực Đơn Thông Minh (Smart Chef)',
      shortDesc: 'Tự động tính toán lượng calo, phối hợp các loại rau củ đang giải cứu hôm nay thành bữa ăn Eat Clean ngon miệng.',
      stats: [
        { label: 'Tiết kiệm chi phí', value: '45%' },
        { label: 'Cân bằng calo', value: 'Chuẩn Eat Clean' },
        { label: 'Thực đơn theo mùa', value: '100+ món/tuần' },
      ],
      image: aiMealImg,
      screenTag: 'CAPNONG CHEF AI ENGINE',
      screenTitle: 'Thực đơn Salad Củ Dền & Canh Cà Rốt Đậm Vị',
      screenDetails: [
        { name: 'Khẩu phần đề xuất', val: 'Gia đình 3–4 người (3 bữa/ngày)', color: 'text-[#2e7d32]' },
        { name: 'Năng lượng ước tính', val: '520 kcal / phần ăn', color: 'text-[#8a4e1d]' },
        { name: 'Chi phí nông sản', val: 'Chỉ ~18.000đ/khẩu phần', color: 'text-[#1565c0]' },
      ],
      actionLabel: 'Tạo thực đơn cá nhân hóa ngay',
      infoAction: 'AI gợi ý thực đơn',
    },
    {
      id: 'farmer' as const,
      icon: Sprout,
      badge: 'Tự động hóa số cho Nông Dân',
      title: '3. Trợ Lý Niêm Yết Siêu Tốc (Farmer Copilot)',
      shortDesc: 'Nông dân chỉ cần chụp 1 tấm ảnh vườn, AI tự động viết mô tả, xác thực nguồn gốc và niêm yết lên sàn trong 30 giây.',
      stats: [
        { label: 'Thời gian đăng bán', value: '30 giây' },
        { label: 'Chuẩn kiểm định', value: 'VietGAP / Hữu cơ' },
        { label: 'Tỷ lệ giải cứu', value: 'Tăng 85%' },
      ],
      image: aiFarmerImg,
      screenTag: 'FARMER COPILOT SYSTEM',
      screenTitle: 'Vườn Chú Bảy – Lô Cà Rốt & Bắp Cải Thu Hoạch Sớm',
      screenDetails: [
        { name: 'Vùng canh tác', val: 'Đơn Dương, Lâm Đồng (Chuẩn VietGAP)', color: 'text-[#2e7d32]' },
        { name: 'Phân loại tồn kho', val: '250kg sẵn sàng xuất vườn', color: 'text-[#8a4e1d]' },
        { name: 'Kết nối vận chuyển', val: 'Giao ngay nội thành 2–4 giờ', color: 'text-[#1565c0]' },
      ],
      actionLabel: 'Đăng ký bán nông sản ngay',
      infoAction: 'Đăng ký nhà vườn',
    },
  ];

  const current = TECH_TABS.find((t) => t.id === activeTab) || TECH_TABS[0];

  return (
    <section
      id="cong-nghe-ai"
      className="w-full bg-[#fcfaf6] py-12 md:py-16 lg:py-20 border-b border-[#ede8df]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-8 md:gap-10">
        {/* Section Header (Matching Combos Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#ede8df] pb-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8a4e1d]">
              <Sparkles size={16} className="text-[#d97706]" />
              <span>Đột Phá Nông Nghiệp Số</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c17] font-extrabold tracking-tight leading-tight">
              3 Công Nghệ AI Lõi Đổi Mới Của CapNong
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#52594d] leading-relaxed">
              Minh bạch chất lượng dinh dưỡng, giảm thiểu lãng phí thực phẩm và rút ngắn tối đa khoảng cách từ nông trại tới bàn ăn.
            </p>
          </div>

          {/* Quick Metrics Badge Row */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 bg-white p-3 rounded-2xl border border-[#e5e2da] shadow-sm">
            <div className="flex items-center gap-2 pr-3 border-r border-[#ede8df]">
              <Activity size={18} className="text-[#2e7d32]" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-extrabold text-[#1c1c17]">98.6%</span>
                <span className="text-[10px] text-[#71766b]">Độ chính xác</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Cpu size={18} className="text-[#8a4e1d]" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-extrabold text-[#1c1c17]">0.5s</span>
                <span className="text-[10px] text-[#71766b]">Tốc độ quét</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Asymmetric Showcase (Matching Combo Layout & Visual Language) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Interactive Live Simulation Display (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-[#e5e2da] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
            {/* Live Visual Card Background Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden mb-4 border border-[#ede8df] shadow-inner bg-[#182a17]">
              <img
                src={current.image}
                alt={current.screenTitle}
                className="w-full h-full object-cover transition-all duration-700 ease-out transform scale-100 group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 pointer-events-none" />

              {/* Tech UI HUD Overlay Elements */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono font-bold text-[#86efac] flex items-center gap-1.5 shadow">
                <span className="w-2 h-2 rounded-full bg-[#86efac] animate-ping" />
                <span>{current.screenTag}</span>
              </div>

              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold text-white flex items-center gap-1 shadow">
                <Award size={12} className="text-[#ffea79]" />
                <span>AI Verified</span>
              </div>

              {/* Scanning Target Crosshair / Box Overlay */}
              <div className="absolute inset-4 sm:inset-6 rounded-xl border border-dashed border-[#86efac]/70 flex items-center justify-center pointer-events-none">
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#ffea79]" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#ffea79]" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#ffea79]" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#ffea79]" />
              </div>

              {/* Bottom Image Headline */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white z-10">
                <span className="font-bold text-sm sm:text-base text-white drop-shadow truncate">
                  {current.screenTitle}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#2e7d32] text-white text-[11px] font-bold shadow shrink-0">
                  Khớp 98.6%
                </span>
              </div>
            </div>

            {/* AI Diagnostics / Results Panel */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {current.screenDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f9f7f2] border border-[#ede8df] rounded-xl p-3 flex flex-col gap-1"
                  >
                    <span className="text-[10px] text-[#71766b] uppercase font-bold tracking-tight">
                      {detail.name}
                    </span>
                    <span className={`text-xs font-bold leading-tight ${detail.color}`}>
                      {detail.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom CTA to Trigger Interactive Modal */}
              <button
                type="button"
                onClick={() => onInfo?.(current.infoAction)}
                className="mt-1 w-full py-3 px-5 rounded-xl bg-[#8a4e1d] hover:bg-[#6e3910] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <Zap size={16} className="text-[#ffdf9e]" />
                <span>{current.actionLabel}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Interactive Stacked Technology Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
            {TECH_TABS.map((tech) => {
              const Icon = tech.icon;
              const isActive = activeTab === tech.id;
              return (
                <div
                  key={tech.id}
                  onClick={() => setActiveTab(tech.id)}
                  className={`rounded-2xl p-4 sm:p-5 border transition-all duration-300 cursor-pointer flex flex-col gap-2.5 relative ${
                    isActive
                      ? 'bg-[#fdfbf7] border-2 border-[#8a4e1d] shadow-md'
                      : 'bg-white border border-[#e5e2da] hover:border-[#8a4e1d]/40 shadow-sm'
                  }`}
                >
                  {/* Active Indicator Light */}
                  {isActive && (
                    <span className="absolute top-4 right-4 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8a4e1d] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8a4e1d]" />
                    </span>
                  )}

                  {/* Header Row: Icon + Badge */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[#8a4e1d] text-white shadow-sm' : 'bg-[#fdf5eb] text-[#8a4e1d]'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#8a4e1d] uppercase tracking-wide">
                        {tech.badge}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#1c1c17] leading-snug">
                        {tech.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#52594d] leading-relaxed">
                    {tech.shortDesc}
                  </p>

                  {/* Micro Stat Pills */}
                  <div className="flex flex-wrap gap-2 pt-1 border-t border-[#ede8df]">
                    {tech.stats.map((st, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                          isActive
                            ? 'bg-[#fdf5eb] text-[#444b3e] border-[#f3ddc1]'
                            : 'bg-[#f7f4ed] text-[#52594d] border-[#ede8df]'
                        }`}
                      >
                        {st.label}: <strong className="text-[#8a4e1d]">{st.value}</strong>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
