"use client";

import { useLanguage } from "./LanguageContext";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative pt-48 pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-200 blur-[120px] rounded-full"></div>
      </div>

      <Reveal className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-indigo-50 shadow-sm text-xs font-bold text-indigo-600 mb-8 uppercase tracking-wide">
        <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059] animate-pulse"></span>
        <span>{t("Accepting new projects", "זמין לפרויקטים חדשים")}</span>
      </Reveal>

      <Reveal>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-indigo-950 max-w-5xl leading-[1.1]">
          {lang === "en" ? (
            <>
              Elevating businesses with <span className="text-[#c5a059]">premium</span> web solutions.
            </>
          ) : (
            <>
              משדרגים עסקים עם <span className="text-[#c5a059]">פתרונות דיגיטל</span> עוצמתיים.
            </>
          )}
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <p className="mt-8 text-lg md:text-xl text-indigo-500 max-w-2xl font-medium">
          {t(
            "I build high-end, custom digital storefronts designed to build absolute trust and drive measurable growth for your local brand.",
            "אני בונה פלטפורמות דיגיטליות בהתאמה אישית שנועדו לבסס אמון, למשוך את קהל היעד ולהגדיל מכירות בצורה מוכחת."
          )}
        </p>
      </Reveal>

      <Reveal delay={200} className="mt-12 flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="click-effect inline-block px-8 py-4 bg-indigo-950 text-white rounded-xl text-sm font-bold hover:bg-[#c5a059] shadow-xl uppercase tracking-wide"
        >
          {t("Start a Project", "בואו נתחיל")}
        </a>
        <a
          href="#work"
          className="click-effect inline-block px-8 py-4 bg-white border-2 border-indigo-100 text-indigo-950 rounded-xl text-sm font-bold hover:bg-indigo-50 uppercase tracking-wide"
        >
          {t("View Case Studies", "צפו בעבודות")}
        </a>
      </Reveal>
    </section>
  );
}
