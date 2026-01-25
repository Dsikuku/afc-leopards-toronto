"use client";
import { ArrowUpRight, Clock, User } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    category: "Club News",
    title: "New International Signing: What it means for the Leopards",
    excerpt: "The latest addition to the squad brings European experience to the midfield. Here's our tactical breakdown...",
    date: "Jan 24, 2026",
    author: "Ingwe Tech",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800",
  },
  {
    id: 2,
    category: "Toronto Chapter",
    title: "Recap: The 2025 Winter Gala at Liberty Village",
    excerpt: "A night of Kenyan culture and football passion. Over $5,000 raised for the youth academy in Nairobi.",
    date: "Jan 20, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
  }
];

export default function LatestNews() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
              The <span className="text-ingwe-blue">Bulletin</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Latest from the Den & Beyond</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white font-black uppercase text-xs tracking-widest border-b-2 border-ingwe-blue pb-1 hover:text-ingwe-blue transition-all">
            View All News <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((post) => (
            <div key={post.id} className="group bg-ingwe-concrete flex flex-col md:flex-row overflow-hidden border border-white/5 hover:border-ingwe-blue/50 transition-all">
              <div className="md:w-2/5 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-ingwe-blue font-black uppercase text-[10px] tracking-widest block mb-2">{post.category}</span>
                  <h3 className="text-2xl font-black italic uppercase leading-tight group-hover:text-ingwe-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-4 italic line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Clock size={12} /> {post.date}</span>
                  <span className="flex items-center gap-2"><User size={12} /> {post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}