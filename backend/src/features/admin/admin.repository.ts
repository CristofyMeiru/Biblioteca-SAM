import { admin_table } from "@/config/db/tables";
import * as repo_types from "@/features/admin/types/admin.repository.types";
import { eq } from "drizzle-orm";
import { err, ok } from "neverthrow";

export const create: repo_types.create = async (db_client, admin_data) => {
  return db_client
    .insert(admin_table)
    .values(admin_data)
    .then(() => ok({ message: "Admin registrado.", id: admin_data.id }))
    .catch((error) => err({ message: "Erro ao criar admin.", origin: "[REPOSITORY]", err: error }));
};

export const find_unique_admin: repo_types.find_unique_admin = async (db_client) => {
  return db_client
    .select()
    .from(admin_table)
    .where(eq(admin_table.identifier, "admin"))
    .then(([admin_data]) => {
      return ok(admin_data);
    })
    .catch((error) => {
      return err({
        message: "Não foi possivel encontrar o admin.",
        origin: "[REPOSITORY]",
        err: error,
      });
    });
};
