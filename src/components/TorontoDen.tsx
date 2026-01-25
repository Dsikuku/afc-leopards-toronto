import { MapPin, Beer, Users, Trophy } from 'lucide-react';

export default function TorontoDen() {
  const denInfo = {
    name: "The Loose Moose (or your preferred pub)",
    address: "146 Front St W, Toronto, ON M5J 2L7",
    vibe: "Official Chapter Headquarters. All ages welcome until 9 PM.",
    features: ["Multiple HD Screens", "Kenyan Menu Specials", "Family Friendly", "Priority Audio"]
  };

  return (
    <section className="py-24 bg-ingwe-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-ingwe-blue/20 blur-xl group-hover:bg-ingwe-blue/30 transition-all" />
            <div className="relative aspect-video bg-ingwe-concrete border-2 border-white/10 overflow-hidden">
               {/* Replace with an actual photo of the fans later */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ingwe-dark via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-black italic text-3xl tracking-tighter shadow-xl">THE LOUDEST CORNER <br/> IN THE 6IX</p>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div>
            <h2 className="text-5xl font-black italic tracking-tighter mb-6">
              THE TORONTO <span className="text-ingwe-blue">DEN</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed italic border-l-4 border-ingwe-blue pl-4">
              When the Leopards take the pitch in Nairobi, we roar from downtown Toronto. 
              Experience the 90 minutes like you're back at Nyayo Stadium.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ingwe-blue/10 flex items-center justify-center text-ingwe-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-widest text-white">Location</h4>
                  <p className="text-gray-400">{denInfo.name}</p>
                  <p className="text-xs text-gray-500">{denInfo.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {denInfo.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight text-gray-300">
                    <div className="w-1.5 h-1.5 bg-ingwe-blue rotate-45" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(denInfo.address)}`}
                  target="_blank"
                  className="bg-white text-ingwe-dark font-black px-6 py-3 uppercase text-sm hover:bg-ingwe-blue hover:text-white transition-all flex items-center gap-2"
                >
                  Get Directions <MapPin size={16} />
                </a>
                <button className="border-2 border-white/20 text-white font-black px-6 py-3 uppercase text-sm hover:border-ingwe-blue hover:bg-ingwe-blue transition-all">
                  Book A Table
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}