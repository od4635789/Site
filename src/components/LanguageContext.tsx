"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "he";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (en: string, he: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "he" : "en"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "he" ? "rtl" : "ltr");
  }, [lang]);

  const t = (en: string, he: string) => (lang === "en" ? en : he);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
