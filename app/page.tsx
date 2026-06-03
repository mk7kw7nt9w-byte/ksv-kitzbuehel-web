import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[70vh] bg-zinc-950 text-zinc-100 text-center px-4">
      
      {/* Nadpis */}
      <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic mb-6 leading-[1.1]">
        PRAVÝ KRAFTSPORT<br />
        <span className="text-red-600">V KITZBÜHELI</span>
      </h1>
      
      {/* Podnadpis */}
      <p className="text-base md:text-xl text-zinc-400 font-light mb-10 max-w-xl">
        Budujeme komunitu, ktorá sa nebojí ťažkých váh. Sme K.S.V. Kitzbühel.
      </p>

      {/* Tlačidlo */}
      <Link 
        href="/raumsuche" 
        className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all flex items-center gap-2"
      >
        Momentalne sme v zaciatkoch a hladame priestory
        <ArrowRight className="w-5 h-5 text-red-600" />
      </Link>

    </div>
  );
}