import { Card, CardContent } from "@/components/ui/card";
import { ColumnDef } from "@tanstack/react-table";
import { Loan } from "./Fazer_emprestimo/emprestimo.schema";

export const loanColumns: ColumnDef<Loan>[] = [
  {
    accessorKey: "student_name",
    header: "Emprestimos",
    cell: (row) => {
      const data = row.row.original;
      return (
        <Card>
          <CardContent>
            <span>Nome: {data.student_name}</span>
          </CardContent>
        </Card>
      );
    },
  },
];
