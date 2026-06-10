import { Mail, MapPin, User } from "lucide-react";

export default function Kontakt() {
  return (
    <div className="w-full min-h-[70vh] bg-zinc-950 px-4 py-24 text-zinc-100">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-12 text-center text-5xl font-black uppercase italic tracking-tighter">
          Kontakt <span className="text-red-600">.</span>
        </h1>

        <div className="space-y-4">
          <div className="flex items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
            <User className="mt-1 h-8 w-8 shrink-0 text-red-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Obmann
              </p>
              <p className="text-lg font-semibold text-white">Tommy Sailer</p>
            </div>
          </div>

          <a
            href="mailto:ksvkitz@gmail.com?subject=Anfrage%20KSV%20Kitzb%C3%BChel"
            className="flex items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:border-red-600"
          >
            <Mail className="mt-1 h-8 w-8 shrink-0 text-red-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                E-Mail
              </p>
              <p className="break-all text-lg font-semibold text-white">
                ksvkitz@gmail.com
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
            <MapPin className="mt-1 h-8 w-8 shrink-0 text-red-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Zustelladresse
              </p>
              <p className="text-lg font-semibold text-white">
                Lindnerfeld 7, 6370 Kitzbühel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}