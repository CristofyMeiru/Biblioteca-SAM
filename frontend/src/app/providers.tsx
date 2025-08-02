"use client";

import AuthProvider from "@/context/authContext";
import { ThemeProvider, useTheme } from "next-themes";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: ReactNode }) {

  
  
  return (
    <ThemeProvider attribute={"class"} defaultTheme="dark">
      <AuthProvider>{children}</AuthProvider>
      
    </ThemeProvider>
  );
}
