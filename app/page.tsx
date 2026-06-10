import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[85vh] py-20 px-4 text-center">
      
      {/* Obrovské KSV Logo */}
      <div className="mb-8 relative w-72 h-72 md:w-[450px] md:h-[450px]">
         <Image 
           src="/logo2.png" // <-- Tu je tá zmena!
           alt="KSV Kitzbühel Logo"
           fill
           priority
           className="object-contain drop-shadow-[0_0_40px_rgba(220,38,38,0.25)]" 
         />
      </div>

      {/* Nadpis */}
      <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic mb-6 leading-[1.1]">
        PRAVÝ KRAFTSPORT<br />
        <span className="text-red-600">V KITZBÜHELI</span>
      </h1>
      
      {/* Podnadpis */}
      <p className="text-base md:text-xl text-zinc-400 font-light mb-10 max-w-xl">
        Budujeme komunitu, ktorá sa nebojí ťažkých váh. Sme K.S.V. Kitzbühel.
      </p>

      {/* Tlačidlá */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Link 
          href="/mitgliedschaft" 
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all text-lg"
        >
          Pridaj sa k nám
        </Link>

        <Link 
          href="/raumsuche" 
          className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest transition-all flex items-center gap-2"
        >
          Hľadáme priestory
          <ArrowRight className="w-5 h-5 text-red-600" />
        </Link>
      </div>
      
    </main>
  );
}