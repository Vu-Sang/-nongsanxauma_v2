// Converted from the user-approved Stitch design.
export default function FarmerStory() { return (<section className="w-full bg-surface-container-low py-space-xl" id="cau-chuyen-nong-dan">
  <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
    <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12">
      {/* Farmer Portrait Image Column (Left 5 cols) */}
      <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-full">
        <img alt="Chú Sáu - nông dân trồng thanh long và bắp cải với nụ cười hiền hậu giữa khu vườn trù phú" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWmDYLHMU-if8AyjqhJhJIriYpvw2FXiNwP3cSdLRxHevu5R-xwJdvqHzoy6D0YKT52wYleFXIppEHLt46Q55nbZQtbymRQLlgXFtz4vbxjWLVEORrWfbpVlEkf0KTdfGY0ojyEkOb0_4sRFE1rvX1bCdLslhYz7Vn0knoYJPxRwbyK7BW0t86W1jAhBNdDBsSOr2HXYjz_z8CT5lXFi1RPUsCzva9eee5PmQdo5I7GUjdpspF_vMQ" />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent lg:hidden" />
        <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-surface-bright/90 backdrop-blur-md text-on-surface flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg font-bold">Chú Sáu (52 tuổi)</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Chủ vườn thanh long &amp; bắp cải tại Đơn Dương</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold">Đã bán 14 tấn</span>
        </div>
      </div>
      {/* Farmer Narrative & Vendor Callout (Right 7 cols) */}
      <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/50 text-secondary w-fit">
            <span className="material-symbols-outlined text-base">format_quote</span>
            <span className="font-label-sm text-label-sm font-bold uppercase">Câu chuyện từ luống cày</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold leading-tight">
            "Rau củ cong queo từng bị đổ đống hàng tấn mỗi vụ... Giờ đây chúng nuôi sống gia đình tôi."
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            "Trước đây khi lái buôn vào vườn, họ chỉ nhặt những trái thanh long thẳng đuột, bắp cải tròn vành vạnh. Những củ cà rốt chia nhánh hay quả dưa cong một chút là bị gạt lại, bán đổ bán tháo với giá 2.000đ/kg hoặc phải ủ làm phân. Nhờ CapNong, người tiêu dùng ở phố hiểu rằng vị ngọt của rau củ không nằm ở ngoại hình. Bà con chúng tôi mừng lắm, vừa có thu nhập ổn định vừa không thấy xót ruột nhìn nông sản bị vứt bỏ."
          </p>
        </div>
        {/* Vendor Registration CTA Box */}
        <div className="bg-surface-container-low rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="font-title-md text-title-md font-bold text-on-surface">Bạn là nhà vườn hoặc hợp tác xã?</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Mở gian hàng miễn phí, AI hỗ trợ đăng bán trong 30 giây.</span>
          </div>
          <a className="shrink-0 px-6 py-3 rounded-full bg-secondary hover:bg-on-surface text-on-secondary font-label-lg text-label-lg transition-colors shadow-md" href="#/nong-san-tuoi">
            Đăng ký mở gian hàng
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
); }
