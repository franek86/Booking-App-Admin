import Logo from "@/components/Logo";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main className='h-screen'>
      <div className='flex flex-col items-center justify-center h-full'>
        <Logo />
        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;
