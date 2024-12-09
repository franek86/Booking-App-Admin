import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAppContext } from "@/contexts/AppContext";
import { userLogoutApi } from "@/services/user-api";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: userLogoutApi,
    onSuccess: async () => {
      queryClient.removeQueries();
      showToast({ message: "User logout", type: "SUCCESS" });
      navigate("/signin", { replace: true });
    },
    onError: (error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  return {
    mutation,
  };
}

export default useLogout;
