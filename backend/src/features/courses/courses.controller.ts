import * as courses_model from "@/features/courses/courses.model";
import * as courses_repo from "@/features/courses/courses.repository";
import * as courses_service from "@/features/courses/courses.service";
import { FastifyReply, FastifyRequest } from "fastify";
import { entry_types } from "./courses.entry,schemas";

export const create = async (req: FastifyRequest, reply: FastifyReply) => {
  const data = req.body as entry_types["create"];

  const result_create = await courses_service.create(courses_model, courses_repo, { name: data.name, grade_level: data.grade_level });

  return result_create.match(
    (success) => {
      return reply.status(201).send({
        message: success.message,
        id: success.id,
        name: success.name,
        grade_level: success.grade_level
      });
    },
    (error) => {
      return reply.status(400).send({
        message: error.message,
        err: error.err,
      });
    }
  );
};
