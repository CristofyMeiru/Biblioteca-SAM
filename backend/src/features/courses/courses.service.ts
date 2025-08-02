import { db_client } from "@/config/db";
import * as contract from "@/features/courses/courses.service.contract";
import { err, ok } from "neverthrow";

export const create: contract.create = async (courses_model, courses_repo, data) => {
  const new_course = courses_model.create({ name: data.name, grade_level: data.grade_level });

  const result_create = await courses_repo.create(db_client, new_course);

  return result_create.match(
    (success) => {
      return ok({
        message: "Curso registrado com sucesso.",
        id: success.id,
        name: success.name,
        grade_level: success.grade_level
      });
    },
    (error) => {
      return err({
        message: error.message,
        origin: "[SERVICE]",
        err: error.err,
      });
    }
  );
};
