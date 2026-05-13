"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Acacia", href: "#case-study" },
  { label: "FAQ", href: "#faq" },
  { label: "Team", href: "#team" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-all duration-200 ${
        scrolled
          ? "bg-white/85 border-b border-navy/[0.06] shadow-sm"
          : "bg-white/55 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.jpeg"
            alt="Veritable Technology Solutions"
            width={32}
            height={32}
            className="w-8 h-8 mix-blend-multiply"
          />
          <span className="font-semibold text-navy text-sm tracking-tight hidden sm:inline">
            Veritable
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-navy/70 font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center px-4 py-2 bg-accent text-white text-sm font-semibold rounded-md hover:bg-accent-warm transition-colors duration-200 shadow-sm shadow-accent/20"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
