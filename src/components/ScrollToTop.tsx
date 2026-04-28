"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/components/LanguageContext";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      let shouldShow = scrolled > 50;

      // Hide button when reaching the contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // If the contact section is visible in the viewport
        if (rect.top < window.innerHeight - 50) {
          shouldShow = false;
        }
      }

      setIsVisible(shouldShow);
    };

    // Check on mount
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div dir="ltr" className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] transition-all transform-gpu duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
      isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
    }`}>
      <button
        onClick={scrollToTop}
        className="group flex items-center justify-center px-5 py-2.5 gap-2 rounded-full bg-white/35 backdrop-blur-md border border-indigo-100 text-indigo-900 shadow-lg shadow-indigo-900/5 hover:bg-white/60 hover:border-indigo-200 hover:-translate-y-0.5 active:scale-95 transition-all transform-gpu duration-300"
        aria-label="Scroll to top"
      >
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">
          {t("Back to top", "חזרה למעלה")}
        </span>
        <Icon icon="solar:alt-arrow-up-linear" width="18" className="stroke-2 text-indigo-500 group-hover:text-indigo-900 transition-colors" />
      </button>
    </div>
  );
}
