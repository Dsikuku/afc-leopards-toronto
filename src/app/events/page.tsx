"use client";
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

const events = [
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

export default function EventsPage() {
  return (
    <div className="bg-ingwe-dark min-h-screen pb-24">
      {/* Header */}
      <div className="bg-ingwe-concrete py-20 border-b border-ingwe-blue/30">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-black italic tracking-tighter uppercase">
            Chapter <span className="text-ingwe-blue">Events</span>
          </h1>
          <p className="text-gray-400 mt-4 font-bold uppercase tracking-widest">
            From the Pitch to the 6ix: Where the Pride Meets
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Events List */}
          <div className="lg:col-span-2 space-y-8">
            {events.map((event) => (
              <div 
                key={event.id}
                className={`group relative bg-ingwe-concrete border-l-4 ${event.isFeatured ? 'border-ingwe-gold' : 'border-ingwe-blue'} p-8 hover:bg-ingwe-concrete/80 transition-all`}
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
                    
                    <div className="flex flex-wrap gap-6 mt-6 text-gray-400 font-bold uppercase text-xs">
                      <div className="flex items-center gap-2"><Calendar size={14} className="text-ingwe-blue" /> {event.date}</div>
                      <div className="flex items-center gap-2"><Clock size={14} className="text-ingwe-blue" /> {event.time}</div>
                      <div className="flex items-center gap-2"><MapPin size={14} className="text-ingwe-blue" /> {event.location}</div>
                    </div>
                    
                    <p className="mt-6 text-gray-500 italic max-w-xl">{event.description}</p>
                  </div>

                  <button className="bg-white text-black font-black px-8 py-4 uppercase italic skew-x-[-10deg] hover:bg-ingwe-blue hover:text-white transition-all whitespace-nowrap">
                    RSVP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar / Notice Board */}
          <div className="space-y-8">
            <div className="bg-ingwe-blue p-8 skew-x-[-2deg]">
              <h3 className="text-2xl font-black italic text-white uppercase leading-none">Want to host <br/> an event?</h3>
              <p className="text-white/80 text-sm mt-4 italic font-medium">
                We are always looking for new venues and community partners across the GTA.
              </p>
              <button className="mt-6 w-full bg-white text-ingwe-blue font-black py-3 uppercase text-xs tracking-widest hover:bg-ingwe-dark hover:text-white transition-all">
                Contact Board
              </button>
            </div>

            <div className="border border-white/10 p-8">
              <h4 className="font-black uppercase text-sm tracking-widest mb-4">Venue Partners</h4>
              <div className="space-y-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                {/* Add partner logos or names here */}
                <p className="text-xs font-bold border-b border-white/5 pb-2">THE LOOSE MOOSE (DOWNTOWN)</p>
                <p className="text-xs font-bold border-b border-white/5 pb-2">JACK ASTOR'S (SCARBOROUGH)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}