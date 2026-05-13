"use client";

import { Compass, Server, Sparkles, Network } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

const services = [
  {
    icon: Compass,
    title: "Fractional CTO",
    tagline: "Senior tech leadership, embedded.",
    description:
      "Architecture decisions. AI roadmap. Vendor and team direction. We take the CTO seat at your leadership table — fewer days a week than a permanent hire, the same calibre of judgement — and step back the moment you don't need it.",
    accent: "text-primary",
    bg: "bg-primary",
  },
  {
    icon: Server,
    title: "IT Infrastructure as a Service",
    tagline: "Ready-made, production-grade, fully managed.",
    description:
      "Cloud, identity, networking, security, observability, deployment, and backup — deployed from a battle-tested architecture, tailored where your business actually differs. The whole stack works on day one and stays working. No DevOps hire required.",
    accent: "text-primary-light",
    bg: "bg-primary-light",
  },
  {
    icon: Sparkles,
    title: "AI-Native Workflows",
    tagline: "Automation that compounds.",
    description:
      "Custom agents, intelligent automations, and the AI plumbing your team actually uses. Built from the ground up with AI at the core, not bolted on after.",
    accent: "text-accent",
    bg: "bg-accent",
  },
  {
    icon: Network,
    title: "Systems Integration",
    tagline: "Your tools, working as one.",
    description:
      "Supabase, Stripe, HubSpot, Twilio, the long tail of SaaS. We connect the platforms your business runs on into a single, coherent operating system.",
    accent: "text-sky",
    bg: "bg-sky",
  },
];

export default function Services() {
  const ref = useFadeIn();

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto fade-in-section">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-accent rotate-45" />
            <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
              What We Do
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1]">
            Four services.{" "}
            <span className="text-primary">One running vehicle.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 font-light leading-relaxed">
            Everything a senior tech function does — strategy, build, and
            operations — without the cost, lead time, or risk of standing one
            up yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-light rounded-2xl p-8 md:p-10 hover:shadow-lg hover:bg-white border border-transparent hover:border-primary/15 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-lg ${s.bg} flex items-center justify-center mb-6 shadow-sm`}
              >
                <s.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-1 tracking-tight">
                {s.title}
              </h3>
              <p className={`text-sm font-semibold ${s.accent} mb-4`}>
                {s.tagline}
              </p>
              <p className="text-navy/65 font-light leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
