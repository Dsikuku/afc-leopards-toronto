"use client";
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, Ticket, Camera } from 'lucide-react';
import Link from 'next/link';

export default function GalaPage() {
  const galaGallery = [
    { src: "/images/gala25/smiles.jpg", caption: "2025 Gala Dinner & Keynote Address" },
    { src: "/images/gala25/captain.jpg", caption: "Executive Board & Guest Honor Roll" },
    { src: "/images/gala25/mandem.jpg", caption: "Cultural Showcase & Awards Ceremony" },
    { src: "/images/gala25/trophy.jpg", caption: "Members & Community Partners Night" },
  ];

  return (
    <div className="bg-black min-h-screen text-white pb-24 selection:bg-ingwe-blue">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 bg-ingwe-concrete/10 border-b border-white/5 overflow-hidden">
        <span className="absolute top-10 -right-20 text-[200px] font-black italic text-white/[0.02] select-none pointer-events-none">
          GALA
        </span>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6 text-ingwe-blue font-black uppercase tracking-[0.4em] text-[10px]">
              <Sparkles size={14} /> Annual Flagship Event
            </div>
            <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] mb-8">
              THE INGWE <br />
              <span className="text-ingwe-blue text-glow">TORONTO GALA</span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-400 font-medium italic uppercase tracking-tight">
              An elite evening of celebration, culture, community excellence, and diaspora solidarity for all AFC Leopards supporters in the 6ix.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- EVENT DETAILS QUICK BAR --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-neutral-900 border border-white/10 p-6 shadow-2xl">
          <div className="flex items-center gap-4 p-4 border-b md:border-b-0 md:border-r border-white/10">
            <div className="p-3 bg-ingwe-blue/10 text-ingwe-blue">
              <Calendar size={24} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block">Date</span>
              <span className="text-lg font-black italic uppercase text-white">Saturday, Dec 26, 2026</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border-b md:border-b-0 md:border-r border-white/10">
            <div className="p-3 bg-ingwe-blue/10 text-ingwe-blue">
              <Clock size={24} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block">Time</span>
              <span className="text-lg font-black italic uppercase text-white">7:00 PM — Late</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4">
            <div className="p-3 bg-ingwe-blue/10 text-ingwe-blue">
              <MapPin size={24} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block">Venue</span>
              <span className="text-lg font-black italic uppercase text-white">800 Mary St, Brampton</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT & POSTER GRID --- */}
      <section className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Poster Showcase */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-ingwe-blue to-transparent opacity-30 blur-lg group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative border border-white/10 bg-ingwe-concrete overflow-hidden aspect-[3/4]">
            <img 
              src="/images/gala26poster.png" 
              alt="Ingwe Toronto Gala Poster" 
              className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 text-[10px] font-black uppercase tracking-widest text-ingwe-blue">
              Official Poster
            </div>
          </div>
        </motion.div>

        {/* Right Column: About & Simple Text Highlights */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-tight mb-4">The Celebration of the Pride</h2>
            <p className="text-gray-300 text-lg leading-relaxed font-medium italic border-l-2 border-ingwe-blue pl-6">
              The Annual Ingwe Toronto Gala brings together players, families, executives, and passionate football fans from across North America to celebrate our shared heritage, honor seasonal achievements, and look forward to the future of AFC Leopards.
            </p>
          </div>

          {/* Simple Text Highlights */}
          <div className="space-y-4 pt-4 border-t border-white/10 text-gray-300">
            <div className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-3">
              <span className="text-ingwe-blue">—</span> Fine multi-course dining and bar refreshments
            </div>
            <div className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-3">
              <span className="text-ingwe-blue">—</span> Official awards and recognition for seasonal player achievements
            </div>
            <div className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-3">
              <span className="text-ingwe-blue">—</span> Live music, cultural showcases, and entertainment
            </div>
            <div className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-3">
              <span className="text-ingwe-blue">—</span> Exclusive networking and fundraising auctions supporting club growth
            </div>
          </div>

          {/* Ticket CTA Box */}
          <div className="p-8 bg-gradient-to-r from-ingwe-blue/20 to-neutral-900 border border-ingwe-blue/40 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
            <div>
              <h4 className="text-2xl font-black italic uppercase mb-1">Secure Your Seat</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Limited seating available for members and guests.</p>
            </div>
            <a 
              href="/squad#join"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black font-black uppercase italic px-8 py-4 hover:bg-ingwe-blue hover:text-white transition-all skew-x-[-10deg]"
            >
              <Ticket size={18} /> Reserve Tickets <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* --- PAST GALAS GALLERY SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mt-28 border-t border-white/10 pt-16">
        <div className="flex items-center gap-4 mb-10">
          <Camera className="text-ingwe-blue" size={32} />
          <h2 className="text-4xl font-black italic uppercase tracking-tight">
            Past Gala Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galaGallery.map((img, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden group border border-white/5 bg-ingwe-concrete">
              <img 
                src={img.src} 
                alt={img.caption} 
                className="w-full h-full object-cover md:grayscale md:contrast-110 md:brightness-90 md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 flex items-end">
                <p className="text-xs font-black uppercase italic tracking-tighter text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BACK NAVIGATION --- */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex justify-between items-center">
        <Link href="/heritage" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-ingwe-blue transition-colors flex items-center gap-2">
          ← Back to Heritage & Executive
        </Link>
        <Link href="/squad" className="text-xs font-black uppercase tracking-widest text-ingwe-blue hover:underline flex items-center gap-2">
          View Squad Roster <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}