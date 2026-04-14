"use client";
import React, { useState, useEffect } from 'react';
import { Timer, MapPin, Tv, Shield, Activity, Info } from 'lucide-react';

export default function MatchCenter() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  // Countdown logic for April 26, 2026
  useEffect(() => {
    const target = new Date("April 26, 2026 08:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-ingwe-dark min-h-screen pb-24 text-white">
      {/* --- LIVE STATUS BANNER --- */}
      <div className="bg-red-600 py-2 flex justify-center items-center gap-4 animate-pulse">
        <Activity size={16} className="text-white" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">System Status: Awaiting Kickoff - Derby Mode Active</span>
      </div>

      {/* --- NEXT MATCH HERO --- */}
      <section className="relative py-20 bg-ingwe-concrete border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            {/* Home Team */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-black/40 rounded-full flex items-center justify-center border-4 border-ingwe-blue mb-4">
                <Shield size={64} className="text-ingwe-blue" />
              </div>
              <h3 className="text-2xl font-black italic uppercase">AFC Leopards</h3>
              <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Home (Host)</span>
            </div>

            {/* VS Divider */}
            <div className="text-6xl md:text-8xl font-black italic text-white/10 italic">VS</div>

            {/* Away Team */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-black/40 rounded-full flex items-center justify-center border-4 border-gray-700 mb-4">
                <Shield size={64} className="text-gray-700" />
              </div>
              <h3 className="text-2xl font-black italic uppercase">Gor Mahia</h3>
              <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Away</span>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-12">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.mins },
              { label: 'Secs', value: timeLeft.secs },
            ].map((unit) => (
              <div key={unit.label} className="bg-black/60 p-4 border border-white/5 skew-x-[-5deg]">
                <div className="text-3xl md:text-4xl font-black italic text-ingwe-blue leading-none">{unit.value}</div>
                <div className="text-[8px] font-bold uppercase tracking-widest text-gray-500 mt-2">{unit.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-ingwe-blue" /> Nyayo Stadium, Nairobi</span>
            <span className="flex items-center gap-2"><Tv size={14} className="text-ingwe-blue" /> AZAM TV / KBC</span>
            <span className="flex items-center gap-2"><Timer size={14} className="text-ingwe-blue" /> 4:00 PM Local (8:00 AM Toronto)</span>
          </div>
        </div>
      </section>

      {/* --- FORM & ODDS --- */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-ingwe-concrete p-8 border border-white/5">
          <h4 className="text-xl font-black italic uppercase mb-8 flex items-center gap-3">
             <div className="w-2 h-2 bg-ingwe-blue rounded-full" /> Last 5 Derby Results
          </h4>
          <div className="space-y-4">
            {[
              { date: 'Oct 2025', score: '1 - 0', result: 'W', opp: 'Gor Mahia' },
              { date: 'May 2025', score: '0 - 0', result: 'D', opp: 'Gor Mahia' },
              { date: 'Feb 2025', score: '1 - 2', result: 'L', opp: 'Gor Mahia' },
            ].map((match, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-[10px] font-bold text-gray-500 uppercase">{match.date}</span>
                <span className="font-black italic text-lg">{match.score}</span>
                <span className={`w-8 h-8 flex items-center justify-center font-black text-xs ${
                  match.result === 'W' ? 'bg-green-500 text-black' : 
                  match.result === 'L' ? 'bg-red-500 text-white' : 'bg-gray-500 text-black'
                }`}>
                  {match.result}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ingwe-concrete p-8 border border-white/5 relative overflow-hidden">
          <Info className="absolute top-4 right-4 text-white/10" size={48} />
          <h4 className="text-xl font-black italic uppercase mb-8">Toronto Chapter Notes</h4>
          <p className="text-gray-400 text-sm font-medium italic leading-relaxed">
            The board has confirmed that **The Loose Moose** will open doors at 7:30 AM EST for this fixture. 
            Expect a capacity crowd. Pre-match analysis starts 30 mins before kickoff.
          </p>
          <button className="mt-8 w-full bg-ingwe-blue text-white font-black py-4 uppercase italic tracking-widest skew-x-[-10deg] hover:bg-white hover:text-black transition-all">
            RSVP for Watch Party
          </button>
        </div>
      </div>
    </div>
  );
}