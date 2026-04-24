"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Trophy, ArrowRight, Shield } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row bg-black">
      
      {/* --- SECTION 1: THE HERITAGE (AFC LEOPARDS) --- */}
      {/* We add 'bg-ingwe-blue' here to provide the base for the blend mode */}
      <motion.div 
        whileHover={{ flex: 1.6 }} // Increased flex for more dramatic expansion
        className="relative flex-1 group border-r border-white/5 overflow-hidden transition-all duration-[700ms] ease-out bg-ingwe-blue"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/afc-leopards.png" 
            alt="Heritage"
            // KEY VISUAL EFFECT: mix-blend-multiply + grayscale. 
            // The multiply mode applies the image as a filter over the blue background.
            className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1000ms] ease-in-out"
          />
          {/* A gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-ingwe-blue/20 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-center p-12 md:p-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Shield className="text-white/80 mb-6 drop-shadow-lg" size={56} strokeWidth={1.5}/>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6 text-glow-white">
              AFC LEOPARDS <span className="text-white">TORONTO BRANCH</span>
            </h2 >
            <p className="max-w-md text-gray-200 font-medium italic mb-12 uppercase text-sm tracking-widest leading-relaxed drop-shadow-sm">
              Connecting the Toronto pride to the legendary roots of AFC Leopards Kenya. History, Membership, and the 1964 Legacy.
            </p>
            <Link href="/heritage">
              <button className="flex items-center gap-4 bg-white text-black px-10 py-5 font-black uppercase italic skew-x-[-10deg] hover:bg-black hover:text-white transition-all group/btn shadow-xl text-lg">
                Explore History <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* --- SECTION 2: THE SQUAD (TORONTO LOCAL) --- */}
      {/* We use a slightly darker blue/concrete base here to differentiate the vibe slightly */}
      <motion.div 
        whileHover={{ flex: 1.6 }}
        className="relative flex-1 group overflow-hidden transition-all duration-[700ms] ease-out bg-ingwe-dark"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ingwe-toronto.jpeg" 
            alt="Local Squad"
            // The same visual effect, optimized for this section
            className="w-full h-full object-cover grayscale opacity-70 mix-blend-multiply group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1000ms] ease-in-out"
          />
          {/* Subtle gradient to anchor the text */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-center items-end text-right p-12 md:p-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Trophy className="text-ingwe-blue mb-6 drop-shadow-[0_0_15px_rgba(0,102,255,0.8)]" size={56} strokeWidth={1.5} />
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6 text-glow-blue">
              INGWE <span className="text-ingwe-blue ">TORONTO FC</span>
            </h2>
            <p className="max-w-md text-gray-300 font-medium italic mb-12 uppercase text-sm tracking-widest leading-relaxed drop-shadow-sm">
              Our local warriors taking on the Toronto leagues. Matchdays, Standings, and the Current Squad.
            </p>
            <Link href="/squad">
              <button className="flex items-center gap-4 bg-ingwe-blue text-white px-10 py-5 font-black uppercase italic skew-x-[-10deg] hover:bg-white hover:text-black transition-all group/btn shadow-xl text-lg">
                <ArrowRight className="rotate-180 group-hover/btn:-translate-x-2 transition-transform" /> View The Squad
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* --- CENTRAL LOGO OVERLAY --- */}
      {/* Increased prominence and better glowing effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
        <div className="bg-black border-[3px] border-ingwe-blue p-5 rotate-45 shadow-[0_0_60px_rgba(0,102,255,0.4)]">
          <div className="-rotate-45 font-black text-3xl italic tracking-tighter text-white">
            INGWE<span className="text-ingwe-blue text-glow-blue">TO</span>
          </div>
        </div>
      </div>

    </main>
  );
}