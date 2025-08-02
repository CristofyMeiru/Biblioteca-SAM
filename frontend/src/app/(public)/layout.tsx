"use client";
import { useAuth } from "@/context/authContext";
import { PhysicalSize, Window } from "@tauri-apps/api/window";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { Toaster } from "sonner";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const { admin } = useAuth();

  const { theme } = useTheme();

  useEffect(() => {
    Window.getCurrent().setResizable(false);
    const size = new PhysicalSize(500, 600);
    Window.getCurrent().setSize(size);

    if (admin) {
      redirect("/");
    }
  }, [admin]);

  return (
    <div>
      {children}
      <Toaster theme={theme == "dark" ? "dark" : "light"} />
    </div>
  );
}
