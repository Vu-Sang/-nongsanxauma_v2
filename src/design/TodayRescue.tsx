import { Flame, ArrowRight, ShoppingBasket, Star, Sparkles, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import promoImg from '../assets/fresh-veg-promo.png';
import { products, money, type Product } from '../catalog';
import { ProduceImage } from '../components/ProductCard';

export default function TodayRescue({ onAdd }: { onAdd: (id: string) => void }) {
  return (
    <section id="giai-cuu-hom-nay" className="w-full bg-[#f8f6f0] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Flame size={18} className="text-[#e65100]" />
              <span>Tươi ngon mỗi ngày</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1c1c17] font-extrabold tracking-tight mt-1">
              Giải cứu hôm nay
            </h2>
          </div>
          <a
            href="#/nong-san-tuoi"
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary-container font-bold text-xs sm:text-sm transition-colors"
          >
            <span>Xem tất cả nông sản</span>
            <ArrowRight size={17} />
          </a>
        </div>

        {/* 2-Column Main Layout: Left Promo Banner (Full Height & Well-balanced) + Right Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Featured Green Promotional Banner */}
          <div className="lg:col-span-4 xl:col-span-3 bg-gradient-to-b from-[#2e7d32] via-[#246927] to-[#1a4f1d] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden h-full min-h-[520px] group border border-white/10">
            {/* Ambient Lighting Accents */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -left-16 w-48 h-48 bg-[#ffba41]/20 rounded-full blur-2xl pointer-events-none" />

            {/* Top Text & Benefits Content */}
            <div className="relative z-10 flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider w-fit border border-white/20 shadow-sm">
                <Sparkles size={13} className="text-[#ffdf9e]" />
                <span>Tiết kiệm đến 50%</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
                Rau củ tươi sạch cho gian bếp gia đình
              </h3>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                Nông sản thu hoạch sớm từ các nhà vườn liên kết, giữ trọn 100% vitamin và hương vị tươi ngon.
              </p>

              {/* Price Deal Box */}
              <div className="p-3.5 bg-black/15 backdrop-blur-md rounded-2xl border border-white/15 flex flex-col gap-1">
                <span className="text-[11px] text-white/80 font-medium uppercase tracking-wide">
                  Ưu đãi giải cứu hôm nay
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#ffea79] tracking-tight">
                  Chỉ từ 15.000đ<span className="text-xs text-white/80 font-normal">/kg</span>
                </span>
              </div>

              {/* 3 Quick Value Highlights */}
              <div className="flex flex-col gap-2 pt-1 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#9ed67d] shrink-0" />
                  <span>100% An toàn, không chất bảo quản</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={15} className="text-[#ffdf9e] shrink-0" />
                  <span>Giao hỏa tốc 2–4 giờ tận nơi</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-[#9ed67d] shrink-0" />
                  <span>Cam kết đổi trả 1-1 nhanh chóng</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#/nong-san-tuoi"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#1a4f1d] hover:bg-[#f1f8ed] font-bold text-sm transition-all shadow-md hover:shadow-lg w-full sm:w-fit mt-1 transform hover:translate-x-1 min-h-[44px]"
              >
                <span>Khám phá ngay</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Bottom Vegetable Cluster Image (Enlarged & Nicely Anchored) */}
            <div className="relative z-10 -mx-4 -mb-4 mt-6 pt-2 flex justify-center items-end">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl pointer-events-none scale-75" />
              <img
                src={promoImg}
                alt="Rau củ quả tươi sạch cho gia đình"
                className="relative z-10 w-full max-h-[320px] object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.4)] transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Multi-column Product Cards Grid */}
          <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 h-full">
            {products.map((p) => {
              const discount = Math.round((1 - p.price / p.original) * 100);
              return (
                <article
                  key={p.id}
                  className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-xl border border-[#e5e2da]/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Product Image Box */}
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-[#f6f3eb] mb-3">
                      <ProduceImage src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      
                      {/* Badges */}
                      <span className="absolute top-2 left-2 bg-[#d32f2f] text-white text-[10px] font-bold py-0.5 px-2 rounded-full shadow-sm">
                        -{discount}%
                      </span>
                      <span className="absolute top-2 right-2 bg-white/95 text-primary text-[10px] font-bold py-0.5 px-2 rounded-full shadow-sm">
                        AI {p.score}%
                      </span>
                      <span className="absolute bottom-2 left-2 bg-white/90 text-[#7a573a] text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                        {p.flaw}
                      </span>
                    </div>

                    {/* Category & Farm Origin */}
                    <div className="flex items-center justify-between text-[11px] text-[#71766b] mb-1">
                      <span className="font-semibold text-primary">{p.category}</span>
                      <span>{p.region}</span>
                    </div>

                    {/* Product Name */}
                    <h4 className="text-sm font-bold text-[#1c1c17] leading-snug line-clamp-2 min-h-[38px] group-hover:text-primary transition-colors">
                      {p.name}
                    </h4>

                    {/* Price Block */}
                    <div className="flex items-baseline gap-2 mt-2">
                      <strong className="text-base sm:text-lg font-extrabold text-[#d32f2f]">
                        {money(p.price)}
                      </strong>
                      <del className="text-xs text-[#8f9688]">
                        {money(p.original)}/{p.unit}
                      </del>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mt-1.5 text-[#f59e0b]">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill="#f59e0b" stroke="none" />
                        ))}
                      </div>
                      <span className="text-[11px] text-[#71766b] font-medium ml-1">
                        (4.8)
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Action */}
                  <button
                    onClick={() => onAdd(p.id)}
                    className="w-full mt-3 py-2 rounded-xl bg-[#f1eee6] hover:bg-primary text-primary hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm min-h-[38px]"
                  >
                    <ShoppingBasket size={15} />
                    <span>Thêm vào giỏ</span>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
