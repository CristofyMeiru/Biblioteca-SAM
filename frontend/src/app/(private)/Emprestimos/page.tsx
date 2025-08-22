"use client";

import Link from "next/link";
import { loanColumns } from "./columns";
import DataTable from "./data-table";

const columnsMock = [
  {
    id: "213-456-789",
    student_name: "Ana Clara Souza",
    course: "Engenharia de Software",
    call_number: "P-852",
    grade_level: "Superior",
    title: "Introdução aos Algoritmos",
    author: "Cormen, Leiserson, Rivest e Stein",
    genre: "Ciência da Computação",
  },
];

export default function page() {
  return (
    <div className=" flex flex-col ">
      <div>pagina de emprestimos</div>
      <Link href={"/Emprestimos/Fazer_emprestimo"}>Fazer emprestimo</Link>
      <DataTable className=" w-2/3 " columns={loanColumns} data={columnsMock} />
    </div>
  );
}
