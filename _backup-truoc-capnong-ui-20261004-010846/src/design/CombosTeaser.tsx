import { Sparkles, ArrowRight, ShoppingBasket, Gift, Star, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import mysteryPromoImg from '../assets/mystery-box-promo.png';
import comboMysteryImg from '../assets/combo-mystery.jpg';
import comboGreenImg from '../assets/combo-green.jpg';
import comboKitchenImg from '../assets/combo-kitchen.jpg';
import comboHotpotImg from '../assets/combo-hotpot.jpg';
import { money } from '../catalog';

interface ComboCardData {
  id: string;
  name: string;
  image: string;
  badgeDiscount: string;
  badgeWeight: string;
  badgeHighlight: string;
  category: string;
  portion: string;
  feature: string;
  price: number;
  original: number;
  unit: string;
  rating: number;
  reviews: number;
  buttonLabel: string;
}

const COMBOS: ComboCardData[] = [
  {
    id: 'mystery',
    name: 'Túi Mù Nông Sản Thần Bí',
    image: comboMysteryImg,
    badgeDiscount: '-60%',
    badgeWeight: '5kg ngẫu nhiên',
    badgeHighlight: 'Tiết kiệm 120k',
    category: 'Hộp quà bất ngờ',
    portion: 'Gia đình 2–3 người',
    feature: 'Gồm 5–6 loại rau lá, củ hầm & quả tươi thu hoạch sáng sớm',
    price: 79000,
    original: 199000,
    unit: 'túi',
    rating: 4.9,
    reviews: 348,
    buttonLabel: 'Mở túi mù ngay',
  },
  {
    id: 'green',
    name: 'Combo Rau Xanh 5 Bữa Tươi',
    image: comboGreenImg,
    badgeDiscount: '-43%',
    badgeWeight: '6kg rau củ',
    badgeHighlight: 'Bán chạy nhất',
    category: 'Combo tuần gia đình',
    portion: 'Gia đình 3–4 người',
    feature: 'Cải bó xôi, mồng tơi, cà rốt, bí đỏ & đậu cô ve thanh mát',
    price: 139000,
    original: 245000,
    unit: 'combo',
    rating: 4.8,
    reviews: 215,
    buttonLabel: 'Thêm vào giỏ',
  },
  {
    id: 'kitchen',
    name: 'Thùng Bếp Xanh Củ Quả 10kg',
    image: comboKitchenImg,
    badgeDiscount: '-48%',
    badgeWeight: '10kg trọn gói',
    badgeHighlight: 'Trọn tuần',
    category: 'Thùng tiết kiệm',
    portion: 'Gia đình 4–5 người',
    feature: 'Khoai lang mật, củ dền, bắp cải, cà chua bi & bưởi hồng',
    price: 199000,
    original: 380000,
    unit: 'thùng',
    rating: 5.0,
    reviews: 182,
    buttonLabel: 'Thêm vào giỏ',
  },
  {
    id: 'hotpot',
    name: 'Combo Tiệc Lẩu & Nướng Xanh',
    image: comboHotpotImg,
    badgeDiscount: '-43%',
    badgeWeight: '4.5kg tuyển chọn',
    badgeHighlight: 'Tiệc tại gia',
    category: 'Combo tiệc cuối tuần',
    portion: 'Nhóm 4–6 người',
    feature: 'Nấm tươi, bắp ngọt, rau tần ô, cải thảo, ớt chuông & cà chua',
    price: 119000,
    original: 210000,
    unit: 'combo',
    rating: 4.9,
    reviews: 156,
    buttonLabel: 'Thêm vào giỏ',
  },
];

export default function CombosTeaser({ onAdd }: { onAdd?: (id: string) => void }) {
  return (
    <section id="combo-tui-mu" className="w-full bg-[#fcfaf6] py-12 md:py-16 lg:py-20 border-b border-[#ede8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8a4e1d]">
              <Gift size={18} className="text-[#d97706]" />
              <span>Trải nghiệm thú vị &amp; Tiết kiệm</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c17] font-extrabold tracking-tight mt-1">
              Combo &amp; Túi Mù Nông Sản
            </h2>
          </div>
          <a
            href="#/combo-tui-mu"
            className="inline-flex items-center gap-1.5 text-[#8a4e1d] hover:text-[#b45309] font-bold text-xs sm:text-sm transition-colors"
          >
            <span>Xem tất cả Combo &amp; Túi Mù</span>
            <ArrowRight size={17} />
          </a>
        </div>

        {/* 2-Column Inverted Layout: Left Products Grid + Right Promo Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Combo Cards Grid (Synchronized Card Style with TodayRescue) */}
          <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 h-full order-2 lg:order-1">
            {COMBOS.map((combo) => (
              <article
                key={combo.id}
                className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-xl border border-[#e5e2da]/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image Box */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden bg-[#f6f3eb] mb-3">
                    <img
                      src={combo.image}
                      alt={combo.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay Badges */}
                    <span className="absolute top-2 left-2 bg-[#d32f2f] text-white text-[10px] font-bold py-0.5 px-2 rounded-full shadow-sm">
                      {combo.badgeDiscount}
                    </span>
                    <span className="absolute top-2 right-2 bg-white/95 text-primary text-[10px] font-bold py-0.5 px-2 rounded-full shadow-sm">
                      {combo.badgeWeight}
                    </span>
                    <span className="absolute bottom-2 left-2 bg-white/90 text-[#7a573a] text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                      {combo.badgeHighlight}
                    </span>
                  </div>

                  {/* Category & Portion info */}
                  <div className="flex items-center justify-between text-[11px] text-[#71766b] mb-1">
                    <span className="font-semibold text-primary">{combo.category}</span>
                    <span>{combo.portion}</span>
                  </div>

                  {/* Product Name */}
                  <h4 className="text-sm sm:text-base font-bold text-[#1c1c17] leading-snug group-hover:text-primary transition-colors">
                    {combo.name}
                  </h4>

                  {/* Concise description / feature summary */}
                  <p className="text-xs text-[#52594d] leading-relaxed mt-1 line-clamp-2">
                    {combo.feature}
                  </p>

                  {/* Price & Rating Block */}
                  <div className="flex items-baseline justify-between mt-2.5 pt-1 border-t border-[#f0ede6]">
                    <div className="flex items-baseline gap-2">
                      <strong className="text-base sm:text-lg font-extrabold text-[#d32f2f]">
                        {money(combo.price)}
                      </strong>
                      <del className="text-xs text-[#8f9688]">
                        {money(combo.original)}/{combo.unit}
                      </del>
                    </div>

                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill="#f59e0b" stroke="none" />
                        ))}
                      </div>
                      <span className="text-[11px] text-[#71766b] font-medium ml-1">
                        ({combo.rating})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Action (Identical button styling with TodayRescue) */}
                <button
                  onClick={() => onAdd ? onAdd(combo.id) : (location.hash = '/combo-tui-mu')}
                  className="w-full mt-3 py-2 rounded-xl bg-[#f1eee6] hover:bg-primary text-primary hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm min-h-[38px] cursor-pointer"
                >
                  <ShoppingBasket size={15} />
                  <span>{combo.buttonLabel}</span>
                </button>
              </article>
            ))}
          </div>

          {/* Right Column: Featured Warm Terracotta Promotional Banner (Inverted: Banner on Right) */}
          <div className="lg:col-span-4 xl:col-span-3 bg-gradient-to-b from-[#8a4e1d] via-[#6e3910] to-[#452008] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden h-full min-h-[520px] group border border-white/10 order-1 lg:order-2">
            {/* Ambient Lighting Accents */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-white/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -right-16 w-48 h-48 bg-[#ffba41]/20 rounded-full blur-2xl pointer-events-none" />

            {/* Top Text & Benefits Content */}
            <div className="relative z-10 flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider w-fit border border-white/20 shadow-sm">
                <Sparkles size={13} className="text-[#ffdf9e]" />
                <span>Bí ẩn mỗi ngày</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
                Mở Túi Mù – Đón Bất Ngờ Từ Nhà Vườn
              </h3>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                Mỗi chiếc túi mù là một chuyến phiêu lưu vị giác thú vị với 5kg rau củ quả chuẩn sạch thu hoạch sớm nhất trong ngày.
              </p>

              {/* Price Deal Box */}
              <div className="p-3.5 bg-black/20 backdrop-blur-md rounded-2xl border border-white/15 flex flex-col gap-1">
                <span className="text-[11px] text-white/80 font-medium uppercase tracking-wide">
                  Giá trải nghiệm độc quyền
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#ffea79] tracking-tight">
                  Chỉ 79.000đ<span className="text-xs text-white/80 font-normal">/túi 5kg</span>
                </span>
              </div>

              {/* 3 Quick Value Highlights */}
              <div className="flex flex-col gap-2 pt-1 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffdf9e] shrink-0" />
                  <span>5–6 loại nông sản tươi ngon ngẫu nhiên</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={15} className="text-[#ffea79] shrink-0" />
                  <span>Tiết kiệm đến 60% so với mua lẻ</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-[#ffdf9e] shrink-0" />
                  <span>100% Đổi mới nếu có quả bị dập hỏng</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#/combo-tui-mu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#6e3910] hover:bg-[#fff7ed] font-bold text-sm transition-all shadow-md hover:shadow-lg w-full sm:w-fit mt-1 transform hover:translate-x-1 min-h-[44px]"
              >
                <span>Mở túi mù ngay</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Bottom Mystery Box Image (Enlarged & Nicely Anchored with Transparent Cutout) */}
            <div className="relative z-10 -mx-4 -mb-4 mt-6 pt-2 flex justify-center items-end">
              <div className="absolute inset-0 bg-[#ffba41]/15 rounded-full blur-2xl pointer-events-none scale-75" />
              <img
                src={mysteryPromoImg}
                alt="Túi Mù Nông Sản Mystery Box"
                className="relative z-10 w-full max-h-[310px] object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
