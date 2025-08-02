import z from "zod";

export const signInSchema = z.object({
  password: z.string().min(6, "Informe uma senha válida").max(20, "Informe uma senha válida."),
});

export type signInSchemaType = z.infer<typeof signInSchema>