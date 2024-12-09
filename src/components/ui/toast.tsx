import { ToastMessageType } from "@/lib/types";
import { useEffect } from "react";

function Toast({ message, type, onClose }: ToastMessageType) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const toastStyle =
    type === "SUCCESS"
      ? "fixed bottom-4 right-4 p-4 rounded-md bg-green-500 text-white max-w-md z-[100]"
      : "fixed bottom-4 right-4 p-4 rounded-md bg-red-500 text-white max-w-md z-[100]";
  return (
    <div className={toastStyle}>
      <div className='flex justify-center items-center'>
        <span className='text-md font-bold'>{message}</span>
      </div>
    </div>
  );
}

export default Toast;
