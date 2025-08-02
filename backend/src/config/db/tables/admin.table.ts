import { int, varchar, mysqlTable } from "drizzle-orm/mysql-core";

export const admin_table = mysqlTable("admins", {
  id: varchar({length: 60}).notNull().primaryKey(),
  identifier: varchar({length: 100}).notNull(),
  email: varchar({length: 100}).notNull().unique(),
  password: varchar({length: 100}).notNull()
});