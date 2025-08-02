import { fastify_typed_instance } from "@/shared/types/fastify.types";
import * as controller from "./day_of_week.controller";
import * as entry_schemas from "./day_of_week.entry.schemas";

const dof_routes = (instance: fastify_typed_instance) => {
  instance.post("/create", { schema: { body: entry_schemas.create } }, controller.create);
};


export default dof_routes;