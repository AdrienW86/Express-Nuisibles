import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Express Nuisibles",
  description: "Consultez les conditions générales d'utilisation du site Express Nuisibles.",
  robots: "noindex, follow",
};

export default function CguPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Bouton Retour */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-950 transition-colors mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Retour à l'accueil
        </Link>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-6 flex items-center gap-3">
            <div className="p-2 bg-slate-100 text-slate-800 rounded-lg">
              <Scale size={24} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-950">Conditions Générales d'Utilisation</h1>
              <p className="text-xs text-slate-400 font-semibold mt-1">En vigueur au : Mai 2026</p>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-950">1. Objet du site</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Le site Express Nuisibles est un site vitrine ayant pour objectif de présenter les prestations de dératisation, désinsectisation et destruction de nids de frelons/guêpes proposées par Grégory à Perpignan et ses alentours.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-950">2. Simulateur de tarifs et devis</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Le site propose un outil de calcul et de simulation de prix en ligne. 
            </p>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
              ⚠️ <strong>Important :</strong> Les montants issus de ce simulateur sont fournis à titre **purement indicatif**. Ils ne constituent en aucun cas un engagement contractuel ferme. Seul le diagnostic final réalisé de vive voix par téléphone ou constaté directement sur les lieux de l'intervention donnera lieu à un prix ferme et définitif.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-950">3. Responsabilité</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Express Nuisibles s'efforce de fournir des informations aussi précises que possible sur le site. Toutefois, l'entreprise ne pourra être tenue responsable des omissions ou des inexactitudes dans la mise à jour des données.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-950">4. Propriété intellectuelle</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              L'ensemble des éléments textuels, graphiques et structurels du site sont la propriété exclusive d'Express Nuisibles. Toute reproduction ou exploitation non autorisée du site ou de son contenu est strictement interdite.
            </p>
          </section>
        </div>
        
      </div>
    </main>
  );
}