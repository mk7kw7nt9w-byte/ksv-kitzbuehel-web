import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K.S.V. Kitzbühel | Kraftsportverein",
  description:
    "Ein Zuhause für Kraftsport in Kitzbühel. Entdecke unsere Vision für Krafttraining, Athletik und Gemeinschaft und gestalte den Vereinsaufbau mit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen flex flex-col selection:bg-red-600 selection:text-white overflow-x-hidden`}
      >
        <a href="#main-content" className="skip-link">
          Zum Inhalt
        </a>
        <Navbar />
        <Motion />

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
