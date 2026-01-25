"use client";
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

export default function TacticsPage() {
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
          <h1 className="text-6xl font-black italic tracking-tighter uppercase">
            Tactical <span className="text-ingwe-blue">Board</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* --- LEAGUE STANDINGS --- */}
        <div className="lg:col-span-1">
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
                    <th className="pb-4 text-right">GD</th>
                    <th className="pb-4 text-right">PTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {standings.map((team) => (
                    <tr key={team.pos} className={team.team === "AFC Leopards" ? "text-ingwe-blue" : "text-gray-300"}>
                      <td className="py-4 italic">{team.pos}</td>
                      <td className="py-4 uppercase">{team.team}</td>
                      <td className="py-4 text-right font-mono">{team.gd}</td>
                      <td className="py-4 text-right font-black">{team.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="w-full mt-6 py-3 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              View Full Table
            </button>
          </div>
        </div>

        {/* --- SQUAD DEPTH --- */}
        <div className="lg:col-span-2">
          <div className="bg-ingwe-concrete p-6 border border-white/5">
            <h3 className="text-xl font-black italic uppercase mb-6 flex items-center gap-2">
              <Users size={20} className="text-ingwe-blue" /> First Team Squad
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {squad.map((player) => (
                <div key={player.no} className="flex items-center justify-between p-4 bg-black/40 border-l-2 border-ingwe-blue group hover:bg-ingwe-blue/10 transition-all">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black italic text-white/20 group-hover:text-ingwe-blue transition-colors">#{player.no}</span>
                    <div>
                      <p className="font-black uppercase italic leading-none">{player.name}</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">{player.pos}</p>
                    </div>
                  </div>
                  <div className={`text-[8px] font-black px-2 py-1 uppercase tracking-tighter ${player.status === 'Available' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {player.status}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tactical Note */}
            <div className="mt-8 p-6 bg-ingwe-blue/5 border border-ingwe-blue/20 flex gap-4">
               <ShieldAlert className="text-ingwe-blue shrink-0" />
               <div>
                 <p className="text-xs font-black uppercase text-ingwe-blue mb-1">Coach's Brief</p>
                 <p className="text-sm italic text-gray-400">High-press system expected for the upcoming derby. Focusing on transitional speed in the final third.</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}