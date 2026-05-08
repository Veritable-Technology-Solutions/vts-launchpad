import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Veritable Technology Solutions — Fractional CTO + IT Infrastructure as a Service",
  description:
    "Senior tech leadership and managed infrastructure for purpose-driven organisations. The streamlined, AI-native engine room behind ventures ready to scale. Adelaide, South Australia.",
  keywords: [
    "Fractional CTO",
    "IT Infrastructure as a Service",
    "AI-native technology",
    "managed services",
    "strata technology",
    "Adelaide",
    "South Australia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={poppins.variable}>
      <body className="font-poppins text-navy antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
