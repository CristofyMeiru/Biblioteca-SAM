import * as entry_types from "@/features/assistants/assistant.entry.schemas";
import * as controller from "@/features/assistants/assistants.controller";
import { fastify_typed_instance } from "@/shared/types/fastify.types";

const assistent_routes = (instance: fastify_typed_instance) => {
  instance.post(
    "/create",
    {
      schema: {
        tags: ["assistants"],
        body: entry_types.create,
      },
    },
    controller.create
  );

  instance.get("/list", { schema: { querystring: entry_types.list_paginated } }, controller.list_paginated);
};

export default assistent_routes;
