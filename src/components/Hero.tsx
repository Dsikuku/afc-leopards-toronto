import { ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-ingwe-dark">
      {/* Stadium Glow Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-ingwe-blue)_0%,_transparent_70%)] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1500')] bg-cover bg-center mix-blend-overlay opacity-30 grayscale" />
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="inline-block bg-ingwe-blue text-white text-xs font-black px-3 py-1 uppercase tracking-[0.3em] mb-4 skew-x-[-15deg]">
          Toronto Chapter
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-6">
          THE <span className="text-white">PRIDE</span> OF <br />
          <span className="text-ingwe-blue drop-shadow-[0_0_15px_rgba(0,86,179,0.8)]">WESTERN</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base">
          Official AFC Leopards Supporters Branch • Toronto, Canada
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* Primary CTA: Membership */}
            <Link href="/membership">
              <button className="bg-ingwe-blue text-white font-black px-8 py-4 uppercase italic hover:bg-white hover:text-ingwe-blue transition-all skew-x-[-10deg] cursor-pointer">
                  Join the Den
              </button>
            </Link>

            {/* Secondary CTA: Match Center */}
            <Link href="/match-center">
              <button className="border-2 border-white text-white font-black px-8 py-4 uppercase italic hover:border-ingwe-gold hover:text-ingwe-gold transition-all skew-x-[-10deg] cursor-pointer">
                  Match Schedule
              </button>
            </Link>
        </div>

      </div>

      {/* The "Hoops" Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 flex">
        <div className="flex-1 bg-ingwe-blue" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-ingwe-blue" />
        <div className="flex-1 bg-white" />
      </div>
    </section>
  );
}