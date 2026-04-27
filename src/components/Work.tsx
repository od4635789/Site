"use client";

import { useLanguage } from "./LanguageContext";
import { Reveal } from "./Reveal";
import { Icon } from "@iconify/react";

const projects = [
  {
    id: 1,
    url: "https://pizza-fix.com/",
    domain: "pizza-fix.com",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    categoryEn: "Pizzeria",
    categoryHe: "פיצריה",
    titleEn: "Pizza Fix",
    titleHe: "פיצה פיקס",
    descEn: "A mouth-watering digital menu and ordering platform designed to boost local deliveries.",
    descHe: "תפריט דיגיטלי מגרה ומערכת הזמנות מתקדמת שנועדה להקפיץ את מערך המשלוחים.",
    delay: 0,
  },
  {
    id: 2,
    url: "https://pizza-cheese.co.il/",
    domain: "pizza-cheese.co.il",
    img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80",
    categoryEn: "Pizzeria",
    categoryHe: "פיצריה",
    titleEn: "Pizza Cheese",
    titleHe: "פיצה צ'יז",
    descEn: "A clean online presence focusing on fast ordering and showcasing premium ingredients.",
    descHe: "נוכחות דיגיטלית נקייה עם דגש על חווית הזמנה מהירה והצגת חומרי גלם איכותיים.",
    delay: 100,
  },
  {
    id: 3,
    url: "https://burgerstation.co.il/",
    domain: "burgerstation.co.il",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    categoryEn: "Burger Joint",
    categoryHe: "המבורגריה",
    titleEn: "Burger Station",
    titleHe: "בורגר סטיישן",
    descEn: "An edgy, modern website built to drive takeaway orders and highlight a unique street-food vibe.",
    descHe: "אתר מודרני ובועט שנבנה כדי להקפיץ את הזמנות הטייק-אוויי ולהבליט חווית אוכל רחוב ייחודית.",
    delay: 200,
  },
];

export function Work() {
  const { t } = useLanguage();

  return (
    <section id="work" className="py-32 px-6 bg-white border-t border-indigo-50">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl text-indigo-950 uppercase">{t("Selected Work", "פרויקטים נבחרים")}</h2>
          <div className="w-24 h-1.5 bg-[#c5a059] mt-6 md:mx-0 mx-auto"></div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Reveal key={project.id} delay={project.delay} className="group">
              <a href={project.url} target="_blank" rel="noreferrer" className="block cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg border border-indigo-100 bg-white group-hover:shadow-2xl transition-shadow duration-500">
                  <div className="h-8 bg-zinc-100 border-b border-zinc-200 flex items-center px-4 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <div className="ml-4 text-[10px] text-zinc-400 font-medium tracking-wider">{project.domain}</div>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden relative">
                    {/* Next Image is preferred, but using img to keep remote URLs simple without next.config.js changes */}
                    <img
                      src={project.img}
                      alt={project.titleEn}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-indigo-950/0 group-hover:bg-indigo-950/40 transition-colors duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-indigo-950 text-sm font-bold py-2.5 px-5 rounded-full shadow-lg flex items-center gap-2">
                        <span>{t("Live Site", "צפה באתר")}</span>
                        <Icon icon="solar:arrow-right-up-linear" width="16" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c5a059]">
                  {t(project.categoryEn, project.categoryHe)}
                </span>
              </div>
              <h3 className="text-2xl text-indigo-950 mb-2">{t(project.titleEn, project.titleHe)}</h3>
              <p className="text-indigo-500 text-sm font-medium leading-relaxed">
                {t(project.descEn, project.descHe)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
