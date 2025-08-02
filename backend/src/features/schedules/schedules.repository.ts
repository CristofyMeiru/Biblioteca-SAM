import { schedules_table } from "@/config/db/tables";
import { err, ok } from "neverthrow";
import * as repo_types from "./types/schedule.repository.types";

export const create: repo_types.create = async (db_client, data) => {
  return db_client
    .insert(schedules_table)
    .values(data)
    .then(
      (success) => {
        return ok({
          id: data.id,
          assistant_id: data.assistent_id,
          day_id: data.day_of_week_id,
        });
      },
      (error) => {
        return err({
          message: "Não foi possível registrar o cronograma.",
          origin: "[REPOSITORY]",
          err: error,
        });
      }
    );
};
