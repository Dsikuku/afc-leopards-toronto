"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Calendar, MapPin, Shield } from 'lucide-react';

export default function ClubhousePartnershipPage() {
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
          src="/images/clubhouse-render.jpg" 
          alt="Clubhouse Partnership" 
          className="w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Absolute Meta Badging */}
        <div className="absolute bottom-10 left-0 w-full px-6">
          <div className="max-w-4xl mx-auto">
            <span className="bg-ingwe-blue text-white text-[10px] font-black uppercase px-3 py-1 tracking-widest skew-x-[-10deg] inline-block mb-4">
              Official Bulletin
            </span>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none max-w-3xl">
              Expanding the Pride: Official Clubhouse Partnership Secured
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
              <p className="text-black/50">Published</p>
              <p className="text-sm italic">May 28, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-ingwe-blue" />
            <div>
              <p className="text-black/50">Primary Venue</p>
              <p className="text-sm italic">The Football Factory, TO</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield size={16} className="text-ingwe-blue" />
            <div>
              <p className="text-black/50">Authorization</p>
              <p className="text-sm italic">Branch Executive Board</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL ESSAY ZONE */}
      <main className="py-24 px-6 max-w-3xl mx-auto">
        <article className="prose prose-invert prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg space-y-8 font-medium">
          
          <p className="text-white text-xl font-bold italic leading-relaxed border-l-4 border-ingwe-blue pl-6 my-10">
            Effective starting next month’s fixtures, AFC Leopards Toronto Branch has established an exclusive long-term operational base to broadcast and gather for all remaining domestic and international campaigns.
          </p>

          <p>
            For the past year, our primary objective in the Greater Toronto Area has been to eliminate the fragmentation of our fan base. Diaspora matchdays demand an environment that matches the raw electricity of Nyayo National Stadium. After months of infrastructure review and negotiations, we have successfully partnered with the city's premier football hub.
          </p>

          <h2 className="text-2xl font-black italic uppercase tracking-tight text-white mt-12 pt-6 border-t border-white/10">
            What This Infrastructure Delivers
          </h2>
          
          <p>
            This is not just a standard table reservation. The partnership secures a custom blueprint tailored to the unique culture of our supporters' network:
          </p>

          <ul className="space-y-4 text-gray-400 list-none pl-0">
            <li className="flex items-start gap-3">
              <span className="text-ingwe-blue font-black">✓</span> 
              <div><strong className="text-white">Dedicated Audio Feeds:</strong> No competing audio from other sports. When Ingwe takes the pitch, our commentary echoes across the main space.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ingwe-blue font-black">✓</span> 
              <div><strong className="text-white">Premium High-Definition Matrices:</strong> Full 4K visibility assigned permanently to our scheduling coordinates, regardless of standard local scheduling conflicts.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ingwe-blue font-black">✓</span> 
              <div><strong className="text-white">Custom Culinary Integration:</strong> Collaborative menus featuring East African profiles alongside classic sports pub options.</div>
            </li>
          </ul>

          <blockquote className="bg-white/[0.02] border border-white/5 p-8 italic text-gray-300 rounded-sm my-12">
            "This partnership anchors our physical community. It gives every member, old or brand new to Canada, a definitive destination in the 6ix to experience our heritage together." 
            <span className="block text-[10px] font-black uppercase tracking-widest text-ingwe-blue mt-4 not-italic">— Branch Secretary Bulletin</span>
          </blockquote>

          <h2 className="text-2xl font-black italic uppercase tracking-tight text-white mt-12 pt-6 border-t border-white/10">
            Access Controls & Member Logistics
          </h2>
          
          <p>
            While matchdays will remain universally accessible to all fans, supporters, and visitors, active registered members carrying a valid **IngweTO Member ID** will receive distinct overhead privileges, including seating priority inside prime viewing zones and tier discounts on event menus.
          </p>
          
          <p>
            We look forward to breaking ground on this new era together for the upcoming fixture on June 14. Wear the colors, bring the noise, and let's turn the venue into a true den.
          </p>
        </article>

        {/* Footer Actions */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-6">
          <Link href="/squad">
            <button className="bg-ingwe-blue text-white px-8 py-4 font-black uppercase italic skew-x-[-10deg] hover:bg-white hover:text-black transition-all text-sm">
              Register For Membership
            </button>
          </Link>
          <button 
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            <Share2 size={14} /> Copy Internal Link
          </button>
        </div>
      </main>
    </div>
  );
}