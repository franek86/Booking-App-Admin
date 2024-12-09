import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Label } from "../ui/label";
import { Controller, Control } from "react-hook-form";

type DatePickerProps = {
  label: string;
  control: Control<any>;
  name: string;
};

export function DatePickerForm({ label, control, name }: DatePickerProps) {
  const minDate = new Date() as Date;
  return (
    <div className='flex flex-col'>
      <Label className='text-sm font-medium text-black mb-2 leading-[14px]'>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker dateFormat='dd.MM.yyyy' selectsStart minDate={minDate} selected={minDate} onChange={(date) => field.onChange(date)} className='h-[38px] m-[2px] text-sm text-gray-400' />
        )}
      />
    </div>
  );
}
