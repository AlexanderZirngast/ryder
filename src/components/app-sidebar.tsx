"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  GalleryVerticalEndIcon,
  AudioLinesIcon,
  TerminalIcon,
  TerminalSquareIcon,
  BotIcon,
  BookOpenIcon,
  Settings2Icon,
  FrameIcon,
  PieChartIcon,
  MapIcon,
  Motorbike,
  ChartLine,
} from "lucide-react";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import { ThemeToggleSidebarItem } from "@/features/themeSwitch/ModeToggle";


export  function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
 
  const { data, error} = authClient.useSession()

  const sidebarData = {
  user: {
    name: data?.user.name,
    email: data?.user.email,
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Motorcycles",
      url: "/motorcycles",
      icon: <Motorbike />,
      isActive: true,
      items: [
        {
          title: "Collection",
          url: "/collection",
        },
        {
          title: "Maintenance",
          url: "#",
        },
      ],
    },
    {
      title: "Statistics",
      url: "/stats",
      icon: <ChartLine />
    },

    {
      title: "Settings",
      url: "#",
      icon: <Settings2Icon />,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
};

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/" />}>
              <Motorbike className="size-6 shrink-0" />
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-medium leading-tight">
                  Ryder
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
       
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggleSidebarItem/>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
