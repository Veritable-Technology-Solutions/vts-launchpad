"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
};

const operational: Member[] = [
  {
    name: "Alex Hender",
    role: "Executive General Manager",
    image: "/team-alex-hender.jpeg",
    bio: "17+ years across CEO and GM roles, leading businesses from kitchen-table launches to $8M+ in revenue. Today: Head of Sustainability and Technology at RenewCORP, Chief Advocate at Acacia Collective. Architected the Veritable platform around the Acacia anchor.",
    linkedin: "https://www.linkedin.com/in/alexanderhender",
  },
  {
    name: "Claire Worley",
    role: "Marketing & Communications Specialist",
    image: "/team-claire-worley.jpg",
    bio: "20+ years across advertising, marketing, and communications, with brand and comms work for Samsung, KFC Australia, Sony, Drakes Supermarkets, and the YMCA. Also Marketing & Communications Manager at RenewCORP and founder of social-impact platform Living With Support.",
    linkedin: "https://www.linkedin.com/in/claireworley",
  },
  {
    name: "Tabitha McFarlane",
    role: "Fractional CFO",
    image: "/team-tabitha-mcfarlane.jpeg",
    bio: "Chartered Accountant with nearly 30 years across accounting, business strategy, and taxation. Trained at Deloitte London after reading Chemistry at Somerville College, Oxford. Senior practice and CFO experience across Australian businesses — bringing the financial governance that lets Veritable scale predictably.",
    linkedin:
      "https://www.linkedin.com/in/tabitha-mcfarlane-69b6298a",
  },
];

const directors: Member[] = [
  {
    name: "Paul Daly",
    role: "Director",
    image: "/team-paul-daly.jpeg",
    bio: "Decades of building Adelaide's business community, from co-founding m.Net Corporation (sold to IPG MediaBrands) to advising the City of Adelaide on economic development. Master's from the University of Adelaide. Strong track record in commercial growth and organisational design.",
    linkedin: "https://www.linkedin.com/in/padaly",
  },
  {
    name: "Jonathan Whalley",
    role: "Director",
    image: "/team-jonathan-whalley.jpeg",
    bio: "Entrepreneur, engineer and investor with 30+ years building and scaling Australian businesses. Founded DSpace Pty Ltd (acquired by a publicly listed company) and led 1414 Degrees from concept to ASX listing as founding CEO. Two engineering degrees and an MBA.",
    linkedin: "https://www.linkedin.com/in/jonathan-whalley-/",
  },
];

function TeamCard({ m }: { m: Member }) {
  return (
    <div className="group bg-white rounded-2xl border border-primary/10 overflow-hidden hover:border-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="aspect-[4/5] overflow-hidden bg-light">
        <Image
          src={m.image}
          alt={m.name}
          width={400}
          height={500}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-navy tracking-tight">
              {m.name}
            </h3>
            <p className="text-sm text-primary font-medium mt-0.5">
              {m.role}
            </p>
          </div>
          {m.linkedin && (
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} on LinkedIn`}
              className="shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.75} />
            </a>
          )}
        </div>
        <p className="text-sm text-navy/65 font-light leading-relaxed">
          {m.bio}
        </p>
      </div>
    </div>
  );
}

export default function Team() {
  const ref = useFadeIn();

  return (
    <section id="team" className="py-24 md:py-32 px-6 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto fade-in-section">
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
          <p className="mt-6 text-lg text-navy/60 font-light leading-relaxed">
            An operating team with the scar tissue to run a tech function —
            backed by directors who&apos;ve built Adelaide businesses for
            decades.
          </p>
        </div>

        {/* Operating team */}
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-navy/50 mb-8">
            Operating Team
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {operational.map((m) => (
              <TeamCard key={m.name} m={m} />
            ))}
          </div>
        </div>

        {/* Directors */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-navy/50 mb-8">
            Directors
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl">
            {directors.map((m) => (
              <TeamCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
