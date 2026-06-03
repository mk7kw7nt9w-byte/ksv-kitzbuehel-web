export default function Galerie() {
  // Miesto pre tvoje fotky - neskôr ich dáme do JSON alebo poľa
  const photos = Array.from({ length: 6 }); 

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-12 italic">Galéria <span className="text-red-600">.</span></h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((_, i) => (
          <div key={i} className="aspect-square bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all group">
            <div className="w-full h-full flex items-center justify-center text-zinc-700 group-hover:text-red-600 transition-colors">
              {/* Tu neskôr pridáme <Image src={...} /> z Next.js */}
              <span className="font-bold">Foto {i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}