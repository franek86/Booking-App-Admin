import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

/*
 * Custom hook for handling pagination with Tanstack query
 * @params fetchApi - The function for fatching data
 * @params limit - For limit items per page
 * returns object - paginations and data
 */

type PaginationType = {
  page: number;
  perPage: number;
};

function usePagination(fetchApi: (params: PaginationType) => Promise<any>, limit: number) {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(limit);
  const { data, isLoading, isError, isPlaceholderData } = useQuery({
    queryKey: ["paginationData"],
    queryFn: () => fetchApi({ page, perPage }),
    placeholderData: keepPreviousData,
  });

  const nextPage = () => setPage((prev: number) => prev + 1);
  const prevPage = () => setPage((prev: number) => Math.max(prev - 1, 1));
  const pageSize = (newLimit: number) => {
    setPerPage(newLimit);
    setPage(1);
  };
  return {
    data,
    isLoading,
    isError,
    isPlaceholderData,
    nextPage,
    prevPage,
    pageSize,
  };
}

export default usePagination;
