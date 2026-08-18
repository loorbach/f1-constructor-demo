import type { Route } from "next";
import Link from "next/link";
import { getConstructorTotalPoints } from "@/lib/queries/getConstructorTotalPoints";
import { cn } from "@/lib/utils";

export default async function ConstructorLeaderboard() {
  const totalPoints = await getConstructorTotalPoints();

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-6 py-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        <p>Constructor</p>
        <p>Points</p>
      </div>
      {totalPoints.map((team, index) => (
        <div
          key={team.id}
          className="flex items-center justify-between px-6 py-5 transition hover:bg-secondary/50"
        >
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "min-w-5 tabular-nums text-sm font-medium",
                index === 0 ? "text-primary" : "text-muted-foreground",
              )}
            >
              {index + 1}
            </span>
            <div>
              {/* TODO: make route easier to press */}
              <Link href={`/constructor/${team.id}` as Route}>
                <p className="font-medium">{team.name}</p>
              </Link>

              <p className="text-sm text-muted-foreground">{`${team.firstRace?.substring(0, 4)}-${team.lastRace?.substring(0, 4)}`}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="tabular-nums font-medium">
              {team.totalPoints.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
