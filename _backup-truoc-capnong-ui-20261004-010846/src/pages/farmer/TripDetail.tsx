import React from 'react';
import { ArrowLeft, Truck, MapPin, CheckCircle2 } from 'lucide-react';
import type { FarmerTrip } from './types';

interface TripDetailProps {
  trip?: FarmerTrip | null;
  onBack: () => void;
}

export default function TripDetail({ trip, onBack }: TripDetailProps) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-[#e8ece3] shadow-sm space-y-6 animate-fadeIn max-w-3xl">
      <div className="flex items-center gap-3 pb-4 border-b border-[#f1f4ed]">
        <button
          type="button"
          onClick={onBack}
          className="p-2 rounded-xl hover:bg-[#f4f7f1] text-[#616a5b] cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h3 className="text-xl font-black text-[#1c2216]">Chi Tiết Chuyến Xe Vận Chuyển</h3>
          <span className="text-xs text-[#326318] font-bold">Mã chuyến: {trip?.id || 'TRIP-0104'}</span>
        </div>
      </div>

      <div className="space-y-4 text-xs">
        <div className="p-4 rounded-2xl bg-[#fafcf9] border border-[#e5edd9] space-y-2">
          <div className="font-extrabold text-[#326318] uppercase text-[10px]">
            Lộ Trình &amp; Thời Gian:
          </div>
          <div className="space-y-1 text-[#384131]">
            <div><strong>Điểm đi:</strong> {trip?.origin || 'Vườn Cầu Đất, TP. Đà Lạt'}</div>
            <div><strong>Điểm đến:</strong> {trip?.destination || 'Kho Tổng CapNong TP.HCM'}</div>
            <div><strong>Khởi hành:</strong> {trip?.departureTime || '18:00 Hôm nay'}</div>
            <div><strong>Phương tiện:</strong> {trip?.vehicle || 'Xe tải lạnh 49A-342.18'}</div>
            <div><strong>Trọng lượng:</strong> {trip?.weight || '850 kg'}</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#fdfaf3] border border-[#f3e4cf]">
          <div className="font-bold text-[#8a4e1d] mb-1">Trạng thái chuyến:</div>
          <span className="px-3 py-1 rounded-full bg-[#fdf5eb] text-[#8a4e1d] font-bold">
            {trip?.status || 'Đang chuẩn bị'}
          </span>
        </div>
      </div>
    </div>
  );
}
