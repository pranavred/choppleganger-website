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

// JSON-LD structured data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Choppleganger",
  alternateName: ["Choppelganger", "Doppleganger App", "Doppelganger App"],
  description:
    "AI-powered app that finds your ugly celebrity twin by matching your selfie with unflattering celebrity photos. Also known as choppelganger, doppleganger, doppelganger celebrity matching app.",
  applicationCategory: "EntertainmentApplication",
  operatingSystem: "iOS",
  offers: {
    "@type": "Offer",
    price: "6.99",
    priceCurrency: "USD",
    priceValidUntil: "2026-12-31",
    description: "Weekly subscription after 3-day free trial",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50000",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Organization",
    name: "Wave Tech LLC",
    email: "pranav@wavetechhq.com",
  },
  keywords:
    "choppleganger, choppelganger, doppleganger, doppelganger, celebrity lookalike, ugly celebrity twin, AI face matching, celebrity match app, who do I look like celebrity",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Choppleganger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choppleganger (also spelled choppelganger or doppleganger) is an iOS app that uses AI to find which celebrity you look like on their worst day. It matches your selfie with unflattering celebrity photos for entertainment.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Choppleganger cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choppleganger offers a 3-day free trial, then costs $6.99 per week. You can cancel anytime through your Apple App Store settings.",
      },
    },
    {
      "@type": "Question",
      name: "Does Choppleganger store my photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your photos are only stored while you have an active subscription. All user data is permanently deleted when your subscription ends.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-dark relative">
        {/* Hidden SEO text for typo variations - visually hidden but crawlable */}
        <h1 className="sr-only">
          Choppleganger - Find Your Ugly Celebrity Twin | Also known as
          Choppelganger, Doppleganger App, Doppelganger Celebrity Matching
        </h1>
        <p className="sr-only">
          Looking for choppelganger, doppleganger, or doppelganger celebrity
          matching app? Choppleganger is the AI-powered iOS app that finds which
          celebrity you look like on their worst day. Upload a selfie, get
          matched with unflattering celebrity photos, and share the hilarious
          results. Free 3-day trial available.
        </p>

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
    </>
  );
}
