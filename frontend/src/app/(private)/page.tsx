"use client";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useAuth } from "@/context/authContext";
import { Printer } from "lucide-react";

export default function HomePage() {
  const { admin } = useAuth();

  return (
    <div className=" h-[90vh] flex flex-1 p-4 space-x-2 ">
      <Card className=" h-[92vh] w-1/2 ">
        <CardHeader>
          <CardTitle>Emprestimos pendentes</CardTitle>
          <CardDescription>Lista dos emprestimos que ainda estão pendentes</CardDescription>
          <CardAction>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"outline"}>
                  <Printer />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Imprimir</TooltipContent>
            </Tooltip>
          </CardAction>
        </CardHeader>
        <div className=" px-4 ">
          <Separator />
        </div>
        <CardContent className=" h-full max-h-[77vh] ">
          <ScrollArea className=" h-full  ">
            <div className=" space-y-2 flex flex-col ">
              {Array(50)
                .fill(0)
                .map(() => (
                  <Button>socorro</Button>
                ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <Card className=" h-[92vh] w-1/2 ">
        <CardHeader>
          <CardTitle>Livros em falta</CardTitle>
          <CardDescription>Lista dos livros onde o estoque chegou a zero.</CardDescription>
          <CardAction>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"outline"}>
                  <Printer />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Imprimir</TooltipContent>
            </Tooltip>
          </CardAction>
        </CardHeader>
        <div className=" px-4 ">
          <Separator />
        </div>
        <CardContent className=" h-full max-h-[77vh] ">
          <ScrollArea className=" h-full  ">
            <div className=" space-y-2 flex flex-col ">
              {Array(50)
                .fill(0)
                .map(() => (
                  <Button>socorro</Button>
                ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
