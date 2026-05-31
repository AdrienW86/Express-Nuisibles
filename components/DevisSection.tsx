import DevisForm from "./DevisForm"; // Importation du formulaire qu'on vient de créer
import { ShieldCheck, CheckCircle2, Phone } from "lucide-react";

export default function DevisSection() {
  const phoneFormatted = "07 43 26 04 51";
  const phoneLink = "tel:0743260451";

  return (
    <section id="tarifs" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs md:text-sm font-black uppercase tracking-widest text-safeguard block">
            Tarification Transparente
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">
            Estimez votre tarif en 1 clic & obtenez votre devis gratuit
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-medium">
            Pas de mauvaise surprise avec Express Nuisibles. Nos tarifs sont indexés sur le type d'infestation et la superficie réelle à traiter.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* COLONNE GAUCHE : Engagements */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
                <ShieldCheck className="text-safeguard" size={24} />
                La Politique Express Nuisibles
              </h3>
              
              <ul className="space-y-4 text-slate-700 font-semibold text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-safeguard shrink-0 mt-0.5" />
                  <span><strong>Devis par téléphone 100% Gratuit :</strong> Aucun frais engagé avant validation orale ou écrite de votre part.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-safeguard shrink-0 mt-0.5" />
                  <span><strong>Prix bloqué :</strong> Le prix fixé lors de notre échange reste inchangé une fois sur le terrain.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-safeguard shrink-0 mt-0.5" />
                  <span><strong>Facilités de paiement :</strong> Possibilité d'échelonner le règlement pour les traitements lourds (comme les punaises de lit).</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200 text-center">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Une urgence absolue ?</p>
                <a 
                  href={phoneLink} 
                  className="mt-2 inline-flex items-center gap-2 bg-action-primary hover:bg-action-hover text-slate-950 font-black px-6 py-3 rounded-xl shadow-md transition-colors w-full justify-center"
                >
                  <Phone size={18} fill="currentColor" />
                  <span>Appeler : {phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : Intégration du vrai DevisForm */}
          <div className="lg:col-span-7">
            <DevisForm />
          </div>

        </div>

      </div>
    </section>
  );
}