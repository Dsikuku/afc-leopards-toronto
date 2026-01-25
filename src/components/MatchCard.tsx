import { Timer, MapPin } from 'lucide-react';

export default function MatchCard() {
  // For now, we'll hardcode the next match. 
  // Later, we can fetch this from an API.
  const matchDetails = {
    homeTeam: "AFC Leopards",
    awayTeam: "Gor Mahia",
    competition: "Kenyan Premier League",
    stadium: "Nyayo Stadium, Nairobi",
    eatTime: "2026-01-31T15:00:00+03:00", // 3 PM Nairobi Time
  };

  return (
    <div className="bg-ingwe-concrete border-l-8 border-ingwe-blue p-6 shadow-2xl skew-x-[-2deg]">
      <div className="flex justify-between items-center mb-4">
        <span className="text-ingwe-blue font-black uppercase text-sm tracking-widest flex items-center gap-2">
          <Timer size={16} /> Next Match
        </span>
        <span className="bg-white/10 px-3 py-1 text-xs font-bold uppercase">
          {matchDetails.competition}
        </span>
      </div>

      <div className="flex items-center justify-around py-8 border-y border-white/5">
        <div className="text-center">
          <div className="w-20 h-20 bg-white/5 rounded-full mb-2 flex items-center justify-center font-black text-2xl">AFC</div>
          <p className="font-bold text-sm uppercase">Leopards</p>
        </div>

        <div className="text-4xl font-black italic text-ingwe-blue">VS</div>

        <div className="text-center">
          <div className="w-20 h-20 bg-white/5 rounded-full mb-2 flex items-center justify-center font-black text-2xl">GOR</div>
          <p className="font-bold text-sm uppercase">Gor Mahia</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400 font-bold uppercase">Toronto Time</span>
          <span className="font-black text-lg">SAT, JAN 31 @ 7:00 AM</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 italic">
          <MapPin size={12} /> {matchDetails.stadium}
        </div>
      </div>
      
      <button className="w-full mt-6 bg-white text-ingwe-dark font-black py-3 uppercase hover:bg-ingwe-blue hover:text-white transition-all skew-x-[2deg]">
        Join Toronto Watch Party
      </button>
    </div>
  );
}