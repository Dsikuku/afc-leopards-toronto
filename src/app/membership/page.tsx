"use client";
import { useState } from 'react';
import { Check, ShieldCheck, Trophy, Globe, Zap, ArrowRight, Plus, Minus } from 'lucide-react';

const tiers = [
  {
    name: "Cub",
    price: "Free",
    description: "For the casual fan keeping tabs on the pride from afar.",
    features: ["Access to WhatsApp Group", "Matchday Watch Party Invites", "Digital Newsletter"],
    cta: "Register",
    featured: false
  },
  {
    name: "Leopard",
    price: "$50",
    period: "/year",
    description: "The core of our Toronto Den. Official chapter recognition.",
    features: ["Official Membership Card", "2026 Chapter Scarf", "Partner Bar Discounts", "Priority Derby Tickets"],
    cta: "Join The Den",
    featured: true
  },
  {
    name: "Patron",
    price: "$200",
    period: "/year",
    description: "For the leaders building the future of Ingwe in Canada.",
    features: ["VIP Match Seating", "Limited Edition Jersey", "Board Voting Rights", "Academy Donation in your name"],
    cta: "Become a Patron",
    featured: false
  }
];

const faqs = [
  {
    question: "How do I receive my official Chapter Scarf?",
    answer: "Scarves are distributed at our Matchday Watch Parties at The Loose Moose. If you are outside the GTA, we can arrange shipping across Ontario for a small flat fee."
  },
  {
    question: "Can I join if I live in another Canadian province?",
    answer: "Absolutely! While our physical events are in Toronto, we have members from Calgary to Halifax. You'll still get access to the digital community and official merch."
  },
  {
    question: "Is the membership fee recurring?",
    answer: "Yes, membership is billed annually. This ensures the chapter can maintain venue partnerships and keep the Den running year-round."
  },
  {
    question: "How do the 'Board Voting Rights' work?",
    answer: "Patron-level members are invited to our annual AGM (Annual General Meeting) where we vote on chapter leadership and major community initiatives."
  }
];

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-ingwe-dark min-h-screen pb-24 text-white">
      {/* --- HERO SECTION --- */}
      <div className="relative py-24 bg-ingwe-concrete border-b border-ingwe-blue/30 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ingwe-blue via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="text-ingwe-blue font-black uppercase tracking-[0.4em] text-xs">Official Registration</span>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mt-4 leading-none">
            JOIN THE <span className="text-ingwe-blue">PRIDE</span>
          </h1>
          <p className="text-gray-400 mt-8 font-bold uppercase tracking-widest max-w-2xl mx-auto italic">
            Your membership supports the chapter and keeps the spirit of AFC Leopards alive in the 6ix.
          </p>
        </div>
      </div>

      {/* --- PRICING TIERS --- */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col p-8 ${
                tier.featured 
                ? 'bg-ingwe-blue border-t-8 border-ingwe-gold shadow-2xl scale-105 z-10' 
                : 'bg-ingwe-concrete border border-white/5'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ingwe-gold text-black font-black px-4 py-1 text-[10px] uppercase tracking-[0.2em] italic">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black italic uppercase">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black">{tier.price}</span>
                  {tier.period && <span className="text-xs font-bold opacity-60 uppercase">{tier.period}</span>}
                </div>
                <p className={`mt-4 text-sm font-medium italic ${tier.featured ? 'text-white/80' : 'text-gray-500'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-bold uppercase tracking-tight">
                    <Check size={18} className={tier.featured ? 'text-white' : 'text-ingwe-blue'} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-black uppercase italic tracking-widest transition-all skew-x-[-10deg] ${
                tier.featured 
                ? 'bg-white text-ingwe-blue hover:bg-ingwe-dark hover:text-white' 
                : 'bg-ingwe-blue text-white hover:bg-white hover:text-black'
              }`}>
                {tier.cta} <ArrowRight className="inline-block ml-2" size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- BENEFITS GRID --- */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {[
            { icon: ShieldCheck, title: "Official Status", desc: "Recognized as an official branch by the main club in Nairobi." },
            { icon: Zap, title: "Fast Tracking", desc: "Priority access to jerseys and merchandise shipments." },
            { icon: Globe, title: "Networking", desc: "Connect with Kenyan professionals and football lovers across Ontario." },
            { icon: Trophy, title: "Events", desc: "Exclusive access to private watch parties and member-only BBQs." }
          ].map((benefit, i) => (
            <div key={i} className="group">
              <benefit.icon size={40} className="text-ingwe-blue mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-black italic uppercase mb-2">{benefit.title}</h4>
              <p className="text-gray-500 text-sm font-medium italic leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="max-w-3xl mx-auto px-4 mt-32">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black italic tracking-tighter uppercase">
            Frequently Asked <span className="text-ingwe-blue">Questions</span>
          </h3>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-2">
            Everything you need to know about the Toronto Den
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/5 bg-ingwe-concrete overflow-hidden transition-all"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-black uppercase italic tracking-tight text-sm md:text-base">
                  {faq.question}
                </span>
                <div className="text-ingwe-blue">
                  {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 font-medium italic text-sm border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="bg-ingwe-blue p-12 text-center relative overflow-hidden skew-x-[-2deg]">
          <div className="relative z-10">
            <h2 className="text-4xl font-black italic uppercase italic">Ready to join the pride?</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm mt-4">Secure your spot in the den for the 2026 season.</p>
            <button className="mt-8 bg-white text-ingwe-blue font-black px-10 py-4 uppercase italic tracking-widest hover:bg-ingwe-dark hover:text-white transition-all">
              Register Now
            </button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black italic opacity-5 pointer-events-none select-none uppercase">
            INGWE
          </div>
        </div>
      </section>
    </div>
  );
}