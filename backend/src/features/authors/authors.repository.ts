import { authors_table } from "@/config/db/tables";
import { and, eq } from "drizzle-orm";
import { err, ok } from "neverthrow";
import * as repo_types from "./types/authors.repository.types";

export const create: repo_types.create = async (db_client, data) => {
  return db_client
    .insert(authors_table)
    .values(data)
    .then((success) => {
      return ok({
        id: data.id,
        fullname: `${data.first_name} ${data.last_name}`,
      });
    })
    .catch((error) => {
      return err({
        message: "Não foi possivel registrar o usuário.",
        origin: "[REPOSITORY]",
        err: error,
      });
    });
};

export const find_unique: repo_types.find_unique = (db_client, fields) => {
  const allowedFilters: Partial<Record<keyof typeof authors_table, any>> = {
    id: authors_table.id,
    first_name: authors_table.first_name,
    last_name: authors_table.last_name,
    nacionality: authors_table.nacionality,
  };

  const conditions = Object.entries(fields).flatMap(([key, value]) => {
    const column = allowedFilters[key as keyof typeof allowedFilters];

    if (column && value !== undefined) {
      return [eq(column, value)];
    }

    return [];
  });

  return db_client
    .select()
    .from(authors_table)
    .where(and(...conditions))
    .then(([success]) => {
      return ok({ author: success });
    })
    .catch((error) => {
      return err({ message: "Não foi possivel encontrar o autor", origin: "[REPOSITORY]", err: error });
    });
};
