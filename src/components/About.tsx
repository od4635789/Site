"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { Reveal } from "./Reveal";
import { Icon } from "@iconify/react";

const testimonialsData = [
  {
    en: `"Yaron didn't just build a site; he engineered a robust digital platform for our business. His academic background combined with his availability ensured perfection at every step."`,
    he: `"ירון לא סתם בנה לנו אתר, הוא הנדס פלטפורמה דיגיטלית שלמה עבור העסק שלנו. הרקע האקדמי שלו בשילוב עם הזמינות המטורפת הבטיחו שלמות בכל שלב."`,
    authorEn: "— Verified Client",
    authorHe: "— לקוח מאומת",
  },
  {
    en: `"The complexity of our system required a true expert. Yaron delivered a flawless architecture that exceeded all our expectations."`,
    he: `"המורכבות של המערכת שלנו דרשה מומחה אמיתי. ירון סיפק ארכיטקטורה חסרת פגמים שעלתה על כל הציפיות שלנו."`,
    authorEn: "— Startup CEO",
    authorHe: "— מנכ״ל סטארט-אפ",
  },
  {
    en: `"Delivered way ahead of schedule. The 24/7 dedication is absolutely real. It feels like he never sleeps when there's work to be done."`,
    he: `"סיפק את הפרויקט הרבה לפני הזמן. המסירות 24/7 היא אמיתית לחלוטין. זה מרגיש כאילו הוא אף פעם לא ישן כשיש עבודה לשים עליה וי."`,
    authorEn: "— E-Commerce Manager",
    authorHe: "— מנהל איקומרס",
  },
  {
    en: `"Our conversion rates have doubled since the launch. The site is not just beautiful, it's highly effective and incredibly fast."`,
    he: `"אחוזי ההמרה שלנו הוכפלו מאז ההשקה. האתר לא רק יפהפה, הוא סופר אפקטיבי ומהיר בטירוף."`,
    authorEn: "— Marketing Director",
    authorHe: "— מנהלת שיווק",
  },
];

const TESTIMONIAL_DURATION = 8000;

export function About() {
  const { t, lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      setFade(false);
      resetTimer();
    }, 300);
  };

  const prevTestimonial = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
      setFade(false);
      resetTimer();
    }, 300);
  };

  const animateProgress = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    let newProgress = (elapsed / TESTIMONIAL_DURATION) * 100;

    if (newProgress >= 100) {
      newProgress = 100;
      setProgress(newProgress);
      nextTestimonial();
      return;
    }

    setProgress(newProgress);
    rafRef.current = requestAnimationFrame(animateProgress);
  };

  const resetTimer = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startTimeRef.current = null;
    setProgress(0);
    rafRef.current = requestAnimationFrame(animateProgress);
  };

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animateProgress);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [currentIndex]); // Restart animation when index changes

  const currentReview = testimonialsData[currentIndex];

  return (
    <section id="about" className="py-32 px-6 bg-indigo-50/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl text-indigo-950 mb-8 uppercase leading-tight">
            {lang === "en" ? (
              <>
                Technical Excellence.<br />Unmatched Dedication.
              </>
            ) : (
              <>
                מצוינות טכנולוגית.<br />מסירות ללא פשרות.
              </>
            )}
          </h2>
          <div className="space-y-6 text-indigo-600 text-lg font-medium leading-relaxed">
            <p>
              {t(
                "Hi, I'm Yaron. Holding a Master's degree (M.Sc.) in Computer Science, I bring deep technical expertise and academic rigor to every project. I combine advanced software architecture with creative problem-solving, spending most of my time at the screen. This ensures my clients receive smart, precise digital solutions and almost round-the-clock availability.",
                "היי, אני ירון. עם תואר שני (M.Sc) במדעי המחשב והבנה עמוקה של ארכיטקטורת תוכנה, אני מביא סטנדרט אקדמי ומקצועי לכל פרויקט. אני משלב ידע טכנולוגי מתקדם עם חשיבה יצירתית, ונמצא רוב הזמן מול המסך – מה שמבטיח ללקוחות שלי פתרונות דיגיטליים חכמים, מדויקים, וזמינות כמעט מסביב לשעון."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-10 border-t border-indigo-200 pt-10">
            <div>
              <p className="text-5xl text-indigo-950 bold-font">M.Sc</p>
              <p className="text-sm font-bold text-indigo-400 uppercase tracking-widest mt-2">
                {t("Computer Science", "מדעי המחשב")}
              </p>
            </div>
            <div>
              <p className="text-5xl text-[#c5a059] bold-font">24/7</p>
              <p className="text-sm font-bold text-indigo-400 uppercase tracking-widest mt-2">
                {t("Availability", "זמינות מלאה")}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="relative h-[500px] bg-indigo-950 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-black p-12 flex flex-col justify-between text-white">
            <Icon icon="solar:star-fall-minimalistic-bold" className="text-6xl text-[#c5a059]" />

            <div className="flex flex-col justify-end flex-grow">
              <div
                className={`transition-all duration-300 transform h-40 ${
                  fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                <p className="text-xl md:text-2xl font-medium leading-snug">
                  {lang === "en" ? currentReview.en : currentReview.he}
                </p>
                <p className="mt-6 text-sm font-bold uppercase tracking-widest text-indigo-400">
                  {lang === "en" ? currentReview.authorEn : currentReview.authorHe}
                </p>
              </div>

              <div className="mt-16 flex items-center justify-between gap-6" dir="ltr">
                <button
                  onClick={prevTestimonial}
                  className="click-effect flex items-center justify-center text-zinc-500 hover:text-white transition-colors flex-shrink-0"
                >
                  <Icon icon="solar:alt-arrow-left-linear" width="28" />
                </button>

                <div className="flex-1 max-w-[200px] h-1 bg-indigo-900/80 rounded-full overflow-hidden flex mx-auto">
                  <div
                    className="h-full bg-zinc-400"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <button
                  onClick={nextTestimonial}
                  className="click-effect flex items-center justify-center text-zinc-500 hover:text-white transition-colors flex-shrink-0"
                >
                  <Icon icon="solar:alt-arrow-right-linear" width="28" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
