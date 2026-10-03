// Converted from the user-approved Stitch design with responsive improvements.
export default function Partners() {
  return (
    <section className="w-full bg-surface-container-low py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Partner Block 1: Farmer & Cooperative */}
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl flex flex-col justify-between gap-6 shadow-sm hover:shadow-md border border-outline-variant/30 transition-shadow relative overflow-hidden">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">agriculture</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-on-surface">Dành cho Nông Dân &amp; HTX</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Bán hết nông sản xấu mã với giá công bằng, xóa tan nỗi lo tồn ứ "được mùa mất giá". Không mất phí sàn trong 3 tháng đầu, tiền về thẳng tài khoản sau khi hoàn tất chuyến xe.
              </p>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>AI tự động viết bài mô tả và phân loại chất lượng</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Hỗ trợ đóng thùng tái chế và điều phối xe tải gom hàng</span>
                </li>
              </ul>
            </div>
            <a
              className="w-full py-3.5 rounded-full bg-primary-container hover:bg-primary text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm min-h-[44px]"
              href="#/nong-san-tuoi"
            >
              <span>Đăng ký bán hàng ngay</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>

          {/* Partner Block 2: Green Shipper */}
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl flex flex-col justify-between gap-6 shadow-sm hover:shadow-md border border-outline-variant/30 transition-shadow relative overflow-hidden">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-on-surface">Dành cho Tài Xế &amp; Shipper Xanh</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Nhận đơn cự ly ngắn từ kho trung chuyển gần nhất, ghép chuyến thông minh với thuật toán AI tối ưu đường đi. Tự do thời gian, nhận thu nhập hấp dẫn mỗi ngày.
              </p>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  <span>Thu nhập 300k - 600k / ca làm việc linh hoạt</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  <span>Chính sách thưởng theo số kg nông sản giải cứu</span>
                </li>
              </ul>
            </div>
            <a
              className="w-full py-3.5 rounded-full bg-secondary hover:bg-on-surface text-on-secondary text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm min-h-[44px]"
              href="#/nong-san-tuoi"
            >
              <span>Đăng ký đối tác giao hàng</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
