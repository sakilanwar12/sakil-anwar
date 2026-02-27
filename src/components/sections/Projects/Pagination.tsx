"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="glass flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-[#8888aa] transition-all hover:border-[rgba(0,212,255,0.2)] hover:text-[#00d4ff] disabled:opacity-30"
      >
        <ChevronLeft className="size-4" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-sm font-medium transition-all ${
            page === currentPage
              ? "bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] text-white shadow-[0_0_15px_rgba(0,212,255,0.2)]"
              : "glass text-[#8888aa] hover:border-[rgba(0,212,255,0.2)] hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="glass flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-[#8888aa] transition-all hover:border-[rgba(0,212,255,0.2)] hover:text-[#00d4ff] disabled:opacity-30"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}

export default Pagination;
