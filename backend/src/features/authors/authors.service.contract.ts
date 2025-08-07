import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";
import * as dto from "./authors.dto";
import { authors_model } from "./types/authors.model.types";
import { authors_repo } from "./types/authors.repository.types";

export type create = (
  authors_model: authors_model,
  authors_repo: authors_repo,
  data: dto.create
) => Promise<Result<{ message: string; author: { id: string; fullname: string } }, app_error>>;
