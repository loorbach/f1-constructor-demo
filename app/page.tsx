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
