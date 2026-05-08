"use client";

import { useFadeIn } from "./useFadeIn";

const steps = [
  {
    number: "01",
    title: "Scope",
    body: "We map the technology function your business needs to grow into — not the one you can afford to staff today.",
  },
  {
    number: "02",
    title: "Build",
    body: "We stand up the platform, integrations, and AI workflows. Production-grade from day one, not a prototype.",
  },
  {
    number: "03",
    title: "Run",
    body: "We operate everything as a service. Uptime, support, evolution. You don't open tickets — you run the business.",
  },
  {
    number: "04",
    title: "Steer",
    body: "You make the calls at the strategic level. We translate them into running code, every cycle.",
  },
];

export default function HowItWorks() {
  const ref = useFadeIn();

  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white to-light overflow-hidden"
    >
      <div className="absolute -left-40 top-1/3 w-96 h-96 rounded-full bg-primary/[0.04] blur-3xl" />
      <div className="absolute -right-32 bottom-0 w-72 h-72 rounded-full bg-accent/[0.04] blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto fade-in-section">
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-accent rotate-45" />
            <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
              How We Work
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1]">
            Built to drive.{" "}
            <span className="text-primary">Ready to move.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 font-light leading-relaxed">
            Most organisations cobble technology together — vendor by vendor,
            hire by hire, ticket by ticket. Veritable delivers something
            different: a pre-built technology function, sized to your business,
            fully operated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i > 0 && (
                <div className="hidden lg:block absolute -left-4 top-6 w-2 h-2 rounded-full bg-accent/40" />
              )}
              <div className="text-7xl font-bold text-primary/15 leading-none mb-4 tracking-tight">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-navy/60 font-light leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
