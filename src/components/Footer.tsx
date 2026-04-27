"use client";

import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-indigo-900 bg-indigo-950 text-center relative z-10">
      <p className="text-3xl text-white bold-font mb-4 tracking-tighter uppercase">YARON.</p>
      <p className="text-sm text-indigo-400 font-medium">
        {t(
          "© 2023 Yaron Premium Web Solutions. All rights reserved.",
          "© 2023 ירון - פתרונות דיגיטל. כל הזכויות שמורות."
        )}
      </p>
    </footer>
  );
}
