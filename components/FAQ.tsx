"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

const faqs = [
  {
    q: "What is a Fractional CTO?",
    a: "A Fractional CTO is a senior technology leader who takes the Chief Technology Officer seat at your leadership table on a part-time, embedded basis. You get the strategic judgement, architecture decisions, AI roadmap, and vendor and team direction of an experienced CTO — without the cost, recruiting lead time, or risk of hiring a full-time executive who may be over- or under-fit for the stage your business is at. At Veritable, the Fractional CTO engagement is embedded: we sit on your side of the table, run cycles with your leadership, and step back the moment a permanent hire makes sense.",
  },
  {
    q: "What is IT Infrastructure as a Service (IT-IaaS)?",
    a: "IT Infrastructure as a Service is a managed offering where the entire production-grade technology stack — cloud, identity, networking, security, observability, and the application platform that runs on top — is designed, built, and operated as a single service. Veritable's IT-IaaS is ready-made: rather than spinning up infrastructure from a blank page for every client, we deploy a known-good architecture and tailor it to your business. The result is that the stack works on day one, stays working, and evolves with you — without you needing to staff an internal IT team or DevOps function.",
  },
  {
    q: "Who is Veritable for?",
    a: "Purpose-driven Australian organisations that need a senior technology function but don't want to stand one up themselves. Typical clients are scaling ventures, member-owned and cooperative structures, mission-led businesses, and operations-heavy services firms where technology is core to the proposition but a full in-house CTO plus IT team would be overkill. If you need real technology leadership and a stack that runs in production, but you're not ready (or it doesn't make sense) to hire two senior people to do it, Veritable is the alternative.",
  },
  {
    q: "How is this different from hiring a consultant or an agency?",
    a: "A consultant gives you advice, then leaves. An agency builds you a project, then hands it over. Veritable does neither in isolation — we take responsibility for the running technology function. That means the same team makes the architecture call, builds it, operates it, and answers when something needs to change. There is no handoff between strategy and execution, and no separate team to maintain it once it's live. One vehicle, one accountability line.",
  },
  {
    q: "What's included in the ready-made infrastructure?",
    a: "Cloud platform and environments, identity and access management, networking and DNS, security baseline and monitoring, logging and observability, deployment pipelines, backup and disaster recovery, and the application platform layer your business depends on. AI-native workflows and systems integrations sit on top. We start from a battle-tested architecture rather than reinventing it per client, then tailor where the business actually differs.",
  },
  {
    q: "Do you work outside South Australia?",
    a: "Yes. Veritable is based in Adelaide and serves clients across Australia. The work itself is remote-first with on-site engagement when it matters. Infrastructure is Australian-resident by default — no offshoring of judgement or data.",
  },
  {
    q: "What does engagement typically look like?",
    a: "Four phases. Scope: we map the technology function your business needs to grow into, not the one you can afford to staff today. Build: we stand up the platform, integrations, and AI workflows, production-grade from day one. Run: we operate everything as a service — uptime, support, evolution. Steer: you make the calls at the strategic level and we translate them into running code, every cycle. Engagements are scoped to outcome, not hours.",
  },
  {
    q: "How does AI fit into the offering?",
    a: "Veritable is AI-native, not AI-bolted-on. Every workflow we deliver is designed for a world where AI is part of the stack — custom agents, intelligent automations, retrieval and document understanding, and the AI plumbing your team actually uses day-to-day. The AI roadmap is part of the Fractional CTO function, not a separate consulting line.",
  },
];

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function FAQ() {
  const ref = useFadeIn();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 px-6 bg-white overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-primary/[0.04] blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto fade-in-section">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-accent rotate-45" />
            <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
              Frequently Asked
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1]">
            Fractional CTO + IT-IaaS,{" "}
            <span className="text-primary">demystified.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 font-light leading-relaxed max-w-2xl">
            The short version of what we do, who it's for, and what you get.
          </p>
        </div>

        <div className="divide-y divide-navy/10 border-y border-navy/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-6 flex items-start gap-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-lg md:text-xl font-semibold text-navy tracking-tight group-hover:text-primary transition-colors">
                    {f.q}
                  </span>
                  <span className="shrink-0 mt-1 w-8 h-8 rounded-full border border-navy/15 flex items-center justify-center text-navy/70 group-hover:border-primary group-hover:text-primary transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2} />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-8 pr-14 text-navy/70 font-light leading-relaxed">
                    {f.a}
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
