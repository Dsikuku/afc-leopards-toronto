import Link from "next/link";

export default function Gallery() {
  const images = [
    { src: "/images/Fans.jpeg", title: "Matchday Energy", size: "md:col-span-2 md:row-span-2" },
    { src: "/images/vibes.jpg", title: "The vibes", size: "col-span-1" },
    { src: "/images/Manu.jpeg", title: "The Kit", size: "col-span-1" },
    { src: "/images/captain.jpg", title: "End Year Party", size: "col-span-1" },
    { src: "/images/action.jpg", title: "our boys in action", size: "md:col-span-2" },
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-5xl font-black italic tracking-tighter uppercase">
            Captured <span className="text-ingwe-blue">Moments</span>
          </h2>
          {/* Subtle gold accent under the blue line */}
          <div className="flex mt-2">
            <div className="h-1 w-24 bg-ingwe-blue" />
            <div className="h-1 w-8 bg-ingwe-gold" />
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group border border-white/5 ${img.size}`}
            >
              {/* Image */}
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              
              {/* Overlay with a hint of Ingwe Blue on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-90 group-hover:from-ingwe-blue/40 transition-all duration-500" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-white font-black italic uppercase tracking-wider text-xl drop-shadow-md">
                  {img.title}
                </p>
                {/* Gold underline for the caption on hover */}
                <div className="h-1 w-0 group-hover:w-full bg-ingwe-gold transition-all duration-500 mt-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery">
             <button className="border-2 border-ingwe-blue text-white font-black px-12 py-4 uppercase tracking-widest hover:bg-ingwe-blue transition-all skew-x-[-10deg] cursor-pointer">
              View Full Archive
            </button>
          </Link>
        </div>
      </div>

      {/* Brand Divider at the very bottom of the section */}
      <div className="mt-24">
        <BrandDivider />
      </div>
    </section>
  );
}

export function BrandDivider() {
  return (
    <div className="flex w-full h-1.5 opacity-80">
      <div className="flex-1 bg-ingwe-blue" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-ingwe-blue" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-ingwe-gold" />
    </div>
  );
}