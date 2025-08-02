import { db_client } from "@/config/db";
import * as contract from "@/features/assistants/assistants.service.contract";
import { err, ok } from "neverthrow";

export const create: contract.create = async (model, repo, data) => {
  const new_assistent = model.create(data);
  const result_create = await repo.create(db_client, new_assistent);

  return result_create.match(
    (success) => {
      return ok({
        message: "Monitor registrado com sucesso.",
        id: success.id,
        fullname: success.fullname,
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

export const list_paginated: contract.list_paginated = async (assistant_repo, options) => {
  const result_list = await assistant_repo.list_paginated(db_client, options);

  return result_list.match(
    (success) => {
      return ok({
        message: "Lista de monitores.",
        assistants: success,
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
