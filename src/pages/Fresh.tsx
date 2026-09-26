import {
  Search,
  Leaf,
  MapPin,
  Truck,
  Sparkles,
  ArrowUpDown,
  Filter,
  Plus,
  Check,
  RotateCcw,
  ShoppingBasket,
} from 'lucide-react';
import { useState } from 'react';
import { filterProducts, money, type Product } from '../catalog';
import { ProduceImage } from '../components/ProductCard';
import freshFarmerBanner from '../assets/fresh-farmer-banner.jpg';

interface FreshProps {
  query: string;
  setQuery: (s: string) => void;
  onAdd: (s: string) => void;
  onInfo: (s: string) => void;
}

const CATEGORIES = [
  {
    id: 'Tất cả',
    label: 'Tất cả nông sản',
    bannerTitle: 'Tất cả sản phẩm',
    breadcrumb: 'Tất cả sản phẩm',
  },
  {
    id: 'Rau ăn lá',
    label: 'Rau củ hữu cơ & lá xanh',
    bannerTitle: 'Rau củ tươi sạch',
    breadcrumb: 'Rau củ',
  },
  {
    id: 'Củ quả',
    label: 'Củ quả vườn tự nhiên',
    bannerTitle: 'Củ quả vườn tự nhiên',
    breadcrumb: 'Củ quả',
  },
  {
    id: 'Trái cây',
    label: 'Hoa quả sạch Organic',
    bannerTitle: 'Hoa quả sạch Organic',
    breadcrumb: 'Hoa quả & Trái cây',
  },
  {
    id: 'Hữu cơ',
    label: 'Nông sản VietGAP',
    bannerTitle: 'Nông sản VietGAP & Hữu cơ',
    breadcrumb: 'Nông sản VietGAP',
  },
  {
    id: 'Đà Lạt',
    label: 'Đặc sản vùng Đà Lạt',
    bannerTitle: 'Nông sản Đà Lạt',
    breadcrumb: 'Đặc sản Đà Lạt',
  },
];

const SORT_OPTIONS = [
  { id: 'featured', label: 'Nổi bật' },
  { id: 'name-asc', label: 'Tên A-Z' },
  { id: 'name-desc', label: 'Tên Z-A' },
  { id: 'price-asc', label: 'Giá thấp đến cao' },
  { id: 'price-desc', label: 'Giá cao xuống thấp' },
  { id: 'best-selling', label: 'Bán chạy' },
];

export default function Fresh({ query, setQuery, onAdd, onInfo }: FreshProps) {
  const [category, setCategory] = useState('Tất cả');
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [minScore, setMinScore] = useState(0);

  // Active category data for dynamic banner title & breadcrumb
  const activeCategory = CATEGORIES.find((c) => c.id === category) || CATEGORIES[0];

  // Filter pipeline
  let items = filterProducts(query, category, sort);

  if (priceRange === 'under20') {
    items = items.filter((p) => p.price < 20000);
  } else if (priceRange === '20to30') {
    items = items.filter((p) => p.price >= 20000 && p.price <= 30000);
  } else if (priceRange === 'over30') {
    items = items.filter((p) => p.price > 30000);
  }

  if (selectedRegion !== 'all') {
    items = items.filter((p) => p.region.toLowerCase().includes(selectedRegion.toLowerCase()));
  }

  if (minScore > 0) {
    items = items.filter((p) => p.score >= minScore);
  }

  const handleResetFilters = () => {
    setCategory('Tất cả');
    setSort('featured');
    setPriceRange('all');
    setSelectedRegion('all');
    setMinScore(0);
    setQuery('');
  };

  const hasActiveFilters =
    category !== 'Tất cả' ||
    priceRange !== 'all' ||
    selectedRegion !== 'all' ||
    minScore > 0 ||
    query.trim() !== '';

  return (
    <div className="w-full bg-[#fdfcf9] min-h-screen">
      {/* 1. Top Agricultural & Farmer Banner with Dynamic Title (Enlarged & Immersive) */}
      <div className="relative w-full h-72 sm:h-84 md:h-96 lg:h-[380px] overflow-hidden flex items-center justify-center text-center shadow-lg">
        <img
          src={freshFarmerBanner}
          alt="Nông dân thu hoạch nông sản tươi xanh"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-700"
        />
        {/* Dark Vignette Gradient Overlay for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/40" />

        {/* Dynamic Title & Breadcrumb Content */}
        <div className="relative z-10 flex flex-col items-center gap-3 px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#ffea79] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Leaf size={13} />
            <span>Nông Sản Tươi Lành · Trực Tiếp Từ Vườn</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg animate-fadeIn leading-tight">
            {activeCategory.bannerTitle}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/85 font-normal max-w-xl mx-auto leading-relaxed drop-shadow">
            Nông sản thu hoạch trong ngày từ các nông hộ và hợp tác xã liên kết, giữ trọn vẹn độ tươi giòn và dinh dưỡng tự nhiên.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-white/90 font-medium mt-1 shadow-sm">
            <a href="#/" className="hover:text-[#ffea79] transition-colors">
              Trang chủ
            </a>
            <span className="text-white/40">›</span>
            <span className="text-[#ffea79] font-bold">{activeCategory.breadcrumb}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Body Container: Sidebar + Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT SIDEBAR: Categories & Filters */}
          <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-6">
            {/* Box 1: Danh Mục Sản Phẩm */}
            <div className="bg-[#f2f9ed] border border-[#d6ebd0] rounded-2xl p-5 shadow-sm">
              <h2 className="text-base sm:text-lg font-black text-[#2b5619] pb-3.5 mb-2 border-b border-[#cfe6c8] flex items-center justify-between">
                <span>Danh Mục Sản Phẩm</span>
                <Leaf size={18} className="text-[#4a7c2f]" />
              </h2>

              <ul className="flex flex-col divide-y divide-[#e3f2dc]">
                {CATEGORIES.map((c) => {
                  const isActive = category === c.id;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => setCategory(c.id)}
                        className={`w-full py-2.5 px-2 flex items-center justify-between text-left text-xs sm:text-sm font-semibold transition-all rounded-lg cursor-pointer ${
                          isActive
                            ? 'text-[#1e4412] bg-[#ddf0d4] font-bold pl-3'
                            : 'text-[#38482f] hover:text-[#1e4412] hover:bg-[#e8f5e2]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {isActive && <Check size={14} className="text-[#4a7c2f]" />}
                          <span>{c.label}</span>
                        </span>
                        <Plus
                          size={15}
                          className={`transition-transform duration-200 ${
                            isActive ? 'rotate-45 text-[#2b5619]' : 'text-gray-400'
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Box 2: Bộ Lọc Sản Phẩm (Dashed Green Border Style) */}
            <div className="bg-white border-2 border-dashed border-[#4a7c2f]/40 rounded-2xl p-5 shadow-sm flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h2 className="text-base font-black text-[#2b5619] flex items-center gap-2">
                  <Filter size={17} className="text-[#4a7c2f]" />
                  <span>Bộ Lọc Sản Phẩm</span>
                </h2>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="text-[11px] font-bold text-red-500 hover:underline flex items-center gap-1 cursor-pointer"
                    title="Xóa tất cả bộ lọc"
                  >
                    <RotateCcw size={11} />
                    <span>Xóa lọc</span>
                  </button>
                )}
              </div>

              {/* Lọc theo mức giá */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Khoảng giá (VNĐ)
                </span>
                <div className="flex flex-col gap-1.5 text-xs text-gray-700">
                  {[
                    { id: 'all', label: 'Tất cả mức giá' },
                    { id: 'under20', label: 'Dưới 20.000đ / kg' },
                    { id: '20to30', label: '20.000đ – 30.000đ' },
                    { id: 'over30', label: 'Trên 30.000đ / kg' },
                  ].map((p) => (
                    <label
                      key={p.id}
                      className="flex items-center gap-2 cursor-pointer hover:text-[#2b5619]"
                    >
                      <input
                        type="radio"
                        name="priceFilter"
                        checked={priceRange === p.id}
                        onChange={() => setPriceRange(p.id)}
                        className="accent-[#4a7c2f] cursor-pointer"
                      />
                      <span className={priceRange === p.id ? 'font-bold text-[#2b5619]' : ''}>
                        {p.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Lọc theo vùng trồng */}
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Vùng trồng nông sản
                </span>
                <div className="flex flex-col gap-1.5 text-xs text-gray-700">
                  {[
                    { id: 'all', label: 'Tất cả vùng trồng' },
                    { id: 'Đà Lạt', label: 'Đà Lạt (Lâm Đồng)' },
                    { id: 'Gia Lai', label: 'Gia Lai (Tây Nguyên)' },
                    { id: 'Bến Tre', label: 'Bến Tre (Miền Tây)' },
                    { id: 'Đắk Lắk', label: 'Đắk Lắk' },
                  ].map((r) => (
                    <label
                      key={r.id}
                      className="flex items-center gap-2 cursor-pointer hover:text-[#2b5619]"
                    >
                      <input
                        type="radio"
                        name="regionFilter"
                        checked={selectedRegion === r.id}
                        onChange={() => setSelectedRegion(r.id)}
                        className="accent-[#4a7c2f] cursor-pointer"
                      />
                      <span className={selectedRegion === r.id ? 'font-bold text-[#2b5619]' : ''}>
                        {r.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Lọc theo điểm AI */}
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Điểm chất lượng AI
                </span>
                <div className="flex flex-col gap-1.5 text-xs text-gray-700">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-[#2b5619]">
                    <input
                      type="radio"
                      name="aiFilter"
                      checked={minScore === 0}
                      onChange={() => setMinScore(0)}
                      className="accent-[#4a7c2f] cursor-pointer"
                    />
                    <span>Tất cả điểm AI</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-[#2b5619]">
                    <input
                      type="radio"
                      name="aiFilter"
                      checked={minScore === 95}
                      onChange={() => setMinScore(95)}
                      className="accent-[#4a7c2f] cursor-pointer"
                    />
                    <span className={minScore === 95 ? 'font-bold text-[#2b5619]' : ''}>
                      AI &gt; 95% (Siêu tươi chuẩn ngon)
                    </span>
                  </label>
                </div>
              </div>

              {/* Reset button */}
              <button
                type="button"
                onClick={handleResetFilters}
                className="w-full mt-2 py-2.5 px-3 text-xs font-bold text-[#2b5619] bg-[#f0f8ec] hover:bg-[#4a7c2f] hover:text-white rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#cbe5c4]"
              >
                <RotateCcw size={13} />
                <span>Đặt lại tất cả bộ lọc</span>
              </button>
            </div>
          </aside>

          {/* RIGHT MAIN AREA: Sort Bar, Search, Product Grid */}
          <main className="flex-1 min-w-0 w-full flex flex-col gap-6">
            {/* Top Toolbar: Strictly 1-Row Horizontal Sort Bar + Integrated Search */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-3 sm:p-3.5 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
              {/* Sort pills row - strictly 1 row with smooth scroll on small screens */}
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
                <div className="text-xs font-bold text-gray-700 flex items-center gap-1 shrink-0 pr-1">
                  <ArrowUpDown size={14} className="text-[#4a7c2f]" />
                  <span>Xếp theo:</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 flex-nowrap">
                  {SORT_OPTIONS.map((s) => {
                    const isSelected = sort === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSort(s.id)}
                        className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all border whitespace-nowrap cursor-pointer ${
                          isSelected
                            ? 'bg-[#4a7c2f] text-white border-[#4a7c2f] shadow-sm'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-[#4a7c2f] hover:text-[#4a7c2f]'
                        }`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Search box */}
              <div className="relative shrink-0 w-full lg:w-60">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Tìm theo tên nông sản..."
                  className="w-full pl-9 pr-7 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#4a7c2f] focus:outline-none transition-all placeholder:text-gray-400"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Active summary */}
            <div className="flex items-center justify-between text-xs text-gray-500 px-1">
              <span>
                Hiển thị <strong className="text-gray-900">{items.length}</strong> nông sản tươi
                chất lượng
              </span>
              {category !== 'Tất cả' && (
                <span className="bg-[#eef8ea] text-[#2b5619] font-bold px-2.5 py-0.5 rounded-full border border-[#d2ecc9]">
                  {activeCategory.label}
                </span>
              )}
            </div>

            {/* Product Grid (4 columns on lg, 3 on md, 2 on sm) */}
            {items.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {items.map((p: Product) => {
                  const discountPercent = Math.round((1 - p.price / p.original) * 100);
                  return (
                    <article
                      key={p.id}
                      className="group bg-white rounded-2xl border border-gray-200/80 hover:border-[#4a7c2f]/60 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative"
                    >
                      {/* Product Image Area */}
                      <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <ProduceImage
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Red Discount Badge */}
                        {discountPercent > 0 && (
                          <div className="absolute top-2.5 left-2.5 bg-[#d92228] text-white text-[11px] font-black px-2 py-0.5 rounded-md shadow-md tracking-tight">
                            - {discountPercent}%
                          </div>
                        )}

                        {/* AI Score Badge */}
                        <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-sm text-[#ffea79] text-[10px] font-bold px-2 py-0.5 rounded-md shadow">
                          AI {p.score}%
                        </div>

                        {/* Flaw Reason Badge at bottom of image */}
                        <div className="absolute bottom-2 left-2 right-2">
                          <span className="inline-block bg-white/90 backdrop-blur-sm text-[#2b5619] text-[10px] font-bold px-2 py-0.5 rounded shadow-sm truncate max-w-full">
                            {p.flaw}
                          </span>
                        </div>
                      </div>

                      {/* Product Content */}
                      <div className="p-3.5 sm:p-4 flex flex-col flex-1 gap-2.5">
                        {/* Farm Origin */}
                        <div className="flex items-center justify-between text-[11px] text-gray-500">
                          <span className="flex items-center gap-1 truncate">
                            <MapPin size={12} className="text-[#4a7c2f] shrink-0" />
                            <span className="truncate">{p.farm}</span>
                          </span>
                          <span className="shrink-0 font-medium text-gray-600">{p.region}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#2b5619] transition-colors">
                          {p.name}
                        </h3>

                        {/* Price Row */}
                        <div className="flex items-baseline gap-2 mt-auto pt-1">
                          <strong className="text-sm sm:text-base font-extrabold text-[#2b5619]">
                            {money(p.price)}
                          </strong>
                          <del className="text-[11px] text-gray-400 font-normal">
                            {money(p.original)}/{p.unit}
                          </del>
                        </div>

                        {/* Progress Bar & Sold count */}
                        <div className="flex flex-col gap-1 pt-1">
                          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-[#4a7c2f] h-full rounded-full transition-all duration-500"
                              style={{ width: `${Math.min(100, p.rescued)}%` }}
                            />
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-gray-500 font-semibold">
                            <span>Đã bán {p.rescued * 4 + 25}</span>
                            <span className="text-[#4a7c2f]">Còn {p.stock} {p.unit}</span>
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                          type="button"
                          onClick={() => onAdd(p.id)}
                          className="w-full mt-1.5 py-2 px-3 bg-[#4a7c2f] hover:bg-[#3b6624] text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                        >
                          <ShoppingBasket size={14} />
                          <span>Thêm vào giỏ</span>
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center flex flex-col items-center gap-3 my-4">
                <div className="w-16 h-16 rounded-full bg-[#f2f9ed] text-[#4a7c2f] flex items-center justify-center mb-1">
                  <Leaf size={32} />
                </div>
                <h2 className="text-lg font-bold text-gray-800">Không tìm thấy nông sản phù hợp</h2>
                <p className="text-xs sm:text-sm text-gray-500 max-w-sm">
                  Hãy thử thay đổi từ khóa tìm kiếm hoặc điều chỉnh khoảng giá trong bộ lọc bên trái.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-2 py-2 px-5 bg-[#4a7c2f] text-white text-xs font-bold rounded-xl hover:bg-[#3b6624] transition-all cursor-pointer"
                >
                  Xóa tất cả bộ lọc
                </button>
              </div>
            )}

            {/* AI Menu Helper Callout */}
            <div className="mt-8 bg-gradient-to-r from-[#244e18] via-[#1d4213] to-[#14330d] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#ffea79] text-xs font-bold w-fit mx-auto sm:mx-0">
                  <Sparkles size={13} />
                  <span>Trợ Lý Thực Đơn AI</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Chưa biết nấu món gì hôm nay?
                </h2>
                <p className="text-xs sm:text-sm text-white/80 max-w-md">
                  CapNongAI tự động gợi ý công thức món ngon chuẩn vị dựa trên các loại rau củ đang có trong giỏ hàng.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onInfo('AI gợi ý thực đơn')}
                className="relative z-10 shrink-0 bg-[#ffea79] hover:bg-[#ffd84d] text-[#1d4213] px-6 py-3 rounded-2xl font-black text-xs sm:text-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles size={16} />
                <span>AI gợi ý thực đơn</span>
              </button>
            </div>

            {/* 3 Quality Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-white border border-gray-200/80 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#eef8ea] text-[#4a7c2f] flex items-center justify-center shrink-0">
                  <Leaf size={20} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">AI Thẩm Định Độ Tươi</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                    Minh bạch điểm độ tươi và hàm lượng dưỡng chất trên từng lô hàng.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200/80 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#fef7e0] text-[#ca8a04] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">Trực Tiếp Từ Nhà Vườn</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                    Biết rõ danh tính người trồng, tọa độ nông trại và nhật ký canh tác.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200/80 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0">
                  <Truck size={20} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">Giao Nhanh 2 - 4 Giờ</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                    Đóng thùng tái chế thân thiện môi trường, giữ trọn độ giòn ngọt.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
