"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, Instagram, ArrowRight, Share2 } from 'lucide-react';

const categories = ["All", "Matchday", "Community", "Gala"];

const galleryImages = [
  { id: 1, category: "Matchday", title: "Konki Tournament", url: "/images/konki.jpeg", year: "2024" },
  { id: 2, category: "Matchday", title: "Konki Tournament", url: "/images/Sub.jpeg", year: "2024" },
  { id: 3, category: "Matchday", title: "Konki Tournament", url: "/images/Fans.jpeg", year: "2025" },
  { id: 4, category: "Gala", title: "End of Year Party", url: "/images/theboys.jpg", year: "2025" },
  { id: 5, category: "Matchday", title: "Konki Tournament", url: "/images/team.jpg", year: "2025" },
  { id: 6, category: "Matchday", title: "Konki Tournament", url: "/images/Manu.jpeg", year: "2024" },
  { id: 7, category: "Gala", title: "End of Year Party", url: "/images/chairman.jpg", year: "2025" },
  { id: 8, category: "Gala", title: "End of Year Party", url: "/images/topstriker.jpg", year: "2025" },
  { id: 9, category: "Gala", title: "End of Year Party", url: "/images/dancing.jpg", year: "2025" },
  { id: 10, category: "Matchday", title: "Konki Tournament", url: "/images/vibes.jpg", year: "2025" },
  { id: 11, category: "Matchday", title: "End of Year Party", url: "/images/ingwe-toronto.jpeg", year: "2025" },
  { id: 12, category: "Gala", title: "End of Year Party", url: "/images/dancing2.jpg", year: "2025" },
  { id: 13, category: "Gala", title: "End of Year Party", url: "/images/dancing3.jpg", year: "2025" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="bg-black min-h-screen pb-24 text-white selection:bg-ingwe-blue">
      {/* --- HEADER: Editorial Style --- */}
      <div className="relative pt-32 pb-20 px-6 bg-ingwe-concrete/10 border-b border-white/5 overflow-hidden">
        {/* Decorative Background Text */}
        <span className="absolute top-10 -right-20 text-[200px] font-black italic text-white/[0.02] select-none pointer-events-none">
          INGWE
        </span>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6 text-ingwe-blue font-black uppercase tracking-[0.4em] text-[10px]">
              <Camera size={14} /> The Visual Archive
            </div>
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] mb-12">
              THE <span className="text-ingwe-blue text-glow">LENS</span>
            </h1>
            
            {/* Filter Navigation */}
            <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mr-4">Filter By Archive:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`group relative text-xs font-black uppercase tracking-widest transition-all ${
                    activeFilter === cat ? 'text-ingwe-blue' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                  {activeFilter === cat && (
                    <motion.div layoutId="activeUnderline" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-ingwe-blue" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- GALLERY GRID: Masonry-ish --- */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div 
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="relative group break-inside-avoid border border-white/5 bg-ingwe-concrete"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-auto">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-auto object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-[1.02] transition-all duration-1000 ease-in-out"
                  />
                  
                  {/* Subtle Film Grain/Overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Info Bar (Always visible but refined) */}
                <div className="p-5 flex justify-between items-start border-t border-white/5 bg-black/40 backdrop-blur-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-ingwe-blue font-black text-[9px] uppercase tracking-[0.2em]">{image.category}</span>
                      <span className="text-gray-600 text-[9px] font-black uppercase tracking-widest">— {image.year}</span>
                    </div>
                    <h4 className="text-lg font-black italic uppercase leading-none group-hover:text-ingwe-blue transition-colors">
                      {image.title}
                    </h4>
                  </div>
                  <button className="text-gray-500 hover:text-white transition-colors">
                    <Maximize2 size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- FOOTER CTA --- */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="relative group p-1 bg-gradient-to-r from-ingwe-blue/20 to-transparent">
          <div className="bg-black p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-black italic uppercase mb-2">Social Archive</h3>
              <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em]">
                Live updates and behind-the-scenes on Instagram
              </p>
            </div>
            <a 
              href="#" 
              className="group flex items-center gap-4 bg-white text-black font-black px-10 py-5 uppercase italic skew-x-[-10deg] hover:bg-ingwe-blue hover:text-white transition-all duration-300"
            >
              Follow @IngweToronto <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}