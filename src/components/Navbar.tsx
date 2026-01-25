"use client";
import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [nairobiTime, setNairobiTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Africa/Nairobi",
        hour: "2-digit",
        minute: "2-digit",
      });
      setNairobiTime(time);
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b-2 border-[--color-ingwe-blue]">
      {/* Top Utility Bar */}
      <div className="bg-[--color-ingwe-blue] text-white py-1 px-4 flex justify-between text-[10px] md:text-xs font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <MapPin size={12} /> <span className="hidden sm:inline">Toronto Chapter</span> <span className="sm:hidden">Toronto</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={12} /> 
          {/* Only show time after mounting to prevent hydration errors */}
          Nairobi: {mounted ? `${nairobiTime} EAT` : "Loading..."}
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 font-black text-2xl italic tracking-tighter text-white">
              INGWE<span className="text-[--color-ingwe-blue]">TO</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {['Match Center', 'Events', 'Membership', 'Gallery'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-[--color-ingwe-blue] px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors"
                >
                  {item}
                </Link>
              ))}
              <button className="bg-[--color-ingwe-blue] text-white px-4 py-2 rounded-none skew-x-[-10deg] font-black uppercase text-sm hover:bg-white hover:text-black transition-all cursor-pointer">
                Join The Pride
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-[--color-ingwe-blue] px-2 pt-2 pb-6 space-y-1 animate-in fade-in slide-in-from-top-4">
          {['Match Center', 'Events', 'Membership', 'Gallery'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-white block px-3 py-4 text-lg font-black uppercase border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-4">
            <button className="w-full bg-[--color-ingwe-blue] text-white py-4 font-black uppercase italic">
              Join The Pride
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}