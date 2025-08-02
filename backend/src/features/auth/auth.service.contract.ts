import { app_error } from "@/shared/types/error.types";
import { admin_feature } from "@/shared/types/features.types";
import { Result } from "neverthrow";
import { auth_model, sanitized_admin } from "./types/auth.model.types";

export type auth_me = (
  admin_service: admin_feature,
  data: {
    password: string;
  }
) => Promise<Result<{ message: string; auth_token: string }, app_error>>;

export type retrieve_admin = (
  admin: admin_feature,
  auth_model: auth_model
) => Promise<Result<sanitized_admin, app_error>>;
