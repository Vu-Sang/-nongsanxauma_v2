// Converted from the user-approved Stitch design.
export default function AiFeatures() { return (<section className="w-full bg-[#264319] text-surface-bright py-space-xl relative overflow-hidden" id="cong-nghe-ai">
  {/* Ambient Tech Glow */}
  <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-tertiary-fixed/15 rounded-full blur-2xl pointer-events-none" />
  <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-10">
    {/* Tech Section Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="flex flex-col gap-3 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tertiary-fixed-dim/20 text-tertiary-fixed w-fit">
          <span className="material-symbols-outlined text-base">auto_awesome</span>
          <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Công nghệ lõi CapNong AI</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-white font-extrabold tracking-tight">
          Mua sắm thông minh hơn nhờ Trí Tuệ Nhân Tạo
        </h2>
        <p className="font-body-lg text-body-lg text-[#dcdad2]">
          Ứng dụng thị giác máy tính và mô hình ngôn ngữ lớn để định giá minh bạch, kiểm tra dinh dưỡng và giải phóng năng suất cho nhà vườn.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-fixed">memory</span>
          <span className="font-label-md text-label-md text-white">Trải nghiệm AI minh họa</span>
        </div>
      </div>
    </div>
    {/* 3 Interactive AI Bento Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* AI Card 1: Visual AI Search */}
      <div className="bg-surface-container-lowest text-on-surface rounded-3xl p-6 lg:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">photo_camera</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-bold">Quét Ảnh AI</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Tìm kiếm bằng hình ảnh (Visual AI)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Chụp củ quả hoặc món ăn bất kỳ, AI nhận diện khuyết tật thẩm mỹ và khớp ngay lô nông sản xấu mã phù hợp với giá rẻ nhất.</p>
          </div>
        </div>
        {/* Scanner Simulation Mockup */}
        <div className="my-6 bg-surface-container-low rounded-2xl p-4 flex flex-col gap-3 relative">
          <div className="relative h-44 rounded-xl overflow-hidden bg-on-surface">
            <img className="w-full h-full object-cover opacity-80" data-alt="Close up shot of organically grown imperfect heirloom tomatoes with slight cosmetic irregularities on a cutting board, high definition food photography, natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB3ILB0nRAd141jCHgMqIcL7VBdv3fODzshf9WNFuJl3axV9JCBZiHhjp634blzrC1evpj1b6YgVSISeIjAAfSNXoelXhEBv10hMQUuFWFMIo11i2oeQkKkKcg5Ii3RQuRs7hIPBJaisn3VuRkMKxZZaW3sZUVcduvDvgCy3aMYsCZgeEKPldg3XpCBAd9YdjEihym_KWYsgmAemr2Bf467GmdN-WTG6ljbLcOlSfxHRaTbCXkJKW7" />
            {/* Scanning Target Box */}
            <div className="absolute inset-4 rounded-lg border-2 border-dashed border-primary-fixed flex items-center justify-center">
              <div className="absolute top-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Khớp 97.8%</div>
              <div className="absolute bottom-2 right-2 bg-surface-bright text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded shadow">Cà chua bi Đơn Dương</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-1">
            <span>Độ tươi Brix: 8.5°</span>
            <span className="text-primary font-bold">Tiết kiệm: 42%</span>
          </div>
        </div>
        <button className="w-full py-3 rounded-full bg-surface-container-high hover:bg-surface-container text-primary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-lg">camera</span>
          <span>Bật camera thử quét</span>
        </button>
      </div>
      {/* AI Card 2: Smart Meal Planner */}
      <div className="bg-surface-container-lowest text-on-surface rounded-3xl p-6 lg:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-2xl">soup_kitchen</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Thực đơn thông minh</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Lên thực đơn tuần bằng AI</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">AI gợi ý thực đơn Chay/Mặn dinh dưỡng dựa trên giỏ nông sản giải cứu đang có sẵn hôm nay. Cân đối calo và tiết kiệm 45% chi phí.</p>
          </div>
        </div>
        {/* Recipe Planner Visualization */}
        <div className="my-6 bg-surface-container-low rounded-2xl p-4 flex flex-col gap-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
            <span className="font-label-md text-label-md font-bold text-on-surface">Gợi ý hôm nay (Chế độ Eat Clean)</span>
            <span className="font-label-sm text-label-sm text-tertiary font-semibold">3 Bữa / ngày</span>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-lowest p-2.5 rounded-xl">
            <span className="material-symbols-outlined text-primary text-xl">restaurant</span>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-label-md text-label-md font-semibold truncate">Canh củ quả hầm nấm đùi gà</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Nguyên liệu: Cà rốt 2 nhánh, Khoai lang cong</span>
            </div>
            <span className="font-label-sm text-label-sm text-primary font-bold">18k</span>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-lowest p-2.5 rounded-xl">
            <span className="material-symbols-outlined text-tertiary text-xl">lunch_dining</span>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-label-md text-label-md font-semibold truncate">Salad sốt chanh leo &amp; Cà chua bi</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Cà chua lệch size, Dưa leo khoằm</span>
            </div>
            <span className="font-label-sm text-label-sm text-primary font-bold">14k</span>
          </div>
        </div>
        <button className="w-full py-3 rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2 shadow-md">
          <span className="material-symbols-outlined text-lg">magic_button</span>
          <span>Thử lên thực đơn ngay</span>
        </button>
      </div>
      {/* AI Card 3: Farmer AI Assistant */}
      <div className="bg-surface-container-lowest text-on-surface rounded-3xl p-6 lg:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-2xl">support_agent</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed font-label-sm text-label-sm font-bold">Dành cho Nhà Vườn</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Trợ lý AI cho nhà vườn</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">AI tự động sinh bài đăng bán, phân tích độ tươi, kiểm duyệt độ biến dạng thẩm mỹ, giúp nông dân niêm yết hàng chỉ trong 30 giây.</p>
          </div>
        </div>
        {/* Speed Listing Mockup */}
        <div className="my-6 bg-surface-container-low rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">AI</div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-bold">Đã phân tích 1 bức ảnh vườn:</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Bí đỏ hồ lô vỏ nám sần · 250 kg</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-3 rounded-xl font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            "Bí mật ngọt lịm từ Đắk Lắk, da rám nắng tự nhiên, ruột vàng ươm dẻo quánh. Thích hợp nấu chè, làm sữa hạt!"
          </div>
          <div className="flex items-center justify-between font-label-sm text-label-sm text-primary font-bold">
            <span>Đề xuất giá: 11.500đ/kg</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span> Đã duyệt</span>
          </div>
        </div>
        <button className="w-full py-3 rounded-full bg-surface-container-high hover:bg-surface-container text-secondary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-lg">storefront</span>
          <span>Khám phá công cụ nhà vườn</span>
        </button>
      </div>
    </div>
  </div>
</section>
); }
