import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | Express Nuisibles",
  description: "Consultez les mentions légales de l'entreprise Express Nuisibles, expert en dératisation et désinsectisation.",
  robots: "noindex, follow",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Bouton Retour */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-950 transition-colors mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Retour à l'accueil
        </Link>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
          
          {/* En-tête */}
          <div className="border-b border-slate-100 pb-6 flex items-center gap-3">
            <div className="p-2 bg-slate-100 text-slate-800 rounded-lg">
              <FileText size={24} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-950">Mentions Légales</h1>
              <p className="text-xs text-slate-400 font-semibold mt-1">Conforme à l'article 6 de la loi n° 2004-575 du 21 juin 2004 (LCEN)</p>
            </div>
          </div>

          {/* Éditeur du site */}
          <section className="space-y-2">
            <h2 className="text-lg font-black text-slate-950">1. Éditeur du site</h2>
            <div className="text-sm md:text-base text-slate-600 font-medium space-y-1">
              <p><strong>Nom commercial :</strong> EXPRESS NUISIBLES SERVICES</p>
              <p><strong>Entrepreneur individuel :</strong> Monsieur ROBLES Grégory, José</p>
              <p><strong>Forme juridique :</strong> Entrepreneur individuel (EI)</p>
              <p><strong>Siège social :</strong> 88 Cami de Las Carretas, 66380 Pia, FRANCE</p>
              <p><strong>SIREN :</strong> 834 799 751</p>
              <p><strong>SIRET (Siège) :</strong> 834 799 751 00013</p>
              <p><strong>Code APE / NAF :</strong> 8129A - Désinfection, désinsectisation, dératisation</p>
              <p><strong>Téléphone :</strong> 07 43 26 04 51</p>
              <p><strong>Email :</strong> contact@express-nuisibles.fr</p>
            </div>
          </section>

          {/* Agréments professionnels */}
          <section className="space-y-2">
            <h2 className="text-lg font-black text-slate-950">2. Agréments & Assurances</h2>
            <div className="text-sm md:text-base text-slate-600 font-medium space-y-1">
              <p><strong>Certibiocide :</strong> Certifié sous le numéro **044810** (Délivré par le Ministère de la Transition Écologique, obligatoire pour l'application professionnelle de produits biocides).</p>
              <p><strong>Assurance RC Professionnelle :</strong> Assuré auprès de la compagnie **AXA Assurance** pour l'exercice des activités de dératisation, désinsectisation, et désinfection.</p>
            </div>
          </section>

          {/* Hébergeur */}
          <section className="space-y-2">
            <h2 className="text-lg font-black text-slate-950">3. Hébergement du site</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Le site internet Express Nuisibles est hébergé par la société **Vercel Inc.**, situé au 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. <br />
              <span className="text-xs text-slate-400 font-semibold">Site internet : https://vercel.com</span>
            </p>
          </section>

          {/* Conception / Crédits */}
          <section className="space-y-2">
            <h2 className="text-lg font-black text-slate-950">4. Création du site internet</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              La conception technique, le design et le développement de ce site internet ont été réalisés par **Codev** (https://code-v.fr).
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section className="space-y-2">
            <h2 className="text-lg font-black text-slate-950">5. Propriété intellectuelle</h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Tout le contenu du présent site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, logos et icônes sont la propriété exclusive de l'entreprise EXPRESS NUISIBLES SERVICES à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
          </section>
        </div>
        
      </div>
    </main>
  );
}