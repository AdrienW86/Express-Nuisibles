import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import StickyCallButton from "@/components/StickyCallButton";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Express Nuisibles - Dératisation & Désinsectisation Perpignan",
  description: "Entreprise certifiée de dératisation, désinsectisation et traitement des nuisibles à Perpignan et dans toutes les Pyrénées-Orientales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {/* pt-28 permet de décaler le contenu sous la navbar fixe */}
        <main className="pt-28 md:pt-32 min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}