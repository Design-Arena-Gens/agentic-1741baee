import Image from 'next/image';

export type Bird = {
  name: string;
  scientificName: string;
  imageUrl: string;
  habitat: string;
  fact: string;
};

export default function BirdCard({ bird }: { bird: Bird }) {
  return (
    <div className="relative group rounded-2xl glass overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-cyan-300 via-fuchsia-300 to-emerald-300" />
      <div className="aspect-[4/3] w-full relative">
        <Image src={bird.imageUrl} alt={bird.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">{bird.name}</h3>
        <p className="text-sm text-slate-300 italic">{bird.scientificName}</p>
        <div className="mt-3 text-sm text-slate-200/90">
          <p><span className="text-slate-400">Habitat:</span> {bird.habitat}</p>
          <p className="mt-2 text-slate-300">{bird.fact}</p>
        </div>
      </div>
    </div>
  );
}
