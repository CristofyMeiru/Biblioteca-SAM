import { FastifyReply, FastifyRequest } from "fastify";
import { entry_types } from "./authors.entry.schemas";
import * as author_model from "./authors.model";
import * as author_repo from "./authors.repository";
import * as author_service from "./authors.service";

export const create = async (req: FastifyRequest, reply: FastifyReply) => {
  const { first_name, last_name, nacionality } = req.body as entry_types["create"];

  const result_create = await author_service.create(author_model, author_repo, { first_name, last_name, nacionality });

  return result_create.match((success)=> {
    return reply.status(201).send({message: success.message, author: success.author})
  }, (error)=> {
    return reply.status(400).send({message: error.message})
  })
};
