import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css"; // TOTO JE KRITICKÉ PRE DIZAJN!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K.S.V. Kitzbühel | Kraftsportverein",
  description: "Pravý silový šport v Kitzbüheli.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen flex flex-col selection:bg-red-600 selection:text-white`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Kraftsportverein Kitzbühel</p>
        </footer>
      </body>
    </html>
  );
}