// app/services/punaises-de-lit/page.tsx
import type { Metadata } from "next";
import { Shield, CheckCircle2, AlertTriangle, Eye } from "lucide-react";
import Image from "next/image";
import ServiceCta from "@/components/ServiceCta";

export const metadata: Metadata = {
  title: "Traitement Punaises de Lit Perpignan | Exterminateur 66",
  description: "Invasion de punaises de lit ? Express Nuisibles élimine définitivement les puces de lit à Perpignan et dans tout le 66. Protocole garanti, intervention sous 24h.",
  alternates: {
    canonical: "https://express-nuisibles.fr/services/punaises-de-lit",
  },
};

export default function PunaisesDeLitPage() {
  // Données structurées pour le SEO (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Traitement Punaises de Lit - Express Nuisibles",
    "image": "/punaises.webp",
    "description": "Service d'extermination et d'éradication des punaises de lit pour les particuliers, hôtels et gîtes à Perpignan et dans les Pyrénées-Orientales.",
    "brand": {
      "@type": "Brand",
      "name": "Express Nuisibles"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "149.00",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://express-nuisibles.fr/services/punaises-de-lit"
    }
  };

  return (
    <>
      {/* Injection du JSON-LD pour le SEO Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-slate-950">
        
        {/* Section d'Introduction (Hero) */}
        <section aria-label="Introduction" className="bg-white border-b border-slate-200/80 py-12 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-700 text-xs font-black px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <AlertTriangle size={14} className="animate-bounce" /> Urgence Traitement Infestation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-none mb-6">
              Punaises de lit à Perpignan : <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Retrouvez enfin des nuits sereines
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              Piqûres alignées au réveil, démangeaisons, anxiété nocturne... La punaise de lit est un fléau qui ne disparaît jamais seul. Express Nuisibles applique un protocole d&apos;éradication total (adultes, nymphes et œufs).
            </p>

            {/* Bannière Image Unique - Parfaitement calée au scroll avec z-0 */}
            <div className="relative z-0 w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 mb-8">
              <Image 
                src="/punaises.webp" 
                alt="Inspection minutieuse des coutures d'un matelas à la recherche de punaises de lit par Express Nuisibles Services à Perpignan"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="flex justify-center items-center gap-6 text-sm text-slate-500 font-bold">
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 size={16} className="text-emerald-500" /> Protocole Choc Rémanent
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 size={16} className="text-emerald-500" /> Suivi Rigoureux
              </span>
            </div>
          </div>
        </section>

        {/* Corps de la page */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          
          {/* Section : Traque des indices */}
          <section className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm mb-12" aria-labelledby="symptoms-title">
            <h2 id="symptoms-title" className="text-xl md:text-2xl font-black text-slate-950 flex items-center gap-2.5 mb-6">
              <Eye className="text-emerald-500" size={22} />
              Comment être sûr qu'il s'agit de punaises de lit ?
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Ces insectes mesurent entre 4 et 7 millimètres (la taille d'un pépin de pomme) et fuient absolument la lumière. Voici les preuves irréfutables de leur présence chez vous :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Des boutons rouges alignés ou regroupés par 3 ou 4, principalement sur les bras, les jambes et le dos.",
                "De minuscules taches de sang sur vos draps ou vos oreillers, provoquées par l'écrasement des insectes pendant la nuit.",
                "Des points noirs micrométriques (excréments) accumulés sur les coutures du matelas, les lattes du sommier ou l'arrière des plinthes.",
                "La présence de mues translucides ou d'œufs blanchâtres de la taille d'un grain de sel cachés dans les fissures du bois."
              ].map((symptom, i) => (
                <div key={i} className="flex gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl">
                  <span className="text-rose-500 font-black shrink-0 text-sm">✕</span>
                  <p className="text-sm md:text-base text-slate-600 font-semibold leading-normal">{symptom}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section : Le Protocole d'intervention professionnel */}
          <section className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm mb-12" aria-labelledby="protocol-title">
            <h2 id="protocol-title" className="text-xl md:text-2xl font-black text-slate-950 flex items-center gap-2.5 mb-2">
              <Shield className="text-emerald-500" size={22} />
              Notre protocole d'extermination en 2 passages
            </h2>
            <p className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-6">Une obligation technique pour détruire les œufs et stopper le cycle</p>
            
            <div className="space-y-6">
              {[
                {
                  title: "1. Inspection minutieuse et cartographie",
                  desc: "Démontage de la literie, examen des têtes de lit, des canapés, des plinthes et des prises électriques pour cibler précisément toutes les poches de résistance."
                },
                {
                  title: "2. Premier traitement choc (Pulvérisation / Nébulisation)",
                  desc: "Application d'insecticides professionnels à forte rémanence. Ce traitement élimine instantanément les punaises adultes et nymphes dès qu'elles sortent de leurs cachettes."
                },
                {
                  title: "3. Le protocole d&apos;hygiène client",
                  desc: "Nous vous remettons des consignes strictes (lavage du linge à 60°C ou passage au congélateur, mise sous housse hermétique) pour sécuriser l'action de notre traitement."
                },
                {
                  title: "4. Second passage de sécurité (15 jours après)",
                  desc: "Crucial pour rompre définitivement le cycle de reproduction. Ce second passage élimine les jeunes punaises fraîchement écloses avant qu'elles n'aient le temps de pondre à leur tour."
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

          {/* Boutons d'action partagés rapides */}
          <ServiceCta />

          {/* Section : FAQ Spécifique Punaises de lit */}
          <section className="mt-12 space-y-6" aria-label="Foire aux questions">
            <h2 className="text-xl font-black text-slate-950 text-center">Foire aux questions — Punaises de lit</h2>
            <div className="space-y-4">
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-xs">
                <h3 className="font-black text-slate-950 text-sm md:text-base mb-2">Pourquoi faut-il obligatoirement deux passages ?</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  Aucun produit insecticide du marché (même professionnel) ne peut traverser la coquille des œufs de punaises de lit. Le premier passage détruit les insectes vivants. Le second passage, programmé entre 10 et 15 jours plus tard, détruit les insectes qui viennent tout juste d'éclore avant qu'ils ne puissent se reproduire.
                </p>
              </div>
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-xs">
                <h3 className="font-black text-slate-950 text-sm md:text-base mb-2">Puis-je régler le problème moi-même avec des fumigènes du commerce ?</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  C'est fortement déconseillé. Les sprays ou bombes fumigènes vendus dans le commerce n'ont pas la puissance nécessaire et provoquent un effet de fuite. Les punaises vont s'enfoncer encore plus profondément dans les murs, les prises ou migrer dans les pièces voisines et les appartements adjacents, rendant l'infestation bien pire.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}