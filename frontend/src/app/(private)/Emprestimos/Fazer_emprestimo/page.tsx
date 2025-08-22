"use client";
import WebCamViewer from "@/components/local/webCamViewer";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { QrReader } from "@blackbox-vision/react-qr-reader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loanSchema } from "./emprestimo.schema";
import { formatStudent, formatToObject, getDateAfter10Days } from "./emprestimo.utils";

export default function Fazer_emprestimo() {
  const dateAfter10Days = getDateAfter10Days();
  const instruction = ["Informe o QrCode do aluno", "Informe o Qrcode do livro"];
  const [instructionGrade, setInstructionGrade] = useState<number>(0);

  const form = useForm({
    mode: "onBlur",
    resolver: zodResolver(loanSchema),
  });

  function onResultQrReader(data: any) {
    if (!data) {
      return;
    } else {
      const inferno = data;
      const result = formatToObject(inferno.text);
      const result2 = formatStudent(result);
      console.log(result2);
      setInstructionGrade(1)
    }
  }

  return (
    <div className=" grid grid-cols-2 p-4 gap-x-2 ">
      <Card>
        <CardHeader>
          <CardTitle className=" text-center text-2xl ">{instruction[instructionGrade]}</CardTitle>
        </CardHeader>
        <CardContent>
          <QrReader
            className="hidden"
            constraints={{ facingMode: "environment" }}
            scanDelay={1000}
            onResult={onResultQrReader}
          />
          <WebCamViewer />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Informações do emprestimo</CardTitle>
        </CardHeader>

        <CardContent>
          <Separator className="mb-4" />
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
                            <SelectTrigger className=" w-full ">
                              <SelectValue placeholder="Selecione o curso" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Desenvolvimento">Desenvolvimento</SelectItem>
                            <SelectItem value="Edificações">Edificações</SelectItem>
                            <SelectItem value="Massoterapia">Massoterapia</SelectItem>
                            <SelectItem value="Administração">Administração</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="SÉRIE"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Série</FormLabel>
                        <Select>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecionar" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1º ano">1º ano</SelectItem>
                            <SelectItem value="2º ano">2º ano</SelectItem>
                            <SelectItem value="3º ano">3º ano</SelectItem>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator className=" mt-6 mb-4 " />

                <h2 className=" font-semibold dark:text-neutral-300 mb-4 ">Informações do livro</h2>
                <div className=" space-y-4 ">
                  <FormField
                    control={form.control}
                    name="TÍTULO"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Título</FormLabel>
                        <FormControl>
                          <Input placeholder="Título do livro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="AUTOR"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Autor</FormLabel>
                        <FormControl>
                          <Input placeholder="Autor do livro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="GÊNERO"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gênero</FormLabel>
                        <FormControl>
                          <Input placeholder="Gênero textual do livro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Separator className=" mt-6 mb-4 " />

                <h2 className=" font-semibold dark:text-neutral-300 mb-4 ">Informações finais do emprestimo</h2>

                <div className=" flex flex-col ">
                  <div className=" flex space-x-2 ">
                    <Label>Data de devolução: </Label>
                    <Input className=" w-1/6 " placeholder="data" value={dateAfter10Days} disabled />
                  </div>
                </div>

                <CardAction className=" space-x-2 ">
                  <Button variant={"outline"}>Cancelar</Button>
                  <Button>Fazer emprestimo</Button>
                </CardAction>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
