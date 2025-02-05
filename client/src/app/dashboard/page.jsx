import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
import Dashboard from "@/pages/Dashboard";
import Favourites from "@/pages/Favourites";
import Files from "@/pages/Files";
import Trash from "@/pages/Trash";
import { useLocation } from "react-router-dom";

export default function Page() {

  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case "/":
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
    (<SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    FileDrive
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex-grow">
            {component}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
