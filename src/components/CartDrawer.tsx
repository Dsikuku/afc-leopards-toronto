"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext'; // Import the hook

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  // cartCount removed from interface since we use context
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Fetch real-time data from the "brain"
  const { cart, cartCount, removeFromCart } = useCart();
  
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-ingwe-concrete z-[70] p-8 flex flex-col text-white shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter">
                YOUR <span className="text-ingwe-blue">KIT</span>
              </h2>
              <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform">
                <X size={28} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto pr-2">
              {cartCount === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-20">
                  <ShoppingBag size={80} strokeWidth={1} className="mb-4" />
                  <p className="font-black uppercase italic">The bag is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-4 bg-black/20 p-4 border border-white/5 relative">
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h4 className="font-black uppercase italic text-sm">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-600 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[10px] font-bold text-gray-500 uppercase mt-1">Size: {item.size}</p>
                        <div className="flex justify-between items-end mt-2">
                          <span className="text-[10px] font-black px-2 py-1 bg-white/5 uppercase">QTY: {item.qty}</span>
                          <span className="font-black text-ingwe-blue">${item.price * item.qty}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartCount > 0 && (
              <div className="border-t border-white/10 pt-6 mt-6">
                <div className="flex justify-between mb-6">
                  <span className="text-xs font-black uppercase text-gray-400">Subtotal</span>
                  <span className="text-2xl font-black italic">${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-ingwe-blue text-white py-5 font-black uppercase italic flex items-center justify-center gap-3 skew-x-[-5deg] hover:bg-white hover:text-black transition-all">
                  PROCEED TO CHECKOUT <ArrowRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}