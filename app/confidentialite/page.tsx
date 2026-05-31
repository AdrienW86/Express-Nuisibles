import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Express Nuisibles",
  description: "Découvrez comment Express Nuisibles protège et gère vos données personnelles conformément au RGPD.",
  robots: "noindex, follow", // Pas besoin de faire indexer ces pages juridiques en priorité
};

export default function ConfidentialitePage() {
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
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-950">Politique de Confidentialité</h1>
              <p className="text-xs text-slate-400 font-semibold mt-1">Dernière mise à jour : Mai 2026</p>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-950">1. Introduction</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              L'entreprise Express Nuisibles, dirigée par Grégory, accorde une importance capitale à la confidentialité et à la sécurité de vos données personnelles. Cette politique vous explique comment nous traitons les données collectées via notre site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-950">2. Données collectées</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Lorsque vous utilisez notre simulateur de devis ou nos formulaires de contact, nous collectons uniquement les informations que vous nous transmettez volontairement :
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-600 font-semibold space-y-1">
              <li>Votre nom ou le nom de votre entreprise</li>
              <li>Votre numéro de téléphone</li>
              <li>Les détails liés à votre demande (type de nuisible, surface estimée)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-950">3. Utilisation des données</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Vos données sont exclusivement utilisées pour :
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-600 font-semibold space-y-1">
              <li>Calculer et affiner votre estimation tarifaire.</li>
              <li>Vous rappeler par téléphone afin de planifier une intervention ou un diagnostic gratuit.</li>
            </ul>
            <p className="text-sm text-slate-600 font-medium pt-1">
              <strong>Aucun usage commercial :</strong> Vos informations ne seront jamais vendues, louées ou cédées à des tiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-950">4. Durée de conservation</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Si votre demande n'aboutit pas à une prestation, vos coordonnées sont supprimées sous un délai maximum de 3 mois. Si une intervention est réalisée, les données sont conservées dans le cadre légal de notre facturation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-950">5. Vos droits (RGPD)</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Conformément à la réglementation européenne, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, il vous suffit de contacter Grégory directement par téléphone au 07 43 26 04 51.
            </p>
          </section>
        </div>
        
      </div>
    </main>
  );
}