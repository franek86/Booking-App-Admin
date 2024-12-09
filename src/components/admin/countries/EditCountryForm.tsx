import { useEffect } from "react";
import { useForm } from "react-hook-form";

import FileUpload from "@/components/form/FileUpload";
import InputForm from "@/components/form/InputForm";
import Loader from "@/components/Loader";
import BackBtn from "@/components/ui/back-btn";
import { Button } from "@/components/ui/button";

import useFetchSingleCountry from "@/hooks/country/useFetchSingleCountry";
import { CountiresType } from "@/lib/types";
import useEditCountry from "@/hooks/country/useEditCountry";

type editCountryIdProps = {
  countryId?: string;
};

function EditCountryForm({ countryId = "" }: editCountryIdProps) {
  const { isError, isLoading, data: singleCountry } = useFetchSingleCountry(countryId);
  const { mutation } = useEditCountry(countryId);

  const { register, handleSubmit, setValue } = useForm<CountiresType>();

  const onSubmit = handleSubmit((data: CountiresType) => {
    mutation.mutate(data);
  });

  useEffect(() => {
    if (singleCountry) {
      setValue("name", singleCountry.name || "");
      setValue("shortCountryCode", singleCountry.shortCountryCode || "");
      setValue("longCountryCode", singleCountry.longCountryCode || "");
    }
  }, [singleCountry, setValue]);

  const handleOnChange = () => {
    console.log("handle on change");
  };

  if (isError) return <h2>Could not get single country</h2>;

  if (isLoading) return <Loader />;

  return (
    <form onSubmit={onSubmit} className='flex w-full mt-5'>
      <aside className='w-full md:w-1/5'>
        <BackBtn title='Back to list' />
        <div className='flex justify-center'>
          <img className='my-5 w-24' src={singleCountry?.iconFlag} alt={singleCountry?.name} />
        </div>
      </aside>

      <section className='w-full md:w-2/3'>
        <div>
          <InputForm type='text' label='Country name' register={register} {...register("name")} />
        </div>
        <div>
          <InputForm type='text' label='Country shortcode' register={register} {...register("shortCountryCode")} />
        </div>
        <div>
          <InputForm type='text' label='Country longcode' register={register} {...register("longCountryCode")} />
        </div>
        <div>
          <FileUpload type='file' register={register} {...register("iconFlag")} handleOnFileChange={handleOnChange} />
        </div>
        <Button variant='green' size='lg' className='my-4'>
          Edit
        </Button>
      </section>
    </form>
  );
}

export default EditCountryForm;
