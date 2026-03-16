const plans = [
	{
		name: 'Starter',
		price: '$29',
		description:
			'Perfect for early-stage teams getting started with product analytics.',
		features: [
			'Up to 3 team members',
			'Core analytics dashboard',
			'Event tracking',
			'Weekly summaries',
		],
		highlighted: false,
	},
	{
		name: 'Growth',
		price: '$79',
		description:
			'Best for growing product teams that need more insights and automation.',
		features: [
			'Up to 10 team members',
			'AI insights',
			'Custom dashboards',
			'Automated reports',
			'Priority support',
		],
		highlighted: true,
	},
	{
		name: 'Scale',
		price: '$149',
		description:
			'For larger teams that need advanced reporting, flexibility, and scale.',
		features: [
			'Unlimited team members',
			'Advanced analytics',
			'Team workspaces',
			'API access',
			'Dedicated onboarding',
		],
		highlighted: false,
	},
];

export default function Pricing() {
	return (
		<section id="pricing" className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
						Pricing
					</p>

					<h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
						Simple pricing for teams at every stage of growth
					</h2>

					<p className="mt-6 text-lg leading-8 text-slate-300">
						Choose a plan that fits your team today and scale as your product,
						data, and reporting needs grow.
					</p>
				</div>

				<div className="mt-16 grid gap-6 lg:grid-cols-3">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`flex h-full flex-col rounded-3xl border p-8 shadow-lg backdrop-blur transition ${
								plan.highlighted
									? 'border-indigo-400/40 bg-gradient-to-b from-indigo-500/10 to-violet-500/10 shadow-indigo-500/10'
									: 'border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05]'
							}`}
						>
							{plan.highlighted && (
								<div className="mb-6 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-200">
									Most Popular
								</div>
							)}

							<h3 className="text-2xl font-semibold text-white">{plan.name}</h3>

							<p className="mt-4 text-slate-300">{plan.description}</p>

							<div className="mt-6 flex items-end gap-1">
								<span className="text-5xl font-semibold text-white">
									{plan.price}
								</span>
								<span className="mb-1 text-sm text-slate-400">/mo</span>
							</div>

							<ul className="mt-8 flex-1 space-y-4">
								{plan.features.map((feature) => (
									<li
										key={feature}
										className="flex items-start gap-3 text-slate-300"
									>
										<span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-indigo-200">
											✓
										</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>

							<button
								className={`mt-8 w-full rounded-xl px-5 py-3 text-sm font-medium transition ${
									plan.highlighted
										? 'bg-indigo-500 text-white hover:bg-indigo-400'
										: 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
								}`}
							>
								Get Started
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
