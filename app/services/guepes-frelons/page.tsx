// app/services/guepes-frelons/page.tsx
import type { Metadata } from "next";
import { Shield, CheckCircle2, AlertTriangle, Eye } from "lucide-react";
import Image from "next/image";
import ServiceCta from "@/components/ServiceCta";

export const metadata: Metadata = {
  title: "Nid de Guêpes & Frelons Perpignan | Destruction 66",
  description: "Un nid de guêpes ou de frelons asiatiques chez vous ? Express Nuisibles Services intervient en urgence sous 24h à Perpignan et dans tout le 66. Devis gratuit et intervention garantie.",
  alternates: {
    canonical: "https://express-nuisibles.fr/services/guepes-frelons",
  },
};

export default function GuepesFrelonsPage() {
  // Données structurées pour le SEO (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Destruction de nids de guêpes et frelons - Express Nuisibles Services",
    "image": "/guepes-frelons.webp",
    "description": "Traitement, éradication et retrait de nids de guêpes, frelons européens et frelons asiatiques à Perpignan et dans les Pyrénées-Orientales.",
    "brand": {
      "@type": "Brand",
      "name": "Express Nuisibles Services"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "85.00",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://express-nuisibles.fr/services/guepes-frelons"
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
              <AlertTriangle size={14} className="animate-bounce" /> Danger Piqûres
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-none mb-6">
              Nids de Guêpes & Frelons : <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Intervention et destruction rapide
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              Activité suspecte sous une tuile, nid visible dans un arbre ou une boîte aux lettres ? Ne prenez aucun risque d'attaque. Nous intervenons sous 24h avec le matériel de protection et de traitement adapté.
            </p>

            {/* Bannière Image Unique - Parfaitement intégrée au scroll */}
            <div className="relative z-0 w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 mb-8">
              <Image 
                src="/guepes-frelons.webp" 
                alt="Destruction d'un nid de frelons asiatiques en hauteur par un professionnel équipé d'une combinaison étanche"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="flex justify-center items-center gap-6 text-sm text-slate-500 font-bold">
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 size={16} className="text-emerald-500" /> Matériel Haute Pression / Perche
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 size={16} className="text-emerald-500" /> Tarif dès 85€
              </span>
            </div>
          </div>
        </section>

        {/* Corps de la page */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          
          {/* Section : Différencier les espèces */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" aria-label="Les types d'hyménoptères ciblés">
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-amber-600 font-black mb-4">
                🐝
              </div>
              <h2 className="text-lg font-black text-slate-950 mb-2">Guêpes & Frelons Européens</h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Les guêpes installent souvent leurs nids dans les combles, sous les tuiles ou dans le sol. Le frelon européen, plus gros mais moins agressif, reste un danger direct pour les enfants et les animaux s&apos;il se sent menacé à proximité de son nid.
              </p>
            </div>

            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-rose-50 border border-rose-100 rounded-xl flex items-center justify-center text-rose-600 font-black mb-4">
                ☠️
              </div>
              <h2 className="text-lg font-black text-slate-950 mb-2">Frelons Asiatiques</h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Reconnaissable à ses pattes jaunes et son thorax noir, c&apos;est un fléau pour la biodiversité. Leurs nids (parfois immenses) se cachent à la cime des arbres ou sous les hangars. Le frelon asiatique attaque en rafale si l&apos;on approche à moins de 5 mètres.
              </p>
            </div>
          </section>

          {/* Section : Quand appeler un pro */}
          <section className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm mb-12" aria-labelledby="symptoms-title">
            <h2 id="symptoms-title" className="text-xl md:text-2xl font-black text-slate-950 flex items-center gap-2.5 mb-6">
              <Eye className="text-emerald-500" size={22} />
              Repérer un nid et réagir sans danger
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Un simple va-et-vient continu d&apos;insectes au même endroit indique la présence d&apos;un nid en formation ou déjà mature. Adoptez les bons réflexes :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Ne tentez jamais de boucher le trou d&apos;accès : elles perceront le placo ou trouveront une autre sortie vers l&apos;intérieur.",
                "Évitez les courants d&apos;air, vibrations ou bruits de tondeuse à proximité immédiate du nid.",
                "Ne pulvérisez pas d&apos;insecticide de supermarché sur un nid visible, cela déclenche une attaque défensive massive.",
                "Gardez vos distances (minimum 5 mètres) et mettez à l&apos;abri les animaux domestiques curieux."
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
              Notre protocole de neutralisation sécurisé
            </h2>
            <p className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-6">Éradication totale du nid dès la première application</p>
            
            <div className="space-y-6">
              {[
                {
                  title: "1. Localisation et équipement de protection",
                  desc: "Grégory analyse la configuration du nid et s&apos;équipe d&apos;une combinaison intégrale anti-perforation certifiée pour résister aux dards des frelons asiatiques."
                },
                {
                  title: "2. Traitement par poudrage ou injection ciblée",
                  desc: "Utilisation d&apos;une perche télescopique (jusqu&apos;à plus de 15 mètres de hauteur) pour injecter directement au cœur du nid une poudre biocide foudroyante."
                },
                {
                  title: "3. Contamination totale de la colonie",
                  desc: "Les insectes partis chasser ramènent le produit au nid à leur retour. En quelques heures, l&apos;intégralité de la colonie (reine comprise) est définitivement neutralisée."
                },
                {
                  title: "4. Enlèvement du nid ou sécurisation des lieux",
                  desc: "Une fois le nid inactif, nous procédons à sa dépose ou à sa neutralisation définitive pour empêcher toute réutilisation par d&apos;autres insectes."
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
            <h2 className="text-xl font-black text-slate-950 text-center">Foire aux questions — Guêpes & Frelons</h2>
            <div className="space-y-4">
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-xs">
                <h3 className="font-black text-slate-950 text-sm md:text-base mb-2">Pourquoi faut-il parfois laisser le nid en place 24h après le traitement ?</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  Le produit injecté agit par contact. Laisser le nid en place quelques heures permet aux ouvrières qui étaient à l&apos;extérieur au moment de l&apos;intervention de revenir, d&apos;être contaminées à leur tour et de mourir, assurant une destruction à 100%.
                </p>
              </div>
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-xs">
                <h3 className="font-black text-slate-950 text-sm md:text-base mb-2">Les pompiers se déplacent-ils encore pour les nids de guêpes ?</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  Dans la grande majorité des communes du 66, les pompiers n&apos;interviennent plus pour les propriétés privées, sauf en cas de danger immédiat dans un lieu public (écoles). Ils redirigent systématiquement vers des professionnels certifiés Certibiocide comme Express Nuisibles Services.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}