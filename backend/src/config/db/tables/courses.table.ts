import { mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const course_table = mysqlTable("courses", {
  id: varchar({ length: 60 }).notNull().primaryKey(),
  name: varchar({ length: 50 }).notNull(),
  grade_level: mysqlEnum(["1º ano", "2º ano", "3º ano"]).notNull(),
});
