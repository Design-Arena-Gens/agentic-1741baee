import BirdCard, { type Bird } from '@/components/BirdCard';

const birds: Bird[] = [
  {
    name: 'Peregrine Falcon',
    scientificName: 'Falco peregrinus',
    imageUrl: 'https://images.unsplash.com/photo-1587116862638-1dc4f5c10f5b?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Cliffs, cities, open landscapes',
    fact: 'The fastest animal on Earth, diving at over 200 mph.'
  },
  {
    name: 'Bald Eagle',
    scientificName: 'Haliaeetus leucocephalus',
    imageUrl: 'https://images.unsplash.com/photo-1545249390-ffe9e4ab9145?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Near large bodies of open water',
    fact: 'Recovered from near-extinction in North America.'
  },
  {
    name: 'Scarlet Macaw',
    scientificName: 'Ara macao',
    imageUrl: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Tropical rainforests',
    fact: 'Highly social parrots known for vivid plumage and intelligence.'
  },
  {
    name: 'Common Kingfisher',
    scientificName: 'Alcedo atthis',
    imageUrl: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Rivers, lakes, streams',
    fact: 'Hovers briefly before plunging headfirst to catch fish.'
  },
  {
    name: 'Snowy Owl',
    scientificName: 'Bubo scandiacus',
    imageUrl: 'https://images.unsplash.com/photo-1542213493895-edf5b94c3671?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Arctic tundra, open fields',
    fact: 'Diurnal owl that hunts during long Arctic daylight.'
  },
  {
    name: 'American Flamingo',
    scientificName: 'Phoenicopterus ruber',
    imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Coastal lagoons, salt flats',
    fact: 'Pink color comes from carotenoid-rich diet.'
  },
  {
    name: 'Ruby-throated Hummingbird',
    scientificName: 'Archilochus colubris',
    imageUrl: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146e?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Woodlands, gardens, meadows',
    fact: 'Beats wings ~50 times per second; can hover and fly backwards.'
  },
  {
    name: 'Indian Peafowl',
    scientificName: 'Pavo cristatus',
    imageUrl: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Open forests, farms, gardens',
    fact: 'Males display extravagant trains to attract mates.'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <div className="gradient-ring rounded-2xl">
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Birds ? Glassmorphic Gallery
                  </h1>
                  <p className="mt-3 max-w-2xl text-slate-300">
                    Discover extraordinary birds from around the world. Immerse yourself in a serene, glassy interface with soft gradients and subtle depth.
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  <form action="#" className="flex items-center gap-3">
                    <input
                      type="search"
                      placeholder="Search birds..."
                      className="w-full md:w-64 rounded-xl glass px-4 py-2.5 placeholder:text-slate-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                    />
                    <button className="rounded-xl px-4 py-2.5 bg-cyan-500/80 hover:bg-cyan-400/90 text-black font-medium shadow-glass transition-colors">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {birds.map((bird) => (
              <BirdCard key={bird.name} bird={bird} />
            ))}
          </div>
        </section>

        <footer className="mt-14 text-center text-slate-400">
          Built with Next.js & Tailwind ? Birds are awesome ??
        </footer>
      </div>
    </main>
  );
}
