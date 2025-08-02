import { admin_props } from "@/shared/types/drizzle.types";
import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";
import { admin_model } from "./types/admin.model.types";
import { admin_repository } from "./types/admin.repository.types";

export type create = (
  model: admin_model,
  repository: admin_repository,
  data: { email: string; password: string }
) => Promise<Result<{ message: string; id: string } | null, app_error>>;

export type find_unique_admin = (repository: admin_repository) => Promise<Result<admin_props, app_error>>;

export type admin_service = {
  create: create;
  find_unique_admin: find_unique_admin;
};
