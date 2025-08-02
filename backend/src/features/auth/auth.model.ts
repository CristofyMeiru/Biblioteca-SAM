import { admin_props } from "@/shared/types/drizzle.types";
import { sanitized_admin } from "./types/auth.model.types";

export const sanitize_admin = (admin_data: admin_props): sanitized_admin => {
  return {
    id: admin_data.id,
    identifier: admin_data.identifier,
    email: admin_data.email,
  };
};
