// Converted from the user-approved Stitch design with responsive improvements.
export default function Quality() {
  return (
    <section className="w-full bg-surface-container-lowest py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-8 md:gap-12">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Tiêu chuẩn minh bạch</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface font-extrabold tracking-tight leading-tight">
            Cam kết chất lượng CapNong
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Xấu mã nhưng sạch từ tâm. Chúng tôi đặt uy tín và sức khỏe của khách hàng lên hàng đầu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {/* Trust 1 */}
          <div className="p-6 bg-surface-container-low rounded-2xl flex flex-col gap-3 border border-outline-variant/30 hover:border-primary/30 transition-all hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">qr_code_2</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-on-surface">Nguồn gốc rõ ràng</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Mỗi sản phẩm đều có mã QR truy xuất cụ thể tên chủ vườn, nhật ký bón phân hữu cơ và thời điểm thu hoạch chi tiết.
            </p>
          </div>

          {/* Trust 2 */}
          <div className="p-6 bg-surface-container-low rounded-2xl flex flex-col gap-3 border border-outline-variant/30 hover:border-secondary/30 transition-all hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-2xl">video_camera_front</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-on-surface">Đổi trả bằng Video</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Chỉ cần gửi video mở gói hàng nếu gặp sản phẩm dập nát hỏng ruột. Hệ thống phê duyệt và hoàn tiền tự động trong 2h.
            </p>
          </div>

          {/* Trust 3 */}
          <div className="p-6 bg-surface-container-low rounded-2xl flex flex-col gap-3 border border-outline-variant/30 hover:border-tertiary/30 transition-all hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-2xl">gavel</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-on-surface">Chống gian lận AI</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Thuật toán giám sát nghiêm ngặt: gắn cờ đỏ phạt tiền nhà vườn trà trộn hàng héo ủng, loại trừ đối tượng bùng đơn.
            </p>
          </div>

          {/* Trust 4 */}
          <div className="p-6 bg-surface-container-low rounded-2xl flex flex-col gap-3 border border-outline-variant/30 hover:border-primary/30 transition-all hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-on-surface">Chuẩn an toàn vệ sinh</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Cam kết 100% "chỉ dị dạng kiểu dáng bên ngoài, tuyệt đối sạch và an toàn bên trong". Test tồn dư kháng sinh &amp; thuốc BVTV.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
