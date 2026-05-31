"use client";

import { useState } from "react";
import { Shield, Ban, Flame, Zap, ArrowRight, ArrowLeft, Check, PhoneCall } from "lucide-react";

type NuisibleType = "deratisation" | "punaises" | "frelons" | "cafards";

export default function DevisForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [nuisible, setNuisible] = useState<NuisibleType>("deratisation");
  const [surface, setSurface] = useState<number>(70);
  const [typeLogement, setTypeLogement] = useState<"maison" | "appartement">("maison");
  const [isUrgent, setIsUrgent] = useState<boolean>(false);
  
  // Coordonnées de contact
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Logique de calcul des prix indicatifs (fourchette)
  const calculerPrix = () => {
    let basePrice = 120;
    let pricePerMeter = 4;

    if (nuisible === "punaises") {
      basePrice = 180;
      pricePerMeter = 5;
    } else if (nuisible === "frelons") {
      // Forfait souvent fixe pour les nids
      const prixFixe = typeLogement === "maison" ? 110 : 90;
      return { min: prixFixe, max: prixFixe + (isUrgent ? 40 : 0) };
    } else if (nuisible === "cafards") {
      basePrice = 130;
      pricePerMeter = 4;
    }

    let total = basePrice + surface * pricePerMeter;
    if (isUrgent) total += 50;

    // On retourne une fourchette de +/- 15% pour se laisser de la marge commerciale
    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.1)
    };
  };

  const prixEstime = calculerPrix();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom || !telephone) return;
    
    // Ici tu pourras brancher ton API (ex: Resend, Formspree, ou ta propre route Next.js API)
    console.log("Données du devis envoyées :", { nuisible, surface, typeLogement, isUrgent, nom, telephone });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xl text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
          <Check size={32} />
        </div>
        <h3 className="text-2xl font-black text-slate-950">Demande bien reçue !</h3>
        <p className="text-slate-600 font-medium max-w-sm mx-auto">
          Grégory a été notifié de votre demande pour un traitement de <strong>{nuisible === "punaises" ? "Punaises de lit" : nuisible}</strong>. Il vous rappelle au <strong>{telephone}</strong> dans moins de 15 minutes.
        </p>
        <button 
          onClick={() => { setIsSubmitted(false); setStep(1); setNom(""); setTelephone(""); }}
          className="text-sm font-bold text-slate-500 hover:text-slate-800 underline transition-colors"
        >
          Simuler un autre devis
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden min-h-[480px] flex flex-col justify-between">
      
      {/* Barre de progression supérieure */}
      <div className="w-full bg-slate-100 h-1.5 flex">
        <div className={`bg-safeguard transition-all duration-300 ${step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"}`}></div>
      </div>

      {/* Contenu de l'étape */}
      <div className="p-6 md:p-8 flex-1">
        
        {/* ÉTAPE 1 : CHOIX DU NUISIBLE */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-black text-safeguard uppercase tracking-wider">Étape 1 sur 3</span>
              <h3 className="text-xl font-black text-slate-950 mt-1">Quel nuisible vous envahit ?</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setNuisible("deratisation")}
                className={`p-4 rounded-xl border-2 text-left flex flex-col gap-3 transition-all ${nuisible === "deratisation" ? "border-slate-950 bg-slate-50" : "border-slate-200 hover:border-slate-300"}`}
              >
                <div className={`p-2 rounded-lg w-10 h-10 flex items-center justify-center bg-red-50 text-red-500`}>
                  <Ban size={22} />
                </div>
                <span className="font-bold text-slate-950 text-sm md:text-base">Rats / Souris</span>
              </button>

              <button
                type="button"
                onClick={() => setNuisible("punaises")}
                className={`p-4 rounded-xl border-2 text-left flex flex-col gap-3 transition-all ${nuisible === "punaises" ? "border-slate-950 bg-slate-50" : "border-slate-200 hover:border-slate-300"}`}
              >
                <div className={`p-2 rounded-lg w-10 h-10 flex items-center justify-center bg-amber-50 text-amber-600`}>
                  <Shield size={22} />
                </div>
                <span className="font-bold text-slate-950 text-sm md:text-base">Punaises de lit</span>
              </button>

              <button
                type="button"
                onClick={() => setNuisible("frelons")}
                className={`p-4 rounded-xl border-2 text-left flex flex-col gap-3 transition-all ${nuisible === "frelons" ? "border-slate-950 bg-slate-50" : "border-slate-200 hover:border-slate-300"}`}
              >
                <div className={`p-2 rounded-lg w-10 h-10 flex items-center justify-center bg-orange-50 text-orange-500`}>
                  <Flame size={22} />
                </div>
                <span className="font-bold text-slate-950 text-sm md:text-base">Frelons / Guêpes</span>
              </button>

              <button
                type="button"
                onClick={() => setNuisible("cafards")}
                className={`p-4 rounded-xl border-2 text-left flex flex-col gap-3 transition-all ${nuisible === "cafards" ? "border-slate-950 bg-slate-50" : "border-slate-200 hover:border-slate-300"}`}
              >
                <div className={`p-2 rounded-lg w-10 h-10 flex items-center justify-center bg-indigo-50 text-indigo-500`}>
                  <Zap size={22} />
                </div>
                <span className="font-bold text-slate-950 text-sm md:text-base">Cafards / Blattes</span>
              </button>
            </div>
          </div>
        )}

        {/* ÉTAPE 2 : INFORMATIONS SURFACE */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-black text-safeguard uppercase tracking-wider">Étape 2 sur 3</span>
              <h3 className="text-xl font-black text-slate-950 mt-1">Détails de votre logement</h3>
            </div>

            {/* Type de logement */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setTypeLogement("maison")}
                className={`flex-1 p-3 rounded-xl border-2 font-bold text-center text-sm transition-all ${typeLogement === "maison" ? "border-slate-950 bg-slate-50 text-slate-950" : "border-slate-200 text-slate-600"}`}
              >
                🏡 Maison
              </button>
              <button
                type="button"
                onClick={() => setTypeLogement("appartement")}
                className={`flex-1 p-3 rounded-xl border-2 font-bold text-center text-sm transition-all ${typeLogement === "appartement" ? "border-slate-950 bg-slate-50 text-slate-950" : "border-slate-200 text-slate-600"}`}
              >
                🏢 Appartement
              </button>
            </div>

            {/* Curseur de surface (masqué pour les frelons car forfait fixe) */}
            {nuisible !== "frelons" ? (
              <div className="space-y-3 pt-2">
                <div className="flex justify-between font-bold text-slate-950 text-sm">
                  <span>Surface à traiter :</span>
                  <span className="text-base text-action-hover">{surface} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="200" 
                  step="10"
                  value={surface} 
                  onChange={(e) => setSurface(Number(e.target.value))}
                  className="w-full accent-slate-950 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 font-bold">
                  <span>20 m²</span>
                  <span>200 m² +</span>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 text-center">
                🐝 Le traitement des nids de guêpes/frelons est calculé sur un forfait unique à l'intervention, peu importe la surface.
              </div>
            )}

            {/* Option Urgence */}
            <label className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={isUrgent} 
                onChange={(e) => setIsUrgent(e.target.checked)}
                className="w-5 h-5 rounded accent-amber-600 cursor-pointer"
              />
              <div className="text-left">
                <p className="text-sm font-black text-slate-950">Intervention d'Urgence (Soir & Week-end)</p>
                <p className="text-xs text-slate-600 font-medium">Cochez si vous avez besoin d'un déplacement de nuit ou un dimanche.</p>
              </div>
            </label>
          </div>
        )}

        {/* ÉTAPE 3 : ESTIMATION ET FORMULAIRE DE VALIDATION */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-5 animate-fadeIn">
            <div>
              <span className="text-xs font-black text-safeguard uppercase tracking-wider">Étape 3 sur 3</span>
              <h3 className="text-xl font-black text-slate-950 mt-1">Estimation & Rappel immédiat</h3>
            </div>

            {/* Cadre de prix dynamique */}
            <div className="bg-slate-950 text-white p-4 rounded-xl text-center border border-slate-800 shadow-inner">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Estimation indicative</p>
              <p className="text-2xl md:text-3xl font-black text-action-primary mt-1">
                {prixEstime.min}€ — {prixEstime.max}€ <span className="text-xs text-white font-normal lowercase">TTC</span>
              </p>
              <p className="text-[11px] text-slate-400 font-medium mt-1">
                *Déplacement inclus. Tarif affiné gratuitement par téléphone.
              </p>
            </div>

            {/* Inputs de contact */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase mb-1">Votre Nom / Entreprise</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: M. Martin"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium focus:outline-none focus:border-slate-950 text-slate-950"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase mb-1">Numéro de Téléphone</label>
                <input 
                  type="tel" 
                  required
                  placeholder="Ex: 06 12 34 56 78"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium focus:outline-none focus:border-slate-950 text-slate-950"
                />
              </div>
            </div>

            {/* Bouton Soumettre Final */}
            <button
              type="submit"
              className="w-full bg-action-primary hover:bg-action-hover text-slate-950 font-black p-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 border border-amber-300"
            >
              <PhoneCall size={18} fill="currentColor" />
              <span>Bloquer mon devis gratuit</span>
            </button>
          </form>
        )}

      </div>

      {/* Barre d'action inférieure (Navigation boutons) */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between gap-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => (prev - 1) as 1 | 2)}
            className="flex items-center gap-1 text-slate-600 hover:text-slate-950 font-bold text-sm transition-colors px-3 py-2"
          >
            <ArrowLeft size={16} />
            <span>Retour</span>
          </button>
        ) : (
          <div /> // Div vide pour maintenir le bouton Suivant à droite
        )}

        {step < 3 && (
          <button
            type="button"
            onClick={() => setStep((prev) => (prev + 1) as 2 | 3)}
            className="bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm ml-auto"
          >
            <span>Suivant</span>
            <ArrowRight size={16} />
          </button>
        )}
      </div>

    </div>
  );
}