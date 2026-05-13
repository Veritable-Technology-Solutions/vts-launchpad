import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import WhyVeritable from "@/components/WhyVeritable";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <CaseStudy />
      <WhyVeritable />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
