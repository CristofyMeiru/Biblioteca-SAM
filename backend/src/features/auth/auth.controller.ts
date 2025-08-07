import * as auth_model from "@/features/auth/auth.model";
import * as auth_service from "@/features/auth/auth.service";
import * as entry_schemas from "@/features/auth/types/auth.entry.schemas.types";
import { features } from "@/shared/utils/features.bundle";
import { FastifyReply, FastifyRequest } from "fastify";

export const auth_me = async (req: FastifyRequest, reply: FastifyReply) => {
  const { password } = req.body as entry_schemas.auth_me;
  
  const result_authentication = await auth_service.auth_me(features.admin, { password });

  return result_authentication.match(
    (success) => {
      return reply.status(200).send({ message: success.message, auth_token: success.auth_token });
    },
    (error) => {
      
      return reply.status(401).send({ message: error.message });
    }
  );
};

export const retrieve_admin = async (req: FastifyRequest, reply: FastifyReply) => {
  const result_retrieve = await auth_service.retrive_admin(features.admin, auth_model);

  return result_retrieve.match(
    (success) => {
      return reply.status(200).send({ message: "Dados retornatos com sucesso.", admin_data: success });
    },
    (error) => {
      reply.status(400).send({ message: error.message });
    }
  );
};
