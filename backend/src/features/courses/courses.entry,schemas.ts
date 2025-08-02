import z from "zod";

export const create = z.object({
  name: z.string().min(3, "Informe um nome válido.").max(50, "Informe um nome válido."),
  grade_level: z.enum(["1º ano", "2º ano", "3º ano"], "Informe uma série válida."),
});

export type entry_types = {
  create: z.infer<typeof create>;
};
