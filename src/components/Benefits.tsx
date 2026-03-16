const benefits = [
  {
    number: "01",
    title: "Faster product decisions",
    description:
      "Quickly understand what is working, what is underperforming, and where to focus next using real-time analytics and AI recommendations.",
  },
  {
    number: "02",
    title: "Better team alignment",
    description:
      "Keep product, growth, and leadership teams on the same page with shared dashboards, reports, and easy-to-read performance summaries.",
  },
  {
    number: "03",
    title: "Smarter growth optimization",
    description:
      "Spot trends earlier, reduce friction in the user journey, and optimize key funnels with data that is actionable and easy to understand.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
            Benefits
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
            Built to help product teams move faster with more confidence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            InsightLoop turns complex product data into clear insights so your
            team can make better decisions, improve collaboration, and scale
            growth with less guesswork.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-lg shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05]"
            >
              <div className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-200">
                {benefit.number}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {benefit.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}