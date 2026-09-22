// Converted from the user-approved Stitch design.
export default function Categories() { return (<section className="w-full bg-surface py-space-xl">
  <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-8">
    <div className="flex items-end justify-between">
      <div>
        <span className="font-label-md text-label-md text-secondary font-bold uppercase">Phân loại phong phú</span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold">Khám phá theo danh mục nông sản</h2>
      </div>
      <a className="hidden sm:flex items-center gap-1 text-primary hover:text-primary-container font-label-lg text-label-lg font-bold" href="#/nong-san-tuoi">
        <span>Xem tất cả phân loại</span>
        <span className="material-symbols-outlined text-lg">arrow_forward</span>
      </a>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {/* Cat 1 */}
      <a className="group flex flex-col items-center text-center p-5 bg-surface-container-lowest hover:bg-surface-container-low rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1" href="#/nong-san-tuoi">
        <div className="w-20 h-20 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-4xl">eco</span>
        </div>
        <span className="font-title-md text-title-md text-on-surface font-bold">Rau ăn lá tươi</span>
        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">45+ món sẵn có</span>
      </a>
      {/* Cat 2 */}
      <a className="group flex flex-col items-center text-center p-5 bg-surface-container-lowest hover:bg-surface-container-low rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1" href="#/nong-san-tuoi">
        <div className="w-20 h-20 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary mb-3 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-4xl">nutrition</span>
        </div>
        <span className="font-title-md text-title-md text-on-surface font-bold">Củ quả mộc mạc</span>
        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">60+ loại củ ngon</span>
      </a>
      {/* Cat 3 */}
      <a className="group flex flex-col items-center text-center p-5 bg-surface-container-lowest hover:bg-surface-container-low rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1" href="#/nong-san-tuoi">
        <div className="w-20 h-20 rounded-full bg-tertiary-fixed/40 flex items-center justify-center text-tertiary mb-3 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-4xl">nest_eco_leaf</span>
        </div>
        <span className="font-title-md text-title-md text-on-surface font-bold">Trái cây nhiệt đới</span>
        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">32+ thức quả ngọt</span>
      </a>
      {/* Cat 4 */}
      <a className="group flex flex-col items-center text-center p-5 bg-surface-container-lowest hover:bg-surface-container-low rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1" href="#/nong-san-tuoi">
        <div className="w-20 h-20 rounded-full bg-primary-fixed-dim/40 flex items-center justify-center text-on-primary-fixed-variant mb-3 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-4xl">spa</span>
        </div>
        <span className="font-title-md text-title-md text-on-surface font-bold">Chuẩn hữu cơ</span>
        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Không hóa chất</span>
      </a>
      {/* Cat 5 */}
      <a className="group flex flex-col items-center text-center p-5 bg-surface-container-lowest hover:bg-surface-container-low rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1" href="#/nong-san-tuoi">
        <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center text-secondary mb-3 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-4xl">location_city</span>
        </div>
        <span className="font-title-md text-title-md text-on-surface font-bold">Đặc sản bản địa</span>
        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Đà Lạt, Gia Lai...</span>
      </a>
      {/* Cat 6 */}
      <a className="group flex flex-col items-center text-center p-5 bg-surface-container-lowest hover:bg-surface-container-low rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1" href="#/nong-san-tuoi">
        <div className="w-20 h-20 rounded-full bg-tertiary-fixed-dim/50 flex items-center justify-center text-tertiary-container mb-3 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-4xl">all_inclusive</span>
        </div>
        <span className="font-title-md text-title-md text-on-surface font-bold">Combo tiết kiệm</span>
        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Giảm thêm 15%</span>
      </a>
    </div>
  </div>
</section>
); }
