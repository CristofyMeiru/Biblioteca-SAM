import * as contract from "@/features/auth/auth.service.contract";
import { err, ok } from "neverthrow";
import { compare_password, generate_auth_token } from "./auth.utils";

export const auth_me: contract.auth_me = async (admin, data) => {
  const search_result = await admin.service.find_unique_admin(admin.repo);

  return search_result.match(
    async (admin_data) => {
      const pass_match = await compare_password({ password: data.password, hashed_password: admin_data.password });

      if (!pass_match) {
        return err({ message: "Não foi possivel autenticar o usuário.", origin: "[SERVICE]", err: null });
      }

      const auth_token = generate_auth_token({ id: admin_data.id, email: admin_data.email });

      return ok({ message: "Bem vindo novamente!", auth_token });
    },
    (error) => {
      return err({ message: error.message, origin: "[SERVICE]", err: error });
    }
  );
};

export const retrive_admin: contract.retrieve_admin = async (admin, auth_model) => {
  const search_result = await admin.service.find_unique_admin(admin.repo);

  return search_result.match(
    (admin_data) => {
      const sanitized_data = auth_model.sanitize_admin(admin_data);

      return ok(sanitized_data);
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
