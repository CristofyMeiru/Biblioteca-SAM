import { assistent_props } from "@/shared/types/drizzle.types";
import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";
import { create_dto, list_paginated_options } from "./assistant.dto";
import { assistent_model } from "./types/assistents.model.types";
import { assistent_repo } from "./types/assistents.repository.types";

export type create = (
  model: assistent_model,
  assistent_repo: assistent_repo,
  data: create_dto
) => Promise<Result<{ message: string; id: string; fullname: string }, app_error>>;

export type list_paginated = (
  assistant_repo: assistent_repo,
  options: list_paginated_options
) => Promise<Result<{ message: string; assistants: assistent_props[] }, app_error>>;
