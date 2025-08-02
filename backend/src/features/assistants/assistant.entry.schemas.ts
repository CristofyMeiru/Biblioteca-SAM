import z from "zod";

export const create = z.object({
  first_name: z
    .string("Informe o primeiro nome")
    .min(3, "Mínimo de 3 caracteres")
    .max(60, "Excedeu a quantidade de caracteres"),
  last_name: z
    .string("Informe o sobrenome")
    .min(3, "Mínimo de 3 caracteres")
    .max(60, "Excedeu a quantidade de caracteres"),
  course_id: z.string("Informe um valor válido.").max(60, "Excedeu o limite de caracteres."),
  student_class_number: z.coerce.number().int(),
});

export const list_paginated = z.object({
  skip: z.coerce.number().int("Informe um valor válido.").min(0, "Informe um valor válido.").optional(),
  limit: z.coerce.number().int("Informe um valor válido.").positive("Informe um valor válido.").optional(),
});

export type entry_types = {
  create: z.infer<typeof create>;
  list_paginated: z.infer<typeof list_paginated>;
};
