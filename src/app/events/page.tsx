"use client";
import { Calendar, MapPin, Clock, MessageCircle, ArrowRight, Camera } from 'lucide-react';
import Link from 'next/link';
import ContactForm from "@/components/ContactForm";

const upcomingEvents = [
  {
    id: 1,
    title: "Mashemeji Derby Watch Party",
    date: "Sunday, Feb 15, 2026",
    time: "8:00 AM EST",
    location: "The Loose Moose, Toronto",
    category: "Matchday",
    description: "The biggest game of the season. Join 200+ fans as we take on Gor Mahia. Kenyan breakfast will be served.",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Ingwe Toronto Summer BBQ",
    date: "Saturday, June 20, 2026",
    time: "1:00 PM EST",
    location: "Centennial Park, Etobicoke",
    category: "Community",
    description: "Annual family get-together. Football, food, and music for all members.",
    isFeatured: false,
  },
];

const pastEvents = [
  {
    id: 1,
    title: "Season Opener 2025",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800",
    attendees: "120+",
    outcome: "Victory vs Shabana"
  },
  {
    id: 2,
    title: "Founder's Dinner",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
    attendees: "45",
    outcome: "Fundraiser Success"
  },
  {
    id: 3,
    title: "Toronto Derby Day",
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800",
    attendees: "250",
    outcome: "Record Attendance"
  }
];

export default function EventsPage() {
  return (
    <div className="bg-ingwe-dark min-h-screen pb-24 text-white">
      {/* --- HEADER --- */}
      <div className="bg-ingwe-concrete py-24 border-b border-ingwe-blue/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
           <Calendar size={300} strokeWidth={1} />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            Chapter <br /><span className="text-ingwe-blue">Events</span>
          </h1>
          <p className="text-gray-400 mt-6 font-bold uppercase tracking-widest max-w-lg">
            From the Pitch to the 6ix: Join the pride at our next Toronto meetup.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* UPPER GRID: Upcoming Events & Digital Den */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- MAIN EVENTS LIST --- */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xl font-black italic uppercase tracking-widest text-ingwe-blue flex items-center gap-3">
               <div className="h-1 w-8 bg-ingwe-blue" /> Upcoming Gatherings
            </h3>
            
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className={`group relative bg-ingwe-concrete border-l-4 ${event.isFeatured ? 'border-ingwe-gold shadow-[0_0_30px_rgba(244,135,0,0.1)]' : 'border-ingwe-blue'} p-8 hover:bg-ingwe-concrete/80 transition-all`}
              >
                {event.isFeatured && (
                  <span className="absolute top-0 right-0 bg-ingwe-gold text-black font-black px-4 py-1 text-[10px] uppercase italic tracking-widest">
                    Featured Event
                  </span>
                )}
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-ingwe-blue font-black uppercase text-xs tracking-widest">{event.category}</span>
                    <h2 className="text-3xl font-black italic mt-2 group-hover:text-ingwe-blue transition-colors">{event.title}</h2>
                    
                    <div className="flex flex-wrap gap-6 mt-6 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                      <div className="flex items-center gap-2"><Calendar size={14} className="text-ingwe-blue" /> {event.date}</div>
                      <div className="flex items-center gap-2"><Clock size={14} className="text-ingwe-blue" /> {event.time}</div>
                      <div className="flex items-center gap-2"><MapPin size={14} className="text-ingwe-blue" /> {event.location}</div>
                    </div>
                    
                    <p className="mt-6 text-gray-500 italic max-w-xl font-medium">{event.description}</p>
                  </div>

                  <button className="bg-white text-black font-black px-8 py-4 uppercase italic skew-x-[-10deg] hover:bg-ingwe-blue hover:text-white transition-all whitespace-nowrap cursor-pointer">
                    RSVP NOW
                  </button>
                </div>
              </div>
            ))}

            {/* --- WHATSAPP CTA --- */}
            <div className="bg-green-600/10 border-2 border-green-600/20 p-8 flex flex-col md:row items-center justify-between gap-6 group hover:border-green-600/50 transition-all">
               <div className="flex items-center gap-6">
                  <div className="bg-green-600 p-4 rounded-full text-white">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h3 className="font-black italic text-2xl uppercase leading-none">The Digital Den</h3>
                    <p className="text-green-600/80 font-bold uppercase text-[10px] tracking-widest mt-1">Real-time match updates & coordination</p>
                  </div>
               </div>
               <button className="bg-green-600 text-white font-black px-6 py-3 uppercase italic hover:bg-white hover:text-green-600 transition-all text-sm flex items-center gap-2">
                 Join WhatsApp <ArrowRight size={16} />
               </button>
            </div>
          </div>

          {/* --- SIDEBAR --- */}
          <div className="space-y-8">
            <div className="bg-ingwe-blue p-8 skew-x-[-2deg] shadow-xl">
              <h3 className="text-2xl font-black italic text-white uppercase leading-none">Want to host <br/> an event?</h3>
              <p className="text-white/80 text-sm mt-4 italic font-medium leading-relaxed">
                We are always looking for new venues and community partners across the GTA.
              </p>
              <button className="mt-6 w-full bg-white text-ingwe-blue font-black py-3 uppercase text-xs tracking-widest hover:bg-ingwe-dark hover:text-white transition-all">
                Contact Board
              </button>
            </div>

            <div className="border border-white/10 p-8">
              <h4 className="font-black uppercase text-xs tracking-widest mb-6 text-gray-500">Venue Partners</h4>
              <div className="space-y-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                <p className="text-xs font-black border-b border-white/5 pb-2 uppercase tracking-tighter">The Loose Moose (Downtown)</p>
                <p className="text-xs font-black border-b border-white/5 pb-2 uppercase tracking-tighter">Jack Astor's (Scarborough)</p>
                <p className="text-xs font-black border-b border-white/5 pb-2 uppercase tracking-tighter">Earls (Mercer St)</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- CONTACT SECTION (FULL WIDTH) --- */}
        <section className="mt-32 max-w-4xl mx-auto pb-12">
            <div className="text-center mb-12">
                <h3 className="text-4xl font-black italic tracking-tighter uppercase">
                  Contact the <span className="text-ingwe-blue">Board</span>
                </h3>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-2">
                  Strategic partnerships & chapter inquiries
                </p>
            </div>
            <ContactForm />
        </section>

        {/* --- PAST EVENTS ARCHIVE (FULL WIDTH) --- */}
        <section className="mt-32 border-t border-white/5 pt-16">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-4xl font-black italic tracking-tighter uppercase flex items-center gap-4">
                The <span className="text-ingwe-blue">Archive</span> <Camera className="text-ingwe-blue/30" />
              </h3>
              <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-2">
                Recent memories from the Toronto Den
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((item) => (
              <div key={item.id} className="group cursor-default">
                <div className="relative aspect-[4/5] overflow-hidden bg-ingwe-concrete border border-white/5">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-ingwe-gold font-black text-[10px] uppercase tracking-tighter mb-2">
                          {item.outcome}
                        </p>
                        <h4 className="text-2xl font-black italic uppercase leading-none text-white">
                          {item.title}
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="block text-[8px] font-black text-gray-500 uppercase tracking-widest">Attendance</span>
                        <span className="text-xl font-black italic text-white leading-none">{item.attendees}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}