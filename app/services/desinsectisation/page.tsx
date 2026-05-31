// app/services/desinsectisation/page.tsx
import type { Metadata } from "next";
import { Shield, CheckCircle2, AlertTriangle, Eye } from "lucide-react";
import Image from "next/image";
import ServiceCta from "@/components/ServiceCta";

export const metadata: Metadata = {
  title: "Désinsectisation Perpignan | Cafards & Punaises de Lit 66",
  description: "Invasion de punaises de lit, cafards, blattes ou puces ? Express Nuisibles Services intervient en urgence sous 24h à Perpignan et dans tout le 66. Devis gratuit.",
  alternates: {
    canonical: "https://express-nuisibles.fr/services/desinsectisation",
  },
};

export default function DesinsectisationPage() {
  // Données structurées pour le SEO (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Désinsectisation Professionnelle - Express Nuisibles Services",
    "image": "/desinsectisation.webp",
    "description": "Service d'extermination de nuisibles rampants (punaises de lit, cafards, blattes, puces) pour particuliers et professionnels à Perpignan et ses environs.",
    "brand": {
      "@type": "Brand",
      "name": "Express Nuisibles Services"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "99.00",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://express-nuisibles.fr/services/desinsectisation"
    }
  };

  return (
    <>
      {/* Injection du JSON-LD pour les moteurs de recherche */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-slate-950">
        
        {/* Section d'Introduction (Hero de la page) */}
        <section aria-label="Introduction" className="bg-white border-b border-slate-200/80 py-12 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-700 text-xs font-black px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <AlertTriangle size={14} className="animate-bounce" /> Stop Insectes
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-none mb-6">
              Désinsectisation à Perpignan : <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Éradication de cafards et punaises de lit
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              Prolifération rapide, piqûres nocturnes, problèmes d'hygiène... Ne laissez pas les insectes gâcher votre quotidien. Express Nuisibles déploie des traitements choc de grade professionnel pour assainir vos espaces.
            </p>

            {/* Bannière Image Unique - Cadrée avec z-0 et objet-cover complet */}
            <div className="relative z-0 w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 mb-8">
              <Image 
                src="/desinsectisation.webp" 
                alt="Intervention de désinsectisation et traitement de surface à Perpignan par Express Nuisibles"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="flex justify-center items-center gap-6 text-sm text-slate-500 font-bold">
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 size={16} className="text-emerald-500" /> Certifié Certibiocide
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 size={16} className="text-emerald-500" /> Tarif dès 99€
              </span>
            </div>
          </div>
        </section>

        {/* Corps de la page */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          
          {/* Section : Focus sur les deux fléaux principaux */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" aria-label="Nos spécialités de traitement">
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-rose-50 border border-rose-100 rounded-xl flex items-center justify-center text-rose-600 font-black mb-4">
                🐜
              </div>
              <h2 className="text-lg font-black text-slate-950 mb-2">Punaises de lit</h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Elles se cachent dans les matelas, sommiers et têtes de lit, provoquant des démangeaisons insupportables. Nous combinons des traitements chimiques ciblés et des actions mécaniques pour détruire les adultes, les nymphes et les œufs.
              </p>
            </div>

            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-amber-600 font-black mb-4">
                🪳
              </div>
              <h2 className="text-lg font-black text-slate-950 mb-2">Cafards & Blattes</h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Friands d'humidité et de recoins sombres (cuisines, salles de bain), ils se reproduisent à une vitesse fulgurante. L'application de gels professionnels de forte appétence permet une éradication totale par effet domino.
              </p>
            </div>
          </section>

          {/* Section : Les Signes d'infestation */}
          <section className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm mb-12" aria-labelledby="symptoms-title">
            <h2 id="symptoms-title" className="text-xl md:text-2xl font-black text-slate-950 flex items-center gap-2.5 mb-6">
              <Eye className="text-emerald-500" size={22} />
              Reconnaître les signes d'une invasion d'insectes
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Certains insectes fuient la lumière du jour et se cachent dès que vous entrez dans une pièce. Voici les indices majeurs qui doivent vous alerter immédiatement :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Traces de piqûres en ligne ou en grappe sur les bras et les jambes au réveil (punaises de lit).",
                "Petites taches noires d'un millimètre sur les coutures du matelas ou les lattes du sommier.",
                "Découverte d'insectes plats, marrons ou noirs, fuyant rapidement sous les meubles de cuisine à l'allumage des lumières.",
                "Présence de petites poches de ponte marrons (oothèques) dans les gonds de portes ou à l'arrière de l'électroménager."
              ].map((symptom, i) => (
                <div key={i} className="flex gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl">
                  <span className="text-rose-500 font-black shrink-0 text-sm">✕</span>
                  <p className="text-sm md:text-base text-slate-600 font-semibold leading-normal">{symptom}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section : Le Protocole d'intervention */}
          <section className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm mb-12" aria-labelledby="protocol-title">
            <h2 id="protocol-title" className="text-xl md:text-2xl font-black text-slate-950 flex items-center gap-2.5 mb-2">
              <Shield className="text-emerald-500" size={22} />
              Notre méthodologie de traitement
            </h2>
            <p className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-6">Un protocole rigoureux pour assainir durablement votre logement</p>
            
            <div className="space-y-6">
              {[
                {
                  title: "1. Diagnostic et ciblage de l'espèce",
                  desc: "Identification précise de la source de l'infestation, examen des zones clés et évaluation du niveau de prolifération pour choisir la molécule la plus adaptée."
                },
                {
                  title: "2. Préparation et consignes de sécurité",
                  desc: "Nous vous accompagnons dans la préparation des locaux (protection des denrées, consignes pour le linge de lit) pour garantir l'efficacité maximale et sécuriser vos animaux."
                },
                {
                  title: "3. Application des traitements professionnels",
                  desc: "Mise en œuvre des techniques de pointe : nébulisation ou pulvérisation de biocides professionnels pour les punaises de lit, application de gel de contact haute rémanence pour les blattes."
                },
                {
                  title: "4. Garantie et prévention",
                  desc: "Mise en place d'automatisme préventif et conseils précis pour bloquer les futures voies d'accès ou éviter les réinfestations lors de vos déplacements."
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-emerald-500/30 pl-5 relative">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-emerald-500" />
                  <div>
                    <h3 className="font-black text-slate-950 text-base md:text-lg mb-1">{step.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Appels à l'action téléphoniques partagés */}
          <ServiceCta />

          {/* Section : FAQ SEO locale */}
          <section className="mt-12 space-y-6" aria-label="Foire aux questions">
            <h2 className="text-xl font-black text-slate-950 text-center">Foire aux questions — Désinsectisation</h2>
            <div className="space-y-4">
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-xs">
                <h3 className="font-black text-slate-950 text-sm md:text-base mb-2">Faut-il quitter le logement pendant le traitement des punaises de lit ?</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  Oui, lors d'une intervention par pulvérisation ou nébulisation d'insecticide, il est obligatoire de quitter les lieux pendant le traitement et durant les 4 heures qui suivent afin de permettre un séchage et une ventilation complète en toute sécurité.
                </p>
              </div>
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-xs">
                <h3 className="font-black text-slate-950 text-sm md:text-base mb-2">Les produits du commerce sont-ils efficaces contre les cafards ?</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  Généralement non. Les sprays de supermarché ont un effet répulsif à court terme qui a tendance à disperser la colonie dans les cloisons ou chez vos voisins. Les gels professionnels que nous utilisons créent un effet domino qui détruit le nid à la racine.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}