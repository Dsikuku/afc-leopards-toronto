"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Trophy, 
  ArrowRight, 
  Shield, 
  Plus, 
  Minus, 
  HelpCircle, 
  Clock, 
  Users 
} from 'lucide-react';

const faqs = [
  {
    question: "How do I officially join the Toronto Branch?",
    answer: "Registration is simple. Head over to our SQUAD page and fill out the 'Join the Pride' form. Once submitted, our branch secretary will reach out with details on membership dues and your official Member ID."
  },
  {
    question: "Where does the branch meet for matchdays?",
    answer: "We have an official partnership with local sports bars in Downtown Toronto and Scarborough for major games. For regular league games, we host rotating watch parties. Check our social media for the next location."
  },
  {
    question: "Are there membership fees?",
    answer: "Yes. To support our community initiatives in Kenya and local events in Toronto, we have a small annual membership fee. This grants you voting rights and discounts on official merchandise."
  },
  {
    question: "Can I join if I'm not based in Toronto?",
    answer: "While our physical events are in the GTA, we welcome members from across Ontario and Canada. You'll still get access to our private community groups and digital member benefits."
  },
  {
    question: "How can I stay updated on news?",
    answer: "Follow us on Instagram or join our official WhatsApp community group via the link provided after you register on the Squad page."
  }
];

// --- INTERNAL COMPONENT: FAQ ---
function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-black border-t border-white/5 relative z-30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4 text-ingwe-blue font-black uppercase tracking-[0.3em] text-[10px]">
              <HelpCircle size={14} /> Knowledge Base
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
              The <span className="text-ingwe-blue text-glow-blue">Briefing</span>
            </h2>
          </div>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest md:text-right">
            Everything you need to know <br /> about the Toronto pride.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-white/10 transition-colors duration-500 ${activeId === index ? 'bg-ingwe-concrete/20' : 'hover:bg-white/[0.02]'}`}
            >
              <button
                onClick={() => setActiveId(activeId === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group outline-none"
              >
                <span className={`text-xl md:text-2xl font-black italic uppercase transition-all duration-300 ${activeId === index ? 'text-ingwe-blue' : 'text-white'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full border transition-all duration-300 ${activeId === index ? 'border-ingwe-blue bg-ingwe-blue text-white' : 'border-white/20 text-gray-500 group-hover:border-white'}`}>
                  {activeId === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {activeId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-12 text-gray-400 leading-relaxed font-medium italic">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- MAIN EXPORT ---
export default function LandingPage() {
  return (
    <div className="bg-black">
      {/* 1. HERO SPLIT SECTION */}
      <main className="relative min-h-[100vh] w-full overflow-hidden flex flex-col md:flex-row">
        
        {/* SECTION 1: THE HERITAGE */}
        <motion.div 
          whileHover={{ flex: 1.6 }} 
          className="relative flex-1 group border-r border-white/5 overflow-hidden transition-all duration-[700ms] ease-out bg-ingwe-blue min-h-[50vh] md:min-h-screen"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/afc-leopards.png" 
              alt="Heritage"
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1000ms] ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-ingwe-blue/20 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center p-12 md:p-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <Shield className="text-white/80 mb-6 drop-shadow-lg" size={56} strokeWidth={1.5}/>
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6 text-glow-white">
                AFC LEOPARDS <span className="text-white">TORONTO BRANCH</span>
              </h2>
              <p className="max-w-md text-gray-200 font-medium italic mb-12 uppercase text-sm tracking-widest leading-relaxed">
                Connecting the Toronto pride to the legendary roots of AFC Leopards Kenya. History, Membership, and the 1964 Legacy.
              </p>
              <Link href="/heritage">
                <button className="flex items-center gap-4 bg-white text-black px-10 py-5 font-black uppercase italic skew-x-[-10deg] hover:bg-black hover:text-white transition-all group/btn text-lg">
                  Explore History <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* SECTION 2: THE SQUAD */}
        <motion.div 
          whileHover={{ flex: 1.6 }}
          className="relative flex-1 group overflow-hidden transition-all duration-[700ms] ease-out bg-ingwe-dark min-h-[50vh] md:min-h-screen"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/ingwe-toronto.jpeg" 
              alt="Local Squad"
              className="w-full h-full object-cover grayscale opacity-70 mix-blend-multiply group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1000ms] ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center items-end text-right p-12 md:p-20">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Trophy className="text-ingwe-blue mb-6 drop-shadow-[0_0_15px_rgba(0,102,255,0.8)]" size={56} strokeWidth={1.5} />
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6 text-glow-blue">
                INGWE <span className="text-ingwe-blue ">TORONTO FC</span>
              </h2>
              <p className="max-w-md text-gray-300 font-medium italic mb-12 uppercase text-sm tracking-widest leading-relaxed">
                Our local warriors taking on the Toronto leagues. Matchdays, Standings, and the Current Squad.
              </p>
              <Link href="/squad">
                <button className="flex items-center gap-4 bg-ingwe-blue text-white px-10 py-5 font-black uppercase italic skew-x-[-10deg] hover:bg-white hover:text-black transition-all group/btn text-lg">
                  <ArrowRight className="rotate-180 group-hover/btn:-translate-x-2 transition-transform" /> View The Squad
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* CENTRAL LOGO */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
          <div className="bg-black border-[3px] border-ingwe-blue p-5 rotate-45 shadow-[0_0_60px_rgba(0,102,255,0.4)]">
            <div className="-rotate-45 font-black text-3xl italic tracking-tighter text-white">
              INGWE<span className="text-ingwe-blue text-glow-blue">TO</span>
            </div>
          </div>
        </div>
      </main>

      {/* 2. THE PULSE: IMPACT STATS */}
      <section className="bg-ingwe-blue py-10 border-y-4 border-black relative z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8">
          {[
            { label: "Founded", value: "2024" },
            { label: "Active Members", value: "50+" },
            { label: "Trophies", value: "2" },
            { label: "Next Match", value: "TBA" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-black/60 font-black uppercase text-[10px] tracking-widest">{stat.label}</p>
              <p className="text-white text-2xl font-black italic tracking-tighter uppercase">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. COMMUNITY GRID: WITH DYNAMIC BACKGROUNDS --- */}
      <section className="py-32 px-6 bg-black relative overflow-hidden z-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5">
            
            {/* Card 1: Watch Parties */}
            <div className="group relative aspect-[4/5] bg-ingwe-concrete overflow-hidden flex flex-col justify-end p-10">
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/action2.jpg" 
                  alt="Fans at watch party"
                  className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10">
                <Clock className="text-ingwe-blue mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
                <h3 className="text-4xl font-black italic uppercase leading-none mb-4">Watch <br/> <span className="text-ingwe-blue">Parties</span></h3>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                  High energy, pure passion, and East African flavors in the heart of the 6ix.
                </p>
                <div className="mt-8 h-1 w-0 group-hover:w-full bg-ingwe-blue transition-all duration-500" />
              </div>
            </div>

            {/* Card 2: Kit Drives (Impact Focus) */}
            <div className="group relative aspect-[4/5] bg-ingwe-blue overflow-hidden flex flex-col justify-end p-10">
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/ourchairman.jpg" 
                  alt="Donation kits"
                  className="w-full h-full object-cover grayscale brightness-50 contrast-125 mix-blend-overlay opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-ingwe-blue/40 mix-blend-color" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10">
                <h3 className="text-4xl font-black italic uppercase leading-none mb-4 text-white">Ingwe <br/> <span className="text-white">Gala</span></h3>
                <p className="text-white/80 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                  A great time to reflect the year, have great food all fun around.
                </p>
                <div className="mt-8 h-1 w-0 group-hover:w-full bg-black transition-all duration-500" />
              </div>
            </div>

            {/* Card 3: Socials (BBQ) */}
            <div className="group relative aspect-[4/5] bg-ingwe-concrete overflow-hidden flex flex-col justify-end p-10">
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/together.jpg" 
                  alt="Community BBQ"
                  className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10">
                <Users className="text-ingwe-blue mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
                <h3 className="text-4xl font-black italic uppercase leading-none mb-4">Summer <br/> <span className="text-ingwe-blue">Socials</span></h3>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                  Annual branch barbecues. Networking and building the diaspora pride.
                </p>
                <div className="mt-8 h-1 w-0 group-hover:w-full bg-ingwe-blue transition-all duration-500" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- THE LEADERSHIP & NEXT ACTION --- */}
      <section className="py-32 px-6 bg-ingwe-concrete/5 relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Leadership Quote */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-9xl text-white/[0.03] font-black italic select-none">"</div>
            <p className="text-3xl md:text-4xl font-black italic uppercase leading-tight mb-8">
              "We aren't just building a club in Toronto; we are preserving a <span className="text-ingwe-blue">legacy</span> that started in 1964."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-ingwe-blue" />
              <div>
                <p className="font-black uppercase tracking-widest text-sm">Branch Chairman</p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Toronto Supporters Club</p>
              </div>
            </div>
          </div>

          {/* Right: Next Match Briefing */}
          <div className="bg-white p-1 text-black skew-x-[-2deg]">
            <div className="bg-white border-2 border-black p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-start mb-10">
                  <span className="bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-tighter">Next Matchday</span>
                  <span className="text-right font-black italic uppercase text-sm">Toronto, ON</span>
                </div>
                <h4 className="text-5xl font-black italic uppercase tracking-tighter mb-2">Ingwe Toronto FC <span className="text-ingwe-blue">vs</span> Nile FC</h4>
                <p className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Date: TBD • Centennial Park Stadium</p>
              </div>
              
              <button className="w-full mt-8 bg-black text-white py-4 font-black uppercase italic hover:bg-ingwe-blue transition-colors">
                Get Match Reminders
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE MARQUEE: MOTION */}
      <div className="bg-white py-4 overflow-hidden whitespace-nowrap border-y-2 border-black relative z-30">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-black italic uppercase text-2xl mx-12">
              Ours Forever • Ingwe Toronto • More Than A Club • Since 1964 • Ingwe Le Notre Pour Toujours • 
            </span>
          ))}
        </motion.div>
      </div>

      {/* 5. FAQ SECTION */}
      <FAQSection />
    </div>
  );
}