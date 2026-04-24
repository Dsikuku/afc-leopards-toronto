import { Target, ArrowRight } from 'lucide-react';

export default function JoinBranchForm() {
  return (
    <section id="join" className="relative mt-28 py-20 px-6 bg-ingwe-concrete/50 border-t-4 border-ingwe-blue overflow-hidden">
      
      {/* Visual background text effect */}
      <div className="absolute -left-10 top-0 text-[180px] font-black italic tracking-tighter text-black opacity-10 leading-none select-none">
        INGWE
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Context */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <Target className="text-ingwe-blue" size={36} />
            <span className="text-ingwe-blue font-black uppercase tracking-[0.3em] text-xs">Membership Drive 2026</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-6">
            Join <br />The <span className="text-glow-blue text-ingwe-blue">Pride</span>
          </h2>
          <p className="max-w-lg text-gray-300 leading-relaxed italic font-medium">
            Be part of the largest AFC Leopards diaspora community in North America. 
            Connect with fellow fans, get priority access to Toronto watch parties, 
            exclusive branch merchandise, and directly support the mother club in Kenya.
          </p>
        </div>

        {/* Right Column: The Form */}
        <div className="bg-black p-8 md:p-12 border border-white/5 shadow-2xl relative">
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-black tracking-widest text-gray-500 mb-2">First Name</label>
                <input type="text" placeholder="John" className="w-full p-4 bg-ingwe-concrete border border-white/10 text-white placeholder:text-gray-600 focus:border-ingwe-blue focus:ring-1 focus:ring-ingwe-blue transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase font-black tracking-widest text-gray-500 mb-2">Last Name (Optional)</label>
                <input type="text" placeholder="Mutua" className="w-full p-4 bg-ingwe-concrete border border-white/10 text-white placeholder:text-gray-600 focus:border-ingwe-blue focus:ring-1 focus:ring-ingwe-blue transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-black tracking-widest text-gray-500 mb-2">Email Address</label>
              <input type="email" required placeholder="john.mutua@example.com" className="w-full p-4 bg-ingwe-concrete border border-white/10 text-white placeholder:text-gray-600 focus:border-ingwe-blue focus:ring-1 focus:ring-ingwe-blue transition-colors" />
            </div>

            <div>
              <label className="block text-xs uppercase font-black tracking-widest text-gray-500 mb-2">Primary Location in GTA (e.g., Scarborough)</label>
              <input type="text" placeholder="Scarborough" className="w-full p-4 bg-ingwe-concrete border border-white/10 text-white placeholder:text-gray-600 focus:border-ingwe-blue focus:ring-1 focus:ring-ingwe-blue transition-colors" />
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-3 bg-ingwe-blue text-white px-8 py-5 font-black uppercase italic hover:bg-white hover:text-black transition-all shadow-xl text-lg">
              Submit My Application <ArrowRight />
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-gray-600">
            *We respect your privacy. All information remains confidential to the branch leadership.
          </p>
        </div>

      </div>
    </section>
  );
}