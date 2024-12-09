import { createPortal } from "react-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { useAppContext } from "@/contexts/AppContext";

type ConfirmDialog = {
  message?: string;
  onConfirm: () => void;
};

function ConfirmDialog({ message, onConfirm }: ConfirmDialog) {
  const { openConfirmDialog, setOpenConfirmDialog } = useAppContext();
  const handleCancel = () => {
    setOpenConfirmDialog(false);
  };

  return createPortal(
    <AlertDialog open={openConfirmDialog} onOpenChange={setOpenConfirmDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{message}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription></AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction className='bg-red-500' onClick={onConfirm}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>,
    document.body
  );
}

export default ConfirmDialog;
