import React, { useState, type FormEvent } from 'react';
import { Plus, Truck, X, MapPin } from 'lucide-react';
import type { FarmerTrip } from './types';

interface CreateTripProps {
  onAddTrip: (trip: FarmerTrip) => void;
  onClose: () => void;
  onInfo?: (msg: string) => void;
}

export default function CreateTrip({ onAddTrip, onClose, onInfo }: CreateTripProps) {
  const [vehicle, setVehicle] = useState('Xe tải lạnh 49A-342.18');
  const [origin, setOrigin] = useState('Vườn Cầu Đất, TP. Đà Lạt');
  const [destination, setDestination] = useState('Kho Trung Chuyển Tổng CapNong TP.HCM');
  const [time, setTime] = useState('20:00 Hôm nay');
  const [weight, setWeight] = useState('800 kg');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTrip: FarmerTrip = {
      id: `TRIP-${Math.floor(1000 + Math.random() * 9000)}`,
      origin,
      destination,
      departureTime: time,
      vehicle,
      weight,
      status: 'Đang chuẩn bị',
    };
    onAddTrip(newTrip);
    onClose();
    onInfo?.(`Đã tạo chuyến xe ${newTrip.id} thành công`);
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

        <h3 className="text-xl font-black text-[#1c2216] mb-1">Lên Lịch Chuyến Xe Tới Kho</h3>
        <p className="text-xs text-[#727b6c] mb-4">Vận chuyển nông sản từ vườn về kho tổng kiểm định</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-[#353d2f] mb-1">Phương tiện</label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
            >
              <option value="Xe tải lạnh 49A-342.18">Xe tải lạnh 49A-342.18 (1.5 tấn)</option>
              <option value="Xe máy thùng bảo ôn 49B1-889.21">Xe máy thùng bảo ôn 49B1-889.21 (150 kg)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#353d2f] mb-1">Điểm xuất phát (Vườn / Kho)</label>
            <input
              type="text"
              required
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#353d2f] mb-1">Thời gian khởi hành</label>
            <input
              type="text"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#353d2f] mb-1">Tải trọng dự kiến (kg)</label>
            <input
              type="text"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f7f1] text-xs text-[#1e2319] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-[#326318] hover:bg-[#254b12] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md mt-4 cursor-pointer"
          >
            Tạo Chuyến Xe
          </button>
        </form>
      </div>
    </div>
  );
}
