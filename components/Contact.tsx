"use client";

import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

export default function Contact() {
  const ref = useFadeIn();

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-primary via-primary-light to-sky"
    >
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-96 opacity-[0.1]">
        <svg
          viewBox="0 0 256 384"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="80" width="72" height="280" fill="white" />
          <rect x="92" y="0" width="72" height="384" fill="white" />
          <rect x="184" y="120" width="72" height="200" fill="white" />
        </svg>
      </div>
      <div className="absolute -left-16 bottom-0 w-48 h-48 rounded-full bg-white/10 blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto fade-in-section">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 bg-accent rotate-45" />
          <p className="text-white/80 font-semibold text-xs tracking-[0.25em] uppercase">
            Get In Touch
          </p>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
          Let&apos;s build the vehicle{" "}
          <span className="text-accent-warm">
            your business needs to drive.
          </span>
        </h2>
        <p className="mt-6 text-lg text-white/75 font-light leading-relaxed max-w-2xl">
          If you&apos;re ready to outsource the tech function and keep the
          wheel, we&apos;d love to hear from you.
        </p>

        <div className="mt-10">
          <a
            href="mailto:hello@veritabletechnologysolutions.com.au"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg shadow-lg shadow-black/15 hover:bg-accent-warm hover:shadow-black/25 transition-all duration-200"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 text-white/70 text-sm font-light">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            <span>hello@veritabletechnologysolutions.com.au</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" strokeWidth={1.5} />
            <span>Adelaide, South Australia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
