import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { assistent_table } from "./assistants.table";
import { day_of_week_table } from "./day_of_week.table";

export const schedules_table = mysqlTable("schedules", {
  id: varchar({ length: 60 }).notNull().primaryKey(),
  assistent_id: varchar({ length: 60 })
    .references(() => assistent_table.id, {
      onDelete: "cascade",
      onUpdate: "no action",
    })
    .notNull(),
  day_of_week_id: varchar({ length: 60 })
    .references(() => day_of_week_table.id, {
      onDelete: "cascade",
      onUpdate: "no action",
    })
    .notNull(),
});
