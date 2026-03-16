"use client";

import Link from "next/link";
import { useState } from "react";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={scrollToTop}
          className="text-xl font-semibold cursor-pointer tracking-tight text-white transition hover:text-indigo-200"
        >
          InsightLoop
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            FAQ
          </Link>
        </nav>

        <div className="hidden md:block">
          <button className="rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400">
            Start Free Trial
          </button>
        </div>

        <button
          className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4">
            <Link
              href="#features"
              className="text-sm text-slate-300 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-slate-300 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm text-slate-300 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>

            <button className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400">
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}