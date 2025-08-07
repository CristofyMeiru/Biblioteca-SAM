import z from "zod";

export const create = z.object({
  first_name: z.string().min(3, "Informe um nome válido").max(40, "Informe um nome válido."),
  last_name: z.string().min(3, "Informe um nome válido").max(40, "Informe um nome válido."),
  nacionality: z.string().min(3, "Informe uma nacionalidade válida").max(40, "Informe uma nacionalidade válida"),
});

export type entry_types = {
  create: z.infer<typeof create>;
};
