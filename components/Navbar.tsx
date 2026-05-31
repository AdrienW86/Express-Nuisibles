"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const phoneFormatted = "07 43 26 04 51";
  const phoneLink = "tel:0743260451";
  const email = "contact@express-nuisibles.fr";

  const services = [
    { name: "Dératisation", href: "/services/deratisation" },
    { name: "Punaises de lit", href: "/services/punaises-de-lit" },
    { name: "Désinsectisation", href: "/services/desinsectisation" },
    { name: "Guêpes & Frelons", href: "/services/guepes-frelons" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-lg border-b border-slate-100">
      
      {/* 1. TOPBAR */}
      <div className="bg-brand-dark text-white text-xs md:text-sm py-2 px-4 border-b border-slate-800 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-2 text-safeguard font-semibold">
            <MapPin size={15} className="text-safeguard" />
            <span>Intervention : Perpignan & Pyrénées-Orientales (66)</span>
          </div>
          <div className="flex items-center gap-4 text-slate-200">
            <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-action-primary transition-colors">
              <Mail size={15} />
              <span>{email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white text-slate-950 px-4 py-3 min-[1250px]:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="Express Nuisibles Logo" 
                width={56}
                height={56}
                priority 
                className="w-12 h-12 min-[1250px]:w-14 min-[1250px]:h-14 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl min-[1250px]:text-2xl font-black tracking-tight text-slate-950 leading-tight">
                EXPRESS <span className="text-action-hover text-red-600">NUISIBLES</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-600 font-extrabold">
                Anti-nuisibles professionnel
              </span>
            </div>
          </Link>

          {/* Liens Desktop (>= 1250px) */}
          <div className="hidden min-[1250px]:flex items-center gap-8 font-bold text-slate-900">
            
            {/* DROPDOWN SERVICES */}
            <div 
              className="relative py-2"
              ref={dropdownRef}
              onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-action-hover transition-colors font-bold text-slate-900 focus:outline-none cursor-pointer"
                onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                aria-expanded={isDesktopDropdownOpen}
              >
                Nos Services
                <ChevronDown size={16} className={`transition-transform duration-200 ${isDesktopDropdownOpen ? "rotate-180 text-red-600" : ""}`} />
              </button>

              {isDesktopDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-red-600 transition-colors"
                      onClick={() => setIsDesktopDropdownOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#zones" className="hover:text-action-hover transition-colors py-2">Zones d&apos;intervention</Link>
            <Link href="/a-propos" className="hover:text-action-hover transition-colors py-2">À propos</Link>
            {/* Liens séparés */}
            <Link href="/#tarifs" className="hover:text-action-hover transition-colors py-2">Tarifs</Link>
            <Link href="/#contact" className="hover:text-action-hover transition-colors py-2">Contact</Link>
          </div>

          {/* CTA Appel d'urgence Desktop */}
          <div className="hidden min-[1250px]:block">
            <a 
              href={phoneLink} 
              className="bg-action-primary hover:bg-action-hover text-slate-950 font-black px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-xl flex items-center gap-2.5 border border-amber-300"
            >
              <Phone size={18} fill="currentColor" className="text-slate-950" />
              <span>URGENCE : {phoneFormatted}</span>
            </a>
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            onClick={() => {
              setIsOpen(!isOpen);
              setIsMobileDropdownOpen(false);
            }} 
            className="min-[1250px]:hidden p-2 text-slate-950 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 3. MENU MOBILE DÉROULANT (< 1250px) */}
        {isOpen && (
          <div className="min-[1250px]:hidden mt-3 pt-3 border-t border-slate-200 flex flex-col gap-1 bg-white">
            
            {/* SERVICES ACCORDION */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="flex items-center justify-between p-3 font-bold text-slate-900 hover:bg-slate-50 rounded-lg transition-colors text-left focus:outline-none"
              >
                <span>Nos Services</span>
                <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileDropdownOpen ? "rotate-180 text-red-600" : ""}`} />
              </button>
              
              {isMobileDropdownOpen && (
                <div className="bg-slate-50/60 pl-4 rounded-lg border-l-2 border-slate-200 my-1 flex flex-col gap-0.5">
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      href={service.href} 
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileDropdownOpen(false);
                      }}
                      className="p-2.5 text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/#zones" 
              onClick={() => setIsOpen(false)}
              className="p-3 font-bold text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Zones d&apos;intervention
            </Link>
            <Link 
              href="/a-propos" 
              onClick={() => setIsOpen(false)}
              className="p-3 font-bold text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              À propos
            </Link>
            {/* Liens séparés Mobile */}
            <Link 
              href="/#tarifs" 
              onClick={() => setIsOpen(false)}
              className="p-3 font-bold text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Tarifs
            </Link>
            <Link 
              href="/#contact" 
              onClick={() => setIsOpen(false)}
              className="p-3 font-bold text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Contact
            </Link>
            
            {/* CTA d'urgence Mobile */}
            <a 
              href={phoneLink} 
              className="bg-action-primary hover:bg-action-hover text-slate-950 font-black p-4 rounded-xl text-center flex items-center justify-center gap-3 shadow-lg mt-3 border border-amber-300"
            >
              <Phone size={22} fill="currentColor" />
              <span className="text-xl">Appeler le {phoneFormatted}</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}