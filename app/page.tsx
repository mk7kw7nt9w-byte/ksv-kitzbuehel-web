import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 px-4 text-center">
      <h1 className="text-6xl font-extrabold tracking-tighter mb-6 uppercase">
        Pravý <span className="text-red-600">Kraftsport</span> v Kitzbüheli
      </h1>
      <p className="text-xl text-zinc-400 mb-10 max-w-2xl">
        Budujeme komunitu, ktorá sa nebojí ťažkých váh. Sme KSV Kitzbühel.
      </p>
      <Link 
        href="/raumsuche" 
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md transition-all"
      >
        Hľadáme priestory
      </Link>
    </div>
  );
}