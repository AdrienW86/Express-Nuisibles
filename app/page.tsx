import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Zones from "@/components/Zone";
import DevisSection from "@/components/DevisSection";
import ContactForm from "@/components/ContactForm";

// Métadonnées optimisées pour le SEO Local sur Perpignan et le 66
export const metadata: Metadata = {
  title: "Express Nuisibles | Dératisation & Punaises de lit Perpignan",
  description: "Entreprise agréée Certibiocide à Perpignan. Intervention garantie 7j/7 pour l'élimination des punaises de lit, rats, souris, frelons et cafards dans les Pyrénées-Orientales.",
  keywords: [
    "dératisation perpignan", 
    "punaises de lit perpignan", 
    "anti nuisibles 66", 
    "destruction nid de frelons pyrénées-orientales", 
    "exterminateur cafards perpignan",
    "certibiocide 66"
  ],
  openGraph: {
    title: "Express Nuisibles | Dératisation & Traitement Nuisibles Perpignan",
    description: "Intervention rapide et garantie 100% discrète pour particuliers et professionnels dans le 66.",
    url: "https://www.expressnuisiblesservices.fr/",
    siteName: "Express Nuisibles Services",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Notre Hero Section principale */}
      <Hero />
     
      {/* Emplacement pour les futures sections */}
      <div className="w-full">
       <Services />
       <Zones /> 
       <div id="tarifs">
          <DevisSection />
        </div>

        {/* ID dédié au formulaire de contact */}
        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}