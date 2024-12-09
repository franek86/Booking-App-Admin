import { ImageUp } from "lucide-react";

import { InputProps } from "@/lib/types";
type FileUploadProps = InputProps & {
  handleOnFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FileUpload({ type, name, register, handleOnFileChange }: FileUploadProps) {
  return (
    <div className='relative h-14 p-3 mt-4 flex items-center bg-gray-200'>
      <input
        type={type}
        {...(register ? register(name) : {})}
        onChange={handleOnFileChange}
        className='absolute top-0 right-0 bottom-0 left-0 w-full h-full opacity-0 cursor-pointer'
      />
      <div className='flex cursor-pointer'>
        <ImageUp />
        <h3 className='text-md font-bold ms-3'>Upload file</h3>
      </div>
    </div>
  );
}

export default FileUpload;
