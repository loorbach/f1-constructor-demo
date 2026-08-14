import { Suspense } from "react";
import ConstructorLeaderboard from "@/components/constructor-leaderboard";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-8 py-12">
        <Header />
        <section className="mt-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Constructor rankings
              </h3>
              <p className="text-muted-foreground">
                Sorted by championship success
              </p>
            </div>

            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline"
            >
              View methodology
            </button>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <ConstructorLeaderboard />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
