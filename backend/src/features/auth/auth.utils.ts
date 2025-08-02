import { app_error } from "@/shared/types/error.types";
import { get_env } from "@/shared/utils/get_env";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { err, ok, Result } from "neverthrow";

type compare_password = {
  password: string;
  hashed_password: string;
};
export const compare_password = async (data: compare_password): Promise<boolean> => {
  return bcrypt.compare(data.password, data.hashed_password);
};

type auth_token_payload = {
  id: string;
  email: string;
};
export const generate_auth_token = (data: auth_token_payload) => {
  const SECRET = get_env("SECRET");

  
  return jwt.sign({ id: data.id, email: data.email }, SECRET, {
    expiresIn: "12h",
  });
};

export const auth_token_verify = (token: string): Result<auth_token_payload, app_error> => {
  const SECRET = get_env("SECRET");
  try {
    const decoded = jwt.verify(token, SECRET) as auth_token_payload;
    return ok(decoded);
  } catch (error: any) {
    return err({
      message: error.message || "Token verification failed",
      origin: "[UTILS]",
    });
  }
};