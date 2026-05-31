import Image from "next/image";
import { ShieldCheck, Award, Phone, FileText, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const phoneLink = "tel:0743260451";
  const phoneFormatted = "07 43 26 04 51";

  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      {/* Effet de fond subtil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-navy via-brand-dark to-brand-dark opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* COLONNE GAUCHE : Textes et Boutons (7 colonnes) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
          
          {/* Badge d'intervention locale */}
          <div className="inline-flex items-center gap-2 bg-safeguard/10 border border-safeguard/30 text-safeguard px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase">
            <span className="flex h-2 w-2 rounded-full bg-safeguard animate-pulse"></span>
            Intervention Rapide 7j/7 • Perpignan & 66
          </div>

          {/* Titre Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Stop aux nuisibles : <br />
            <span className="text-action-primary">Intervention garantie</span> <br />
            & discrétion assurée.
          </h1>

          {/* Description courte */}
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Express Nuisibles, votre expert de proximité à Perpignan, élimine durablement rats, souris, punaises de lit, frelons et cafards. Matériel professionnel et résultats définitifs.
          </p>

          {/* Boutons d'Action (CTAs) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <a 
              href={phoneLink} 
              className="bg-action-primary hover:bg-action-hover text-slate-950 font-black px-8 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 text-lg border border-amber-300 transform hover:-translate-y-0.5"
            >
              <Phone size={22} fill="currentColor" />
              <span>Urgence : {phoneFormatted}</span>
            </a>
            <a 
              href="#devis" 
              className="bg-brand-navy hover:bg-slate-800 border border-slate-700 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <FileText size={20} />
              <span>Demander un devis gratuit</span>
            </a>
          </div>

          {/* Liste à puces de réassurance */}
          <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-300 font-semibold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-safeguard" /> Déplacement ultra-rapide
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-safeguard" /> Véhicule totalement banalisé
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-safeguard" /> Tarifs transparents connus à l'avance
            </div>
          </div>

        </div>

        {/* COLONNE DROITE : Photo de l'artisan + Badges de confiance (5 colonnes) */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-4">
          
          {/* Conteneur de la Photo */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-brand-navy">
            <Image 
              src="/gregory-expert.jpg" // Renomme ta photo ainsi dans le dossier /public
              alt="Grégory - Expert applicateur Express Nuisibles à Perpignan"
              fill
              priority
              className="object-cover object-top"
            />
            {/* Petit tag sur l'image pour l'humaniser encore plus */}
            <div className="absolute bottom-4 left-4 bg-brand-dark/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700/50 text-sm font-bold">
              👨‍🔧 Express Nuisibles votre entreprise locale
            </div>
          </div>

          {/* Les Badges sous la photo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Badge Certibiocide */}
            <div className="flex items-center gap-3 bg-brand-navy/60 border border-slate-800 p-3 rounded-xl backdrop-blur-sm">
              <div className="p-2 bg-safeguard/10 text-safeguard rounded-lg shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="text-xs font-black text-white uppercase tracking-wider">Agréé Ministère</p>
                <p className="text-xs text-slate-300 font-semibold">Certibiocide N°016482</p>
              </div>
            </div>

            {/* Badge Garantie */}
            <div className="flex items-center gap-3 bg-brand-navy/60 border border-slate-800 p-3 rounded-xl backdrop-blur-sm">
              <div className="p-2 bg-action-primary/10 text-action-primary rounded-lg shrink-0">
                <Award size={22} />
              </div>
              <div>
                <p className="text-xs font-black text-action-primary uppercase tracking-wider">Garantie 100%</p>
                <p className="text-xs text-slate-300 font-semibold">Résultat ou réintervention</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}