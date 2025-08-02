import { db_client, schedule_props_insert } from "@/shared/types/drizzle.types";
import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";

export type create = (
  db_client: db_client,
  data: schedule_props_insert
) => Promise<Result<{ id: string; assistant_id: string; day_id: string }, app_error>>;


export type schedule_repo = {
    create: create
}