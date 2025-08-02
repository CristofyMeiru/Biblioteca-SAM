import { admin_props_insert } from "@/shared/types/drizzle.types";
import bcrypt from "bcrypt";

type admin_data = {
  email: string;
  password: string;
};
export const create = async (admin_data: admin_data): Promise<admin_props_insert> => {
  const hashed_password = await bcrypt.hash(admin_data.password, 7);

  return {
    id: crypto.randomUUID(),
    identifier: "admin",
    email: admin_data.email,
    password: hashed_password,
  };
};


