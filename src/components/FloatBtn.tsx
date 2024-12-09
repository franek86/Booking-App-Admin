import { createContext, useContext, useState } from "react";
import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";
import { createPortal } from "react-dom";
type Position = { x: number; y: number };

type FloatBtnProps = {
  children: React.ReactNode;
  open: string;
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};

const FloatBtnContext = createContext<FloatBtnProps | undefined>(undefined);

function FloatBtn({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState("");
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  return <FloatBtnContext.Provider value={{ children, open, position, setPosition }}>{children}</FloatBtnContext.Provider>;
}

function Toggle({ current }: { current: string }) {
  const context = useContext(FloatBtnContext);

  if (!context) {
    throw new Error("Toggle must be used within a FloatBtnProvider");
  }

  const { setPosition, position } = context;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    const rect = target.closest("div")?.getBoundingClientRect();
    setPosition({
      x: window.innerWidth - (rect?.width ?? 0) - (rect?.x ?? 0),
      y: (rect?.y ?? 0) + (rect?.height ?? 0) + 0,
    });
    console.log(rect);
    console.log(window.innerWidth - (rect?.width ?? 0) - (rect?.x ?? 0));
  };
  return (
    <div className='cursor-pointer' onClick={handleClick}>
      <Ellipsis />
    </div>
  );
}

function Box({ current }: { current: string }) {
  const context = useContext(FloatBtnContext);
  if (!context) {
    throw new Error("Toggle must be used within a FloatBtnProvider");
  }

  const { position } = context;

  /*   const stylePositionTop = position?.x ? `top-[${position?.x}]px` : "";
  const stylePositionRight = position?.y ? `right-[${position?.y}]px` : ""; */

  return createPortal(
    <div className={`fixed bg-white shadow-md rounded-md top-[${position?.y}px] right-[${position?.x}px]`}>
      <div className='flex gap-2 p-3 cursor-pointer hover:bg-gray-100 transition-all'>
        <Eye size='1.2rem' />
        <div className='text-sm'>View</div>
      </div>
      <div className='flex gap-2 p-3 cursor-pointer hover:bg-gray-100 transition-all'>
        <Pencil size='1.2rem' className='text-green-600' />
        <div className='text-sm'>Edit</div>
      </div>
      <div className='flex gap-2 p-3 cursor-pointer hover:bg-gray-100 transition-all'>
        <Trash2 size='1.2rem' className='text-red-600' />
        <div className='text-sm'>Delete</div>
      </div>
    </div>,
    document.body
  );
}

FloatBtn.Toggle = Toggle;
FloatBtn.Box = Box;

export default FloatBtn;
