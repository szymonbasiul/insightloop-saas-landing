const features = [
  {
    title: "Real-time analytics",
    description:
      "Track product performance, user activity, and key metrics in real time with a clean and intuitive interface.",
  },
  {
    title: "AI-powered insights",
    description:
      "Discover trends, anomalies, and growth opportunities with smart recommendations generated from your product data.",
  },
  {
    title: "Event tracking",
    description:
      "Monitor user actions across your app and understand how people interact with features that matter most.",
  },
  {
    title: "Custom dashboards",
    description:
      "Build flexible dashboards tailored to your team’s KPIs, product goals, and reporting workflows.",
  },
  {
    title: "Team collaboration",
    description:
      "Share metrics, align product decisions, and keep stakeholders informed with a single source of truth.",
  },
  {
    title: "Automated reports",
    description:
      "Save time with recurring reports and instant performance summaries delivered automatically to your team.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
            Features
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
            Everything your team needs to analyze growth faster
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            InsightLoop combines product analytics, AI insights, and team
            reporting in one fast and intuitive platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-sm font-semibold text-indigo-200">
                0{index + 1}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}