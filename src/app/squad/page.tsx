"use client";
import { motion } from 'framer-motion';
import { 
  Users, 
  Trophy, 
  MapPin, 
  Calendar, 
  ArrowRight,
  Flame,
  Medal,
  Camera
} from 'lucide-react';
import MatchCard from '@/components/MatchCard';
// IMPORT THE SHARED COMPONENT TO ELIMINATE REPETITION
import JoinBranchForm from '@/components/JoinBranchForm';

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
              INGWE <span className="text-white text-glow-white">TORONTO FC</span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-400 font-medium italic uppercase tracking-tight">
              Representing the Pride in Toronto. From local league dominance to community tournaments, we carry the Ingwe name on every pitch.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
        
        <div className="lg:col-span-2 space-y-20">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <Users className="text-ingwe-blue" size={32} />
              <h2 className="text-4xl font-black italic uppercase">The Local Warriors</h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed font-medium italic border-l-2 border-white pl-6">
              The Ingwe Toronto local team is a collective of diaspora talent and local ballers bringing the aggressive, high-tempo football of AFC Leopards to the Canadian turf.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <Medal className="text-ingwe-blue" size={32} />
              <h2 className="text-4xl font-black italic uppercase">Competition History</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-ingwe-concrete p-8 border-b-4 border-ingwe-blue group hover:bg-ingwe-blue transition-colors duration-500">
                <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:text-white">Pamoja Tournament</h3>
                <p className="text-sm text-gray-400 group-hover:text-white/80">Regular participants and 2023 Semi-Finalists.</p>
              </div>
              <div className="bg-ingwe-concrete p-8 border-b-4 border-white group hover:bg-white transition-colors duration-500">
                <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:text-black text-white">Konki Tournament 2025</h3>
                <p className="text-sm text-gray-400 group-hover:text-black/80">Regular participants in the annual Konki Tournament.</p>
              </div>
            </div>
          </section>

          <section className="bg-ingwe-blue p-10 skew-x-[-2deg]">
            <div className="skew-x-[2deg]">
              <h2 className="text-4xl font-black italic uppercase text-white mb-4">Konki Tournament 2026</h2>
              <p className="text-white font-bold mb-8 opacity-90">Registration is open. Join the squad or come out to support the boys.</p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-tighter">
                  <MapPin size={18} /> G.Ross Lord Park, Toronto
                </div>
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-tighter">
                  <Calendar size={18} /> June 13th, 2026
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <Camera className="text-ingwe-blue" size={32} />
              <h2 className="text-4xl font-black italic uppercase">Action in the 6ix</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { src: "/images/squad/squad-action-1.jpg", caption: "Konki Tournament 25'" },
                { src: "/images/squad/squad-vibes.jpg", caption: "Lamport Stadium Wins" },
                { src: "/images/squad/squad-captain.jpg", caption: "2025 End Year Party" },
                { src: "/images/squad/squad-action-2.jpeg", caption: "Konki Tournament 24'" },
              ].map((img, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden group border border-white/5 bg-ingwe-concrete">
                  <img 
                    src={img.src} 
                    alt={img.caption} 
                    className="w-full h-full object-cover md:grayscale md:contrast-110 md:brightness-90 md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 flex items-end">
                    <p className="text-sm font-black uppercase italic tracking-tighter text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-32 bg-ingwe-concrete/40 p-6 border border-white/10 rounded-sm">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="text-ingwe-blue" size={24} />
              <h2 className="text-xl font-black italic uppercase tracking-tight">
                Squad Hub <span className="text-[10px] text-gray-500 block">Toronto, ON</span>
              </h2>
            </div>
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase text-gray-500 border-b border-white/10 pb-2">Recent Outings</h3>
              <MatchCard teamA="Ingwe Toronto" teamB="Ghana Stars" scoreA="3" scoreB="2" date="Last Sunday" location="Lamport Stadium" isFinished={true} />
              <MatchCard teamA="Nigeria FC" teamB="Ingwe Toronto" scoreA="1" scoreB="1" date="Oct 2025" location="Esther Shiner Stadium" isFinished={true} />
              <h3 className="text-[10px] font-black uppercase text-gray-500 border-b border-white/10 pb-2 mt-10">Next Kick-off</h3>
              <MatchCard teamA="Ingwe Toronto" teamB="Somali United" date="Sun, 3:00 PM" location="Cherry Beach Pitch 1" isFinished={false} />
              <a href="#join" className="w-full mt-6 py-4 border border-white/20 hover:bg-white hover:text-black transition-all font-black uppercase italic text-xs tracking-widest flex items-center justify-center gap-2">
                Apply to Join Squad <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Render the clean, singular import block */}
      <JoinBranchForm />
    </div>
  );
}