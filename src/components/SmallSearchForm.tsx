import { Controller, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import SelectInputForm from "./form/SelectInputForm";

import { destinations, cabins } from "@/lib/data";

import { Label } from "./ui/label";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { SmallSearchFormData } from "@/lib/types";
import { formatDateForURL } from "@/util/helper";

function SmallSearchForm() {
  const today = new Date();
  const { control, handleSubmit, setValue, watch } = useForm<SmallSearchFormData>({
    defaultValues: {
      departureDate: today,
      returnDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
    },
  });

  const returnDate = watch("returnDate");

  const handleDestinations = (selectedOption: any) => {
    setValue("destination", selectedOption ? selectedOption.value : null);
  };
  const handleCabins = (selectedOption?: any) => {
    setValue("cabins", selectedOption ? selectedOption.value : null);
  };

  const handleDepartureChange = (date: Date): Date => {
    const oneWeekLater = new Date(date);
    oneWeekLater.setDate(oneWeekLater.getDate() + 7);
    return oneWeekLater;
  };

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data: any) => {
    const queryParams = new URLSearchParams({
      departureDate: formatDateForURL(data.departureDate),
      returnDate: formatDateForURL(data.returnDate),
      destination: data.destination,
      cabins: data.cabins,
    }).toString();
    navigate(`/search?${queryParams}`);
  });

  return (
    <form className='custom-container my-20' onSubmit={onSubmit}>
      <div className='bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_100px] gap-4 items-center justify-center shadow-md rounded-lg lg:rounded-full p-6 lg:-mt-8'>
        <SelectInputForm label='Destination' name='destination' control={control} options={destinations} onChange={handleDestinations} />

        <div className='flex flex-col mb-2 lg:mb-0'>
          <Label className='text-sm font-medium text-black lg:mb-2 leading-[14px]'>Departure Date</Label>
          <Controller
            name='departureDate'
            control={control}
            render={({ field }) => (
              <DatePicker
                dateFormat='dd.MM.yyyy'
                selectsStart
                minDate={new Date()}
                selected={field.value}
                onChange={(date) => {
                  field.onChange(date);
                  const returnDate = handleDepartureChange(date as Date);
                  setValue("returnDate", returnDate);
                }}
                className='custom-datepicker'
              />
            )}
          />
        </div>

        <div className='flex flex-col mb-2 lg:mb-0'>
          <Label className='text-sm font-medium text-black lg:mb-2 leading-[14px]'>Return Date</Label>
          <Controller
            name='returnDate'
            control={control}
            render={({ field }) => (
              <DatePicker
                dateFormat='dd.MM.yyyy'
                selectsStart
                minDate={returnDate}
                selected={field.value}
                onChange={(data) => field.onChange(data)}
                className='custom-datepicker'
              />
            )}
          />
        </div>

        <SelectInputForm label='No. cabins' name='cabins' control={control} options={cabins} onChange={handleCabins} />

        <div className='flex justify-center'>
          <Button variant='green' type='submit' className='rounded-full h-12 w-12 p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
            </svg>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SmallSearchForm;
