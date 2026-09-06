export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-8">
      <div className="max-w-xl space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          ImpactGrok
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Scaffold is up.
        </h1>
        <p className="text-zinc-400">
          Next.js, TypeScript, and Tailwind are in place. Next we build the
          first real screen.
        </p>
      </div>
    </main>
  );
}
