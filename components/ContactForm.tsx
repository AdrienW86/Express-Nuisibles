"use client";

import { useState } from "react";
import { Send, Phone, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    { value: "deratisation", label: "Dératisation (Rats, Souris)" },
    { value: "punaises", label: "Punaises de lit" },
    { value: "desinsectisation", label: "Désinsectisation (Cafards, Puces, Blattes)" },
    { value: "guepes", label: "Guêpes & Frelons" },
    { value: "autre", label: "Autre demande / Devis Général" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Intègre ton API de soumission ici (ex: Resend, Formspree, ou une Route API Supabase/Next.js)
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulation d'envoi

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="devis" className="w-full bg-slate-50 py-16 px-4 border-t border-slate-200">
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-start">
        
        {/* COLONNE GAUCHE : Éléments de réassurance (5 colonnes) */}
        <div className="md:col-span-5 space-y-6">
          <div>
            <span className="text-emerald-600 text-xs font-black uppercase tracking-wider bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
              Gratuit & Sans Engagement
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight mt-3">
              Demandez votre devis express
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 font-medium leading-relaxed">
              Une urgence ou besoin d&apos;une intervention préventive ? Remplissez ce formulaire. Grégory vous rappelle sous 2 heures avec une estimation claire.
            </p>
          </div>

          {/* Points forts */}
          <div className="space-y-3 bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs">
            <div className="flex gap-3 items-start">
              <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-950">Prix transparents</h4>
                <p className="text-xs text-slate-500 font-medium">Aucun frais caché. Le tarif validé est le tarif payé.</p>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <ShieldCheck size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-950">Respect de la vie privée</h4>
                <p className="text-xs text-slate-500 font-medium">Intervention en véhicule totalement banalisé pour une discrétion totale vis-à-vis du voisinage.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Calendar size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-950">Rappel ultra-rapide</h4>
                <p className="text-xs text-slate-500 font-medium">6 jours sur 7 dans toutes les Pyrénées-Orientales.</p>
              </div>
            </div>
          </div>

          {/* Encadré d'appel urgent direct */}
          <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-amber-400 text-slate-950 rounded-xl shrink-0">
              <Phone size={24} fill="currentColor" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Invasion critique ?</p>
              <p className="text-sm text-slate-300 font-medium">Ne restez pas dans l&apos;angoisse, appelez directement :</p>
              <a href="tel:0743260451" className="text-lg font-black hover:text-amber-400 transition-colors">
                07 43 26 04 51
              </a>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : Le Formulaire en lui-même (7 colonnes) */}
        <div className="md:col-span-7 bg-white border border-slate-200/80 shadow-xl rounded-3xl p-6 md:p-8 relative">
          
          {isSuccess ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl font-black text-slate-950">Votre demande a bien été envoyée !</h3>
              <p className="text-sm font-medium text-slate-600 max-w-sm mx-auto leading-relaxed">
                Merci pour votre confiance. Grégory étudie votre dossier et vous recontacte par téléphone ou par e-mail dans les plus brefs délais.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 underline cursor-pointer"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Ligne Nom / Téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                    Nom / Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="M. ou Mme Martin"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-hidden transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="06 12 34 56 78"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-hidden transition-all"
                  />
                </div>
              </div>

              {/* Ligne Email / Ville */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exemple@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-hidden transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="city" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                    Ville d&apos;intervention <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    placeholder="Ex: Perpignan (66000)"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-hidden transition-all"
                  />
                </div>
              </div>

              {/* Type de nuisible (Select) */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nuisible" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                  Type de Nuisible concerné <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="nuisible"
                    name="nuisible"
                    required
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-hidden transition-all appearance-none cursor-pointer"
                  >
                    <option value="">-- Sélectionnez une option --</option>
                    {services.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message de description */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                  Décrivez brièvement la situation <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Ex: J'entends des bruits de grattement dans les combles depuis 3 jours..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-hidden transition-all resize-none"
                />
              </div>

              {/* Mention légere RGPD */}
              <p className="text-[11px] text-slate-400 font-medium leading-normal">
                En soumettant ce formulaire, vous acceptez que les informations saisies soient exploitées dans le cadre strict de votre demande de devis et de la relation commerciale qui peut en découler.
              </p>

              {/* Bouton de Soumission */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Calcul du devis en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Recevoir mon devis gratuit</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}