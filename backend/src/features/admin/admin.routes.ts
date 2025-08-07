import * as controller from "@/features/admin/admin.controller";
import { fastify_typed_instance } from "@/shared/types/fastify.types";
import * as entry_types from "./admin.entry.schemas";

const admin_routes = (instance: fastify_typed_instance) => {
  instance.post("/create", { schema: { body: entry_types.create } }, controller.create);
};

export default admin_routes;
