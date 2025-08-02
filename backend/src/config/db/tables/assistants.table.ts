import { int, mysqlEnum, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { course_table } from "./courses.table";

export const assistent_table = mysqlTable("assistants", {
  id: varchar({ length: 60 }).notNull().primaryKey(),
  first_name: varchar({ length: 60 }).notNull(),
  last_name: varchar({ length: 60 }).notNull(),
  course_id: varchar({ length: 60 })
    .references(() => course_table.id)
    .notNull(),
  student_class_number: int().notNull(),
  absence_count: int().notNull(),
  created_at: timestamp({ mode: "string" }).defaultNow().notNull(),
});
