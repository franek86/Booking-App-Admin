import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "../Logo";
import { admminLinks } from "@/lib/links";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className='mt-10'>
        <SidebarMenu>
          {admminLinks.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton variant='green' asChild>
                <NavLink to={item.href} className='flex py-6 text-[16px] font-semibold leading-10'>
                  <div className='w-10'>
                    <item.icon />
                  </div>
                  {item.label}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AdminSidebar;
