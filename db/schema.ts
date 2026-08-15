import { date, doublePrecision, integer, pgTable, text, time, unique, varchar } from "drizzle-orm/pg-core";

export const constructorsTable = pgTable("constructors", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  constructorRef: varchar("constructor_ref", { length : 32 }).notNull().unique(),
  name: varchar({ length : 48 }).notNull(),
  nationality: varchar({ length: 64 }).notNull(),
  url: text().notNull()
});

export const circuitsTable = pgTable("circuits", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  circuitRef: varchar("circuit_ref", { length : 32 }).notNull().unique(),
  name: varchar({ length : 128 }).notNull(),
  location: varchar({ length : 64 }).notNull(),
  country: varchar({ length: 64 }).notNull(),
  lat: doublePrecision().notNull(),
  lng: doublePrecision().notNull(),
  alt: integer().notNull(),
  url: text().notNull()
});

export const racesTable = pgTable("races", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  year: integer().notNull(),
  round: integer().notNull(),
  circuitId: integer("circuit_id").notNull().references(() => circuitsTable.id),
  name: varchar({ length : 128 }).notNull(),
  date: date().notNull(),
  time: time(),
  url: text().notNull()
}, (table) => [
  unique().on(table.year, table.round)
]);

export const constructorResultsTable = pgTable("constructor_results", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  raceId: integer("race_id").notNull().references(() => racesTable.id),
  constructorId: integer("constructor_id").notNull().references(() => constructorsTable.id),
  points: doublePrecision().notNull(), 
}, (table) => [
  unique().on(table.raceId, table.constructorId)
]);

export const constructorAliasMap = pgTable("constructor_alias_map", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  aliasConstructorId: integer("alias_constructor_id").notNull().unique().references(() => constructorsTable.id),
  primaryConstructorId: integer("primary_constructor_id").notNull().references(() => constructorsTable.id)
}, (table) => [
  unique().on(table.primaryConstructorId, table.aliasConstructorId)
])
