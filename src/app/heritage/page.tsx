"use client";
import { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion';
import { 
  History, 
  Target, 
  Calendar, 
  Trophy, 
  ExternalLink, 
  Users, 
  Shield,
  Flame,
  Medal,
  ArrowRight 
} from 'lucide-react';
import MatchCard from '@/components/MatchCard';
import Link from 'next/link';

export default function HeritagePage() {
  const [newsFilter, setNewsFilter] = useState<'upcoming' | 'past'>('upcoming');

  const newsItems = [
    {
      id: 1,
      type: 'past',
      status: 'Accomplished',
      title: "Konki Tournament",
      description: "The KONKI Tournament was a thrilling and memorable event that brought together talented football teams for a series of exciting matches. The tournament showcased incredible teamwork, and sportsmanship from all participating teams.",
      meta: "Learn More",
      link: "/squad#join",
      icon: <Trophy size={20} className="text-ingwe-blue opacity-50" />
    },
    {
      id: 2,
      type: 'upcoming',
      status: 'July 2026',
      title: "The Ingwe Toronto Gala",
      description: "Our biggest fundraiser yet. An evening of Kenyan culture, football heritage, and networking at the Liberty Grand. Supporting the Stadium Fund.",
      meta: "Join Planning Committee",
      icon: <Target size={20} className="text-ingwe-blue" />,
      isMain: true
    },
    {
      id: 3,
      type: 'past',
      status: 'Accomplished',
      title: "Abeingo x City of Kitchener x AFC Leopards Toronto BBQ",
      description: "Abeingo Association, City of Kitchener and AFC Leopards Toronto had a summer BBQ in Kitchener, ON in 2025. A fun filled day with delicious BBQ, family-friendly activities, music, and games suitable for all ages.",
      meta: "Location: Downtown Toronto",
      icon: <Users size={20} className="text-gray-500" />
    },
    {
      id: 4,
      type: 'past',
      status: 'Accomplished',
      title: "Planting Seeds of Hope for Our Planet",
      description: "On Saturday October 12th, 2024 The County Government of Vihiga in collaboration with AFC Leopards Toronto Branch, Abeingo Association of Canada & Chams Media planted over 1000 trees as part of Maragoli Hills forest restoration. The trees will provide shelter, clean air, and a vibrant ecosystems for generations to come.",
      meta: "Location: Western Kenya",
      icon: <Users size={20} className="text-gray-500" />
    },
    {
      id: 5,
      type: 'past',
      status: 'Accomplished',
      title: "2024 End Year Party",
      description: "On Decmeber 28th we celebrated an end of ana mazing year with amazing food, music and great company. We created lifelong memories to be cherished on days to to come. Thank you to everyone of came and we hope to see in the next one.",
      meta: "Location: Missisauga, ONtario",
      icon: <Users size={20} className="text-gray-500" />
    },
    {
      id: 6,
      type: 'upcoming',
      status: 'New Benefit',
      title: "Member ID Cards",
      description: "Starting next month, all registered branch members will receive digital ID cards providing discounts at partner Kenyan-owned businesses.",
      meta: "Register Now",
      icon: <Medal size={20} className="text-ingwe-blue" />,
      link: "/squad#join"
    }
  ];

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
        
        <div className="lg:col-span-2 space-y-20">
          {/* SECTION: CLUB OVERVIEW */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="text-ingwe-blue" size={32} />
              <h2 className="text-4xl font-black italic uppercase">The Mother Club</h2>
            </div>
            <div className="border-l-2 border-ingwe-blue pl-6">
              <p className="text-xl text-gray-300 leading-relaxed font-medium italic">
                Founded in 1964, <span className="text-white font-bold underline decoration-ingwe-blue underline-offset-4">AFC Leopards SC</span> stands as a titan of East African football. Known affectionately as <span className="text-ingwe-blue">"Ingwe"</span>.
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
              Born out of a desire to unite the Kenyan diaspora through the spirit of football.
            </p>
            <div className="flex flex-wrap gap-12 mt-8">
              <div>
                <p className="text-5xl font-black italic text-ingwe-blue">250+</p>
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

          {/* SECTION: DYNAMIC BRANCH NEWS */}
          <section className="mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-white/10 pb-4 gap-4">
              <div className="flex items-center gap-4">
                <Flame className="text-ingwe-blue" size={32} />
                <h2 className="text-4xl font-black italic uppercase">Branch News</h2>
              </div>
              
              {/* TOGGLE BUTTONS */}
              <div className="flex bg-ingwe-concrete p-1 border border-white/5 rounded-sm self-start md:self-auto">
                <button 
                  onClick={() => setNewsFilter('upcoming')}
                  className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${newsFilter === 'upcoming' ? 'bg-ingwe-blue text-white shadow-lg shadow-ingwe-blue/20' : 'text-gray-500 hover:text-white'}`}
                >
                  Upcoming
                </button>
                <button 
                  onClick={() => setNewsFilter('past')}
                  className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${newsFilter === 'past' ? 'bg-ingwe-blue text-white shadow-lg shadow-ingwe-blue/20' : 'text-gray-500 hover:text-white'}`}
                >
                  Past
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
              <AnimatePresence mode="wait">
                {newsItems
                  .filter(item => item.type === newsFilter)
                  .map((item) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`group relative p-8 border transition-all duration-500 ${item.isMain ? 'bg-ingwe-blue/5 border-ingwe-blue/30' : 'bg-ingwe-concrete/20 border-white/5 hover:border-ingwe-blue/40'}`}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest ${item.type === 'upcoming' ? 'bg-ingwe-blue text-white' : 'bg-white/10 text-gray-400'}`}>
                          {item.status}
                        </div>
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-black italic uppercase mb-4 group-hover:text-ingwe-blue transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-6">{item.description}</p>
                      
                      {item.link ? (
                        <Link href={item.link} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-ingwe-blue border-b-2 border-ingwe-blue hover:text-white hover:border-white transition-all">
                          {item.meta} <ArrowRight size={12} />
                        </Link>
                      ) : (
                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">{item.meta}</div>
                      )}
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </section>
        </div>

        {/* --- RIGHT COL: KENYA MATCH CENTER --- */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32 bg-ingwe-concrete/20 p-6 border border-white/5 rounded-sm">
            <div className="flex items-center gap-4 mb-8">
              <Calendar className="text-ingwe-blue" size={20} />
              <h2 className="text-xl font-black italic uppercase tracking-tight">Match Center</h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/10 pb-2">Latest Results</h3>
              <MatchCard teamA="AFC Leopards" teamB="Gor Mahia" scoreA="2" scoreB="1" date="April 18, 2026" location="Nyayo Stadium" isFinished={true} />
              <MatchCard teamA="Posta Rangers" teamB="AFC Leopards" scoreA="0" scoreB="0" date="April 12, 2026" location="Kasarani Annex" isFinished={true} />

              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/10 pb-2 mt-10">Upcoming Fixture</h3>
              <MatchCard teamA="AFC Leopards" teamB="Bandari FC" date="April 27, 2026" location="Nyayo Stadium" isFinished={false} />
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}