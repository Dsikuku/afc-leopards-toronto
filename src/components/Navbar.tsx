"use client";
import { useCart } from '@/context/CartContext'; 
import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();
  
  const [isOpen, setIsOpen] = useState(false); 
  const [nairobiTime, setNairobiTime] = useState("");
  const [mounted, setMounted] = useState(false);

  // Cleaned up navigation items
  const navItems = ['Heritage', 'Squad', 'Gallery', 'Shop'];

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
    <>
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b-2 border-[--color-ingwe-blue]">
        {/* Top Utility Bar */}
        <div className="bg-[--color-ingwe-blue] text-white py-1 px-4 flex justify-between text-[10px] md:text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <MapPin size={12} /> <span className="hidden sm:inline">Toronto Chapter</span> <span className="sm:hidden">Toronto</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={12} /> 
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
              <div className="ml-10 flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-[--color-ingwe-blue] px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors"
                  >
                    {item}
                  </Link>
                ))}

                {/* --- CART ICON (Desktop) --- */}
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="relative group px-2 cursor-pointer outline-none"
                >
                  <ShoppingBag size={20} className="text-white group-hover:text-[--color-ingwe-blue] transition-colors" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-white text-[--color-ingwe-blue] text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </button>
                
                {/* Redirected to Squad page anchor */}
                <Link href="/squad#join">
                  <button className="bg-[--color-ingwe-blue] text-white px-4 py-2 rounded-none skew-x-[-10deg] font-black uppercase text-sm hover:bg-white hover:text-black transition-all cursor-pointer">
                    Join The Pride
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button and mobile cart */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative outline-none"
              >
                <ShoppingBag size={24} className="text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-white text-[--color-ingwe-blue] text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-[--color-ingwe-blue] px-2 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white block px-3 py-4 text-lg font-black uppercase border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            {/* Mobile Join Button */}
            <Link 
              href="/squad#join" 
              className="text-ingwe-blue block px-3 py-4 text-lg font-black uppercase"
              onClick={() => setIsOpen(false)}
            >
              Join The Pride
            </Link>
          </div>
        )}
      </nav>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
}