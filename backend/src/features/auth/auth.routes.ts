import * as controller from "@/features/auth/auth.controller";
import * as entry_schemas from "@/features/auth/auth.entry.schemas";
import { fastify_typed_instance } from "@/shared/types/fastify.types";

const auth_routes = (instance: fastify_typed_instance) => {
  instance.post(
    "/auth_me",
    {
      schema: {
        body: entry_schemas.auth_me,
      },
    },
    controller.auth_me
  );

  instance.get("/retrieve_admin", controller.retrieve_admin);
};

export default auth_routes;
