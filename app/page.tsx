export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-8 py-12">
        <header className="mb-10 flex items-center justify-between border-b border-border pb-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Constructor analytics
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-tight">
              Formula 1 constructor index
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Historical performance across Formula 1 since 1950, ranked by
              championships, race wins, podiums, and long-term dominance.
            </p>
          </div>

          <button
            type="button"
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
          >
            Favorites
          </button>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              Most successful constructor
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Ferrari</h2>
            <p className="mt-1 text-primary">16 championships</p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Race wins</p>
            <h2 className="mt-4 text-3xl font-semibold">248</h2>
            <p className="mt-1 text-muted-foreground">Historical total</p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Seasons analyzed</p>
            <h2 className="mt-4 text-3xl font-semibold">76</h2>
            <p className="mt-1 text-muted-foreground">1950–2025</p>
          </div>
        </section>

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

          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="border-b border-border px-6 py-4 text-sm font-medium text-muted-foreground">
              Top constructors of all time
            </div>

            <div className="divide-y divide-border">
              <div className="flex items-center justify-between px-6 py-5 transition hover:bg-secondary/50">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-primary">01</span>
                  <div>
                    <p className="font-medium">Ferrari</p>
                    <p className="text-sm text-muted-foreground">
                      1950–present
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">16 titles</p>
                  <p className="text-sm text-muted-foreground">248 wins</p>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-5 transition hover:bg-secondary/50">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-muted-foreground">
                    02
                  </span>
                  <div>
                    <p className="font-medium">Williams</p>
                    <p className="text-sm text-muted-foreground">
                      1977–present
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">9 titles</p>
                  <p className="text-sm text-muted-foreground">114 wins</p>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-5 transition hover:bg-secondary/50">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-muted-foreground">
                    03
                  </span>
                  <div>
                    <p className="font-medium">McLaren</p>
                    <p className="text-sm text-muted-foreground">
                      1966–present
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">8 titles</p>
                  <p className="text-sm text-muted-foreground">189 wins</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
