"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t, lang } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "rate-limit">("idle");
  const [remainingTime, setRemainingTime] = useState(0);

  const handleSubmit = async () => {
    const now = new Date().getTime();
    const lastSent = localStorage.getItem("lastFormSubmission");

    if (lastSent && now - parseInt(lastSent) < 60000) {
      const remaining = Math.ceil((60000 - (now - parseInt(lastSent))) / 1000);
      setRemainingTime(remaining);
      setStatus("rate-limit");
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }

    if (!name || !email || !message) {
      alert(lang === "he" ? "אנא מלאו את כל השדות לפני השליחה." : "Please fill in all fields before sending.");
      return;
    }

    setStatus("loading");

    try {
      let userIP = "Unknown IP";
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        userIP = ipData.ip;
      } catch (e) {
        console.error("Failed to fetch IP address.");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, userIP }),
      });

      if (response.ok) {
        localStorage.setItem("lastFormSubmission", new Date().getTime().toString());
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  const buttonClasses = {
    idle: "bg-white text-indigo-950 hover:bg-[#c5a059] hover:text-white",
    loading: "bg-white text-indigo-950 hover:bg-[#c5a059] opacity-75 cursor-not-allowed",
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    "rate-limit": "bg-zinc-500 text-white cursor-not-allowed",
  };

  const getButtonText = () => {
    if (status === "loading") return t("Sending...", "שולח...");
    if (status === "success") return t("Sent Successfully!", "נשלח בהצלחה!");
    if (status === "error") return t("Error Sending", "שגיאה בשליחה");
    if (status === "rate-limit")
      return lang === "he" ? `אנא המתן עוד ${remainingTime} שניות` : `Please wait ${remainingTime}s`;
    return t("Request Consultation", "שלח פנייה");
  };

  return (
    <section id="contact" className="py-32 px-6 bg-indigo-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none bg-[#c5a059]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="text-5xl md:text-7xl uppercase text-white mb-6">{t("Ready to scale?", "מוכנים לגדול?")}</h2>
          <p className="text-indigo-300 text-xl mb-12 font-medium">
            {t(
              "Fill out the form below to get started, and I'll reach out shortly to map out your digital strategy.",
              "השאירו פרטים כאן למטה, וניצור קשר בהקדם כדי לתכנן את הצעד הבא של העסק שלכם."
            )}
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-indigo-900/50 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-indigo-800">
            <input
              type="text"
              placeholder={t("Name", "שם מלא")}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-4 rounded-xl bg-indigo-950 border border-indigo-800 text-white focus:border-[#c5a059] outline-none font-medium transition-colors"
              dir={lang === "he" ? "rtl" : "ltr"}
            />
            <input
              type="email"
              placeholder={t("Email", "אימייל")}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 rounded-xl bg-indigo-950 border border-indigo-800 text-white focus:border-[#c5a059] outline-none font-medium transition-colors"
              dir={lang === "he" ? "rtl" : "ltr"}
            />
            <textarea
              placeholder={t("Tell me about your project...", "על מה אנחנו עובדים?")}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-4 rounded-xl bg-indigo-950 border border-indigo-800 text-white focus:border-[#c5a059] outline-none md:col-span-2 h-32 font-medium resize-none transition-colors"
              dir={lang === "he" ? "rtl" : "ltr"}
            ></textarea>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={status !== "idle"}
              className={`click-effect md:col-span-2 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl uppercase tracking-wide text-sm ${buttonClasses[status]}`}
            >
              {getButtonText()}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
