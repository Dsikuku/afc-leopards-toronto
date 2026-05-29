"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, HardHat, ShieldCheck, ShoppingBag, Eye } from 'lucide-react';

export default function ShopComingSoonPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-ingwe-blue selection:text-white flex flex-col justify-between overflow-hidden relative">
      
      {/* BACKGROUND GRAPHIC ACCENT: Giant watermark grid lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* 1. TOP MINIMAL NAVIGATION HEADER */}
      <nav className="border-b border-white/10 px-6 py-6 bg-black/50 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-ingwe-blue transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Den
          </Link>
          <div className="font-black text-xl italic tracking-tighter">
            INGWE<span className="text-ingwe-blue"> Toronto</span>
          </div>
        </div>
      </nav>

      {/* 2. MAIN BRUTALIST STATUS ZONE */}
      <main className="flex-grow flex items-center justify-center px-6 relative z-10 py-20">
        <div className="max-w-2xl text-center">
          
          {/* Animated Status Flag */}
          <div className="inline-flex items-center gap-2 border border-ingwe-blue/30 bg-ingwe-blue/5 px-4 py-1.5 uppercase text-[9px] font-black tracking-[0.3em] text-ingwe-blue mb-8 skew-x-[-10deg]">
            <HardHat size={12} className="animate-pulse" /> Status: System Assembly Underway
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
            The Vault Is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">
              Being Forged
            </span>
          </h1>

          {/* Explanatory Body */}
          <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-12">
            We are currently building our digital apparel interface. The upcoming drop features official <strong className="text-white">Ingwe Toronto</strong> matchday kits, premium heavy-weight diaspora streetwear, and woven supporter scarves. 
          </p>

          {/* Brutalist Preview Information Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 bg-white/5 border border-white/10 p-1 mb-12 text-left uppercase font-black text-[9px] tracking-widest skew-x-[-2deg]">
            <div className="bg-black/60 p-4 border border-white/5 flex items-center gap-3">
              <ShoppingBag size={14} className="text-ingwe-blue" />
              <div>
                <p className="text-gray-500">Drop 01</p>
                <p className="text-white text-xs mt-0.5">Custom Kits</p>
              </div>
            </div>
            <div className="bg-black/60 p-4 border border-white/5 flex items-center gap-3">
              <Eye size={14} className="text-ingwe-blue" />
              <div>
                <p className="text-gray-500">Status</p>
                <p className="text-white text-xs mt-0.5">Sample Testing</p>
              </div>
            </div>
            <div className="bg-black/60 p-4 border border-white/5 flex items-center gap-3">
              <ShieldCheck size={14} className="text-ingwe-blue" />
              <div>
                <p className="text-gray-500">Access</p>
                <p className="text-white text-xs mt-0.5">Members First</p>
              </div>
            </div>
          </div>

          {/* Call To Action Form (Email Notify) */}
          <div className="max-w-md mx-auto">
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center border border-white/20 p-1 bg-white/[0.02] focus-within:border-ingwe-blue transition-colors">
              <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL FOR EARLY VAULT ACCESS" 
                className="bg-transparent text-[10px] font-bold uppercase tracking-wider px-4 py-3 flex-grow focus:outline-none placeholder:text-gray-600 text-white"
              />
              <button className="bg-white text-black hover:bg-ingwe-blue hover:text-white transition-colors px-6 py-3 text-[10px] font-black uppercase tracking-widest skew-x-[-4deg]">
                Notify
              </button>
            </form>
            <p className="text-[8px] font-bold uppercase tracking-widest text-gray-600 mt-3 text-left pl-1">
              * Active branch cardholders receive automatic launch links.
            </p>
          </div>

        </div>
      </main>

      {/* 3. FOOTER LOGISTICS BAR */}
      <footer className="border-t border-white/10 px-6 py-6 bg-black relative z-10 text-[9px] font-bold uppercase tracking-widest text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 AFC LEOPARDS TORONTO BRANCH. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span>Production Matrix: V2.4</span>
            <span className="text-ingwe-blue">Est. Launch: Summer 2026</span>
          </div>
        </div>
      </footer>

    </div>
  );
}