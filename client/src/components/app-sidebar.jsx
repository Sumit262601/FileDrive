import * as React from "react"
import {
  UserRound,
  LogOut,
  Trash2,
  Settings2,
  Star,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  Send
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import { NavSecondary } from "./nav-secondary"

const data = {
  user: {
    name: "Logout",
    url: "/logout",
    logo: LogOut,
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true
    },
    {
      title: "Files",
      url: "/files",
      icon: FileText,
      isActive: true
    },
    {
      title: "Favourites",
      url: "/favourites",
      icon: Star,
      isActive: true
    },
    {
      title: "Trash",
      url: "/trash",
      icon: Trash2,
      isActive: true
    }, ,
    {
      title: "Settings",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "/profile",
        }
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ]
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <UserRound className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">User Name</span>
                  <span className="truncate text-xs">example@gmail.com</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

    </Sidebar>)
  );
}