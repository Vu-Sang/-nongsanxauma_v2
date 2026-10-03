import React, { useState, type FormEvent } from 'react';
import { Edit3, X } from 'lucide-react';
import type { FarmerProduct } from './types';

interface EditProductProps {
  product?: FarmerProduct | null;
  onSave: (updated: FarmerProduct) => void;
  onClose: () => void;
  onInfo?: (msg: string) => void;
}

export default function EditProduct({ product, onSave, onClose, onInfo }: EditProductProps) {
  const [name, setName] = useState(product?.name || '');
  const [price, setPrice] = useState(product?.price?.toString() || '');
  const [stock, setStock] = useState(product?.stock?.toString() || '');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!product) return;
    const updated: FarmerProduct = {
      ...product,
      name,
      price: Number(price) || product.price,
      stock: Number(stock) || product.stock,
    };
    onSave(updated);
    onClose();
    onInfo?.(`Đã cập nhật sản phẩm: ${updated.name}`);
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

        <h3 className="text-xl font-black text-[#1c2216] mb-4">Chỉnh Sửa Nông Sản</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-[#353d2f] mb-1">Tên nông sản *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-[#353d2f] mb-1">Giá bán (đ)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#353d2f] mb-1">Tồn kho</label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-[#326318] hover:bg-[#254b12] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md mt-4 cursor-pointer"
          >
            Lưu Thay Đổi
          </button>
        </form>
      </div>
    </div>
  );
}
