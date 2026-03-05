import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/lib/config";

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  "@id": siteConfig.url,
  sameAs: [`https://wa.me/${siteConfig.whatsapp}`],
  priceRange: "R$50–R$200",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de T.I.",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Formatação Completa",
        price: "120",
        priceCurrency: "BRL",
      },
      {
        "@type": "Offer",
        name: "Suporte Remoto",
        price: "60",
        priceCurrency: "BRL",
      },
      {
        "@type": "Offer",
        name: "Remoção de Vírus",
        price: "80",
        priceCurrency: "BRL",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="scanlines">
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
