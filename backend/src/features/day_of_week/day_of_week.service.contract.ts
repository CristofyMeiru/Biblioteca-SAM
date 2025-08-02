import { day_of_week_props } from "@/shared/types/drizzle.types";
import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";
import { dof_model } from "./types/day_of_week.model.types";
import { dof_repo } from "./types/day_of_week.repository.types";

export type create = (
  dof_model: dof_model,
  dof: dof_repo,
  data: { name: day_of_week_props["name"] }
) => Promise<Result<{ message: string; id: string; name: string }, app_error>>;
