"use client";
import { useState } from 'react';
import { Camera, Maximize2, Filter, Instagram } from 'lucide-react';

const categories = ["All", "Matchday", "Community", "Gala"];

const galleryImages = [
  {
    id: 1,
    category: "Matchday",
    title: "Derby Day in Toronto",
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800",
    size: "large" // Takes up more space
  },
  {
    id: 2,
    category: "Community",
    title: "Summer BBQ 2025",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800",
    size: "small"
  },
  {
    id: 3,
    category: "Matchday",
    title: "The Loose Moose Takeover",
    url: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800",
    size: "small"
  },
  {
    id: 4,
    category: "Gala",
    title: "Founder's Dinner",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
    size: "medium"
  },
  {
    id: 5,
    category: "Community",
    title: "Scarborough Meetup",
    url: "https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?q=80&w=800",
    size: "medium"
  },
  {
    id: 6,
    category: "Matchday",
    title: "Limuru to Liberty Village",
    url: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800",
    size: "large"
  }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="bg-ingwe-dark min-h-screen pb-24 text-white">
      {/* --- HEADER --- */}
      <div className="bg-ingwe-concrete py-24 border-b border-ingwe-blue/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
                The <span className="text-ingwe-blue">Lens</span>
              </h1>
              <p className="text-gray-400 mt-6 font-bold uppercase tracking-widest max-w-lg">
                Capturing the pride across Ontario. Every goal, every gathering.
              </p>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest skew-x-[-10deg] transition-all ${
                    activeFilter === cat 
                    ? 'bg-ingwe-blue text-white' 
                    : 'bg-white/5 text-gray-500 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- GALLERY GRID --- */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden bg-ingwe-concrete border border-white/5 break-inside-avoid"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-auto object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-ingwe-blue font-black text-[10px] uppercase tracking-widest mb-1 block">
                      {image.category}
                    </span>
                    <h4 className="text-xl font-black italic uppercase leading-none">{image.title}</h4>
                  </div>
                  <button className="bg-white/20 p-2 backdrop-blur-md hover:bg-ingwe-blue transition-colors">
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- INSTAGRAM CTA --- */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="border-2 border-dashed border-white/10 p-12 text-center">
          <Instagram size={48} className="mx-auto text-ingwe-blue mb-6" />
          <h3 className="text-3xl font-black italic uppercase">Share your view</h3>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-2 mb-8">
            Tag your matchday photos with <span className="text-white">#IngweToronto</span> to be featured
          </p>
          <button className="bg-white text-black font-black px-8 py-4 uppercase italic skew-x-[-10deg] hover:bg-ingwe-blue hover:text-white transition-all">
            Follow the Pride
          </button>
        </div>
      </section>
    </div>
  );
}