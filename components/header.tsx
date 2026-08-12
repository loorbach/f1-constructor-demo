export default function Header() {
  return (
    <header className="mb-10 border-b border-border pb-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
          Constructor analytics
        </p>
        <h1 className="mt-2 font-heading text-5xl font-semibold tracking-tight text-foreground">
          Formula one constructor index
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Historical performance across Formula 1 since 1950, ranked by
          championships, race wins, podiums, and long-term dominance.
        </p>
      </div>
    </header>
  );
}
