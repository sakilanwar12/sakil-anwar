import { useState, useMemo, useCallback } from "react";

interface UsePaginationProps<T> {
  data: T[];
  itemsPerPage: number;
  onPageChange?: (page: number) => void;
}

interface UsePaginationReturn<T> {
  currentPage: number;
  totalPages: number;
  paginatedData: T[];
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  startIndex: number;
  endIndex: number;
  totalItems: number;
}

function usePagination<T>({
  data,
  itemsPerPage,
  onPageChange,
}: UsePaginationProps<T>): UsePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const totalItems = data.length;

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const canGoNext = currentPage < totalPages;
  const canGoPrevious = currentPage > 1;

  const goToPage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        onPageChange?.(page);
      }
    },
    [totalPages, onPageChange],
  );

  const goToNextPage = useCallback(() => {
    if (canGoNext) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      onPageChange?.(nextPage);
    }
  }, [currentPage, canGoNext, onPageChange]);

  const goToPreviousPage = useCallback(() => {
    if (canGoPrevious) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      onPageChange?.(prevPage);
    }
  }, [currentPage, canGoPrevious, onPageChange]);

  // Reset to page 1 when data changes
  useMemo(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [data.length, currentPage, totalPages]);

  return {
    currentPage,
    totalPages,
    paginatedData,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    canGoNext,
    canGoPrevious,
    startIndex,
    endIndex,
    totalItems,
  };
}

export default usePagination;
