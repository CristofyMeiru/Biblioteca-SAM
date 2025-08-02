import { assistent_table } from "@/config/db/tables";
import * as repo_types from "@/features/assistants/types/assistents.repository.types";
import { err, ok } from "neverthrow";

export const create: repo_types.create = async (db_client, assistent_data) => {
  return db_client
    .insert(assistent_table)
    .values(assistent_data)
    .then(() => {
      return ok({
        id: assistent_data.id,
        fullname: `${assistent_data.first_name} ${assistent_data.last_name}`,
      });
    })
    .catch((error) => {
      return err({
        message: "Não foi possivel registrar o monitor.",
        origin: "[REPOSITORY]",
        err: error,
      });
    });
};

export const list_paginated: repo_types.list_paginated = async (db_client, options) => {
  const { skip = 0, limit = 10 } = options;

  return db_client
    .select()
    .from(assistent_table)
    .limit(limit)
    .offset(skip)
    .then(
      (success) => {
        return ok(success);
      },
      (error) => {
        return err({
          message: "Não foi possível listar os monitores.",
          origin: "[REPOSITORY]",
          err: error,
        });
      }
    );
};
