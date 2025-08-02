import { int, mysqlEnum, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { course_table } from "./courses.table";

export const students_table = mysqlTable("students", {
  id: varchar({ length: 60 }).notNull().primaryKey(),
  fullname: varchar({ length: 130 }).notNull(),
  grade_level: mysqlEnum(["1º ano", "2º ano", "3º ano"]).notNull(),
  call_number: int().notNull(),
  course_id: varchar({ length: 60 })
    .notNull()
    .references(() => course_table.id),
  created_at: timestamp({ mode: "string" }).defaultNow(),
});
