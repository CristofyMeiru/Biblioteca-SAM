import { assistent_props, assistent_props_insert, db_client } from "@/shared/types/drizzle.types";
import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";
import { list_paginated_options } from "../assistant.dto";

export type create = (
  db_client: db_client,
  assistent_data: assistent_props_insert
) => Promise<Result<{ id: string; fullname: string }, app_error>>;

export type list_paginated = (
  db_client: db_client,
  options: list_paginated_options
) => Promise<Result<assistent_props[], app_error>>;

export type assistent_repo = {
  create: create;
  list_paginated: list_paginated;
};
