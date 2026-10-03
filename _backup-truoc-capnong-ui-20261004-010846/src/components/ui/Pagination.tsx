import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

interface PaginationProps {
  pageInfo?: PageInfo | null;
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  pageInfo,
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  const current = pageInfo ? pageInfo.page : currentPage ?? 0;
  const total = pageInfo ? pageInfo.totalPages : totalPages ?? 1;

  if (total <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (total <= maxVisible) {
      for (let i = 0; i < total; i++) pages.push(i);
    } else {
      pages.push(0);
      let start = Math.max(1, current - 1);
      let end = Math.min(total - 2, current + 1);

      if (current <= 2) {
        start = 1;
        end = 3;
      } else if (current >= total - 3) {
        start = total - 4;
        end = total - 2;
      }

      if (start > 1) pages.push('...');
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < total - 2) pages.push('...');
      pages.push(total - 1);
    }

    return pages;
  };

  return (
    <div className={`flex items-center justify-between gap-4 py-3 px-2 ${className}`}>
      {pageInfo && (
        <div className="text-xs text-gray-500 font-medium">
          Hiển thị trang <span className="font-bold text-gray-800">{current + 1}</span> /{' '}
          <span className="font-bold text-gray-800">{total}</span> ({pageInfo.totalElements} mục)
        </div>
      )}

      <div className="flex items-center gap-1.5 ml-auto">
        <button
          onClick={() => onPageChange(0)}
          disabled={current === 0}
          className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Trang đầu"
        >
          <ChevronsLeft size={16} />
        </button>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 0}
          className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Trang trước"
        >
          <ChevronLeft size={16} />
        </button>

        {getPageNumbers().map((p, idx) =>
          typeof p === 'number' ? (
            <button
              key={idx}
              onClick={() => onPageChange(p)}
              className={`min-w-[32px] h-8 px-2 rounded-lg text-xs font-bold transition-colors ${
                current === p
                  ? 'bg-[#326318] text-white shadow-xs'
                  : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {p + 1}
            </button>
          ) : (
            <span key={idx} className="px-1 text-gray-400 text-xs">
              {p}
            </span>
          )
        )}

        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current >= total - 1}
          className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Trang kế"
        >
          <ChevronRight size={16} />
        </button>
        <button
          onClick={() => onPageChange(total - 1)}
          disabled={current >= total - 1}
          className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Trang cuối"
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
