import { getSailingArea } from "@/services/sailing-area";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

function useFetchSailingArea(page: number, perPage: number) {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["sailing-area", { page, perPage }],
    queryFn: () => getSailingArea(page, perPage),
    placeholderData: keepPreviousData,
  });

  return {
    isError,
    isLoading,
    data,
  };
}

export default useFetchSailingArea;
