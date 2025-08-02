import { day_of_week_props_insert, db_client } from "@/shared/types/drizzle.types";
import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";

export type create = (
  db_client: db_client,
  data: day_of_week_props_insert
) => Promise<Result<{ id: string; name: string }, app_error>>;


export type dof_repo = {
  create: create;
}