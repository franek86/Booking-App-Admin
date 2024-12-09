import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCountires } from "@/services/country-api";

function useFetchCountries(page: number, perPage: number) {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["countries", { page, perPage }],
    queryFn: () => getCountires(page, perPage),
    placeholderData: keepPreviousData,
  });

  return {
    isError,
    isLoading,
    data,
  };
}

export default useFetchCountries;
