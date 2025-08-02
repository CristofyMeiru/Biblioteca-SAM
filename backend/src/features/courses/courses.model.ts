import { course_props_insert } from "@/shared/types/drizzle.types";
import * as dto from "./courses.dto";

export const create = (data: dto.create): course_props_insert => {
  return {
    id: crypto.randomUUID(),
    name: data.name,
    grade_level: data.grade_level,
  };
};
