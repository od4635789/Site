import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yaron | Premium Web Solutions",
  description: "Elevating businesses with premium web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth scroll-pt-24 ${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased selection:bg-[#c5a059]/30 bg-zinc-50 text-zinc-900 transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
