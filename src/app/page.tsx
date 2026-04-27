import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
