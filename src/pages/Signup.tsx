import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import InputForm from "@/components/form/InputForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { RegisterUserType } from "@/lib/types";
import useRegister from "@/hooks/auth/useRegister";

type PasswordVisibilityType = {
  password: boolean;
  confirmPassword: boolean;
};

const RegisterSchema = z
  .object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

function Signup() {
  const { mutation } = useRegister();

  const [passwordVisibility, setPasswordVisibility] = useState<PasswordVisibilityType>({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserType>({ resolver: zodResolver(RegisterSchema) });

  const togglePasswordVisibility = (field: keyof PasswordVisibilityType) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className='w-full md:w-1/2 lg:w-2/5 bg-white p-10 mt-5'>
      <p className='text-sm mb-2'>
        Already have an account?{" "}
        <Link to='/signin' className='font-bold hover:text-green-500'>
          Log in
        </Link>
      </p>
      <form onSubmit={onSubmit}>
        <h1 className='text-3xl font-bold mb-4'>Create account</h1>

        <div className='flex flex-col'>
          <div>
            <InputForm label='First name' type='text' placeholder='First name' register={register} {...register("firstname")} />
            {errors.firstname && <div className='error-text'>{errors.firstname.message}</div>}
          </div>
          <div>
            <InputForm label='Last name' type='text' placeholder='Last name' register={register} {...register("lastname")} />
            {errors.lastname && <div className='error-text'>{errors.lastname.message}</div>}
          </div>
          <div className='relative'>
            <InputForm label='Email' type='email' placeholder='Email' register={register} {...register("email")} />
            {errors.email && <div className='error-text'>{errors.email.message}</div>}
          </div>
          <div className='relative'>
            <InputForm
              label='Password'
              type={passwordVisibility.password ? "text" : "password"}
              placeholder='Password'
              register={register}
              {...register("password")}
            />
            <span onClick={() => togglePasswordVisibility("password")} className='absolute top-9 right-3 cursor-pointer'>
              {passwordVisibility.password ? <EyeOff size={20} color='#9ca3af' /> : <Eye size={20} color='#9ca3af' />}
            </span>
            {errors.password && <div className='error-text'>{errors.password.message}</div>}
          </div>
          <div className='relative'>
            <InputForm
              label='Confirm Password'
              type={passwordVisibility.confirmPassword ? "text" : "password"}
              placeholder='Confirm Password'
              register={register}
              {...register("confirmPassword")}
            />
            <span onClick={() => togglePasswordVisibility("confirmPassword")} className='absolute top-9 right-3 cursor-pointer'>
              {passwordVisibility.confirmPassword ? <EyeOff size={20} color='#9ca3af' /> : <Eye size={20} color='#9ca3af' />}
            </span>
            {errors.confirmPassword && <div className='error-text'>{errors.confirmPassword.message}</div>}
          </div>
        </div>
        <Button type='submit' variant='green' size='full'>
          Create
        </Button>
      </form>
    </div>
  );
}

export default Signup;
