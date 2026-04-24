export default function MatchCard({ teamA, teamB, scoreA, scoreB, date, location, isFinished }: any) {
  return (
    <div className="bg-ingwe-concrete border-l-4 border-ingwe-blue p-6 mb-4 skew-x-[-2deg]">
      <div className="flex justify-between items-center">
        <div className="text-left">
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{date}</p>
          <h4 className="text-xl font-black italic uppercase">{teamA} vs {teamB}</h4>
          <p className="text-xs text-ingwe-blue font-bold uppercase">{location}</p>
        </div>
        <div className="text-right">
          {isFinished ? (
            <div className="text-3xl font-black italic">
              {scoreA} - {scoreB}
            </div>
          ) : (
            <div className="bg-white text-black px-3 py-1 text-xs font-black uppercase italic">Upcoming</div>
          )}
        </div>
      </div>
    </div>
  );
}