"use client";

import { Briefcase, Sparkles, MapPin, HeartHandshake } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

const props = [
  {
    icon: Briefcase,
    title: "Operating leadership",
    description:
      "CEO and GM scar tissue across $8M+ businesses. We've sat in the seat, not just consulted from the side.",
  },
  {
    icon: Sparkles,
    title: "AI-native, not bolted on",
    description:
      "Born in the AI era. Every workflow we deliver is designed for a world where AI is part of the stack, not an afterthought.",
  },
  {
    icon: MapPin,
    title: "Adelaide-based, sovereign",
    description:
      "Local roots, Australian-resident infrastructure. No offshoring of judgement or your data.",
  },
  {
    icon: HeartHandshake,
    title: "Embedded, not at arm's length",
    description:
      "We sit on your side of the table. Your outcome is the only invoice that matters.",
  },
];

export default function WhyVeritable() {
  const ref = useFadeIn();

  return (
    <section className="relative py-24 md:py-32 px-6 bg-light overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/[0.04] blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto stagger-children">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-accent rotate-45" />
            <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
              Why Veritable
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1]">
            Senior partner.{" "}
            <span className="text-primary">On your terms.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {props.map((p) => (
            <div key={p.title} className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-lg bg-white border border-primary/15 flex items-center justify-center shrink-0 shadow-sm">
                <p.icon
                  className="w-6 h-6 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-2 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-navy/65 font-light leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
