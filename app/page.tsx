import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MatchGallery } from "@/components/sections/MatchGallery";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark relative">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MatchGallery />
      <section id="features">
        <FeaturesGrid />
      </section>
      <Testimonials />
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <FinalCTA />
      <Footer />
    </main>
  );
}
