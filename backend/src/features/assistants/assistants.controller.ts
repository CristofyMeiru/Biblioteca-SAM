import * as assistent_model from "@/features/assistants/assistants.model";
import * as assistent_repo from "@/features/assistants/assistants.repository";
import * as assistent_service from "@/features/assistants/assistants.service";
import { FastifyReply, FastifyRequest } from "fastify";
import { entry_types } from "./assistant.entry.schemas";

export const create = async (req: FastifyRequest, reply: FastifyReply) => {
  const data = req.body as entry_types["create"];

  const result_create = await assistent_service.create(assistent_model, assistent_repo, data);

  return result_create.match(
    (success) => {
      return reply.status(201).send({ message: success.message, id: success.id, fullname: success.fullname });
    },
    (error) => {
      return reply.status(400).send({ message: error.message, err: error.err });
    }
  );
};

export const list_paginated = async (req: FastifyRequest, reply: FastifyReply) => {
  const { limit, skip } = req.query as entry_types["list_paginated"];

  const result_list = await assistent_service.list_paginated(assistent_repo, { limit, skip });

  return result_list.match(
    (success) => {
      return reply.status(200).send({ message: success.message, assistants: success.assistants });
    },
    (error) => {
      return reply.status(400).send({ message: error.message });
    }
  );
};
