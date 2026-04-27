"use client";

import { useLanguage } from "./LanguageContext";
import { Icon } from "@iconify/react";

export function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-white/90 border-indigo-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-3xl text-indigo-950 bold-font uppercase tracking-tighter">
          YARON.
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-indigo-500">
          <a href="#work" className="click-effect inline-block hover:text-indigo-900">
            {t("Work", "פרויקטים")}
          </a>
          <a href="#about" className="click-effect inline-block hover:text-indigo-900">
            {t("About", "אודות")}
          </a>
          <a href="#contact" className="click-effect inline-block hover:text-indigo-900">
            {t("Contact", "צור קשר")}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="click-effect flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-indigo-100 text-xs font-bold hover:bg-indigo-50 text-indigo-900 uppercase"
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
        </div>
      </div>
    </nav>
  );
}
