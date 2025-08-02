import z from "zod";

export const create = z.object({
    email: z.email(),
    password: z.string()
})