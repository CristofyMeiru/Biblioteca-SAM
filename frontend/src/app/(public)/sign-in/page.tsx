"use client";
import Spin from "@/components/local/spinLoader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/authContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoke } from "@tauri-apps/api/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signInSchema, signInSchemaType } from "./sign-in.schema";
import { styles } from "./styles";

interface AuthResponse {
  auth_token: string;
  message: string;
}

export default function Home() {
  const { retrieveAdmin } = useAuth();
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<signInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      password: "",
    },
  });

  async function onSubmit(data: signInSchemaType) {
    setIsPending(true);
    const response = await invoke("post", { url: "http://localhost:3333/auth/auth_me", body: data })
      .then((response) => {
        const data = response as AuthResponse;
        sessionStorage.setItem("auth_token", data.auth_token);
        retrieveAdmin();
        toast("Bem vindo novamente!");
      })
      .catch((err) => {
        form.setError("password", { message: "Senha incorreta." });
      })
      .finally(() => {
        setIsPending(false);
      });
  }

  return (
    <div className=" h-screen flex justify-center items-center ">
      <Card className={styles.card}>
        <CardHeader className={styles.card_header}>
          <Image src={"livro.png"} alt="livro.png" width={100} height={100} />
          <h1 className={styles.card_header_h1}>Biblioteca-EP</h1>
          <span className=" text-neutral-400 ">Bem vindo novamente! </span>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" h-full flex flex-col justify-center space-y-4 ">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className=" text-sm " placeholder="Senha" {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      <Link className={styles.rescue_link} href={"/rescue_account"}>
                        Esqueceu a senha?
                      </Link>
                    </FormDescription>
                  </FormItem>
                )}
              />
              <div className={styles.button_div}>
                <Button variant={"outline"} className={styles.submit_button} type="submit">
                  {isPending ? <Spin /> : "Entrar"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
