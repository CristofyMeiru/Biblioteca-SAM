import z from "zod";

export const loanSchema = z.object({
  NOME: z.string().min(1, "Informe o nome do aluno"),
  CURSO: z.string().min(1, "Informe o curso do aluno"),
  NÚMERO_DA_CHAMADA: z.string(),
  SÉRIE: z.string().min(1, "Informe a série do aluno"),
  TÍTULO: z.string().min(1, "Informe o título do livro"),
  AUTOR: z.string().min(1, "Informe o autor do livro"),
  GÊNERO: z.string().min(1, "Informe o gênero do livro"),
});

export type loanSchemaType = z.infer<typeof loanSchema>;

export interface Loan {
  id: string;
  student_name: string;
  course: string;
  call_number: string;
  grade_level: string;
  title: string;
  author: string;
  genre: string;
  expires_at: Date;
  created_at: Date;
  updated_at: Date;
}
