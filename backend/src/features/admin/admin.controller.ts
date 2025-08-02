import * as admin_model from "@/features/admin/admin.model";
import * as admin_repo from "@/features/admin/admin.repository";
import * as admin_service from "@/features/admin/admin.service";
import * as entry_schemas from "@/features/admin/types/admin.entry.schemas.types";
import { FastifyReply, FastifyRequest } from "fastify";

export const create = async (req: FastifyRequest, reply: FastifyReply) => {
  const { email, password } = req.body as entry_schemas.create;

  const result_create = await admin_service.create(admin_model, admin_repo, { email, password });

  result_create.match(
    (success) => {
      return reply.status(201).send({ message: success?.message, id: success?.id });
    },
    (error) => {
      return reply.status(400).send({ message: error.message });
    }
  );
};