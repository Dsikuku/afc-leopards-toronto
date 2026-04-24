"use client";
import { Instagram, Twitter, Facebook, Mail, Globe, ShieldCheck, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-4 border-ingwe-blue pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-black text-3xl italic tracking-tighter text-white">
              INGWE<span className="text-ingwe-blue">TO</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm font-medium italic">
              The official bridge between the pride of Western Kenya and the heart of Ontario. 
              Keeping the spirit of the Den alive across the Atlantic since 2024.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-ingwe-concrete flex items-center justify-center text-white hover:bg-ingwe-blue transition-all skew-x-[-10deg]">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black uppercase text-sm tracking-widest mb-6 text-ingwe-blue">Navigation</h4>
            <ul className="space-y-4 text-gray-400 font-bold uppercase text-xs">
              <li><Link href="/match-center" className="hover:text-white transition-colors">Match Center</Link></li>
              <li><Link href="/heritage" className="hover:text-white transition-colors">The Heritage</Link></li>
              <li><Link href="/squad" className="hover:text-white transition-colors">The Squad</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">The Lens (Gallery)</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors flex items-center gap-2">
                Fan Shop <span className="bg-ingwe-blue text-[8px] px-1 animate-pulse">New</span>
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black uppercase text-sm tracking-widest mb-6 text-ingwe-blue">The Den Toronto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                 <MapPin size={16} className="text-white shrink-0" />
                 <p className="text-gray-400 text-[10px] font-bold uppercase italic leading-tight">
                   The Loose Moose / Downtown Core<br />
                   146 Front St W, Toronto, ON
                 </p>
              </div>
              <div className="flex items-center gap-3">
                 <Mail size={16} className="text-white shrink-0" />
                 <p className="text-white text-[10px] font-black uppercase">info@ingweto.ca</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 text-center md:text-left">
          <p>© {currentYear} AFC LEOPARDS TORONTO CHAPTER</p>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white/10">|</span>
            <p>OURS FOREVER • <span className="text-ingwe-blue">INGWE!</span></p>
          </div>
          <div className="flex gap-4">
             <Link href="#" className="hover:text-white">Privacy</Link>
             <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}