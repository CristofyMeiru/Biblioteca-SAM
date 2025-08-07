import { author_props, author_props_insert, db_client } from "@/shared/types/drizzle.types";
import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";

export type create = (
  db_client: db_client,
  data: author_props_insert
) => Promise<Result<{ id: string; fullname: string }, app_error>>;

export type find_unique = (
  db_client: db_client,
  fields: Partial<author_props>
) => Promise<Result<{ author: author_props }, app_error>>;

export type authors_repo = {
  create: create;
  find_unique: find_unique;
};
