import { ImageIcon } from "lucide-react";

export default function GalerieDE() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-950 text-zinc-100 pb-24 flex-grow">
      
      {/* Hlavička */}
      <section className="w-full pt-24 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">
          Galerie <span className="text-red-600">.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Harte Arbeit, schwere Gewichte und unsere Community in Aktion. Ein Bild sagt mehr als tausend Worte.
        </p>
      </section>

      {/* Mriežka na fotky (Grid) */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Fotka 1 */}
          <div className="group relative aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center hover:border-red-900/50 transition-colors cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <ImageIcon className="w-12 h-12 text-zinc-800 group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute bottom-6 left-6 z-20 text-white font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
              Training
            </span>
          </div>
          
          {/* Fotka 2 */}
          <div className="group relative aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center hover:border-red-900/50 transition-colors md:col-span-2 lg:col-span-1 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <ImageIcon className="w-12 h-12 text-zinc-800 group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute bottom-6 left-6 z-20 text-white font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
              Equipment
            </span>
          </div>

          {/* Fotka 3 */}
          <div className="group relative aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center hover:border-red-900/50 transition-colors cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <ImageIcon className="w-12 h-12 text-zinc-800 group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute bottom-6 left-6 z-20 text-white font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
              Community
            </span>
          </div>

          {/* Fotka 4 (Široká) */}
          <div className="group relative aspect-[2/1] md:col-span-2 lg:col-span-3 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center hover:border-red-900/50 transition-colors cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <ImageIcon className="w-12 h-12 text-zinc-800 group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute bottom-6 left-6 z-20 text-white font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
              Vereinslokal
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}