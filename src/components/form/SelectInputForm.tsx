import Select from "react-select";
import { Label } from "../ui/label";
import { SelectProps } from "@/lib/types";
import { Controller } from "react-hook-form";

function SelectInputForm({ label, onChange, name, options, control, placeholder, className }: SelectProps) {
  const customStyle = {
    control: (defaultStyles: any, state: any) => {
      return {
        ...defaultStyles,
        border: "none",
        padding: "0",
        backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
        borderColor: state.isFocused ? "#000" : "#ccc",
        boxShadow: state.isFocused ? "0 0 5px rgba(0,123,255,.25)" : null,
        "&:hover": {
          borderColor: "#2684FF",
        },
      };
    },
    placeholder: (defaultStyles: any) => {
      return {
        ...defaultStyles,
        color: "#9ca3af",
        fontSize: "14px",
      };
    },
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "rgb(74 222 128)" : state.isFocused ? "rgb(74 222 128)" : "#fff",
      color: state.isSelected ? "#fff" : "#000",
      padding: 10,
    }),
    valueContainer: (defaultStyles: any) => ({
      ...defaultStyles,
      padding: "0px",
    }),
    singleValue: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      fontSize: "14px",
      color: state.isSelected ? "#9ca3af" : "#9ca3af",
    }),
  };

  return (
    <div className='flex flex-col mb-2 lg:mb-0'>
      <Label className='lg:mb-2' htmlFor={name}>
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            styles={customStyle}
            components={{ IndicatorSeparator: () => null }}
            {...field}
            isSearchable={true}
            options={options}
            onChange={onChange}
            value={options?.find((option: any) => option.value === field.value) || null}
            placeholder={placeholder}
            className='bg-red-300'
          />
        )}
      />
    </div>
  );
}

export default SelectInputForm;
