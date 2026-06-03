import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K.S.V. Kitzbühel | Kraftsportverein",
  description: "Pravý silový šport v Kitzbüheli.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen flex flex-col selection:bg-red-600 selection:text-white overflow-x-hidden`}>
        
        {/* Navigácia */}
        <Navbar />
        
        {/* Hlavný obsah */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Pätička (Footer) s povinnými právnymi odkazmi */}
        <footer className="border-t border-zinc-900 bg-zinc-950 py-10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-zinc-600 text-sm mb-4">
              © {new Date().getFullYear()} Kraftsportverein Kitzbühel
            </p>
            <div className="flex justify-center gap-6 text-xs text-zinc-500 uppercase tracking-widest">
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}