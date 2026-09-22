// Converted from the user-approved Stitch design.
export default function RescueProcess() { return (<section id="quy-trinh" className="w-full bg-surface-container-lowest py-space-xl">
  <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-10">
    <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
      <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Trải nghiệm đơn giản &amp; an tâm</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">Quy trình giải cứu 4 bước minh bạch</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Từ một nông sản chưa đạt chuẩn hình thức đến bữa ăn ngon lành trên bàn của bạn.</p>
    </div>
    <div className="rescue-flow">
      {/* Step 1 */}
      <div className="md:col-span-1 flex flex-col items-center text-center gap-4">
        <div className="rescue-art"><svg viewBox="0 0 88 88" aria-hidden="true"><path d="M17 65Q43 58 70 65M43 59V37M43 46Q32 24 18 26Q22 41 43 43M44 37Q57 19 70 20Q64 36 44 38M21 28L39 40M66 23L48 35" /><ellipse cx={43} cy={74} rx={6} ry={3} /><path d="M41 74l5-2" /></svg></div>
        <div><h3 className="font-title-md text-title-md text-on-surface font-bold">Chọn nông sản</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Khám phá rau củ xấu mã nhưng vẫn tươi ngon, an toàn.</p></div>
        <a className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold hover:bg-primary-container transition-colors" href="#/giai-cuu-hom-nay">Khám phá ngay</a>
      </div>
      <div className="hidden md:flex items-center justify-center pt-10 text-primary text-3xl">→</div>
      {/* Step 2 */}
      <div className="md:col-span-1 flex flex-col items-center text-center gap-4">
        <div className="rescue-art"><svg viewBox="0 0 88 88" aria-hidden="true"><path d="M26 23Q33 33 43 30Q55 29 60 23L65 31Q67 36 63 41L63 69Q63 75 56 75H29Q22 75 23 68L24 42Q19 33 26 23ZM25 42Q44 37 63 42M29 29Q26 35 30 39M59 28Q62 34 57 39M44 46V67M43 52Q32 45 33 51Q35 56 43 55M44 58Q54 48 55 54Q53 60 44 61" /><path d="M39 47q4-3 9 0M38 69h11" /></svg></div>
        <div><h3 className="font-title-md text-title-md text-on-surface font-bold">Đặt hàng</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Thanh toán linh hoạt, tiền được bảo chứng đến khi bạn hài lòng.</p></div>
        <a className="px-3.5 py-1.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-bold hover:bg-on-surface transition-colors" href="#/giai-cuu-hom-nay">Xem bảo chứng</a>
      </div>
      <div className="hidden md:flex items-center justify-center pt-10 text-primary text-3xl">→</div>
      {/* Step 3 */}
      <div className="md:col-span-1 flex flex-col items-center text-center gap-4">
        <div className="rescue-art"><svg viewBox="0 0 88 88" aria-hidden="true"><path d="M23 35L45 24L67 35V62L45 76L23 62ZM23 35L45 48L67 35M45 48V76M34 30L56 42M56 30L34 42M45 24V43M27 36L34 32M48 47L61 39" /></svg></div>
        <div><h3 className="font-title-md text-title-md text-on-surface font-bold">Đóng gói</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Nhà vườn đóng gói bằng vật liệu tái chế, giữ trọn độ tươi.</p></div>
        <a className="px-3.5 py-1.5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm font-bold hover:bg-tertiary-container transition-colors" href="#/cau-chuyen-nong-dan">Xem nhà vườn</a>
      </div>
      <div className="hidden md:flex items-center justify-center pt-10 text-primary text-3xl">→</div>
      {/* Step 4 */}
      <div className="md:col-span-1 flex flex-col items-center text-center gap-4">
        <div className="rescue-art"><svg viewBox="0 0 88 88" aria-hidden="true"><path d="M23 62V29H54V62H37M54 40H66L77 52V65H72M54 62H59M61 44H65L72 53H61ZM15 36H6M17 45H3M15 54H8M23 65H27" /><circle cx={32} cy={65} r={6} /><circle cx={66} cy={65} r={6} /><circle cx={32} cy={65} r={2} /><circle cx={66} cy={65} r={2} /></svg></div>
        <div><h3 className="font-title-md text-title-md text-on-surface font-bold">Giao tận nơi</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Shipper xanh giao nhanh trong 2–4 giờ, đổi trả rõ ràng.</p></div>
        <a className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold hover:bg-primary-container transition-colors" href="#/nong-san-tuoi">Xem chính sách</a>
      </div>
    </div>
  </div>
</section>
); }
