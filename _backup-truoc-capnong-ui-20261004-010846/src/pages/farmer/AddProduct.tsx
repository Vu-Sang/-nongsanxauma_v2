import React, { useState, type FormEvent } from 'react';
import { Plus, Upload, X, ShieldCheck } from 'lucide-react';
import type { FarmerProduct } from './types';

interface AddProductProps {
  onAddProduct: (prod: FarmerProduct) => void;
  onClose: () => void;
  onInfo?: (msg: string) => void;
}

export default function AddProduct({ onAddProduct, onClose, onInfo }: AddProductProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [unit, setUnit] = useState('kg');
  const [region, setRegion] = useState('Đà Lạt & Lâm Đồng');
  const [farmingType, setFarmingType] = useState('Hữu cơ Organic');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !price) return;

    const newProd: FarmerProduct = {
      id: Date.now().toString(),
      name: name.trim(),
      category: 'Nông sản',
      price: Number(price),
      originalPrice: Number(price),
      discount: null,
      status: 'Đang bán',
      stock: Number(stock) || 50,
      unit,
      region,
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&q=80',
    };

    onAddProduct(newProd);
    onClose();
    onInfo?.(`Đã đăng bán thành công: ${newProd.name}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-[32px] max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#e2dcce] relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-black text-[#1c2216] mb-1">Đăng Bán Nông Sản Mới</h3>
        <p className="text-xs text-[#757f70] mb-4">Điền thông tin nông sản thu hoạch để niêm yết lên sàn CapNong</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-[#353d2f] mb-1">Tên nông sản *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="VD: Cà rốt 2 nhánh Đà Lạt"
              className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] border border-transparent focus:border-[#326318] focus:bg-white text-xs text-[#1e2319] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-[#353d2f] mb-1">Giá bán (đ/kg) *</label>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="18000"
                className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] border border-transparent focus:border-[#326318] focus:bg-white text-xs text-[#1e2319] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#353d2f] mb-1">Số lượng tồn kho (kg) *</label>
              <input
                type="number"
                required
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="100"
                className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] border border-transparent focus:border-[#326318] focus:bg-white text-xs text-[#1e2319] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-[#353d2f] mb-1">Vùng xuất xứ</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-3 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
              >
                <option value="Đà Lạt & Lâm Đồng">Đà Lạt &amp; Lâm Đồng</option>
                <option value="Miền Tây Nam Bộ">Miền Tây Nam Bộ</option>
                <option value="Tây Nguyên">Tây Nguyên</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#353d2f] mb-1">Phương thức canh tác</label>
              <select
                value={farmingType}
                onChange={(e) => setFarmingType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
              >
                <option value="Hữu cơ Organic">Hữu cơ Organic</option>
                <option value="VietGAP">Chuẩn VietGAP</option>
                <option value="Vườn tự nhiên">Vườn tự nhiên</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-[#326318] hover:bg-[#254b12] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md mt-4 cursor-pointer"
          >
            Xác Nhận Đăng Bán
          </button>
        </form>
      </div>
    </div>
  );
}
