import { getSession } from "@/services/user-api";
import { useQuery } from "@tanstack/react-query";

function useGetSession() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getSession(),
  });
  return {
    isLoading,
    user,
  };
}

export default useGetSession;
