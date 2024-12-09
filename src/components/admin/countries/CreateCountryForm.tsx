import { CountiresType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputForm from "../../form/InputForm";
import { Button } from "../../ui/button";
import FileUpload from "../../form/FileUpload";
import { useState } from "react";
import { CircleX } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCountry } from "@/services/country-api";
import { useAppContext } from "@/contexts/AppContext";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const createCountrySchema = z.object({
  name: z.string().min(1, "Country name is required"),
  shortCountryCode: z.string().min(2, "Country shortcode  e.g EN").max(2, "Country shortcode must be 2 characters"),
  longCountryCode: z.string().min(3, "Country shortcode e.g ENG").max(3, "Country shortcode must be 3 characters"),
  iconFlag: z
    .any()
    .refine((files) => files?.length >= 1, { message: "Image is required." })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
      message: ".jpg, .jpeg, .png and .webp files are accepted.",
    })
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `Max file size is 5MB.`,
    }),
});

function CreateCountryForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CountiresType>({ resolver: zodResolver(createCountrySchema) });

  const queryClient = useQueryClient();
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const { showToast, setOpenDialog } = useAppContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFlag = () => {
    setPreviewFile(null);
    setValue("iconFlag", "");
  };

  const mutation = useMutation({
    mutationFn: createCountry,
    onSuccess: async () => {
      showToast({ message: "Country create successfully.", type: "SUCCESS" });
      setOpenDialog?.(false);
      await queryClient.invalidateQueries({ queryKey: ["countries"], exact: true });
    },
    onError: (error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data: CountiresType) => {
    mutation.mutate(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <div>
        <InputForm type='text' label='Country name' register={register} {...register("name")} />
        {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
      </div>
      <div>
        <InputForm type='text' label='Country shortcode' register={register} {...register("shortCountryCode")} />
        {errors.shortCountryCode && <span className='text-red-500 text-sm'>{errors.shortCountryCode.message}</span>}
      </div>
      <div>
        <InputForm type='text' label='Country longcode' register={register} {...register("longCountryCode")} />
        {errors.longCountryCode && <span className='text-red-500 text-sm'>{errors.longCountryCode.message}</span>}
      </div>

      <div>
        <FileUpload type='file' register={register} {...register("iconFlag")} handleOnFileChange={handleOnChange} />
        {errors.iconFlag && <span className='text-red-500 text-sm'>{errors.iconFlag.message}</span>}
      </div>
      {previewFile && (
        <div className='flex mt-3'>
          <img src={previewFile} className='h-16 w-16 my-3' />
          <div className='cursor-pointer' onClick={handleRemoveFlag}>
            <CircleX />
          </div>
        </div>
      )}

      <Button variant='green' className='my-4'>
        {mutation.isPending ? "Loading..." : "Submit"}
      </Button>
    </form>
  );
}

export default CreateCountryForm;
