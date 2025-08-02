import { course_props } from "@/shared/types/drizzle.types";

export type create = {
  name: string;
  grade_level: course_props["grade_level"];
};
