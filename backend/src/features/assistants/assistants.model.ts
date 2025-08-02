import { assistent_props_insert } from "@/shared/types/drizzle.types";

type create_props = {
  first_name: string;
  last_name: string;
  grade_level: "1º ano" | "2º ano" | "3º ano";
  course_id: string;
  student_class_number: number;
};
export const create = (data: create_props): assistent_props_insert => {
  return {
    id: crypto.randomUUID(),
    first_name: data.first_name,
    last_name: data.last_name,
    course_id: data.course_id,
    grade_level: data.grade_level,
    student_class_number: data.student_class_number,
    absence_count: 0,
  };
};
