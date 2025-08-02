import * as schemas from "@/config/db/tables";
import { MySql2Database } from "drizzle-orm/mysql2";

export type db_client = MySql2Database<typeof schemas>;

export type admin_props_insert = typeof schemas.admin_table.$inferInsert;
export type admin_props = typeof schemas.admin_table.$inferSelect;

export type assistent_props_insert = typeof schemas.assistent_table.$inferInsert;
export type assistent_props = typeof schemas.assistent_table.$inferSelect;

export type course_props_insert = typeof schemas.course_table.$inferInsert;
export type course_props = typeof schemas.course_table.$inferSelect;

export type schedule_props_insert = typeof schemas.schedules_table.$inferInsert;
export type schedule_props = typeof schemas.schedules_table.$inferSelect;

export type day_of_week_props_insert = typeof schemas.day_of_week_table.$inferInsert;
export type day_of_week_props = typeof schemas.day_of_week_table.$inferSelect;

