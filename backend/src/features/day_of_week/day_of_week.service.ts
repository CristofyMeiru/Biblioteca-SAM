import { db_client } from "@/config/db";
import { err, ok } from "neverthrow";
import * as contract from "./day_of_week.service.contract";

export const create: contract.create = async (dof_model, dof_repo, data) => {
  const new_day_of_week = dof_model.create({ name: data.name });
  const result_create = await dof_repo.create(db_client, new_day_of_week);

  return result_create.match(
    (success) => {
      return ok({
        message: "Dia da semana registrado.",
        id: success.id,
        name: success.name,
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
