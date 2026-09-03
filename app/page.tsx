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
  logo: `${siteConfig.url}/favicon.ico`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  telephone: `+55${siteConfig.whatsapp}`,
  email: siteConfig.email,
  "@id": `${siteConfig.url}/#localbusiness`,
  sameAs: [`https://wa.me/${siteConfig.whatsapp}`],
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. dos Bandeirantes, 100",
    addressLocality: "Matatu, Salvador",
    addressRegion: "BA",
    postalCode: "40260-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.latitude,
    longitude: siteConfig.longitude,
  },
  containedInPlace: {
    "@type": "ShoppingCenter",
    name: siteConfig.addressComplement,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. dos Bandeirantes, 100",
      addressLocality: "Matatu, Salvador",
      addressRegion: "BA",
      postalCode: "40260-000",
      addressCountry: "BR",
    },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de T.I.",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Formatação Completa",
      },
      {
        "@type": "Offer",
        name: "Suporte Remoto",
      },
      {
        "@type": "Offer",
        name: "Remoção de Vírus",
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
