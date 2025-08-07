import { book_table } from "@/config/db/tables";
import { err, ok } from "neverthrow";
import * as repo_types from "./types/books.repository.types";

export const create: repo_types.create = async (db_client, data) => {
  return db_client
    .insert(book_table)
    .values(data)
    .then(([success]) => {
      return ok({
        id: success.insertId,
        title: data.title,
        author_id: data.author_id,
        genre: data.genre,
      });
    })
    .catch((error) => {
      return err({
        message: "Não foi possivel registrar o livro.",
        origin: "[REPOSITORY]",
        err: error,
      });
    });
};
