import { desc, eq, max, min, sql } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";
import { db } from "@/db";
import {
  constructorAliasMap,
  constructorResultsTable,
  constructorsTable,
  racesTable,
} from "@/db/schema";

const team = alias(constructorsTable, "team");
const primaryTeam = alias(constructorsTable, "main");
const races = alias(racesTable, "races");
const results = alias(constructorResultsTable, "results");
const totalPoints = sql<number>`SUM(${results.points})`.as("total_points");

export async function getConstructorTotalPoints() {
  return db
    .select({
      id: primaryTeam.id,
      name: primaryTeam.name,
      totalPoints,
      firstRace: min(races.date),
      lastRace: max(races.date),
    })
    .from(results)
    .innerJoin(races, eq(results.raceId, races.id))
    .innerJoin(team, eq(results.constructorId, team.id))
    .leftJoin(
      constructorAliasMap,
      eq(team.id, constructorAliasMap.aliasConstructorId),
    )
    .innerJoin(
      primaryTeam,
      sql`${primaryTeam.id} = coalesce(${constructorAliasMap.primaryConstructorId}, ${team.id})`,
    )
    .groupBy(primaryTeam.id, primaryTeam.name)
    .orderBy(desc(totalPoints))
    .limit(10);
}
