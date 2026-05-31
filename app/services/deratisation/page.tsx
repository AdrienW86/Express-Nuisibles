// app/services/deratisation/page.tsx
import type { Metadata } from "next";
import { Shield, CheckCircle2, AlertTriangle, Eye } from "lucide-react";
import Image from "next/image";
import ServiceCta from "@/components/ServiceCta";

export const metadata: Metadata = {
  title: "Dératisation Perpignan | Exterminateur Rats & Souris 66",
  description: "Invasion de rats, souris ou mulots ? Express Nuisibles élimine rapidement et durablement vos rongeurs à Perpignan et dans tout le 66. Devis gratuit.",
  alternates: {
    canonical: "https://express-nuisibles.fr/services/deratisation",
  },
};

export default function DeratisationPage() {
  // Données structurées pour le SEO (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Dératisation Professionnelle - Express Nuisibles",
    "image": "/deratisation.webp",
    "description": "Service d'élimination et d'extermination de rats, souris et mulots pour particuliers et professionnels à Perpignan et ses environs.",
    "brand": {
      "@type": "Brand",
      "name": "Express Nuisibles"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "89.00",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://express-nuisibles.fr/services/deratisation"
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
            <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-700 text-xs font-black px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <AlertTriangle size={14} className="animate-bounce" /> Urgence Rongeurs
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-none mb-6">
              Dératisation à Perpignan : <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Éliminez les rats & souris définitivement
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              Dégâts matériels, risques sanitaires, bruits nocturnes... N&apos;attendez pas que l&apos;infestation devienne incontrôlable. Express Nuisibles intervient sous 24h avec des solutions professionnelles ciblées.
            </p>

            {/* Bannière Image Unique - Corrigée avec z-0 et objet-cover complet */}
            <div className="relative z-0 w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 mb-8">
              <Image 
                src="/deratisation.webp" 
                alt="Intervention de dératisation à Perpignan par Express Nuisibles Services avec pose de boîtiers d'appâtage sécurisés"
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
                <CheckCircle2 size={16} className="text-emerald-500" /> Tarif dès 89€
              </span>
            </div>
          </div>
        </section>

        {/* Corps de la page */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          
          {/* Section : Les Signes d'infestation */}
          <section className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm mb-12" aria-labelledby="symptoms-title">
            <h2 id="symptoms-title" className="text-xl md:text-2xl font-black text-slate-950 flex items-center gap-2.5 mb-6">
              <Eye className="text-emerald-500" size={22} />
              Comment repérer la présence de rongeurs chez vous ?
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Les rongeurs (rats bruns, rats d&apos;égout, souris domestiques ou mulots) sont des animaux nocturnes extrêmement discrets. Si vous observez l&apos;un de ces symptômes, la colonie est déjà bien implantée :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Bruits de grattement ou de trottinement dans les combles, plafonds ou cloisons dès la tombée de la nuit.",
                "Excréments sombres (semblables à des grains de riz pour les souris, ou des noyaux d'olive pour les rats).",
                "Traces de dents sur vos câbles électriques, tuyaux en PVC, isolations ou emballages alimentaires.",
                "Odeur forte et persistante d'ammoniac ou de renfermé dans les zones peu fréquentées (celliers, greniers)."
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
              Le protocole Express Nuisibles Services
            </h2>
            <p className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-6">Une méthode en 4 étapes pour un résultat 100% garanti</p>
            
            <div className="space-y-6">
              {[
                {
                  title: "1. Inspection technique approfondie",
                  desc: "Notre technicien identifie l'espèce de rongeur en cause, repère ses points de passage, ses sources de nourriture et cartographie l'étendue de la colonie."
                },
                {
                  title: "2. Traitement curatif sécurisé",
                  desc: "Mise en place d'appâts professionnels hautement attractifs encapsulés dans des boîtes de sécurisation hermétiques, totalement inaccessibles pour vos enfants ou animaux de compagnie."
                },
                {
                  title: "3. Traitement mécanique (Proofing)",
                  desc: "Pour éviter tout retour, nous colmatons les voies d'accès et fissures extérieures par lesquelles les rats et souris pénètent dans vos bâtiments."
                },
                {
                  title: "4. Suivi et contrôle de l'extinction",
                  desc: "Une visite de contrôle est planifiée pour s'assurer de l'éradication complète du nid et valider la décontamination totale des lieux."
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
            <h2 className="text-xl font-black text-slate-950 text-center">Foire aux questions — Dératisation</h2>
            <div className="space-y-4">
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-xs">
                <h3 className="font-black text-slate-950 text-sm md:text-base mb-2">Vos traitements sont-ils dangereux pour mon chien ou mon chat ?</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  Non. Nous utilisons exclusivement des postes d&apos;appâtage sécurisés à clé. Les rodonticides sont solidement fixés à l&apos;intérieur de ces boîtes plastiques ultra-résistantes, rendant leur accès impossible pour les animaux domestiques.
                </p>
              </div>
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-xs">
                <h3 className="font-black text-slate-950 text-sm md:text-base mb-2">Combien de temps faut-il pour éliminer tous les rats ?</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  Les produits professionnels agissent en quelques jours pour éviter la méfiance des autres membres de la colonie. En règle générale, une infestation standard est totalement maîtrisée et éteinte en 1 à 2 semaines maximum.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}