import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import InputForm from "@/components/form/InputForm";

import { LoginUserType } from "@/lib/types";
import useLogin from "@/hooks/auth/useLogin";

const SignInSchema = z.object({
  email: z.string().email("Credentials not valid"),
  password: z.string().min(8, "Credentials not valid"),
});

function SignIn() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const { mutation } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserType>({ resolver: zodResolver(SignInSchema) });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <div className='w-full md:w-1/2 lg:w-2/5 bg-white p-10 mt-5'>
      <p className='text-sm mb-2'>
        Not a member?{" "}
        <Link to='/signup' className='font-bold hover:text-green-500'>
          Join
        </Link>
      </p>
      <form onSubmit={onSubmit}>
        <h1 className='text-3xl font-bold mb-4'>Log in</h1>

        <div className='flex flex-col'>
          <div className='relative'>
            <InputForm label='Email' type='email' placeholder='Email' register={register} {...register("email")} />
            {errors.email && <div className='error-text'>{errors.email.message}</div>}
          </div>
          <div className='relative'>
            <InputForm
              label='Password'
              type={passwordVisibility ? "text" : "password"}
              placeholder='Password'
              register={register}
              {...register("password")}
            />
            <span onClick={() => setPasswordVisibility(!passwordVisibility)} className='absolute top-9 right-3 cursor-pointer'>
              {passwordVisibility ? <EyeOff size={20} color='#9ca3af' /> : <Eye size={20} color='#9ca3af' />}
            </span>
            {errors.password && <div className='error-text'>{errors.password.message}</div>}
          </div>
        </div>
        <Button type='submit' variant='green' size='full'>
          Login
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
