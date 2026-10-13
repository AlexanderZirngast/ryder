"use client";

import { authClient } from "@/lib/auth-client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidePanel } from "@/features/creation/side-panel";
import { SidePanelProvider } from "@/features/creation/side-panel-provider";

export function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return null;
  }

  if (!session) {
    return <main className="flex-1 overflow-auto">{children}</main>;
  }

  return (
    <SidebarProvider>
      <SidePanelProvider>
        <AppSidebar />

        <main className="flex-1 overflow-auto">
          <SidebarTrigger />

          <div className="max-w-5xl mx-auto p-2">
            {children}
          </div>
        </main>

        <SidePanel />
      </SidePanelProvider>
    </SidebarProvider>
  );
}