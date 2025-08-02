import { admin_props, admin_props_insert, db_client } from "@/shared/types/drizzle.types";
import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";

export type create = (
  db_client: db_client,
  admin_data: admin_props_insert
) => Promise<Result<{ message: string; id: string }, app_error>>;

export type find_unique_admin = (
  db_client: db_client
) => Promise<Result<admin_props, app_error>>;

export type admin_repository = {
  create: create;
  find_unique_admin: find_unique_admin;
};
