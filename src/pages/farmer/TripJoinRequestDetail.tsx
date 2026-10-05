import React from 'react'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

interface TripJoinRequestDetailProps {
  onBack: () => void
}

export default function TripJoinRequestDetail({ onBack }: TripJoinRequestDetailProps) {
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
        <h3 className="text-xl font-black text-[#1c2216]">Chi Tiết Yêu Cầu Ghép Chuyến</h3>
      </div>
      <div className="p-4 rounded-2xl bg-[#fafcf9] text-xs space-y-2 border border-[#e5edd9]">
        <div>
          <strong>Hộ nông dân:</strong> Vườn Rau Hữu Cơ Xuân Thọ
        </div>
        <div>
          <strong>Khối lượng:</strong> 350 kg
        </div>
        <div>
          <strong>Nông sản:</strong> Cà chua + Xà lách
        </div>
        <div>
          <strong>Trạng thái:</strong>{' '}
          <span className="text-[#326318] font-bold">Đã tiếp nhận</span>
        </div>
      </div>
    </div>
  )
}
