import { MapPin, ShieldCheck, Clock, Navigation } from "lucide-react";

// Liste des secteurs et communes clés du 66 pour optimiser le maillage SEO local
const sectors = [
  {
    name: "Perpignan & Couronne Urbaine",
    villes: ["Perpignan", "Saint-Estève", "Bompas", "Cabestany", "Pia", "Le Soler", "Toulouges"]
  },
  {
    name: "Côte Radieuse & Littoral",
    villes: ["Canet-en-Roussillon", "Argelès-sur-Mer", "Saint-Cyprien", "Sainte-Marie-la-Mer", "Barcarès"]
  },
  {
    name: "Ribéral & Salanque",
    villes: ["Rivesaltes", "Saint-Laurent-de-la-Salanque", "Thuir", "Ille-sur-Têt", "Millas"]
  }
];

export default function Zones() {
  return (
    <section id="zones" className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* COLONNE GAUCHE : Textes et Liste de villes SEO (7 colonnes) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="text-xs md:text-sm font-black uppercase tracking-widest text-safeguard block">
              Secteur d'Activité
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">
              Votre expert anti-nuisibles partout dans les Pyrénées-Orientales
            </h2>
          </div>

          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
            Basé à Perpignan, Express Nuisibles se déplace rapidement dans un rayon de 40 km. Que vous résidiez sur le littoral, dans la Salanque ou dans l'arrière-pays, Express Nuisibles intervient avec le même niveau d'urgence et de discrétion.
          </p>

          {/* Grid des secteurs (Villes) */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            {sectors.map((sector, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-bold text-slate-950 text-sm md:text-base border-b border-slate-200 pb-1.5 flex items-center gap-2">
                  <Navigation size={14} className="text-action-hover fill-action-hover" />
                  {sector.name}
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-600 font-semibold">
                  {sector.villes.map((ville, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 hover:text-slate-950 transition-colors">
                      <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                      {ville}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note sur les frais de déplacement */}
          <div className="text-xs text-slate-500 font-medium italic pt-2">
            * Votre commune n'est pas listée ? Si vous êtes dans le 66, nous intervenons probablement. Contactez-nous pour confirmation.
          </div>
        </div>

        {/* COLONNE DROITE : Bloc visuel / Carte de réassurance (5 colonnes) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
          <h4 className="text-lg font-black text-slate-950 flex items-center gap-2">
            <MapPin size={20} className="text-red-500 fill-red-100" />
            Engagements Proximité 66
          </h4>

          {/* Atout 1 : Rapidité */}
          <div className="flex gap-4 items-start border-b border-slate-100 pb-4">
            <div className="p-3 bg-amber-50 text-action-hover rounded-xl shrink-0 border border-amber-100">
              <Clock size={24} />
            </div>
            <div>
              <h5 className="font-bold text-slate-950 text-base">Intervention Moins de 2h</h5>
              <p className="text-sm text-slate-600 font-medium mt-0.5">
                Pour les urgences (nids de frelons menaçants, invasion soudaine), nous adaptons notre tournée pour être chez vous dans les plus brefs délais.
              </p>
            </div>
          </div>

          {/* Atout 2 : Transparence tarifaire */}
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-emerald-50 text-safeguard rounded-xl shrink-0 border border-emerald-100">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h5 className="font-bold text-slate-950 text-base">Frais de déplacement inclus</h5>
              <p className="text-sm text-slate-600 font-medium mt-0.5">
                Aucune mauvaise surprise sur la facture finale : le prix annoncé lors de notre échange téléphonique comprend le déplacement et l'intervention.
              </p>
            </div>
          </div>

          {/* Petit bouton d'action interne pour la zone */}
          <div className="pt-4">
            <a 
              href="tel:0743260451" 
              className="block w-full text-center bg-slate-950 hover:bg-slate-900 text-white font-bold p-3.5 rounded-xl transition-colors text-sm shadow-md"
            >
              Vérifier la disponibilité pour ma commune
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}