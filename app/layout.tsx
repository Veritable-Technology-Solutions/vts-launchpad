import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "@/components/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://veritabletechnologysolutions.com.au";

export const viewport: Viewport = {
  themeColor: "#1E5A99",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Veritable Technology Solutions — Fractional CTO + IT Infrastructure as a Service | Adelaide",
    template: "%s · Veritable Technology Solutions",
  },
  description:
    "Fractional CTO and ready-made IT infrastructure for purpose-driven Australian organisations. Senior tech leadership, production-grade systems, and AI-native workflows — designed, built, and run as one managed service from Adelaide.",
  applicationName: "Veritable Technology Solutions",
  authors: [{ name: "Veritable Technology Solutions", url: SITE_URL }],
  creator: "Veritable Technology Solutions",
  publisher: "Veritable Technology Solutions",
  category: "technology",
  keywords: [
    "Fractional CTO",
    "Fractional CTO Australia",
    "Fractional CTO Adelaide",
    "IT Infrastructure as a Service",
    "IT IaaS",
    "managed IT infrastructure",
    "ready-made IT infrastructure",
    "AI-native technology",
    "AI workflows for business",
    "Chief Technology Officer for hire",
    "outsourced CTO",
    "technology leadership Australia",
    "purpose-driven technology partner",
    "strata technology platform",
    "Adelaide technology consulting",
    "South Australia",
    "Veritable Technology Solutions",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Veritable Technology Solutions",
    title:
      "Veritable Technology Solutions — Fractional CTO + IT Infrastructure as a Service",
    description:
      "Senior tech leadership and ready-made infrastructure, packaged into one managed vehicle. Purpose-driven Australian organisations get the whole CTO function — strategy, build, and operations — without standing one up.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Veritable Technology Solutions — Fractional CTO + IT-IaaS",
    description:
      "The Fractional CTO and ready-made infrastructure that purpose-driven Australian organisations rely on to scale. Adelaide-based, AI-native, fully managed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}#organization`,
  name: "Veritable Technology Solutions",
  alternateName: "Veritable",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  image: `${SITE_URL}/logo.jpeg`,
  description:
    "Fractional CTO and IT Infrastructure as a Service for purpose-driven Australian organisations. Senior technology leadership, production-grade managed infrastructure, and AI-native workflows — delivered as a single running vehicle.",
  founder: {
    "@type": "Person",
    name: "Alex Hender",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Adelaide",
    addressRegion: "SA",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "Country", name: "Australia" },
    { "@type": "AdministrativeArea", name: "South Australia" },
  ],
  email: "hello@veritabletechnologysolutions.com.au",
  serviceType: [
    "Fractional CTO",
    "IT Infrastructure as a Service",
    "AI-Native Workflows",
    "Systems Integration",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Veritable Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fractional CTO",
          description:
            "Embedded senior technology leadership: architecture decisions, AI roadmap, vendor and team direction. The CTO seat at your leadership table, for as long as you need it.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Infrastructure as a Service",
          description:
            "Production-grade cloud, identity, networking, security, and observability — designed, built, and operated as a managed service. Ready-made, not built-from-scratch.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Native Workflows",
          description:
            "Custom agents, intelligent automations, and the AI plumbing your team actually uses. Built with AI at the core, not bolted on later.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Systems Integration",
          description:
            "Supabase, Stripe, HubSpot, Twilio, and the long tail of SaaS — connected into a single, coherent operating system for the business.",
        },
      },
    ],
  },
  sameAs: ["https://acaciacollective.com.au"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "Veritable Technology Solutions",
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en-AU",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={poppins.variable}>
      <body className="font-poppins text-navy antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Nav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
