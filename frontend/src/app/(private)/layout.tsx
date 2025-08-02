"use client";
import AppSideBar from "@/components/local/appSideBar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/context/authContext";
import { Window } from "@tauri-apps/api/window";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { styles } from "./layout_style";
import PathVisualizer from "@/components/local/pathVisualizer";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const { admin } = useAuth();

  const pathname = usePathname();

  useEffect(() => {
    Window.getCurrent().maximize();
    Window.getCurrent().setResizable(true);
    if (!admin) {
      redirect("/sign-in");
    }
  }, [admin]);

  return (
    <SidebarProvider>
      <AppSideBar />
      <main className=" w-full ">
        <div className={styles.header}>
          <SidebarTrigger />
          <Separator orientation="vertical" />
          <PathVisualizer/>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
