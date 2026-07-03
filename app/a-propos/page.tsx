// app/a-propos/page.tsx
import type { Metadata } from "next";
import { Shield, CheckCircle2, Star, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À Propos | Express Nuisibles Services Perpignan",
  description: "Express Nuisibles Services. Expert certifié Certibiocide, intervient à Perpignan et dans tout le 66 pour éliminer rats, souris et insectes.",
  alternates: {
    canonical: "https://express-nuisibles.fr/a-propos",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Hero Section de la page À Propos */}
      <section aria-label="Introduction" className="bg-white border-b border-slate-200/80 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Votre Expert Local
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-none mb-6">
            Qui se cache derrière <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Express Nuisibles ?
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            Une entreprise artisanale et indépendante basée dans les Pyrénées-Orientales, dédiée à la protection de votre habitat et de votre santé.
          </p>

          {/* Image de couverture - Configurée avec z-0 pour le Header et object-cover */}
          <div className="relative z-0 w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 mb-4">
            <Image 
              src="/gregory-expert.jpg" 
              alt="Grégory, technicien applicateur d'Express Nuisibles Services en cours d'intervention de gestion des nuisibles"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Section : Notre Histoire & Philosophie */}
        <section className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm mb-12" aria-labelledby="story-title">
          <h2 id="story-title" className="text-xl md:text-2xl font-black text-slate-950 flex items-center gap-2.5 mb-4">
            L'histoire de l'entreprise
          </h2>
          <div className="space-y-4 text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            <p>
              Express Nuisibles est née d'un constat simple : face à une invasion de rats, de punaises de lit ou de frelons, les clients ont besoin d'une écoute humaine, d'une transparence totale sur les tarifs et surtout, d'une efficacité immédiate.
            </p>
            <p>
              Contrairement aux grands groupes nationaux aux plateformes téléphoniques impersonnelles, vous êtes ici en ligne directe avec le technicien qui interviendra chez vous. Cette proximité nous permet de vous proposer des conseils sur-mesure et un suivi rigoureux jusqu&'à l'extinction complète du problème.
            </p>
          </div>
        </section>

        {/* Section : Nos 4 Engagements Piliers */}
        <section className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm mb-12" aria-labelledby="values-title">
          <h2 id="values-title" className="text-xl md:text-2xl font-black text-slate-950 flex items-center gap-2.5 mb-2">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-8">Les garanties d'un travail professionnel bien fait</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Shield size={20} />
              </div>
              <div>
                <h3 className="font-black text-slate-950 text-base mb-1">Agrément Certibiocide</h3>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                  Détenteur du certificat officiel délivré par le Ministère de la Transition Écologique, garantissant l'utilisation sûre et raisonnée des produits professionnels.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-black text-slate-950 text-base mb-1">Intervention sous 24h</h3>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                  Parce que la prolifération n'attend pas, nous nous engageons à intervenir rapidement à votre domicile ou dans vos locaux professionnels 6 jours sur 7.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-black text-slate-950 text-base mb-1">Ancrage 100% Local</h3>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                  Basés à Perpignan, nous intervenons dans l'ensemble de la plaine du Roussillon, de la côte Vermeille jusqu'aux contreforts des Pyrénées (66).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Star size={20} />
              </div>
              <div>
                <h3 className="font-black text-slate-950 text-base mb-1">Résultat 100% Garanti</h3>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                  Chaque traitement s'accompagne d'un protocole de contrôle. Si le nuisible persiste après notre passage prévu, nous revenons gratuitement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Zone Géographique Rapide */}
        <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 md:p-8 text-center mb-12">
          <p className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-2">Secteur d'intervention</p>
          <h3 className="text-lg md:text-xl font-black mb-3">Une urgence dans les Pyrénées-Orientales ?</h3>
          <p className="text-xs md:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed mb-4">
            Nous couvrons Perpignan, Canet-en-Roussillon, Saint-Estève, Rivesaltes, Cabestany, Argeles-sur-Mer, Thuir, Elne et les communes environnantes.
          </p>
          <div className="flex justify-center items-center gap-2 text-xs font-bold text-slate-400">
            <CheckCircle2 size={14} className="text-emerald-400" /> Particuliers
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <CheckCircle2 size={14} className="text-emerald-400" /> Professionnels (Hôtels, Restauration, Boulangeries)
          </div>
        </div>

        {/* Boutons de redirection finaux */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a 
            href="tel:0743260451" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-base px-8 py-4 rounded-2xl shadow-md transition-all active:scale-95"
          >
            Appeler Maintenant
          </a>
          <Link 
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-slate-200 text-slate-900 font-bold text-base px-8 py-4 rounded-2xl shadow-xs hover:bg-slate-50 transition-all active:scale-95"
          >
            Demander un devis écrit
          </Link>
        </div>

      </div>
    </main>
  );
}