import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCountry } from "@/services/country-api";
import { useAppContext } from "@/contexts/AppContext";

function useDeleteCountry() {
  const queryClient = useQueryClient();
  const { showToast, setOpenConfirmDialog } = useAppContext();

  const deleteCountryMutation = useMutation({
    mutationFn: (id: string) => deleteCountry(id),
    onSuccess: () => {
      setOpenConfirmDialog(false);
      queryClient.invalidateQueries({ queryKey: ["countries"] });
      showToast({ message: "Country successfully deleted", type: "SUCCESS" });
    },
    onError: (error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  return {
    deleteCountryMutation,
  };
}

export default useDeleteCountry;
