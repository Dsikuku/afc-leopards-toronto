"use client";
import Link from 'next/link';
import { ArrowLeft, Share2, Calendar, MapPin, Trophy, Users, Handshake, Megaphone } from 'lucide-react';

export default function TournamentInvitationPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-ingwe-blue selection:text-white">
      
      {/* 1. MINIMAL HEADER BAR */}
      <nav className="border-b border-white/10 px-6 py-6 bg-black sticky top-0 z-50 backdrop-blur-md bg-black/80">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-ingwe-blue transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Return Home
          </Link>
          <div className="font-black text-xl italic tracking-tighter">
            INGWE<span className="text-ingwe-blue">TO</span>
          </div>
        </div>
      </nav>

      {/* 2. HERO COVER LAYER */}
      <header className="relative h-[50vh] w-full overflow-hidden border-b border-white/10 bg-ingwe-dark">
        <img 
          src="/images/Konki2026.jpg" 
          alt="Annual Summer Cup Selection" 
          className="w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Absolute Meta Badging */}
        <div className="absolute bottom-10 left-0 w-full px-6">
          <div className="max-w-4xl mx-auto">
            <span className="bg-ingwe-blue text-white text-[10px] font-black uppercase px-3 py-1 tracking-widest skew-x-[-10deg] inline-block mb-4">
              Championship Campaign
            </span>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none max-w-3xl">
              The Call to Arms: Ingwe Toronto FC Invited to Annual Summer Cup
            </h1>
          </div>
        </div>
      </header>

      {/* 3. LOGISTICAL SPEC BAR */}
      <section className="bg-white text-black py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 font-black uppercase text-[10px] tracking-widest">
          <div className="flex items-center gap-3">
            <Calendar size={16} className="text-ingwe-blue" />
            <div>
              <p className="text-black/50">Kickoff Window</p>
              <p className="text-sm italic">June 13th, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-ingwe-blue" />
            <div>
              <p className="text-black/50">Tournament Ground</p>
              <p className="text-sm italic">G.Ross Lord Park</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Trophy size={16} className="text-ingwe-blue" />
            <div>
              <p className="text-black/50">Target Objective</p>
              <p className="text-sm italic">The Champions Pod</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL ESSAY ZONE */}
      <main className="py-24 px-6 max-w-3xl mx-auto">
        <article className="prose prose-invert prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg space-y-8 font-medium">
          
          <p className="text-white text-xl font-bold italic leading-relaxed border-l-4 border-ingwe-blue pl-6 my-10">
            AFC Leopards Toronto FC has accepted an official committee invitation to compete in the most prestigious annual inter-branch tournament in eastern Canada. This is where our journey begins—and we need our community to bring it home.
          </p>

          <p>
            This invitation marks a massive milestone for our sports framework. It recognizes our expanding competitive roster and tactical consistency over the past year. The Annual Summer Cup gathers elite diaspora clubs across Ontario to battle for absolute regional supremacy. Our boys are ready to lay everything on the line, but a tournament isn't won solely on the pitch. It's won from the stands.
          </p>

          {/* --- FANS RALLYING CALL --- */}
          <h2 className="text-2xl font-black italic uppercase tracking-tight text-white mt-12 pt-6 border-t border-white/10 flex items-center gap-3">
            <Megaphone className="text-ingwe-blue" size={24} /> A Call to Our Fans & Supporters: Fill the Den
          </h2>
          
          <p>
            We are calling on every member of the East African diaspora, every family network in the GTA, and every soccer enthusiast in Toronto to become our 12th man on the pitch. We want to completely lock out the stands in a massive sea of blue and white hoops.
          </p>

          <ul className="space-y-4 text-gray-400 list-none pl-0">
            <li className="flex items-start gap-3">
              <span className="text-ingwe-blue font-black text-lg leading-none">➔</span> 
              <div><strong className="text-white">Organized Supporter Sections:</strong> We are coordinating unified matchday sections complete with traditional chants, drums, and absolute energy to make the sports complex feel like a home stadium.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ingwe-blue font-black text-lg leading-none">➔</span> 
              <div><strong className="text-white">Caravans & Supporter Transport:</strong> Group transport and carpool vectors are being calculated from major hubs across the city to guarantee every supporter has a reliable route to the stadium gates.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ingwe-blue font-black text-lg leading-none">➔</span> 
              <div><strong className="text-white">Matchday Kits & Merch:</strong> Flagship branch scarves and matching gear will be distributed at special pop-up priority stations prior to kickoff so our section looks entirely unified.</div>
            </li>
          </ul>

          <blockquote className="bg-white/[0.02] border border-white/5 p-8 italic text-gray-300 rounded-sm my-12">
            "When our players look up into those stands and see the diaspora family gathered as one, our collective energy doubles. We aren't just showing up to play; we are showing up to rule. Bring your voice, bring your pride, and let's claim what's ours." 
            <span className="block text-[10px] font-black uppercase tracking-widest text-ingwe-blue mt-4 not-italic">— Branch Mobilization Lead</span>
          </blockquote>

        </article>

        {/* Footer Actions */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-6">
          <Link href="/squad">
            <button className="bg-ingwe-blue text-white px-8 py-4 font-black uppercase italic skew-x-[-10deg] hover:bg-white hover:text-black transition-all text-sm">
              Join the Supporter Roster
            </button>
          </Link>
          <button 
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            <Share2 size={14} /> Copy Campaign Link
          </button>
        </div>
      </main>
    </div>
  );
}