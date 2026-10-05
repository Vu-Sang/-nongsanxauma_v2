import React, { useState } from 'react'
import { Gift, X } from 'lucide-react'
import type { FarmerProduct } from './types'

interface MysteryBoxEditorProps {
  box?: FarmerProduct | null
  onSave: (updated: FarmerProduct) => void
  onClose: () => void
}

export default function MysteryBoxEditor({ box, onSave, onClose }: MysteryBoxEditorProps) {
  const [name, setName] = useState(box?.name || '')
  const [price, setPrice] = useState(box?.price?.toString() || '79000')

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

        <h3 className="text-xl font-black text-[#1c2216] mb-4">Chỉnh Sửa Túi Mù Blind Box</h3>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-[#353d2f] mb-1">Tên túi mù</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#353d2f] mb-1">Giá bán (đ)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              if (box) {
                onSave({ ...box, name, price: Number(price) || box.price })
              }
              onClose()
            }}
            className="w-full py-3.5 rounded-2xl bg-[#8a4e1d] hover:bg-[#6c3911] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md mt-4 cursor-pointer"
          >
            Lưu Túi Mù
          </button>
        </div>
      </div>
    </div>
  )
}
