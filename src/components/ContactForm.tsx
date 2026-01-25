"use client";
import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Shield } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate a dispatch
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-ingwe-blue p-12 text-center skew-x-[-2deg] animate-in fade-in zoom-in duration-500">
        <Shield className="mx-auto mb-6 text-white" size={64} />
        <h3 className="text-3xl font-black italic text-white uppercase italic">Message Received</h3>
        <p className="text-white/80 font-bold uppercase tracking-widest text-sm mt-2">The Board will review your dispatch shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-white border-b-2 border-white font-black uppercase text-xs tracking-[0.3em] hover:opacity-50 transition-all"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-ingwe-concrete border-2 border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Send size={150} />
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ingwe-blue flex items-center gap-2">
              <User size={12} /> Full Name
            </label>
            <input 
              required
              type="text" 
              placeholder="LEOPARD NAME"
              className="w-full bg-black/40 border border-white/10 px-4 py-4 font-bold text-white focus:outline-none focus:border-ingwe-blue transition-all uppercase placeholder:opacity-20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ingwe-blue flex items-center gap-2">
              <Mail size={12} /> Email Address
            </label>
            <input 
              required
              type="email" 
              placeholder="EMAIL@INGWE.CA"
              className="w-full bg-black/40 border border-white/10 px-4 py-4 font-bold text-white focus:outline-none focus:border-ingwe-blue transition-all uppercase placeholder:opacity-20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ingwe-blue flex items-center gap-2">
            <MessageSquare size={12} /> Subject / Inquiry
          </label>
          <select className="w-full bg-black/40 border border-white/10 px-4 py-4 font-bold text-white focus:outline-none focus:border-ingwe-blue transition-all uppercase">
            <option>Host a Watch Party</option>
            <option>Community Partnership</option>
            <option>Membership Inquiry</option>
            <option>Media/Press</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ingwe-blue flex items-center gap-2">
            Message
          </label>
          <textarea 
            required
            rows={4}
            placeholder="HOW CAN YOU HELP THE DEN?"
            className="w-full bg-black/40 border border-white/10 px-4 py-4 font-bold text-white focus:outline-none focus:border-ingwe-blue transition-all uppercase placeholder:opacity-20"
          ></textarea>
        </div>

        <button 
          disabled={status === 'sending'}
          className="w-full bg-ingwe-blue text-white font-black py-5 uppercase italic tracking-widest skew-x-[-10deg] hover:bg-white hover:text-ingwe-blue transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {status === 'sending' ? 'TRANSMITTING...' : (
            <>SUBMIT DISPATCH <Send size={18} /></>
          )}
        </button>
      </form>
    </div>
  );
}