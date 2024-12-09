import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { RegisterUserType } from "@/lib/types";
import { userRegisterApi } from "@/services/user-api";

import { useAppContext } from "@/contexts/AppContext";

function useRegister() {
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const mutation = useMutation<void, Error, RegisterUserType>({
    mutationFn: ({ ...credetials }: RegisterUserType) => userRegisterApi({ ...credetials }),
    onSuccess: () => {
      showToast({ message: "Register Success", type: "SUCCESS" });
      navigate("/signin");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  return {
    mutation,
  };
}

export default useRegister;
