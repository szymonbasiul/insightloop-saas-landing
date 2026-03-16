import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-24">
        <div>
          <div className="inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200">
            AI-powered product analytics
          </div>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Understand your product growth with{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              AI analytics
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            InsightLoop helps product teams track metrics, analyze user behavior,
            and make smarter decisions with a fast, modern analytics platform.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-xl bg-indigo-500 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              Start Free Trial
            </Link>

            <Link
              href="#features"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              Book Demo
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
            <div className="flex -space-x-2">
              <div className="h-10 w-10 rounded-full border border-slate-800 bg-slate-300" />
              <div className="h-10 w-10 rounded-full border border-slate-800 bg-slate-400" />
              <div className="h-10 w-10 rounded-full border border-slate-800 bg-slate-500" />
            </div>
            <p>Trusted by 1,200+ startups and product teams</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Overview</p>
                  <h3 className="text-lg font-semibold text-white">
                    Growth Dashboard
                  </h3>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  +18.4%
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Monthly Revenue</p>
                  <p className="mt-2 text-2xl font-semibold text-white">$48.2K</p>
                  <div className="mt-4 h-24 rounded-xl bg-gradient-to-t from-indigo-500/20 to-transparent" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Active Users</p>
                  <p className="mt-2 text-2xl font-semibold text-white">12,480</p>
                  <div className="mt-4 flex h-24 items-end gap-2">
                    <div className="h-10 w-full rounded-t bg-indigo-400/60" />
                    <div className="h-14 w-full rounded-t bg-indigo-400/70" />
                    <div className="h-20 w-full rounded-t bg-indigo-400/80" />
                    <div className="h-16 w-full rounded-t bg-violet-400/80" />
                    <div className="h-24 w-full rounded-t bg-violet-400/90" />
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-slate-400">Performance Metrics</p>
                  <p className="text-sm text-slate-500">Last 30 days</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Conversion Rate</p>
                    <p className="mt-2 text-xl font-semibold text-white">4.8%</p>
                  </div>
                  <div className="rounded-xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Retention</p>
                    <p className="mt-2 text-xl font-semibold text-white">87%</p>
                  </div>
                  <div className="rounded-xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Engagement</p>
                    <p className="mt-2 text-xl font-semibold text-white">73%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur md:block">
            <p className="text-sm text-slate-400">Weekly Insights</p>
            <p className="mt-2 text-lg font-semibold text-white">
              24 automated recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}