import { day_of_week_table } from "@/config/db/tables";
import { err, ok } from "neverthrow";
import * as repo_types from "./types/day_of_week.repository.types";

export const create: repo_types.create = async (db_client, data) => {
  return db_client
    .insert(day_of_week_table)
    .values(data)
    .then(
      (success) => {
        return ok({
          id: data.id,
          name: data.name,
        });
      },
      (error) => {
        return err({
          message: "Não foi possível registrar o dia da semana.",
          origin: "[REPOSITORY]",
          err: error,
        });
      }
    );
};
