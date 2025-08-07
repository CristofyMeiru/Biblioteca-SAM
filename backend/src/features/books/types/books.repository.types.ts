import { book_props_insert, db_client } from "@/shared/types/drizzle.types";
import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";

export type create = (
  db_client: db_client,
  data: book_props_insert
) => Promise<Result<{ id: number; title: string; author_id: string; genre: string | null | undefined }, app_error>>;


export type book_repo = {
    create: create;
}