import * as controller from "@/features/courses/courses.controller";
import * as entry_types from "@/features/courses/courses.entry,schemas";
import { fastify_typed_instance } from "@/shared/types/fastify.types";

const courses_routes = (instance: fastify_typed_instance) => {
  instance.post("/create", { schema: { body: entry_types.create } }, controller.create);
};

export default courses_routes;
