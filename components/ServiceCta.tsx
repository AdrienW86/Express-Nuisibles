// components/ServiceCta.tsx
import { Phone, ShieldCheck, Clock } from "lucide-react";

export default function ServiceCta() {
  return (
    <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl my-16 border border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      
      <div className="max-w-2xl relative z-10">
        <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20 mb-4">
          <Clock size={12} /> Intervention rapide 7j/7
        </span>
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4">
          Besoin d'une intervention ou d'un diagnostic à Perpignan ?
        </h3>
        <p className="text-slate-400 font-medium text-sm md:text-base mb-8 leading-relaxed">
          Ne laissez pas les rongeurs s'installer et causer des dégâts irréversibles. Express Nuisibles évalue votre situation et vous propose une solution d'éradication durable.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="tel:0743260451"
            className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Phone size={20} className="fill-current animate-pulse" />
            Appeler : 07 43 26 04 51
          </a>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 border border-slate-800 bg-slate-950/40 rounded-xl px-4 py-3 sm:py-4">
            <ShieldCheck size={16} className="text-emerald-400" />
            Devis gratuit & sans engagement
          </div>
        </div>
      </div>
    </section>
  );
}