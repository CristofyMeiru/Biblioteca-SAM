import { timestamp } from "drizzle-orm/mysql-core";
import { varchar } from "drizzle-orm/mysql-core";
import { mysqlTable } from "drizzle-orm/mysql-core";

export const authors_table = mysqlTable("authors", {
  id: varchar({ length: 60 }).notNull().primaryKey(),
  first_name: varchar({length: 60}).notNull(),
  last_name: varchar({length: 60}).notNull(),
  nacionality: varchar({length: 24}),
  created_at: timestamp({mode: "string"}).defaultNow().notNull(),
});