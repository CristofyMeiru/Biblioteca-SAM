import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { book_table } from "./books.table";
import { students_table } from "./students.table";
import { int } from "drizzle-orm/mysql-core";

export const book_loans = mysqlTable("book_loans", {
  id: varchar({ length: 60 }).notNull().primaryKey(),
  student_id: varchar({ length: 60 })
    .notNull()
    .references(() => students_table.id),
  book_id: int({unsigned: true})
    .notNull()
    .references(() => book_table.id),
});
