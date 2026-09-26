import { useState, type FormEvent } from 'react';
import {
  Mail,
  CheckCircle2,
  Sprout,
  Truck,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Zap,
  Gift,
} from 'lucide-react';

interface NewsletterProps {
  onInfo?: (title: string) => void;
}

type RoleType = 'customer' | 'farmer' | 'driver';

export default function Newsletter({ onInfo }: NewsletterProps) {
  const [role, setRole] = useState<RoleType>('customer');
  const [done, setDone] = useState(false);
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');

  const ROLE_CONFIGS = {
    customer: {
      badge: 'Dành cho Người Tiêu Dùng',
      badgeIcon: ShoppingBag,
      title: 'Nhận thông báo mùa vụ & Ưu đãi giải cứu mỗi tuần',
      desc: 'Cập nhật sớm nhất các lô nông sản mới thu hoạch, mẹo bảo quản và công thức món ngon Eat Clean. Tặng ngay Voucher 50K cho đơn hàng đầu tiên.',
      benefits: [
        'Tặng Voucher 50.000đ khi đăng ký lần đầu',
        'Thông báo giải cứu nông sản tươi ngon sớm nhất mỗi sáng',
        'Gợi ý thực đơn tuần & mẹo bảo quản rau củ hữu cơ',
      ],
      placeholder1: 'Nhập địa chỉ email hoặc số điện thoại của bạn...',
      placeholder2: '',
      btnLabel: 'Đăng ký nhận ưu đãi ngay',
      successMsg: 'Cảm ơn bạn! CapNong đã ghi nhận đăng ký nhận ưu đãi & Voucher 50K.',
    },
    farmer: {
      badge: 'Dành cho Nông Dân & Hợp Tác Xã',
      badgeIcon: Sprout,
      title: 'Đăng ký hợp tác bán nông sản cùng CapNong',
      desc: 'Bán hết nông sản xấu mã với giá công bằng, xóa tan nỗi lo tồn ứ "được mùa mất giá". Không mất phí sàn trong 3 tháng đầu, tiền về thẳng tài khoản sau mỗi chuyến xe.',
      benefits: [
        'AI tự động viết bài mô tả và thẩm định chất lượng VietGAP',
        'Hỗ trợ đóng thùng tái chế và điều phối xe tải gom hàng tận vườn',
        'Bảo chứng thanh toán 100%, tiền về tài khoản trong 24 giờ',
      ],
      placeholder1: 'Tên nhà vườn / Hợp tác xã của bạn...',
      placeholder2: 'Số điện thoại & Vùng trồng (Đà Lạt, Gia Lai, Bến Tre...)...',
      btnLabel: 'Đăng ký đối tác Nhà Vườn ngay',
      successMsg: 'Đã tiếp nhận thông tin nhà vườn! Đội ngũ CapNong sẽ liên hệ khảo sát trong 24h.',
    },
    driver: {
      badge: 'Dành cho Tài Xế & Shipper Xanh',
      badgeIcon: Truck,
      title: 'Trở thành Đối Tác Vận Chuyển Nông Sản Xanh',
      desc: 'Nhận đơn cự ly ngắn từ kho trung chuyển gần nhất, ghép chuyến thông minh với thuật toán AI tối ưu cung đường. Tự do thời gian, thu nhập hấp dẫn mỗi ngày.',
      benefits: [
        'Thu nhập 300.000đ – 600.000đ / ca làm việc linh hoạt',
        'Thuật toán AI ghép chuyến thông minh, tối ưu tối đa quãng đường',
        'Chính sách thưởng nóng theo số kg nông sản giải cứu thành công',
      ],
      placeholder1: 'Họ và tên tài xế...',
      placeholder2: 'Số điện thoại & Khu vực hoạt động (Quận/Huyện)...',
      btnLabel: 'Đăng ký làm Shipper Xanh ngay',
      successMsg: 'Đã nhận thông tin đăng ký tài xế! Bộ phận điều phối sẽ liên hệ hướng dẫn nhận đơn.',
    },
  };

  const current = ROLE_CONFIGS[role];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  const handleSwitchRole = (newRole: RoleType) => {
    setRole(newRole);
    setDone(false);
    setField1('');
    setField2('');
  };

  return (
    <section id="dang-ky-dong-hanh" className="w-full bg-[#f8f6f0] py-14 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Combined Hub Box */}
        <div className="bg-gradient-to-br from-[#244e18] via-[#1d4213] to-[#14330d] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-white/10">
          {/* Ambient Lighting Accents */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ffea79]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#4a7c2f]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-8 max-w-4xl mx-auto">
            {/* Box Header with Glowing Mail Icon */}
            <div className="text-center flex flex-col items-center gap-3 pt-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-[#ffea79]/30 rounded-2xl blur-md pointer-events-none" />
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-[#ffea79]/50 flex items-center justify-center text-[#ffea79] shadow-xl backdrop-blur-md">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 max-w-2xl px-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ffea79]">
                  Kết Nối &amp; Đồng Hành
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Đồng Hành Cùng Hệ Sinh Thái CapNong
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed mt-0.5 max-w-xl mx-auto">
                  Chọn vai trò của bạn để nhận thông báo mùa vụ sớm nhất hoặc đăng ký gia nhập mạng lưới phân phối nông sản xanh
                </p>
              </div>
            </div>

            {/* Top Interactive Role Switcher Tabs (Centered & Expanded) */}
            <div className="flex justify-center border-b border-white/15 pb-6">
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-1.5 bg-black/30 backdrop-blur-md rounded-2xl border border-white/15 w-full max-w-2xl shadow-inner">
                <button
                  type="button"
                  onClick={() => handleSwitchRole('customer')}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all cursor-pointer text-center ${role === 'customer'
                    ? 'bg-white text-[#1d4213] shadow-lg scale-[1.01]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <ShoppingBag size={17} className="shrink-0" />
                  <span>Khách Hàng</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSwitchRole('farmer')}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all cursor-pointer text-center ${role === 'farmer'
                    ? 'bg-[#ffea79] text-[#1d4213] shadow-lg scale-[1.01]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <Sprout size={17} className="shrink-0" />
                  <span>Nông Dân &amp; HTX</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSwitchRole('driver')}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all cursor-pointer text-center ${role === 'driver'
                    ? 'bg-[#86efac] text-[#1d4213] shadow-lg scale-[1.01]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <Truck size={17} className="shrink-0" />
                  <span>Tài Xế &amp; Shipper</span>
                </button>
              </div>
            </div>

            {/* Content & Dynamic Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Side: Headline & Value Highlights (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#ffea79] text-xs font-bold w-fit border border-white/20 shadow-sm">
                  <current.badgeIcon size={14} />
                  <span>{current.badge}</span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {current.title}
                </h4>

                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  {current.desc}
                </p>

                {/* 3 Bullet Points */}
                <ul className="flex flex-col gap-2.5 pt-2 text-xs sm:text-sm text-white/95">
                  {current.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#86efac] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Interactive Registration Card (6 Cols) */}
              <div className="lg:col-span-6 bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-white/20 shadow-xl">
                {done ? (
                  <div className="flex flex-col items-center text-center gap-3 py-6 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-[#86efac]/20 text-[#86efac] flex items-center justify-center border border-[#86efac]/40 shadow-inner">
                      <CheckCircle2 size={28} />
                    </div>
                    <h5 className="text-lg font-bold text-white">Đăng ký thành công!</h5>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-sm">
                      {current.successMsg}
                    </p>
                    <button
                      type="button"
                      onClick={() => setDone(false)}
                      className="mt-2 text-xs font-bold text-[#ffea79] hover:underline"
                    >
                      Đăng ký thông tin khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    <div className="flex items-center justify-between pb-1 border-b border-white/15">
                      <span className="text-xs font-bold text-white uppercase tracking-wide">
                        Thông tin đăng ký
                      </span>
                      <span className="text-[11px] text-[#ffea79] font-medium">
                        Bảo mật 100%
                      </span>
                    </div>

                    {/* Field 1 */}
                    <div className="flex flex-col gap-1">
                      <input
                        type={role === 'customer' ? 'text' : 'text'}
                        required
                        value={field1}
                        onChange={(e) => setField1(e.target.value)}
                        placeholder={current.placeholder1}
                        className="w-full px-4 py-3 rounded-xl bg-white text-[#1c1c17] placeholder-[#71766b] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ffea79] shadow-inner"
                      />
                    </div>

                    {/* Field 2 (For Farmer & Driver) */}
                    {current.placeholder2 && (
                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          required
                          value={field2}
                          onChange={(e) => setField2(e.target.value)}
                          placeholder={current.placeholder2}
                          className="w-full px-4 py-3 rounded-xl bg-white text-[#1c1c17] placeholder-[#71766b] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ffea79] shadow-inner"
                        />
                      </div>
                    )}

                    {/* Action CTA Button */}
                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#ffea79] hover:bg-[#ffe55b] text-[#1d4213] font-extrabold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:translate-y-[-1px] min-h-[44px]"
                    >
                      <span>{current.btnLabel}</span>
                      <ArrowRight size={16} />
                    </button>

                    <p className="text-[10px] text-center text-white/70 mt-1">
                      Bằng việc gửi thông tin, bạn đồng ý với chính sách bảo mật &amp; điều khoản hợp tác của CapNong.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
