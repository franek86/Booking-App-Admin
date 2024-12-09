import { useState } from "react";

import { PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type ModalProps = {
  children: React.ReactElement;
  title: String;
};

function Modal({ children, title }: ModalProps) {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant='green' onClick={() => setOpenDialog(true)}>
          <PlusCircle className='me-2' />
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent>
        {title && (
          <DialogHeader>
            <DialogTitle className='text-xl'>{title}</DialogTitle>
          </DialogHeader>
        )}
        <DialogDescription></DialogDescription>
        {children}
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
