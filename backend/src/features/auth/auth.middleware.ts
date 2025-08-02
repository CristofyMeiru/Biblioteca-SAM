import { fastify_typed_instance } from "@/shared/types/fastify.types";
import { FastifyReply, FastifyRequest } from "fastify";
import { auth_token_verify } from "@/features/auth/auth.utils";

const ignore_paths = ["/auth/auth_me", "/admin/create"];

export const auth_middleware = (instance: fastify_typed_instance) => {
  instance.addHook("onRequest", async (req: FastifyRequest, reply: FastifyReply) => {
    const is_ignorable_path: boolean = ignore_paths.includes(req.originalUrl);

    if (!is_ignorable_path) {
      const auth_token = req.headers.authorization?.split(" ")[1];

      console.log(auth_token);

      if (!auth_token) return reply.status(401).send({ message: "Acesso negado." });

      const result_decode = auth_token_verify(auth_token);

      result_decode.match(
        (user_data) => {
          req.user = user_data;
        },
        (error) => {
          return reply.status(401).send({ message: "Acesso negado." });
        }
      );
    }
  });
};
