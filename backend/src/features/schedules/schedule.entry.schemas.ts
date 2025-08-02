import z from "zod";

export const create = z.object({
  assistent_id: z.string(),
  day_of_week_id: z.string(),
});

export type entry_types = {
    create: z.infer<typeof create>
}