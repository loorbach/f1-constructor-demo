import { getConstructorTotalPoints } from "@/lib/queries/getConstructorTotalPoints";

export default async function ConstructorLeaderboard() {
  const totalPoints = await getConstructorTotalPoints();
  console.log(totalPoints);

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="flex justify-between text-center border-b border-border px-6 py-4 text-sm font-medium text-muted-foreground">
        <p>Top constructors of all time</p>
        <p>Points</p>
      </div>
      {totalPoints.map((team, index) => (
        <div
          key={team.id}
          className="flex items-center justify-between px-6 py-5 transition hover:bg-secondary/50"
        >
          <div className="flex items-center gap-4">
            <span className="min-w-5 text-lg font-semibold text-primary">
              {index + 1}
            </span>
            <div className="">
              <p className="font-medium text-lg">{team.name}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-secondary-foreground">{team.totalPoints}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
