import { mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const day_of_week_table = mysqlTable("day_of_week", {
  id: varchar({ length: 60 }).notNull().primaryKey(),
  name: mysqlEnum(["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]).notNull(),
});
