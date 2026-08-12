import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const constructorsTable = pgTable("constructors", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  constructorRef: varchar({ length : 32 }).notNull().unique(),
  name: varchar({ length : 48 }).notNull(),
  nationality: varchar({ length: 64 }).notNull(),
  url: text().notNull()
});
