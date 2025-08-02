import { db_client } from "@/config/db";
import { err, ok } from "neverthrow";
import * as contract from "./schedules.service.contract";

export const create: contract.create = async (schedule_model, schedule_repo, data) => {
  const new_schedule = schedule_model.create(data);

  const result_create = await schedule_repo.create(db_client, new_schedule);

  return result_create.match(
    (success) => {
      return ok({
        message: "Cronograma registrado com sucesso.",
        ...success,
      });
    },
    (error) => {
      return err({
        ...error,
        origin: "[SERVICE]",
      });
    }
  );
};
