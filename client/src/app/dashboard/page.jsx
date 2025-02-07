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
import { useEffect, useState } from "react";
import { FaSun, FaRegMoon } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") !== "false";
  });

  useEffect(() => {
    const darkModeClass = "dark";
    if (isDarkMode) {
      document.documentElement.classList.add(darkModeClass);
    } else {
      document.documentElement.classList.remove(darkModeClass);
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="px-4 text-xl">
      {isDarkMode ? <FaSun /> : <FaRegMoon />}
    </button>
  );
};

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
    (<SidebarProvider>
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
            <DarkModeToggle />
          </div>
        </header>
        <div className="flex flex-col p-6 justify-between min-h-screen">
          <div className="flex-grow">
            {component}
          </div>
          {/* <Footer /> */}
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
