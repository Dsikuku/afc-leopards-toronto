"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ListOrdered, Users, TrendingUp, ShieldAlert } from 'lucide-react';

const standings = [
  { pos: 1, team: "Gor Mahia", p: 18, gd: "+15", pts: 40 },
  { pos: 2, team: "AFC Leopards", p: 18, gd: "+12", pts: 38 },
  { pos: 3, team: "Tusker FC", p: 18, gd: "+8", pts: 34 },
  { pos: 4, team: "Posta Rangers", p: 17, gd: "+4", pts: 31 },
];

const squad = [
  { no: 1, name: "Levis Opiyo", pos: "GK", status: "Available" },
  { no: 12, name: "Lewis Bandi", pos: "DEF", status: "Available" },
  { no: 10, name: "Cliff Nyakeya", pos: "MID", status: "Doubtful" },
  { no: 9, name: "Victor Omune", pos: "FWD", status: "Available" },
];

const formation433 = [
  { pos: "GK", top: "85%", left: "50%", name: "The Wall" },
  { pos: "RB", top: "65%", left: "85%", name: "Overlap" },
  { pos: "CB", top: "70%", left: "65%", name: "The Rock" },
  { pos: "CB", top: "70%", left: "35%", name: "General" },
  { pos: "LB", top: "65%", left: "15%", name: "Speed" },
  { pos: "CDM", top: "50%", left: "50%", name: "Engine" },
  { pos: "CM", top: "40%", left: "30%", name: "Maestro" },
  { pos: "CM", top: "40%", left: "70%", name: "Vision" },
  { pos: "RW", top: "15%", left: "80%", name: "The Flash" },
  { pos: "ST", top: "10%", left: "50%", name: "Apex" },
  { pos: "LW", top: "15%", left: "20%", name: "Wizard" },
];

export default function TacticsPage() {
  const [selectedPos, setSelectedPos] = useState<string | null>(null);

  return (
    <div className="bg-ingwe-dark min-h-screen pb-24 text-white">
      {/* --- HEADER --- */}
      <div className="bg-ingwe-concrete py-20 border-b border-ingwe-blue/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-ingwe-blue p-2 skew-x-[-10deg]">
              <TrendingUp size={24} className="text-white" />
            </div>
            <span className="text-ingwe-blue font-black uppercase tracking-[0.3em] text-xs">Technical Area</span>
          </div>
          <h1 className="text-6xl font-black italic tracking-tighter uppercase leading-none">
            Tactical <span className="text-ingwe-blue">Board</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- THE PITCH (Center on Desktop, First on Mobile) --- */}
        <div className="order-1 lg:order-2 lg:col-span-6">
          <div className="relative aspect-[2/3] md:aspect-[3/4] bg-[#1a2e1a] border-[4px] border-white/20 rounded-lg overflow-hidden shadow-2xl">
            {/* Pitch Markings */}
            <div className="absolute inset-0 border-2 border-white/10 m-4" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[15%] border-b-2 border-white/10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[15%] border-t-2 border-white/10" />
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 border-2 border-white/10 rounded-full" />

            {/* Players */}
            {formation433.map((player, index) => (
              <motion.div
                key={`${player.pos}-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                style={{ top: player.top, left: player.left }}
                onClick={() => setSelectedPos(player.pos)}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-black border-2 transition-all duration-300 ${
                  selectedPos === player.pos 
                    ? 'bg-ingwe-blue border-white scale-125 shadow-[0_0_20px_rgba(0,86,179,0.8)]' 
                    : 'bg-black/80 border-ingwe-blue group-hover:border-white'
                }`}>
                  {player.pos}
                </div>
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-black uppercase tracking-tighter bg-black/80 px-2 py-0.5 rounded opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  {player.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- STANDINGS (Left on Desktop, Second on Mobile) --- */}
        <div className="order-2 lg:order-1 lg:col-span-3 space-y-8">
          <div className="bg-ingwe-concrete p-6 border border-white/5">
            <h3 className="text-xl font-black italic uppercase mb-6 flex items-center gap-2">
              <ListOrdered size={20} className="text-ingwe-blue" /> FKF Premier League
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-bold">
                <thead className="text-[10px] uppercase tracking-widest text-gray-500 border-b border-white/5">
                  <tr>
                    <th className="pb-4">POS</th>
                    <th className="pb-4">TEAM</th>
                    <th className="pb-4 text-right">PTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {standings.map((team) => (
                    <tr key={team.pos} className={team.team === "AFC Leopards" ? "text-ingwe-blue bg-ingwe-blue/5" : "text-gray-300"}>
                      <td className="py-4 italic">{team.pos}</td>
                      <td className="py-4 uppercase">{team.team}</td>
                      <td className="py-4 text-right font-black">{team.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-ingwe-concrete p-6 border border-white/5">
             <h3 className="text-lg font-black italic uppercase mb-4 text-ingwe-blue">Philosophy</h3>
             <p className="text-xs text-gray-400 leading-relaxed italic uppercase font-bold">
                High-intensity verticality. We control the half-spaces and exploit wide areas with overlapping fullbacks.
             </p>
          </div>
        </div>

        {/* --- SQUAD (Right on Desktop, Third on Mobile) --- */}
        <div className="order-3 lg:col-span-3 space-y-6">
          <div className="bg-ingwe-concrete p-6 border border-white/5">
            <h3 className="text-xl font-black italic uppercase mb-6 flex items-center gap-2">
              <Users size={20} className="text-ingwe-blue" /> First Team
            </h3>
            <div className="space-y-3">
              {squad.map((player) => (
                <div key={player.no} className="p-3 bg-black/40 border-l-2 border-ingwe-blue flex justify-between items-center">
                  <div>
                    <p className="text-xs font-black uppercase italic leading-none">{player.name}</p>
                    <p className="text-[9px] text-gray-500 font-bold uppercase mt-1">{player.pos}</p>
                  </div>
                  <div className={`text-[7px] font-black px-1.5 py-0.5 uppercase ${player.status === 'Available' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {player.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-ingwe-blue/5 border border-ingwe-blue/20">
             <div className="flex items-center gap-2 text-ingwe-blue mb-4">
               <ShieldAlert size={18} />
               <span className="text-[10px] font-black uppercase tracking-widest">Analysis</span>
             </div>
             {selectedPos ? (
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 key={selectedPos}
               >
                 <p className="text-xs font-black uppercase text-white mb-2">{selectedPos} Role Detail</p>
                 <p className="text-xs italic text-gray-400 leading-relaxed">
                    Key in the transition phase. Expected to maintain a high line and dictate the tempo of the counter-press.
                 </p>
               </motion.div>
             ) : (
               <p className="text-xs italic text-gray-600">Select a player on the pitch to view role analysis.</p>
             )}
          </div>
        </div>

      </div>
    </div>
  );
}