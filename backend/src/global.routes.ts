import admin_routes from "./features/admin/admin.routes";
import assistent_routes from "./features/assistants/assistants.routes";
import { auth_middleware } from "./features/auth/auth.middleware";
import auth_routes from "./features/auth/auth.routes";
import courses_routes from "./features/courses/courses.routes";
import dof_routes from "./features/day_of_week/day_of_week.routes";
import schedule_routes from "./features/schedules/schedule.routes";
import { fastify_typed_instance } from "./shared/types/fastify.types";

const global_routes = (instance: fastify_typed_instance) => {
  auth_middleware(instance);

  instance.register(admin_routes, { prefix: "admin" });
  instance.register(auth_routes, { prefix: "auth" });
  instance.register(assistent_routes, { prefix: "assistants" });
  instance.register(courses_routes, { prefix: "courses" });
  instance.register(dof_routes, { prefix: "day_of_week" });
  instance.register(schedule_routes, { prefix: "schedule" });
};

export default global_routes;
