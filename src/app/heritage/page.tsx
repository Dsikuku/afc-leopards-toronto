"use client";
import { motion } from 'framer-motion';
import { 
  History, 
  Target, 
  Calendar, 
  Trophy, 
  ExternalLink, 
  Users, 
  Shield 
} from 'lucide-react';
import MatchCard from '@/components/MatchCard';

export default function HeritagePage() {
  return (
    <div className="bg-black min-h-screen text-white pb-20">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 bg-ingwe-blue/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4 text-ingwe-blue font-black uppercase tracking-[0.3em] text-xs">
              <History size={16} /> The Den's Global Footprint
            </div>
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-none mb-8">
              THE <span className="text-ingwe-blue text-glow">HERITAGE</span>
            </h1>
            <a 
              href="https://www.afcleopards.co.ke" 
              target="_blank" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase font-black text-xs tracking-widest border-b border-gray-800 pb-1"
            >
              Visit Official Club HQ (Kenya) <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
        
        {/* --- LEFT COL: CLUB HISTORY & MISSION (Span 2) --- */}
        <div className="lg:col-span-2 space-y-20">
          
          {/* SECTION: CLUB OVERVIEW */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="text-ingwe-blue" size={32} />
              <h2 className="text-4xl font-black italic uppercase">The Mother Club</h2>
            </div>
            <div className="border-l-2 border-ingwe-blue pl-6">
              <p className="text-xl text-gray-300 leading-relaxed font-medium italic">
                Founded in 1964, <span className="text-white font-bold underline decoration-ingwe-blue underline-offset-4">AFC Leopards SC</span> stands as a titan of East African football. Known affectionately as <span className="text-ingwe-blue">"Ingwe"</span>, the club represents a deep cultural heritage and a relentless winning spirit across the continent.
              </p>
            </div>
          </section>

          {/* SECTION: TROPHY ROOM */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="text-ingwe-blue" size={32} />
              <h2 className="text-4xl font-black italic uppercase">The Trophy Room</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "League Titles", count: "12", color: "border-ingwe-blue" },
                { title: "FKF Cups", count: "10", color: "border-white" },
                { title: "CECAFA Club", count: "5", color: "border-ingwe-blue" },
                { title: "Shield Wins", count: "9", color: "border-white" },
              ].map((trophy, i) => (
                <div key={i} className={`bg-ingwe-concrete p-6 border-t-4 ${trophy.color} text-center shadow-xl`}>
                  <p className="text-4xl font-black italic mb-1">{trophy.count}</p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">{trophy.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: BRANCH ORIGINS */}
          <section className="bg-ingwe-concrete/30 p-8 border border-white/5 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <Users className="text-ingwe-blue" size={28} />
              <h2 className="text-3xl font-black italic uppercase">The Toronto Genesis</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed italic font-medium relative z-10">
              The Ingwe Toronto Branch was born out of a desire to unite the Kenyan diaspora 
              through the spirit of football. From a small WhatsApp group of 5 fans, we have 
              grown into a community of over **250+ active members** in the GTA.
            </p>
            <div className="flex flex-wrap gap-12 mt-8">
                <div>
                  <p className="text-5xl font-black italic text-ingwe-blue">50+</p>
                  <p className="text-xs uppercase font-black text-gray-500">Active Members</p>
                </div>
                <div>
                  <p className="text-5xl font-black italic text-white">2024</p>
                  <p className="text-xs uppercase font-black text-gray-500">Year Founded</p>
                </div>
                <div>
                  <p className="text-5xl font-black italic text-ingwe-blue">GTA</p>
                  <p className="text-xs uppercase font-black text-gray-500">Primary Region</p>
                </div>
              </div>
          </section>
        </div>

        {/* --- RIGHT COL: KENYA MATCH CENTER (Span 1) --- */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32 bg-ingwe-concrete/20 p-6 border border-white/5 rounded-sm">
            <div className="flex items-center gap-4 mb-8">
              <Calendar className="text-ingwe-blue" size={20} />
              <h2 className="text-xl font-black italic uppercase tracking-tight">
                Match Center 
                <span className="text-[10px] text-gray-500 block uppercase tracking-widest">Nairobi, Kenya</span>
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/10 pb-2">Latest Results</h3>
              <MatchCard 
                teamA="AFC Leopards" teamB="Gor Mahia" 
                scoreA="2" scoreB="1" 
                date="April 18, 2026" location="Nyayo Stadium" 
                isFinished={true} 
              />
              <MatchCard 
                teamA="Posta Rangers" teamB="AFC Leopards" 
                scoreA="0" scoreB="0" 
                date="April 12, 2026" location="Kasarani Annex" 
                isFinished={true} 
              />

              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/10 pb-2 mt-10">Upcoming Fixture</h3>
              <MatchCard 
                teamA="AFC Leopards" teamB="Bandari FC" 
                date="April 27, 2026" location="Nyayo Stadium" 
                isFinished={false} 
              />
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}