"use client";
import { motion } from 'framer-motion';
import { 
  Users, 
  Trophy, 
  MapPin, 
  Calendar, 
  ArrowRight,
  Flame,
  Medal
} from 'lucide-react';
import MatchCard from '@/components/MatchCard';

export default function SquadPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-20">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/5 bg-gradient-to-b from-ingwe-dark to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4 text-white font-black uppercase tracking-[0.3em] text-xs">
              <Flame size={16} className="text-orange-500" /> Toronto Local Chapter
            </div>
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-none mb-8">
              THE <span className="text-white text-glow-white">MOVEMENT</span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-400 font-medium italic uppercase tracking-tight">
              Representing the Pride in the 6ix. From local league dominance to community tournaments, we carry the Ingwe name on every pitch.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
        
        {/* --- LEFT COL: TEAM INFO & TOURNAMENTS (Span 2) --- */}
        <div className="lg:col-span-2 space-y-20">
          
          {/* SECTION: WHO WE ARE */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <Users className="text-ingwe-blue" size={32} />
              <h2 className="text-4xl font-black italic uppercase">The Local Warriors</h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed font-medium italic border-l-2 border-white pl-6">
              The Ingwe Toronto local team is a collective of diaspora talent and local ballers. 
              We compete in various semi-pro and community leagues across the Greater Toronto Area, 
              bringing the aggressive, high-tempo football of AFC Leopards to the Canadian turf.
            </p>
          </section>

          {/* SECTION: TOURNAMENT HISTORY */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <Medal className="text-ingwe-blue" size={32} />
              <h2 className="text-4xl font-black italic uppercase">Competition History</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-ingwe-concrete p-8 border-b-4 border-ingwe-blue group hover:bg-ingwe-blue transition-colors duration-500">
                <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:text-white">Toronto African Cup</h3>
                <p className="text-sm text-gray-400 group-hover:text-white/80">Regular participants and 2023 Semi-Finalists. Competing against the best African diaspora teams in Ontario.</p>
              </div>
              <div className="bg-ingwe-concrete p-8 border-b-4 border-white group hover:bg-white transition-colors duration-500">
                <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:text-black text-white">Sunday League Premier</h3>
                <p className="text-sm text-gray-400 group-hover:text-black/80">Currently competing in the top flight of Toronto's most competitive community leagues.</p>
              </div>
            </div>
          </section>

          {/* SECTION: UPCOMING TOURNAMENTS */}
          <section className="bg-ingwe-blue p-10 skew-x-[-2deg]">
            <div className="skew-x-[2deg]">
              <h2 className="text-4xl font-black italic uppercase text-white mb-4">Summer Series 2026</h2>
              <p className="text-white font-bold mb-8 opacity-90">Registration is open for the upcoming regional tournaments. Join the squad or come out to support the boys.</p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-tighter">
                  <MapPin size={18} /> Cherry Beach Sports Fields
                </div>
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-tighter">
                  <Calendar size={18} /> Starting June 15
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* --- RIGHT COL: LOCAL MATCH CENTER (Span 1) --- */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32 bg-ingwe-concrete/40 p-6 border border-white/10 rounded-sm">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="text-ingwe-blue" size={24} />
              <h2 className="text-xl font-black italic uppercase tracking-tight">
                Squad Hub 
                <span className="text-[10px] text-gray-500 block uppercase tracking-widest">Toronto, ON</span>
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/10 pb-2">Recent Outings</h3>
              <MatchCard 
                teamA="Ingwe Toronto" teamB="Ghana Stars" 
                scoreA="3" scoreB="2" 
                date="Last Sunday" location="Lamport Stadium" 
                isFinished={true} 
              />
              <MatchCard 
                teamA="Nigeria FC" teamB="Ingwe Toronto" 
                scoreA="1" scoreB="1" 
                date="Oct 2025" location="Esther Shiner Stadium" 
                isFinished={true} 
              />

              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/10 pb-2 mt-10">Next Kick-off</h3>
              <MatchCard 
                teamA="Ingwe Toronto" teamB="Somali United" 
                date="Sun, 3:00 PM" location="Cherry Beach Pitch 1" 
                isFinished={false} 
              />
              
              <button className="w-full mt-6 py-4 border border-white/20 hover:bg-white hover:text-black transition-all font-black uppercase italic text-xs tracking-widest flex items-center justify-center gap-2">
                Apply to Join Squad <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}