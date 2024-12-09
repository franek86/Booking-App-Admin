import { useAppContext } from "@/contexts/AppContext";
import { CountiresType } from "@/lib/types";
import { editCountry } from "@/services/country-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useEditCountry(countryId: string = "") {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CountiresType) => editCountry(countryId, data),
    onSuccess: () => {
      showToast({ message: "Country updated successfully.", type: "SUCCESS" });
      queryClient.invalidateQueries({ queryKey: ["countries"] });
      queryClient.invalidateQueries({ queryKey: ["single-country", countryId] });
      navigate("/countries");
    },
    onError: (error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  return {
    mutation,
  };
}

export default useEditCountry;
