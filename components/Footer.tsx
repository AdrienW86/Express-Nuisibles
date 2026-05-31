import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneFormatted = "07 43 26 04 51";
  const phoneLink = "tel:0743260451";

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      
      {/* SECTION PRINCIPALE */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Colonne 1 : Pitch & Branding (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-safeguard p-1.5 rounded-lg text-slate-950">
              <Shield size={20} fill="currentColor" />
            </div>
            <span className="font-black text-xl tracking-tight">
              EXPRESS<span className="text-safeguard">NUISIBLES</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 font-medium max-w-sm leading-relaxed">
            Expert certifié en désinsectisation et dératisation. Intervention ultra-rapide 7j/7 pour les particuliers et les professionnels.
          </p>
          <div className="flex flex-col gap-2 pt-2 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-2">🛡️ Certifié Certibiocide N°044810</span>
            <span className="flex items-center gap-2">💼 Assurance RC Professionnelle AXA</span>
          </div>
        </div>

        {/* Colonne 2 : Liens Rapides (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-sm font-black text-white uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2.5 text-sm font-semibold">
            <li>
              <a href="#services" className="hover:text-white transition-colors">Nos Interventions</a>
            </li>
            <li>
              <a href="#tarifs" className="hover:text-white transition-colors">Estimer un Tarif</a>
            </li>
            <li>
              <a href="#engagements" className="hover:text-white transition-colors">Pourquoi nous choisir ?</a>
            </li>
            <li>
              <a href="#avis" className="hover:text-white transition-colors">Avis Clients</a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Infos de Contact (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="text-sm font-black text-white uppercase tracking-wider">Urgence & Contact</h4>
          <ul className="space-y-3.5 text-sm font-medium">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-safeguard shrink-0">
                <Phone size={16} fill="currentColor" />
              </div>
              <a href={phoneLink} className="text-white font-black hover:text-action-primary transition-colors text-base md:text-lg">
                {phoneFormatted}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                <Clock size={16} />
              </div>
              <span>Disponible <strong>7j/7</strong> — De 7h à 22h</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                <MapPin size={16} />
              </div>
              <span>Interventions dans toutes <strong>les Pyrénées-Orientales</strong> </span>
            </li>
          </ul>
        </div>

      </div>

      {/* BARRE DE COPYRIGHT & BACKLINK */}
      <div className="border-t border-slate-900 bg-slate-950/50 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-500">
          
          {/* Copyright */}
          <div className="order-3 lg:order-1 text-center lg:text-left">
            &copy; {currentYear} Express Nuisibles. Tous droits réservés.
          </div>

          {/* Liens Juridiques */}
          <div className="order-2 lg:order-2 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-slate-400 transition-colors">
              Mentions Légales
            </Link>
            <span className="text-slate-800 hidden sm:inline">|</span>
            <Link href="/cgu" className="hover:text-slate-400 transition-colors">
              CGU
            </Link>
            <span className="text-slate-800 hidden sm:inline">|</span>
            <Link href="/confidentialite" className="hover:text-slate-400 transition-colors">
              Confidentialité
            </Link>
          </div>

          {/* Ton Backlink Codev */}
          <div className="order-1 lg:order-3">
            <a 
              href="https://code-v.fr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white px-2.5 py-1 rounded-md border border-slate-800 transition-all group"
            >
              <span>Propulsé par</span>
              <span className="text-white font-black tracking-tight group-hover:text-action-primary transition-colors">Codev</span>
              <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}