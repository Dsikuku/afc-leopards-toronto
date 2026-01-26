"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Bell } from 'lucide-react';

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Show modal after 5 seconds, but only if they haven't seen it this session
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('newsletter_seen');
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeArchive = () => {
    setIsOpen(false);
    sessionStorage.setItem('newsletter_seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(closeArchive, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, rotateX: 20 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-lg bg-ingwe-concrete border-2 border-ingwe-blue p-8 md:p-12 shadow-[0_0_50px_rgba(0,86,179,0.3)]"
          >
            {/* Close Button */}
            <button 
              onClick={closeArchive}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {!subscribed ? (
              <div className="text-center">
                <div className="inline-block p-3 bg-ingwe-blue mb-6 skew-x-[-10deg]">
                  <Bell className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">
                  Stay in the <span className="text-ingwe-blue">Hunt</span>
                </h2>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-8">
                  Get matchday alerts, merchandise drops, and chapter news delivered to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full bg-black/40 border border-white/10 px-4 py-4 font-black text-white focus:outline-none focus:border-ingwe-blue transition-all uppercase placeholder:opacity-20"
                  />
                  <button className="w-full bg-ingwe-blue text-white font-black py-4 uppercase italic tracking-widest skew-x-[-5deg] hover:bg-white hover:text-ingwe-blue transition-all flex items-center justify-center gap-2">
                    JOIN THE PRIDE <Mail size={18} />
                  </button>
                </form>
                
                <p className="mt-6 text-[8px] text-gray-600 font-bold uppercase tracking-tighter">
                  No spam. Just Ingwe. Unsubscribe at any time.
                </p>
              </div>
            ) : (
              <div className="text-center py-10 animate-in fade-in zoom-in">
                <div className="text-ingwe-blue font-black text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-black italic uppercase">You're in the Den</h3>
                <p className="text-gray-500 text-xs uppercase font-bold mt-2">Check your inbox for the next transmission.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}