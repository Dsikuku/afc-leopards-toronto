"use client";
import { X, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  items 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[] 
}) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-ingwe-dark z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-ingwe-blue/20 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="p-6 bg-ingwe-concrete border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ShoppingCart size={20} className="text-ingwe-blue" />
              <h2 className="text-xl font-black italic uppercase">Your Locker</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-20">
                <ShoppingCart size={64} className="mb-4" />
                <p className="font-black uppercase italic">Your locker is empty</p>
              </div>
            ) : (
              items.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-20 h-20 bg-black overflow-hidden border border-white/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-black uppercase italic text-sm">{item.name}</h4>
                    <p className="text-ingwe-blue font-black mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-ingwe-concrete border-t border-white/5 space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Subtotal</span>
                <span className="text-2xl font-black">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-ingwe-blue text-white py-4 font-black uppercase italic tracking-widest skew-x-[-10deg] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                Proceed to Checkout <ArrowRight size={18} />
              </button>
              <p className="text-[9px] text-center text-gray-500 uppercase font-bold tracking-tighter">
                Shipping calculated at next step • Member discounts applied
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}