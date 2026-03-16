"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How quickly can I get started with InsightLoop?",
    answer:
      "You can set up your workspace in minutes, connect your product data, and start tracking key metrics without a complicated onboarding process.",
  },
  {
    question: "Does InsightLoop work for early-stage startups?",
    answer:
      "Yes. InsightLoop is designed for both early-stage startups and growing product teams that need a clear and scalable analytics workflow.",
  },
  {
    question: "Can I create custom dashboards for my team?",
    answer:
      "Yes. You can build dashboards around your most important KPIs and share them across product, growth, and leadership teams.",
  },
  {
    question: "Do you offer automated reports?",
    answer:
      "Yes. InsightLoop can generate recurring summaries and automated performance reports to help teams stay aligned and save time.",
  },
  {
    question: "Is there a plan for larger organizations?",
    answer:
      "Yes. The Scale plan includes advanced analytics, API access, unlimited team members, and dedicated onboarding support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
            Answers to common questions from modern product teams
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Everything you need to know before getting started with InsightLoop.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition hover:border-indigo-400/30 hover:bg-white/[0.05]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>

                  <span className="text-2xl leading-none text-indigo-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-6 py-5">
                    <p className="text-base leading-7 text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}