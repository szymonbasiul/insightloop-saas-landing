const highlights = [
  "Monitor growth metrics in real time",
  "Turn raw data into actionable insights",
  "Share dashboards across your team",
];

export default function ProductPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
            Product Preview
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
            See your product data in one clear and actionable workspace
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            From acquisition to retention, InsightLoop gives teams a complete
            view of performance with dashboards designed for speed, clarity, and
            better decisions.
          </p>

          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-bold text-indigo-200">
                  ✓
                </div>
                <p className="text-base leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur">
            <div className="rounded-[24px] border border-white/10 bg-slate-950/90 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Analytics Workspace</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    Product Performance
                  </h3>
                </div>

                <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Live data
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm text-slate-400">Revenue</p>
                  <p className="mt-2 text-2xl font-semibold text-white">$48.2K</p>
                  <p className="mt-2 text-sm text-emerald-300">+12.4%</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm text-slate-400">Users</p>
                  <p className="mt-2 text-2xl font-semibold text-white">12.4K</p>
                  <p className="mt-2 text-sm text-emerald-300">+8.1%</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm text-slate-400">Conversion</p>
                  <p className="mt-2 text-2xl font-semibold text-white">4.8%</p>
                  <p className="mt-2 text-sm text-emerald-300">+1.2%</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">Growth overview</p>
                  <p className="text-sm text-slate-500">Last 6 months</p>
                </div>

                <div className="mt-6 flex h-48 items-end gap-3">
                  <div className="h-[30%] w-full rounded-t-xl bg-indigo-500/40" />
                  <div className="h-[42%] w-full rounded-t-xl bg-indigo-500/50" />
                  <div className="h-[48%] w-full rounded-t-xl bg-indigo-500/60" />
                  <div className="h-[58%] w-full rounded-t-xl bg-indigo-500/70" />
                  <div className="h-[72%] w-full rounded-t-xl bg-violet-500/80" />
                  <div className="h-[88%] w-full rounded-t-xl bg-violet-500/90" />
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">Recent activity</p>
                  <p className="text-sm text-slate-500">Updated 2 min ago</p>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">
                        New onboarding flow launched
                      </p>
                      <p className="text-xs text-slate-400">
                        User activation increased by 14%
                      </p>
                    </div>
                    <span className="text-xs text-emerald-300">+14%</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Checkout funnel optimized
                      </p>
                      <p className="text-xs text-slate-400">
                        Conversion rate improved this week
                      </p>
                    </div>
                    <span className="text-xs text-emerald-300">+6.8%</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Churn risk segment detected
                      </p>
                      <p className="text-xs text-slate-400">
                        AI flagged retention drop in one cohort
                      </p>
                    </div>
                    <span className="text-xs text-amber-300">Alert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur md:block">
            <p className="text-sm text-slate-400">AI Summary</p>
            <p className="mt-2 text-lg font-semibold text-white">
              Revenue is trending up for 6 weeks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}