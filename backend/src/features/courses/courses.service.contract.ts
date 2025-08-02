import { app_error } from "@/shared/types/error.types";
import { Result } from "neverthrow";
import * as dto from "./courses.dto";
import { courses_model } from "./types/courses.model.types";
import { courses_repo } from "./types/courses.repository.types";

export type create = (
  courses_model: courses_model,
  courses_repo: courses_repo,
  data: dto.create
) => Promise<Result<{ message: string; id: string; name: string, grade_level: string }, app_error>>;
