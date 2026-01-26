"use client";
import { ShoppingBag, Tag, Star, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext'; // Ensure this path matches your file exactly

const products = [
  {
    id: 1,
    name: "The 6ix Scarf",
    price: 35.00,
    category: "Accessories",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800",
    description: "Heavy-knit dual-sided scarf featuring 'Ingwe Toronto' and the classic hoops."
  },
  {
    id: 2,
    name: "Derby Day Hoodie",
    price: 65.00,
    category: "Apparel",
    tag: "Pre-Order",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800",
    description: "Premium fleece hoodie with a minimalist Toronto skyline x Leopard logo."
  },
  {
    id: 3,
    name: "Chapter Snapback",
    price: 28.00,
    category: "Accessories",
    tag: "Limited",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800",
    description: "Structured 6-panel cap with high-density '1964' embroidery."
  }
];

export default function ShopPage() {
  // 1. Hook is now safely inside the function body
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1,
      size: item.category === "Apparel" ? "L" : "OS"
    });
  };

  return (
    <div className="bg-ingwe-dark min-h-screen pb-24 text-white">
      {/* --- SHOP HERO --- */}
      <div className="bg-ingwe-concrete pt-32 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Tag className="text-ingwe-blue" size={20} />
            <span className="text-ingwe-blue font-black uppercase tracking-[0.3em] text-xs">The Official Merch Hub</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            EQUIP THE <span className="text-ingwe-blue">PRIDE</span>
          </h1>
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item) => (
            <div key={item.id} className="group bg-ingwe-concrete border border-white/5 flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-black/20">
                <div className="absolute top-4 left-4 z-10 bg-white text-black text-[10px] font-black uppercase px-3 py-1 skew-x-[-10deg]">
                  {item.tag}
                </div>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                
                {/* --- ADD TO CART BUTTON --- */}
                <div className="absolute inset-0 bg-ingwe-blue/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="bg-white text-ingwe-blue font-black px-6 py-3 uppercase italic text-sm skew-x-[-10deg] hover:bg-black hover:text-white transition-all cursor-pointer"
                  >
                    Add to Kit
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-1">{item.category}</span>
                    <h3 className="text-2xl font-black italic uppercase leading-none">{item.name}</h3>
                  </div>
                  <span className="text-xl font-black text-ingwe-blue">${item.price}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium italic mb-8 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Stock: Limited Edition</span>
                  <ShoppingBag size={18} className="text-white/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SHIPPING INFO --- */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-black/40 p-10 border border-ingwe-blue/20">
          <div className="flex gap-4">
            <ShieldCheck className="text-ingwe-blue shrink-0" size={32} />
            <div>
              <h4 className="font-black uppercase italic">Verified Authentic</h4>
              <p className="text-xs text-gray-500 mt-1 font-medium italic">Proceeds support AFC Leopards youth development.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Star className="text-ingwe-blue shrink-0" size={32} />
            <div>
              <h4 className="font-black uppercase italic">Chapter Exclusive</h4>
              <p className="text-xs text-gray-500 mt-1 font-medium italic">Only available to Toronto Branch members.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <ShoppingBag className="text-ingwe-blue shrink-0" size={32} />
            <div>
              <h4 className="font-black uppercase italic">Pick-up Available</h4>
              <p className="text-xs text-gray-500 mt-1 font-medium italic">Collect at The Loose Moose during Matchdays.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}