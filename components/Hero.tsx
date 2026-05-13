"use client";

import { ArrowRight } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

export default function Hero() {
  const ref = useFadeIn();

  return (
    <section className="relative min-h-[100svh] flex items-center px-6 pt-24 pb-20 overflow-hidden bg-gradient-to-br from-white via-sky/[0.07] to-primary/[0.08]">
      {/* Geometric building silhouette — right */}
      <div className="absolute -top-10 -right-10 md:right-0 w-[26rem] h-[26rem] md:w-[40rem] md:h-[40rem] opacity-[0.07]">
        <svg
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="80" y="120" width="100" height="280" fill="#1E5A99" />
          <rect x="200" y="60" width="100" height="340" fill="#4A9BD9" />
          <rect x="320" y="20" width="100" height="380" fill="#F5A623" />
        </svg>
      </div>

      {/* Soft colour blobs */}
      <div className="absolute top-1/3 -left-32 w-72 h-72 rounded-full bg-sky/15 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto w-full fade-in-section"
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 bg-accent rotate-45" />
          <p className="text-primary font-semibold text-xs md:text-sm tracking-[0.25em] uppercase">
            Fractional CTO · IT Infrastructure as a Service
          </p>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.05] tracking-tight max-w-4xl">
          Your Fractional CTO.{" "}
          <span className="text-primary">
            Your ready-made infrastructure.
          </span>{" "}
          One vehicle.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-navy/65 font-light leading-relaxed max-w-2xl">
          Veritable is the senior technology function for purpose-driven
          Australian organisations ready to scale. CTO-level strategy,
          production-grade infrastructure, and AI-native workflows —
          designed, built, and operated as one managed service. You steer.
          We run the engine room.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:bg-accent-warm transition-all duration-200"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
          <a
            href="#case-study"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-primary font-medium border border-primary/25 rounded-lg hover:bg-primary/5 hover:border-primary/50 transition-all duration-200"
          >
            See what we built for Acacia
          </a>
        </div>

        {/* Anchor client mini-credit */}
        <div className="mt-16 flex items-center gap-4 text-sm text-navy/50 font-light">
          <span className="h-px w-10 bg-navy/15" />
          <span>
            Anchor client:{" "}
            <a
              href="https://acaciacollective.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:text-primary-light transition-colors"
            >
              Acacia Collective
            </a>{" "}
            — Australia&apos;s only member-owned strata management solution.
          </span>
        </div>
      </div>
    </section>
  );
}
