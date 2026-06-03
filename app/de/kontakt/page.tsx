import { Mail, MapPin, User } from "lucide-react";

export default function Kontakt() {
  return (
    <div className="flex flex-col items-center w-full min-h-[70vh] bg-zinc-950 text-zinc-100 py-24 px-4">
      
      <div className="max-w-xl w-full">
        <h1 className="text-5xl font-black uppercase tracking-tighter italic mb-12 text-center">
          Kontakt <span className="text-red-600">.</span>
        </h1>

        <div className="space-y-6">
          {/* Obmann */}
          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
            <User className="w-8 h-8 text-red-600" />
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Obmann</p>
              <p className="text-lg font-semibold">Tommy Sailer</p>
            </div>
          </div>

          {/* Email */}
          <a href="mailto:ksvkitz@gmail.com" className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-4 hover:border-red-600 transition-all">
            <Mail className="w-8 h-8 text-red-600" />
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">E-mail</p>
              <p className="text-lg font-semibold">ksvkitz@gmail.com</p>
            </div>
          </a>

          {/* Adresa */}
          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
            <MapPin className="w-8 h-8 text-red-600" />
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Zustelladresse</p>
              <p className="text-lg font-semibold">Lindnerfeld 7, 6370 Kitzbühel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}