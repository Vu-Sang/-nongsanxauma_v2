// Converted from the user-approved Stitch design.
export default function CombosTeaser() { return (<section className="w-full bg-[#5C3E25] text-surface-bright py-space-xl relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-10">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="flex flex-col gap-2 max-w-xl">
        <span className="font-label-md text-label-md text-tertiary-fixed font-bold uppercase tracking-wide">Trải nghiệm mua sắm thú vị</span>
        <h2 className="font-headline-lg text-headline-lg text-white font-extrabold">Combo &amp; Túi Mù Nông Sản</h2>
        <p className="font-body-lg text-body-lg text-surface-container-high">Tiết kiệm nhiều hơn khi mua theo gói, đón nhận bất ngờ từ thiên nhiên mỗi sớm mai thức dậy.</p>
      </div>
      {/* Referral Bonus Chip */}
      <div className="bg-tertiary-fixed text-on-tertiary-fixed px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
        <span className="material-symbols-outlined text-2xl">card_giftcard</span>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md font-bold uppercase">Ví thưởng giới thiệu</span>
          <span className="font-body-sm text-body-sm">Tặng ngay Voucher 50K khi rủ bạn cùng giải cứu</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Mystery Box Card */}
      <div className="bg-surface-container-lowest text-on-surface rounded-3xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
        <div className="absolute -top-3 -right-3 bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm text-label-sm font-bold px-4 py-1.5 rounded-bl-2xl shadow">
          HOT DEAL
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-3xl">featured_seasonal_and_gifts</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Túi mù nông sản (Mystery Box)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Bất ngờ mỗi ngày! Nhận ngay 5kg rau củ quả ngẫu nhiên theo mùa được thu hoạch sáng sớm từ các nhà vườn.</p>
          </div>
          <div className="p-3.5 bg-surface-container-low rounded-2xl flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Giá ưu đãi giải cứu:</span>
              <span className="font-headline-md text-headline-md font-black text-primary">79.000đ <span className="font-body-sm text-body-sm text-outline font-normal">/ túi 5kg</span></span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold">Rẻ hơn 60%</span>
          </div>
        </div>
        <button className="mt-6 w-full py-3.5 rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-md">
          <span className="material-symbols-outlined text-xl">redeem</span>
          <span>Mở túi mù 79k</span>
        </button>
      </div>
      {/* Custom Combo Card */}
      <div className="bg-surface-container-lowest text-on-surface rounded-3xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">set_meal</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Build Combo cá nhân tuần</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Tự do mix 5-7 món rau củ theo thói quen gia đình. Hệ thống tự động giảm thêm 15% tổng hóa đơn so với mua lẻ.</p>
          </div>
          <div className="p-3.5 bg-surface-container-low rounded-2xl flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Quyền lợi thành viên:</span>
              <span className="font-title-md text-title-md font-bold text-tertiary">Freeship + Tặng gia vị</span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-bold">-15% Bill</span>
          </div>
        </div>
        <button className="mt-6 w-full py-3.5 rounded-full bg-surface-container-high hover:bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-xl">tune</span>
          <span>Tự thiết kế combo tuần</span>
        </button>
      </div>
      {/* Social Commerce Referral */}
      <div className="bg-surface-container-lowest text-on-surface rounded-3xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="w-14 h-14 rounded-2xl bg-secondary-fixed/40 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Ví thưởng bạn bè (Social Win)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Chia sẻ lối sống tiêu dùng xanh. Nhận 5% hoa hồng mỗi khi bạn bè hoàn tất đơn giải cứu đầu tiên.</p>
          </div>
          <div className="p-3.5 bg-surface-container-low rounded-2xl flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Số dư ví có thể rút:</span>
              <span className="font-headline-md text-headline-md font-bold text-on-surface">150.000đ</span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-secondary font-label-sm text-label-sm font-bold">Rút 24/7</span>
          </div>
        </div>
        <button className="mt-6 w-full py-3.5 rounded-full bg-tertiary-fixed-dim hover:bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-xl">share</span>
          <span>Lấy link giới thiệu ngay</span>
        </button>
      </div>
    </div>
  </div>
</section>
); }
