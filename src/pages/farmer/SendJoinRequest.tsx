import React, { useState, type FormEvent } from 'react'
import { ChefHat, ArrowLeft } from 'lucide-react'

interface SendJoinRequestProps {
  onBack: () => void
  onInfo?: (msg: string) => void
}

export default function SendJoinRequest({ onBack, onInfo }: SendJoinRequestProps) {
  const [weight, setWeight] = useState('200')
  const [items, setItems] = useState('Bắp cải xanh 100kg, Cà rốt 100kg')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onInfo?.('Yêu cầu ghép chuyến xe lạnh đã được gửi đi thành công')
    onBack()
  }

  return (
    <div className="bg-white rounded-3xl p-8 border border-[#e8ece3] shadow-sm space-y-6 animate-fadeIn max-w-xl">
      <div className="flex items-center gap-3 pb-4 border-b border-[#f1f4ed]">
        <button
          type="button"
          onClick={onBack}
          className="p-2 rounded-xl hover:bg-[#f4f7f1] text-[#616a5b] cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h3 className="text-xl font-black text-[#1c2216]">Gửi Yêu Cầu Ghép Hàng Lên Xe Tải</h3>
          <p className="text-xs text-[#7e8779]">Chuyến Đà Lạt ➔ TP.HCM tối nay</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div>
          <label className="block font-bold text-[#353d2f] mb-1">Khối lượng hàng ghép (kg) *</label>
          <input
            type="number"
            required
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
          />
        </div>

        <div>
          <label className="block font-bold text-[#353d2f] mb-1">Danh mục nông sản cần gửi *</label>
          <textarea
            rows={3}
            required
            value={items}
            onChange={(e) => setItems(e.target.value)}
            className="w-full p-4 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-2xl bg-[#326318] hover:bg-[#254b12] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
        >
          Gửi Yêu Cầu Ghép Chuyến
        </button>
      </form>
    </div>
  )
}
