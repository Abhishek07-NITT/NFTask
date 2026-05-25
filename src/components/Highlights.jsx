import React from 'react';

const highlightsData = [
  { id: 1, src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600' },
  { id: 2, src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600' },
  { id: 3, src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600' },
  { id: 4, src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600' },
];

export default function HighlightsSection() {
  return (
    <section className="bg-black text-white py-16 w-full font-sans overflow-hidden">
    
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-red-600 text-6xl md:text-8xl font-black tracking-tighter uppercase italic select-none">
          Highlights
        </h2>
      </div>


      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 mb-24">
        {highlightsData.map((item) => (
          <div 
            key={item.id}
            className="relative overflow-hidden aspect-[16/10] w-full transform -skew-x-12 border border-zinc-800 bg-zinc-900 group transition-all duration-300 hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]"
          >
            <div className="w-full h-full transform skew-x-12 scale-135 origin-center">
              <img 
                src={item.src} 
 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      <div className="relative w-full h-[450px] bg-black flex flex-col justify-end overflow-hidden border-t border-zinc-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen filter saturate-200 contrast-125 select-none pointer-events-none"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000')`, 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-black pointer-events-none" />

        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          
          <div className="bg-white border-2 border-black text-red-600 font-bold text-xs uppercase tracking-widest px-3 py-0.5 transform -rotate-3 translate-y-2 z-30 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            Gallery
          </div>
          <div className="bg-yellow-400 border-4 border-black px-6 py-4 transform -skew-x-6 shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] hover:scale-105 transition-transform duration-200 cursor-pointer">
            <h3 className="font-black text-2xl md:text-4xl tracking-tight text-black uppercase italic select-none">
              Relive the Moments!
            </h3>
          </div>
        </div>


        <div className="w-full h-[180px] z-10 opacity-80 filter contrast-200 pointer-events-none flex justify-center items-end bg-gradient-to-t from-black to-transparent">
          <div className="w-full max-w-5xl h-full flex justify-between items-end px-4 text-black font-black select-none">
            <div className="w-12 h-32 bg-black rounded-t-full mask-silhouette animate-pulse" />
            <div className="w-16 h-40 bg-black rounded-t-lg" />
            <div className="w-10 h-36 bg-black rounded-t-full" />
            <div className="w-14 h-44 bg-black rounded-t-md" />
            <div className="w-12 h-32 bg-black rounded-t-xl" />
            <div className="w-16 h-36 bg-black rounded-t-full" />
          </div>
        </div>

      </div>
    </section>
  );
}