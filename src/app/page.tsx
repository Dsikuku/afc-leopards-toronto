import Hero from "@/components/Hero";
import MatchCard from "@/components/MatchCard";
import TorontoDen from "@/components/TorontoDen";
import Gallery from "@/components/Gallery";
import Membership from "@/components/Membership";

export default function Home() {
  return (
    <>
      {/* Hero Section - The big "Stadium" entrance */}
      <Hero />
      
      {/* Match Center - Overlapping the Hero for that professional look */}
      <section className="relative -mt-16 z-30 max-w-4xl mx-auto px-4">
        <MatchCard />
      </section>

      {/* Toronto Den Section */}
      <TorontoDen />

      {/* Gallery Section */}
      <Gallery />
      <Membership />

      {/* News / Community Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-5xl font-black italic tracking-tighter">
              LATEST <span className="text-ingwe-blue">NEWS</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mt-2">
              Inside the Den: Toronto Edition
            </p>
          </div>
          <button className="text-ingwe-blue font-black uppercase text-sm border-b-2 border-ingwe-blue pb-1 hover:text-white hover:border-white transition-all">
            View All Updates
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder for News Cards */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-48 bg-ingwe-concrete mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-ingwe-blue/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-0 left-0 bg-ingwe-blue text-white text-[10px] font-bold px-2 py-1 uppercase italic">
                  Match Report
                </div>
              </div>
              <h3 className="text-xl font-bold leading-tight group-hover:text-ingwe-blue transition-colors">
                Ingwe Toronto Hosts Spectacular Derby Watch Party
              </h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2 italic">
                Hundreds of fans gathered in downtown Toronto to witness the clash...
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}