import { db_client } from "@/config/db";
import { err, ok } from "neverthrow";
import * as contract from "./authors.service.contract";

export const create: contract.create = async (authors_model, authors_repo, data) => {
  const new_author = authors_model.create(data);

  const result_create = await authors_repo.create(db_client, new_author);

  return result_create.match(
    (success) => {
      return ok({
        message: "Autor registrado com sucesso.",
        author: {
          id: success.id,
          fullname: success.fullname,
        },
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
