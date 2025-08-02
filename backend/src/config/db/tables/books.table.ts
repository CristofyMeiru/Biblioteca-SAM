import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { authors_table } from "./authors.table";

export const book_table = mysqlTable("books", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  author_id: varchar({ length: 60 })
    .notNull()
    .references(() => authors_table.id),
  publisher: varchar({ length: 100 }).notNull(),
  material_type: varchar({ length: 50 }),
  aquisition_method: varchar({ length: 50 }),
  pages_quantity: int(),
  genre: varchar({ length: 30 }),
  isbn: varchar({ length: 60 }),
  quantity: int().notNull(),
  loaned_quantity: int().default(0),
  cdd_or_cdu: varchar({ length: 60 }),
  tombo: varchar({ length: 60 }),
  edition: varchar({ length: 50 }),
  created_at: timestamp({ mode: "string" }).defaultNow().notNull(),
});
