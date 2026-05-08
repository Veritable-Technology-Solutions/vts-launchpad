"use client";

import Image from "next/image";
import { useFadeIn } from "./useFadeIn";

const tags = [
  "Org design",
  "AI strategy",
  "Systems architecture",
  "P&L leadership",
  "Decarbonisation",
];

export default function Team() {
  const ref = useFadeIn();

  return (
    <section id="team" className="py-24 md:py-32 px-6 bg-white">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-section">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-accent rotate-45" />
            <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
              Who You&apos;re Working With
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1]">
            Senior people. <span className="text-primary">Sleeves up.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start">
          <div className="relative shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-2 ring-primary/10 shadow-md">
              <Image
                src="/alex-headshot.png"
                alt="Alex Hender"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-md rotate-3">
              <span className="text-white text-xs font-bold tracking-wider text-center leading-tight">
                17+
                <br />
                YEARS
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">
              Alex Hender
            </h3>
            <p className="text-primary font-medium mt-1 mb-6">
              Executive General Manager
            </p>

            <div className="space-y-4 text-navy/70 font-light leading-relaxed">
              <p>
                Alex has run businesses from a kitchen table to{" "}
                <strong className="text-navy font-semibold">
                  $8M+ in revenue
                </strong>{" "}
                and led teams of 60+. He launched ofo&apos;s Adelaide operations
                from scratch, ran the South Australian division of{" "}
                <strong className="text-navy font-semibold">
                  Adamantem-owned Ensign Services
                </strong>
                , and served as{" "}
                <strong className="text-navy font-semibold">
                  CEO of Solar Depot Australia
                </strong>
                .
              </p>
              <p>
                Today he leads technology and AI strategy at{" "}
                <strong className="text-navy font-semibold">RenewCORP</strong>{" "}
                as Head of Sustainability and Technology, and serves as Chief
                Advocate at Acacia Collective — the anchor client he architected
                the Veritable platform around.
              </p>
              <p>
                The operating scar tissue and the technical depth meet in one
                person.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-medium bg-light text-primary border border-primary/15 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
