return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-10 px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
            ImpactGrok
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Your personal impact co-pilot.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-400">
            Maximize the good from your money, time, and influence. Built for
            ordinary people who want their choices to help humanity.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <Coins className="mb-3 h-5 w-5 text-emerald-400" />
<h2 className="font-medium">Money</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Put every dollar where it does the most good.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <Clock className="mb-3 h-5 w-5 text-emerald-400" />
            <h2 className="font-medium">Time</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Spend hours on work that actually moves the needle.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <Users className="mb-3 h-5 w-5 text-emerald-400" />
            <h2 className="font-medium">Influence</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Turn conversations and networks into real-world change.
            </p>
          </div>
        </div>

        <div>
          <button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-zinc-950">
            <Sparkles className="h-4 w-4" />
            Start my impact plan
          </button>
          <p className="mt-3 text-sm text-zinc-500">
            Free to start. More power when you need it.
          </p>
        </div>
      </div>
    </main>
  );
}
