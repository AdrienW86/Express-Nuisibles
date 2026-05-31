// components/StickyCallButton.tsx
import { Phone } from "lucide-react";

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a
        href="tel:0743260451" // Remplace par le vrai numéro de Grégory
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 animate-pulse"
        aria-label="Appeler Express Nuisibles"
      >
        <Phone size={24} className="fill-white text-white" />
      </a>
    </div>
  );
}