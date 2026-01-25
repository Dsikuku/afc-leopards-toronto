import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
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
              The official home for AFC Leopards supporters in the Greater Toronto Area. 
              Keeping the spirit of the Den alive across the Atlantic.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-ingwe-concrete flex items-center justify-center text-white hover:bg-ingwe-blue transition-all">
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
              <li><Link href="/membership" className="hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Toronto Events</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black uppercase text-sm tracking-widest mb-6 text-ingwe-blue">The Den Toronto</h4>
            <p className="text-gray-400 text-xs font-bold leading-relaxed italic uppercase">
              Meeting at Liberty Village / <br />
              Downtown Toronto core.<br />
              <span className="text-white mt-2 block">info@ingwetoronto.com</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          <p>© 2026 AFC LEOPARDS TORONTO CHAPTER</p>
          <p>OURS FOREVER • <span className="text-ingwe-blue">INGWE!</span></p>
        </div>
      </div>
    </footer>
  );
}