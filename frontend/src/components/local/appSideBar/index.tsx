"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Book, DoorOpen, Group, Handshake, Home, Network, Plus, Presentation, Settings, User, User2, UserCog, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ToggleTheme from "../toggleThemeButton";
import { styles } from "./style";

export default function AppSideBar() {
  const { state } = useSidebar();
  const [dialogLogoutOpen, setDialogLogoutOpen] = useState<boolean>(false);

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className={styles.sidebar_header}>
        <SidebarMenu>
          <SidebarMenuItem className={styles.sidebar_header}>
            <Image src="/livro.png" width={48} height={48} alt="lib" />
            {state == "expanded" ? <h1 className={styles.sidebar_header_label}>Biblioteca-SAM</h1> : <></>}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className=" dark:bg-neutral-900 ">
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/"} className={styles.sidebar_menu_link_item}>
                    <Home />
                    Página inicial
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/Livros"} className={styles.sidebar_menu_link_item}>
                    <Book />
                    Livros
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/Emprestimos"} className={styles.sidebar_menu_link_item}>
                    <Handshake />
                    Emprestimos
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/Monitores"} className={styles.sidebar_menu_link_item}>
                    <UserCog />
                    Monitores
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/Estudantes"} className={styles.sidebar_menu_link_item}>
                    <Users />
                    Estudantes
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Ações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/Emprestimos/Fazer_emprestimo"} className={styles.sidebar_menu_link_item}>
                    {" "}
                    <Plus /> Fazer emprestimo
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className=" dark:bg-neutral-900 ">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <ToggleTheme />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button variant={"outline"}>
                <Settings /> <span>Configurações</span>{" "}
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <SidebarMenuButton asChild>
                  <Button variant={"destructive"}>
                    <DoorOpen /> <span>Sair</span>{" "}
                  </Button>
                </SidebarMenuButton>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Ao confirmar você sairá do serviço e voltara para a tela de login.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction className={buttonVariants({ variant: "destructive" })} asChild>
                    <div>
                      <DoorOpen /> <span>Sair</span>{" "}
                    </div>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
