import { AppSidebar } from "@/components/app-sidebar"
import {
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Dashboard from "@/app/dashboard/Dashboard";
import Favourites from "@/app/dashboard/Favourites";
import Files from "@/app/dashboard/Files";
import Footer from "@/app/dashboard/Footer";
import Trash from "@/app/dashboard/Trash";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "../layout/DarkMode";
import UserNav from "@/components/user-nav";

export default function Page() {

  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case "/dashboard":
        return { component: <Dashboard />, title: "Dashboard" };
      case "/files":
        return { component: <Files />, title: "Files" };
      case "/favourites":
        return { component: <Favourites />, title: "Favourites" };
      case "/trash":
        return { component: <Trash />, title: "Trash" };
      default:
        return { component: <div>Default Content</div>, title: "Default" };
    }
  };
  const { component, title } = renderContent();

  return (
    (<SidebarProvider >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex justify-between items-center gap-2 px-4 w-full">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <BreadcrumbList className="font-semibold text-xl">
                <BreadcrumbItem className="md:block hidden">
                  <Link to="/">
                    FileDrive
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="md:block hidden" /> 
                <BreadcrumbItem>
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </div>
            <div className="flex items-center gap-4 px-4">
              <DarkModeToggle />
              <UserNav />
            </div>
          </div>
        </header>
        <div className="flex flex-col p-6 justify-between min-h-screen">
          <div className="flex-grow">
            {component}
          </div>
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
