import { fastify_typed_instance } from "@/shared/types/fastify.types";
import * as controller from "./schedule.controller";
import * as entry_types from "./schedule.entry.schemas";

const schedule_routes = (instance: fastify_typed_instance) => {
  instance.post(
    "/create",
    {
      schema: {
        body: entry_types.create,
      },
    },
    controller.create
  );
};

export default schedule_routes;
