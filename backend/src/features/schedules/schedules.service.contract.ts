import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";
import { schedule_model } from "./types/schedule.model.types";
import { schedule_repo } from "./types/schedule.repository.types";

export type create = (
  schedule_model: schedule_model,
  schedule_repo: schedule_repo,
  data: { assistent_id: string; day_of_week_id: string }
) => Promise<Result<{ message: string; id: string; assistant_id: string; day_id: string }, app_error>>;
