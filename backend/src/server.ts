import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { get_env } from "./shared/utils/get_env";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import global_routes from "./global.routes";

export const app = Fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();

export function init_server() {
  const PORT = Number(get_env("PORT"));
  const HOST = "0.0.0.0";

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.register(fastifyCors, { origin: "*" });

  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Biblioteca EP.",
        version: "1.0.0",
      },
    },
    transform: jsonSchemaTransform,
  });

  app.register(fastifySwaggerUI, {
    routePrefix: "/docs",
  });
  
  app.register(global_routes)
  
  return app.listen({ port: PORT, host: HOST }).catch((err) => console.error(err));
}

init_server();
