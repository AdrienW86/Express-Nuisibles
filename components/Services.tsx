import Link from "next/link";
import { Shield, ArrowUpRight, Zap, Ban, Eye, Flame } from "lucide-react";

// Liste des services avec icônes et descriptions orientées bénéfices clients
const servicesList = [
  {
    id: "deratisation",
    title: "Dératisation",
    subtitle: "Rats, Souris, Mulots",
    description: "Élimination radicale et rebouchage des points d'accès pour empêcher tout retour. Traitement sécurisé pour vos animaux.",
    icon: Ban,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: "punaises-de-lit",
    title: "Punaises de Lit",
    subtitle: "Éradication Totale",
    description: "Protocole de choc (thermique ou chimique) pour éliminer œufs, larves et adultes dès la première intervention. Suivi garanti.",
    icon: Shield,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: "frelons-guepes",
    title: "Frelons & Guêpes",
    subtitle: "Destruction de nids",
    description: "Intervention d'urgence pour la neutralisation de nids de guêpes et de frelons (asiatiques). Sécurisation immédiate des lieux.",
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    id: "desinsectisation",
    title: "Désinsectisation",
    subtitle: "Cafards, Blattes, Puces, Fourmis",
    description: "Destruction des colonies cachées à l'aide de gels de contact professionnels et de pulvérisations rémanentes.",
    icon: Zap,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* En-tête de section axé SEO & Confiance */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs md:text-sm font-black uppercase tracking-widest text-safeguard">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">
            Traitements anti-nuisibles professionnels à Perpignan
          </p>
          <p className="text-base md:text-lg text-slate-600 font-medium">
            Des solutions ciblées, certifiées Certibiocide, pour les particuliers et les professionnels du 66. Diagnostic précis avant chaque intervention.
          </p>
        </div>

        {/* Grille des Services (2x2 sur desktop, 1 colonne sur mobile) */}
        <div className="grid md:grid-cols-2 gap-8">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="group relative bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Effet visuel au hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-200/50 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>

                <div className="space-y-4">
                  {/* Icône stylisée */}
                  <div className={`inline-flex p-3.5 rounded-xl ${service.bgColor} ${service.color} border border-current/10`}>
                    <IconComponent size={28} />
                  </div>

                  {/* Titres */}
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-slate-950 mt-0.5">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Bouton d'action / Lien vers page dédiée */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-slate-900 font-bold group-hover:text-action-hover transition-colors">
                  <span className="text-sm">En savoir plus sur le traitement</span>
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm group-hover:border-action-hover group-hover:bg-action-primary/10 transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                
                {/* Optionnel : Rendre toute la carte cliquable si tu veux lier vers la page du service */}
                <Link href={`/services/${service.id}`} className="absolute inset-0" aria-label={`En savoir plus sur ${service.title}`}></Link>
              </div>
            );
          })}
        </div>

        {/* Petit bandeau d'appel à l'action rapide sous les services */}
        <div className="mt-12 bg-brand-dark text-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-lg">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-lg md:text-xl font-bold">Votre nuisible n'est pas dans la liste ?</h4>
            <p className="text-sm text-slate-400 font-medium">Nous traitons également les puces, chenilles processionnaires, pigeons et la désinfection après sinistre.</p>
          </div>
          <a 
            href="tel:0743260451" 
            className="w-full md:w-auto bg-action-primary hover:bg-action-hover text-slate-950 font-black px-6 py-3.5 rounded-xl text-center shadow-md transition-colors shrink-0 whitespace-nowrap"
          >
            Demander un diagnostic
          </a>
        </div>

      </div>
    </section>
  );
}