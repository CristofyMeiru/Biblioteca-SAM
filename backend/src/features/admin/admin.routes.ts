import * as controller from "@/features/admin/admin.controller";
import { fastify_typed_instance } from "@/shared/types/fastify.types";

const admin_routes = (instance: fastify_typed_instance) => {
  instance.post("/create", controller.create);
};


export default admin_routes