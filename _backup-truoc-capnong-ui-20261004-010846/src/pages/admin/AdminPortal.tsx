import { useState } from 'react';
import {
  LayoutDashboard,
  BarChart3,
  ShieldCheck,
  PackageCheck,
  Store,
  Truck,
  Banknote,
  Wallet,
  Gavel,
  UserX,
  Newspaper,
  Bell,
  MessageSquare,
  ChevronRight,
  LogOut,
  Shield,
  ShoppingBag,
  ExternalLink,
} from 'lucide-react';
import type { AuthUser } from '../AuthPage';

// Admin Subpages
import AdminDashboard from './Dashboard';
import UserReport from './UserReport';
import KYCApproval from './KYCApproval';
import ProductApproval from './ProductApproval';
import ShopMonitoring from './ShopMonitoring';
import ShipperManagement from './ShipperManagement';
import CodSettlement from './CodSettlement';
import AdminWallet from './AdminWallet';
import Disputes from './Disputes';
import BadBuyers from './BadBuyers';
import NewsManagement from './NewsManagement';
import NotificationManagement from './NotificationManagement';
import AdminMessages from './Messages';

interface AdminPortalProps {
  user?: AuthUser | null;
  onLogout?: () => void;
  onNavigateStore?: () => void;
  onInfo?: (msg: string) => void;
}

export default function AdminPortal({
  user,
  onLogout,
  onNavigateStore,
}: AdminPortalProps) {
  const [currentTab, setCurrentTab] = useState<string>('overview');

  const menuSections = [
    {
      title: 'TỔNG QUAN & BÁO CÁO',
      items: [
        { id: 'overview', name: 'Bảng tổng quan', icon: LayoutDashboard },
        { id: 'user-report', name: 'Báo cáo người dùng', icon: BarChart3 },
      ],
    },
    {
      title: 'KIỂM DUYỆT & PHÊ DUYỆT',
      items: [
        { id: 'kyc', name: 'Duyệt hồ sơ KYC', icon: ShieldCheck, badge: 'Mới' },
        { id: 'products', name: 'Duyệt nông sản', icon: PackageCheck },
        { id: 'disputes', name: 'Xử lý khiếu nại & Hoàn tiền', icon: Gavel },
      ],
    },
    {
      title: 'QUẢN LÝ THÀNH VIÊN',
      items: [
        { id: 'shops', name: 'Giám sát Shop', icon: Store },
        { id: 'shippers', name: 'Quản lý Shipper', icon: Truck },
        { id: 'bad-buyers', name: 'Cảnh báo người mua', icon: UserX },
      ],
    },
    {
      title: 'TÀI CHÍNH & ĐỐI SOÁT',
      items: [
        { id: 'cod', name: 'Đối soát COD Shipper', icon: Banknote },
        { id: 'wallet', name: 'Ví sàn & Rút tiền', icon: Wallet },
      ],
    },
    {
      title: 'TRUYỀN THÔNG & CSKH',
      items: [
        { id: 'news', name: 'Quản lý tin tức', icon: Newspaper },
        { id: 'notifications', name: 'Gửi thông báo', icon: Bell },
        { id: 'messages', name: 'Tin nhắn hỗ trợ', icon: MessageSquare },
      ],
    },
  ];

  const renderContent = () => {
    switch (currentTab) {
      case 'overview':
        return <AdminDashboard />;
      case 'user-report':
        return <UserReport />;
      case 'kyc':
        return <KYCApproval />;
      case 'products':
        return <ProductApproval />;
      case 'disputes':
        return <Disputes />;
      case 'shops':
        return <ShopMonitoring />;
      case 'shippers':
        return <ShipperManagement />;
      case 'bad-buyers':
        return <BadBuyers />;
      case 'cod':
        return <CodSettlement />;
      case 'wallet':
        return <AdminWallet />;
      case 'news':
        return <NewsManagement />;
      case 'notifications':
        return <NotificationManagement />;
      case 'messages':
        return <AdminMessages />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#f8faf6] text-[#1c2216] overflow-hidden font-sans">
      {/* ========================================================================= */}
      {/* 1. LEFT SIDEBAR                                                           */}
      {/* ========================================================================= */}
      <aside className="w-72 bg-white border-r border-[#e8ece3] flex flex-col h-full shadow-sm z-30 shrink-0">
        {/* Brand Header */}
        <div className="p-6 pb-4 border-b border-[#f1f4ed]">
          <div
            onClick={() => setCurrentTab('overview')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1e3a10] to-[#326318] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Shield size={22} className="fill-white/20" />
            </div>
            <div>
              <h1 className="text-base font-black leading-none text-[#1c2216] tracking-tight uppercase">
                CapNong
              </h1>
              <p className="text-[#326318] text-[10px] font-extrabold mt-1 tracking-widest uppercase">
                TRUNG TÂM QUẢN TRỊ
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6 custom-scrollbar">
          {menuSections.map((section) => (
            <div key={section.title} className="space-y-1">
              <p className="px-4 text-[10px] font-black text-gray-400 tracking-wider uppercase">
                {section.title}
              </p>
              <div className="space-y-1 mt-2">
                {section.items.map((item) => {
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`admin-nav-${item.id}`}
                      onClick={() => setCurrentTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200 cursor-pointer text-left ${
                        isActive
                          ? 'bg-[#326318] text-white font-extrabold shadow-sm'
                          : 'text-[#616a5b] hover:bg-[#f2f6ee] hover:text-[#1c2216]'
                      }`}
                    >
                      <item.icon
                        size={18}
                        className={`shrink-0 ${isActive ? 'text-white' : 'text-[#879181]'}`}
                      />
                      <span className="text-xs font-extrabold flex-1 truncate">{item.name}</span>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      {isActive && <ChevronRight size={14} className="text-white/80" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* User Footer Profile */}
        <div className="p-4 border-t border-[#f1f4ed] bg-[#fdfcf9]">
          <div className="p-2.5 rounded-2xl border border-[#e5eadd] bg-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5 overflow-hidden flex-1 py-0.5">
              <div className="w-8 h-8 rounded-full bg-[#1e3a10] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                AD
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-black text-gray-900 truncate">
                  {user?.name || 'Admin CapNong'}
                </p>
                <span className="inline-block text-[9px] font-extrabold text-[#326318] bg-emerald-50 px-1.5 py-0.5 rounded-md">
                  QUẢN TRỊ VIÊN
                </span>
              </div>
            </div>

            {onLogout && (
              <button
                onClick={onLogout}
                title="Đăng xuất"
                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
              >
                <LogOut size={16} />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT AREA                                                      */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Control Bar */}
        <header className="h-16 bg-white border-b border-[#e8ece3] px-8 flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Hệ thống
            </span>
            <span className="text-gray-300">/</span>
            <span className="text-sm font-black text-gray-900">
              {menuSections.flatMap((s) => s.items).find((i) => i.id === currentTab)?.name || 'Quản trị'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                location.hash = '/shop';
              }}
              className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-[#326318] rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Store size={15} /> Kênh Người Bán
            </button>
            <button
              onClick={() => {
                if (onNavigateStore) onNavigateStore();
                else location.hash = '/';
              }}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag size={15} /> Xem Cửa Hàng
              <ExternalLink size={13} className="opacity-60" />
            </button>
          </div>
        </header>

        {/* Dynamic Subpage Content */}
        <main className="flex-1 overflow-y-auto bg-[#f8faf6] custom-scrollbar">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
