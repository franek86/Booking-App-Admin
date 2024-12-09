import { fetchSingleCountry } from "@/services/country-api";
import { useQuery } from "@tanstack/react-query";

function useFetchSingleCountry(id: string) {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["single-country", { id }],
    queryFn: () => fetchSingleCountry(id),
  });

  return {
    isError,
    isLoading,
    data,
  };
}

export default useFetchSingleCountry;
