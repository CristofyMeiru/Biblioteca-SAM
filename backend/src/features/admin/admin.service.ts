import { db_client } from "@/config/db";
import { err, ok, Result } from "neverthrow";
import * as contract from "./admin.service.contract";
import { app_error } from "@/shared/types/error.types";

export const create: contract.create = async (model, repository, data) => {
  const find_admin = await find_unique_admin(repository);

  const already_exists: Result<null, app_error> = find_admin.match(
    (admin_data) => {
      if (admin_data) {
        return err({
          message: "Admin já existente.",
          origin: "[SERVICE]",
          err: null,
        });
      }
      return ok(null);
    },
    (error) => {
      return err({
        message: error.message,
        origin: "[SERVICE]",
        err: error.err,
      });
    }
  );

  if (already_exists?.isErr()) return already_exists;

  const new_admin = await model.create({ email: data.email, password: data.password });

  const result_creation = await repository.create(db_client, new_admin);

  return result_creation.match(
    (success) => {
      return ok(success);
    },
    (error) => {
      return err({
        message: "Não foi possivel cadastrar admin.",
        origin: "[SERVICE]",
        err: error,
      });
    }
  );
};

export const find_unique_admin: contract.find_unique_admin = async (repository) => {
  const result_search = await repository.find_unique_admin(db_client);

  return result_search.match(
    (admin_data) => {
      return ok(admin_data);
    },
    (error) => {
      return err({
        message: "Não foi possivel encontrar o admin",
        origin: "[SERVICE]",
        err: error,
      });
    }
  );
};
