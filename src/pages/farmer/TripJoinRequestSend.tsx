import React from 'react'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

interface TripJoinRequestSendProps {
  onBack: () => void
}

export default function TripJoinRequestSend({ onBack }: TripJoinRequestSendProps) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-[#e8ece3] shadow-sm space-y-4 animate-fadeIn max-w-xl">
      <div className="flex items-center gap-3 pb-4 border-b border-[#f1f4ed]">
        <button
          type="button"
          onClick={onBack}
          className="p-2 rounded-xl hover:bg-[#f4f7f1] text-[#616a5b] cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>
        <h3 className="text-xl font-black text-[#1c2216]">Gửi Nông Sản Ghép Chuyến</h3>
      </div>
      <p className="text-xs text-[#626c5e]">
        Chọn danh mục nông sản đã thu hoạch cần ghép xe tải lạnh đi kho tổng.
      </p>
    </div>
  )
}
