"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Icon } from "@iconify/react";

export function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav dir="ltr" className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-white/90 border-indigo-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-3xl text-indigo-950 bold-font uppercase tracking-tighter">
          YARON.
        </a>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <a href="#work" className="group relative px-6 py-2 rounded-xl border border-indigo-200 bg-transparent text-indigo-500 transition-all duration-300 overflow-hidden hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95">
            <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{t("Work", "פרויקטים")}</span>
          </a>
          <a href="#about" className="group relative px-6 py-2 rounded-xl border border-indigo-200 bg-transparent text-indigo-500 transition-all duration-300 overflow-hidden hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95">
            <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{t("About", "אודות")}</span>
          </a>
          <a href="#contact" className="group relative px-6 py-2 rounded-xl border border-indigo-200 bg-transparent text-indigo-500 transition-all duration-300 overflow-hidden hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95">
            <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{t("Contact", "צור קשר")}</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="click-effect flex items-center gap-2 px-4 py-2 rounded-xl border border-indigo-200 text-xs font-medium hover:bg-indigo-50 text-indigo-900 uppercase"
          >
            <Icon icon="solar:global-bold" width="16" />
            <span className="w-16 text-center transition-opacity duration-300">
              {lang === "en" ? "עברית" : "ENGLISH"}
            </span>
          </button>

          <a
            href="#contact"
            className="click-effect hidden md:inline-flex items-center px-6 py-2.5 text-xs font-bold rounded-xl bg-indigo-950 text-white hover:bg-[#c5a059] uppercase tracking-wide"
          >
            {t("Get in touch", "דברו איתי")}
          </a>

          <button
            onClick={toggleMenu}
            className="md:hidden click-effect flex items-center justify-center p-2 rounded-xl border border-indigo-200 text-indigo-900 hover:bg-indigo-50"
            aria-label="Toggle mobile menu"
          >
            <Icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-indigo-100/50 shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-3 text-sm font-medium">
          <a
            href="#work"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-xl border border-indigo-100 bg-transparent text-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 transition-colors"
          >
            {t("Work", "פרויקטים")}
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-xl border border-indigo-100 bg-transparent text-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 transition-colors"
          >
            {t("About", "אודות")}
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-xl border border-indigo-100 bg-transparent text-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 transition-colors"
          >
            {t("Contact", "צור קשר")}
          </a>
        </div>
      </div>
    </nav>
  );
}
