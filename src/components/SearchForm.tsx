import { SmallSearchFormData } from "@/lib/types";
import { formatDateForURL } from "@/util/helper";
import SelectInputForm from "./form/SelectInputForm";
import { useForm } from "react-hook-form";
import { destinations, cabins } from "@/lib/data";
import { Button } from "./ui/button";

interface SearchFormProps {
  searchParams: SmallSearchFormData;
}

const SearchForm = ({ searchParams }: SearchFormProps) => {
  const { destination, cabins: searchCabins, departureDate, returnDate } = searchParams;

  const departureDateFormat = formatDateForURL(departureDate);
  const returnDateFormat = formatDateForURL(returnDate);

  const { control, handleSubmit, setValue, watch } = useForm<SmallSearchFormData>({
    defaultValues: {
      departureDate: departureDate,
      returnDate: returnDate,
      destination: destination,
      cabins: searchCabins,
    },
  });

  const handleDestinations = (selectedOption: any) => {
    setValue("destination", selectedOption ? selectedOption.value : null);
  };
  const handleCabins = (selectedOption: any) => {
    setValue("cabins", selectedOption ? selectedOption.value : null);
  };

  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
  });

  return (
    <aside className='shadow-xl p-4'>
      <form className='custom-container py-6' onSubmit={onSubmit}>
        <div className='mb-2'>
          <SelectInputForm
            label='Destination'
            name='destination'
            control={control}
            options={destinations}
            onChange={handleDestinations}
            placeholder={destination?.value}
            className='bg-neutral-800'
          />
        </div>
        <div className='mb-2'>
          <SelectInputForm
            label='Cabins'
            name='cabin'
            control={control}
            options={cabins}
            onChange={handleCabins}
            placeholder={searchCabins?.value}
          />
        </div>

        <Button variant='green' type='submit' className='rounded-xl h-12 wfull2 p-2'>
          Search
        </Button>
      </form>
    </aside>
  );
};

export default SearchForm;
