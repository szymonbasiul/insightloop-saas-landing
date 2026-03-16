const logos = [
  "NovaLabs",
  "PulseHQ",
  "VertexAI",
  "ScaleFlow",
  "CloudSync",
  "MetricForge",
];

export default function Logos() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Trusted by modern product teams
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-semibold tracking-wide text-slate-300 transition hover:border-indigo-400/30 hover:text-white"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}