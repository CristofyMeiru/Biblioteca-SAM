import { FastifyReply, FastifyRequest } from "fastify";
import { entry_types } from "./schedule.entry.schemas";
import * as schedule_model from "./schedules.model";
import * as schedule_repo from "./schedules.repository";
import * as schedule_service from "./schedules.service";

export const create = async (req: FastifyRequest, reply: FastifyReply) => {
  const { assistent_id, day_of_week_id } = req.body as entry_types["create"];

  const result_create = await schedule_service.create(schedule_model, schedule_repo, { assistent_id, day_of_week_id });

  return result_create.match(
    (success) => {
      return reply.status(201).send({
        message: success.message,
        schedule: { id: success.id, assistant_id: success.assistant_id, day_of_week_id: success.day_id },
      });
    },
    (error) => {
      return reply.status(400).send({ message: error.message });
    }
  );
};
