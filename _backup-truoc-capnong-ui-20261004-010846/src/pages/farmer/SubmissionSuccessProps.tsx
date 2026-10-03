import React from 'react';
import { CheckCircle2, Home } from 'lucide-react';

export interface SubmissionSuccessProps {
  title?: string;
  desc?: string;
  onDone?: () => void;
}

export default function SubmissionSuccess({ title, desc, onDone }: SubmissionSuccessProps) {
  return (
    <div className="p-8 text-center space-y-4 max-w-md mx-auto">
      <div className="w-16 h-16 rounded-full bg-[#eaf5e1] text-[#326318] flex items-center justify-center mx-auto shadow-sm">
        <CheckCircle2 size={32} />
      </div>
      <h3 className="text-xl font-black text-[#1c2216]">{title || 'Thành Công!'}</h3>
      <p className="text-xs text-[#6e7768]">{desc || 'Hành động của bạn đã được ghi nhận vào hệ thống.'}</p>
      {onDone && (
        <button
          type="button"
          onClick={onDone}
          className="px-6 py-2.5 rounded-full bg-[#326318] text-white font-bold text-xs cursor-pointer shadow-sm"
        >
          Hoàn tất &amp; Trở về
        </button>
      )}
    </div>
  );
}
