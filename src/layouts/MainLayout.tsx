import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main className='h-full'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default MainLayout;
