import z from "zod";

export const create = z.object({
  name: z.enum(["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]),
});

export type entry_types = {
  create: z.infer<typeof create>;
};
