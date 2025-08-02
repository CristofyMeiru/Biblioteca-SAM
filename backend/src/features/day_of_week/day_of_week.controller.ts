import { FastifyReply, FastifyRequest } from "fastify";
import { entry_types } from "./day_of_week.entry.schemas";
import * as dof_model from "./day_of_week.model";
import * as dof_repo from "./day_of_week.repository";
import * as dof_service from "./day_of_week.service";

export const create = async (req: FastifyRequest, reply: FastifyReply) => {
  const { name } = req.body as entry_types["create"];

  const result_create = await dof_service.create(dof_model, dof_repo, { name });

  return result_create.match(
    (success) => {
      return reply.status(201).send({ message: success.message, day: { id: success.id, name: success.name } });
    },
    (error) => {
      return reply.status(400).send({ message: error.message });
    }
  );
};
