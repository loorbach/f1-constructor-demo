import { desc, eq, sum } from "drizzle-orm";
import { db } from "@/db";
import { constructorResultsTable, constructorsTable } from "@/db/schema";

export async function getConstructorTotalPoints() {
  return db
    .select({
      id: constructorsTable.id,
      name: constructorsTable.name,
      totalPoints: sum(constructorResultsTable.points),
    })
    .from(constructorResultsTable)
    .innerJoin(
      constructorsTable,
      eq(constructorResultsTable.constructorId, constructorsTable.id),
    )
    .groupBy(constructorsTable.id, constructorsTable.name)
    .orderBy(desc(sum(constructorResultsTable.points)))
    .limit(10);
}
