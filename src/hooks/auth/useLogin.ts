import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { LoginUserType, userState } from "@/lib/types";
import { useAppContext } from "@/contexts/AppContext";
import { userLoginApi } from "@/services/user-api";

function useLogin() {
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const mutation = useMutation<userState | null, Error, LoginUserType>({
    mutationFn: ({ email, password }: LoginUserType) => userLoginApi({ email, password }),
    onSuccess: async () => {
      showToast({ type: "SUCCESS", message: "Successfully login" });
      navigate("/dashboard");
    },
    onError: () => {
      showToast({ type: "ERROR", message: "Invalid credentials" });
    },
  });
  return {
    mutation,
  };
}

export default useLogin;
