import AdminSidebar from "@/components/admin/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <main>
      <SidebarProvider>
        <AdminSidebar />
        <section className='w-full p-4'>
          <div className='w-1/4 inline-flex'>
            <SidebarTrigger className='h-9 py-2' />
          </div>
          <Outlet />
        </section>
      </SidebarProvider>
    </main>
  );
}

export default AdminLayout;
