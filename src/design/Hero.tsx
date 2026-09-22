// Converted from the user-approved Stitch design.
export default function Hero() { return (<section className="relative w-full overflow-hidden bg-surface-container-low min-h-[580px] lg:min-h-[640px] flex items-center">
  {/* Hero Image Background with Ambient Dark-to-Warm Gradient Overlays */}
  <div className="absolute inset-0 z-0">
    <img alt="Nông dân Việt Nam tươi cười rạng rỡ với rổ rau củ tươi ngon thu hoạch từ vườn" className="w-full h-full object-cover object-center scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdLYHlkPx7fovWTuxoiX2Qug7XJ1JSJK0fS4T5cs6e9oijReQYDziD3bAVw6A1sti1yyGFeY73nMDMxhubK4SmTpx0uNDLbxTKqkYXedFVIcSCIhwk-ioLNivQmOHFLYmKtrBd3LgLwiZ3RW2rfp7QgCyL_z6rE7s6aNTycsimbJYZEA8rL1P09CdA2jlwZ5Vi_e8wpdVb1rjt9TTWeP6RHeHJfuiZC46mYvv4-WjzOhZwgqR0htno" />
    {/* High contrast multi-stop gradient for flawless typographic readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-on-surface/95 via-on-surface/75 to-transparent lg:w-3/5" />
    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent lg:hidden" />
    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
  </div>
  <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile lg:px-margin w-full py-space-xl">
    <div className="max-w-2xl flex flex-col gap-6 text-surface-bright">
      {/* Live AI Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-bright/15 backdrop-blur-md w-fit shadow-sm">
        <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse" />
        <span className="font-label-md text-label-md text-tertiary-fixed font-bold tracking-wide uppercase">AI Dinh Dưỡng Kiểm Định 100%</span>
      </div>
      {/* Headline */}
      <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-surface-bright font-extrabold tracking-tight leading-tight">
        Nông sản xấu mã – <br />
        <span className="text-tertiary-fixed-dim inline-block">Ngon thật, rẻ thật.</span>
      </h1>
      {/* Subheadline */}
      <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed max-w-xl">
        Cứu rau củ lỡ "mất dáng" khỏi bãi rác, bảo vệ túi tiền của bạn và giúp nông dân Việt Nam bán được trọn vẹn mùa vụ. Tươi ngon, an lành và giao thần tốc mỗi ngày.
      </p>
      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary-container/30" href="#/giai-cuu-hom-nay">
          <span className="material-symbols-outlined text-xl">shopping_basket</span>
          <span>Mua ngay hôm nay</span>
        </a>
        <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-bright/20 hover:bg-surface-bright/30 text-surface-bright backdrop-blur-md font-label-lg text-label-lg transition-colors" href="#/cong-nghe-ai">
          <span className="material-symbols-outlined text-xl">play_circle</span>
          <span>Xem cách hoạt động</span>
        </a>
      </div>
      {/* Trust Stats Banner */}
      <div className="grid grid-cols-3 gap-3 pt-6 mt-4 border-t border-white/20">
        <div className="flex flex-col">
          <span className="font-headline-md text-headline-md text-tertiary-fixed-dim font-bold">12.000+</span>
          <span className="font-body-sm text-body-sm text-surface-container-highest">Đơn giải cứu hoàn tất</span>
        </div>
        <div className="flex flex-col">
          <span className="font-headline-md text-headline-md text-primary-fixed font-bold">500+</span>
          <span className="font-body-sm text-body-sm text-surface-container-highest">Nông dân đồng hành</span>
        </div>
        <div className="flex flex-col">
          <span className="font-headline-md text-headline-md text-surface-bright font-bold">30 Tấn</span>
          <span className="font-body-sm text-body-sm text-surface-container-highest">Tránh lãng phí môi trường</span>
        </div>
      </div>
    </div>
  </div>
</section>
); }
