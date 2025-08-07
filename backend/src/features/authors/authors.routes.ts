import { fastify_typed_instance } from "@/shared/types/fastify.types";
import * as controller from "./authors.controller";
import * as schemas from "./authors.entry.schemas";

const authors_routes = (instance: fastify_typed_instance) => {
  instance.post("/create", { schema: { body: schemas.create } }, controller.create);
};

export default authors_routes;
