import z from "zod";

export const auth_me = z.object({
  password: z.string(),
});
