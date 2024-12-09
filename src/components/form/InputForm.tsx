import { InputProps } from "@/lib/types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function InputForm({ label, name, type, placeholder, register, className, ...props }: InputProps) {
  return (
    <div className='mb-3'>
      <Label className='text-sm font-medium text-black' htmlFor={name}>
        {label}
      </Label>
      <Input
        className={`text-gray-800 border-[1px] border-gray-300 text-sm shadow-none p-5 ${className}`}
        type={type}
        id={name}
        placeholder={placeholder}
        {...(register ? register(name) : {})}
        {...props}
      />
    </div>
  );
}

export default InputForm;
