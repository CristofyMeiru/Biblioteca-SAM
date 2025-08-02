"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loanSchema, loanSchemaType } from "./emprestimo.schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Fazer_emprestimo() {
  const form = useForm<loanSchemaType>({
    defaultValues: {
      NÚMERO_DA_CHAMADA: 0,
    },
    mode: "onBlur",
    resolver: zodResolver(loanSchema),
  });

  function onResultQrReader(data: any) {
    console.log("data:" + data);
  }

  return (
    <div className=" grid grid-cols-2 p-4 gap-x-2 ">
      <Card>
        <CardHeader>
          <CardTitle>Informe o qrCode do aluno</CardTitle>
        </CardHeader>
        <CardContent>
          {/*<QrReader
            className="hidden"
            constraints={{ facingMode: "environment" }}
            scanDelay={1000}
            onResult={onResultQrReader}
          /> */}
          <div className=" w-full h-80 "></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Informações do emprestimo</CardTitle>
        </CardHeader>
        <div className=" px-4 ">
          <Separator />
        </div>
        <CardContent>
          <div>
            <h2 className=" font-semibold dark:text-neutral-300 mb-4 ">Informações do aluno</h2>
            <Form {...form}>
              <form>
                <FormField
                  control={form.control}
                  name="NOME"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome completo do aluno" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className=" flex w-full mt-4 space-x-2 ">
                  <FormField
                    control={form.control}
                    name="CURSO"
                    render={({ field }) => (
                      <FormItem className=" w-2/3 ">
                        <FormLabel>Curso</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className=" w-full "><SelectValue placeholder="Selecione o curso" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Desenvolvimento" >Desenvolvimento</SelectItem>
                        </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="NÚMERO_DA_CHAMADA"
                    render={({ field }) => (
                      <FormItem className=" w-1/3 ">
                        <FormLabel>Número</FormLabel>
                        <FormControl>
                          <Input min={0} placeholder="N. da chamada" {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
