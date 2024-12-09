import Toast from "@/components/ui/toast";
import { ToastMessageType } from "@/lib/types";

import { createContext, useContext, useState } from "react";

type AppContextType = {
  showToast: (toastMessage: ToastMessageType) => void;
  openDialog: boolean;
  setOpenDialog: (status: boolean) => void;
  openConfirmDialog: boolean;
  setOpenConfirmDialog: (status: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<ToastMessageType | undefined>(undefined);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        openDialog,
        setOpenDialog,
        openConfirmDialog,
        setOpenConfirmDialog,
      }}
    >
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(undefined)} />}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
