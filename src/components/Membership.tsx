import { ShieldCheck, Zap, Globe, Trophy } from 'lucide-react';

export default function Membership() {
  return (
    <section className="py-24 bg-ingwe-concrete relative overflow-hidden">
      {/* Decorative Large "INGWE" Text in Background */}
      <div className="absolute top-0 right-0 text-[20rem] font-black italic text-white/[0.02] leading-none pointer-events-none">
        INGWE
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-ingwe-dark border-2 border-ingwe-blue p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(0,86,179,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
                JOIN THE <span className="text-ingwe-gold">PRIDE</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 uppercase font-bold tracking-widest">
                Official Toronto Chapter Membership 2026
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  { icon: <ShieldCheck className="text-ingwe-blue" />, text: "Official Membership Digital ID" },
                  { icon: <Zap className="text-ingwe-gold" />, text: "Priority Watch Party Seating" },
                  { icon: <Globe className="text-ingwe-blue" />, text: "Direct Link to AFC Leopards Kenya" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-black italic uppercase text-sm md:text-base">
                    {item.icon} {item.text}
                  </li>
                ))}
              </ul>

              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="ENTER EMAIL ADDRESS" 
                  className="bg-white/5 border border-white/10 px-6 py-4 flex-grow font-bold focus:outline-none focus:border-ingwe-blue transition-all"
                />
                <button className="bg-ingwe-gold text-black font-black px-10 py-4 uppercase italic hover:bg-white transition-all">
                  Get My Card
                </button>
              </form>
            </div>

            <div className="hidden lg:block relative">
               {/* Digital Card Preview */}
               <div className="w-full aspect-[1.6/1] bg-gradient-to-br from-ingwe-blue to-blue-900 rounded-xl p-8 shadow-2xl relative overflow-hidden border border-white/20">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Trophy size={120} />
                  </div>
                  <div className="h-full flex flex-col justify-between">
                    <div className="font-black italic text-2xl tracking-tighter">INGWE TORONTO</div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Member Status</div>
                      <div className="text-2xl font-black italic text-ingwe-gold">ACTIVE 2026</div>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}