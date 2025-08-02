import { course_table } from "@/config/db/tables";
import * as repo_types from "@/features/courses/types/courses.repository.types";
import { err, ok } from "neverthrow";

export const create: repo_types.create = async (db_client, data) => {
  return db_client
    .insert(course_table)
    .values(data)
    .then(
      (success) => {
        return ok({
          id: data.id,
          name: data.name,
          grade_level: data.grade_level,
        });
      },
      (error) => {
        return err({
          message: "Não foi possível registrar o curso",
          origin: "[REPOSITORY]",
          err: error,
        });
      }
    );
};
