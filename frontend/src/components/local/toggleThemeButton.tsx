"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ComponentProps } from "react";
import { Button } from "../ui/button";

type buttonProps = ComponentProps<"button">;

export default function ToggleTheme({ ...props }: buttonProps) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className={` w-full ${props.className}`}
      variant={"outline"}
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      {theme == "dark" ? <MoonIcon /> : <SunIcon />}
      <span>{theme == "dark" ? "Modo escuro" : "Modo claro"}</span>
    </Button>
  );
}
