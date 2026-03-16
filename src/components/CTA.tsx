import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-slate-900 to-violet-500/10 px-6 py-16 text-center shadow-2xl backdrop-blur md:px-12">
          <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200">
              Get started today
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Start building a clearer product growth strategy with InsightLoop
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Give your team the tools to track performance, uncover insights,
              and make smarter product decisions with a modern analytics
              platform.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#pricing"
                className="rounded-xl bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
              >
                Start Free Trial
              </Link>

              <Link
                href="#features"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}