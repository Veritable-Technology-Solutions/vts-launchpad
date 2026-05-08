"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

const deliverables = [
  "Member portal and onboarding",
  "Knowledge base and AI assistant",
  "End-to-end strata operations workflows",
  "Compliance, communications, reporting",
  "Identity, billing, and integrations",
];

const stack = ["Next.js", "Supabase", "Twilio", "AI agents", "RLS-secured"];

export default function CaseStudy() {
  const ref = useFadeIn();

  return (
    <section
      id="case-study"
      className="relative py-24 md:py-32 px-6 bg-navy overflow-hidden"
    >
      {/* Geometric accent — top right */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-[28rem] md:h-[28rem] opacity-[0.05]">
        <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="120" width="100" height="320" fill="#4A9BD9" />
          <rect x="180" y="60" width="100" height="380" fill="#7BC4E8" />
          <rect x="300" y="160" width="100" height="280" fill="#F5A623" />
        </svg>
      </div>
      <div className="absolute -left-20 bottom-0 w-72 h-72 rounded-full bg-primary-light/10 blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto fade-in-section">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-accent rotate-45" />
              <p className="text-accent font-semibold text-xs tracking-[0.25em] uppercase">
                Anchor Client
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Powering Acacia Collective.
            </h2>
            <p className="mt-4 text-xl text-sky font-light">
              Australia&apos;s only member-owned strata management solution.
            </p>
            <div className="mt-8 space-y-4 text-white/70 font-light leading-relaxed">
              <p>
                Acacia Collective set out to do something no Australian strata
                business had done — let the unit owners actually own the manager
                that serves them. Veritable is the platform and operations
                engine that makes member-ownership commercially viable at scale.
              </p>
              <p>
                The technical backbone that lets a collective operate where a
                traditional manager would be: lower cost, higher
                accountability, built for the people who live in the building.
              </p>
            </div>

            <a
              href="https://acaciacollective.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-sky/90 transition-all duration-200"
            >
              Visit Acacia Collective
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>

          <div className="lg:pt-10">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky mb-6">
              What We Built
            </p>
            <ul className="space-y-4">
              {deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-white/85 font-light"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
                    <Check
                      className="w-3 h-3 text-accent"
                      strokeWidth={2.5}
                    />
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-10 border-t border-white/10">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky mb-4">
                On the platform
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 text-white/70 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
