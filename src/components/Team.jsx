import React, { useState, useRef } from 'react';

// Centralized Team Data with isolated fields
const TEAM_MEMBERS = [
  {
    id: "001",
    name: "Test 1",
    role: "head",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "002",
    name: "Test 2",
    role: "excomm",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "003",
    name: "Test 3",
    role: "coordinator",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.target.releasePointerCapture(e.pointerId);
  };

  const currentMember = TEAM_MEMBERS[currentIndex];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-orange-500 via-pink-500 to-rose-600 font-mono p-4 md:p-8 flex flex-col items-center justify-start select-none overflow-hidden box-border">
      

      <div className="w-full max-w-4xl bg-[#e6007e] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-black italic text-center py-2 px-4 uppercase tracking-wider text-xs md:text-base mb-6">
        BACK AT HQ...CLASSIFIED INFORMATION HAS BEEN LEAKED!
      </div>

      <div className="relative w-full max-w-5xl bg-[#121826] border-2 border-black rounded-t-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col">
        
        <div className="bg-[#b3b3b3] border-b-2 border-black p-2 flex items-center justify-between z-10">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-black"></span>
          </div>
          <span className="text-[11px] font-black text-black tracking-widest uppercase">SYSTEM BREACHED</span>
          <button className="bg-[#ef4444] text-white border border-black px-1.5 py-0.5 text-[9px] hover:bg-red-600 font-bold">✕</button>
        </div>

        <div className="relative min-h-[520px] p-6 flex flex-col items-center justify-center overflow-hidden bg-[#0d1b2a]">
          
          <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0">
            <img 
              src="/Desktop - 13 (1).svg" 
              alt="Hacker Grid Backdrop" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-4 left-4 bg-white border-2 border-black text-black font-black p-2.5 rounded-2xl max-w-[130px] text-center text-[10px] leading-tight shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] z-10">
            ALL UNITS REPORT TO WEBOPS!
          </div>

          <h2 className="text-white text-4xl md:text-6xl font-black tracking-widest uppercase italic mb-6 drop-shadow-[0_4px_0_rgba(0,0,0,1)] z-10">
            THE TEAM
          </h2>

          
          <div className="w-full max-w-3xl flex items-center justify-between gap-4 z-10">
            

            <button 
              onClick={handlePrev} 
              className="bg-black/70 text-white p-3 rounded-md border border-cyan-400 hover:bg-black transition-transform active:scale-90 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              ◀
            </button>
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
              className={`w-[340px] md:w-[420px] h-[210px] bg-gradient-to-br from-slate-50 to-cyan-100 border-2 border-black rounded-xl p-4 flex flex-row items-stretch justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative touch-none select-none ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >

              <div className="w-[42%] border border-black rounded-lg overflow-hidden bg-slate-300 pointer-events-none">
                <img 
                  src={currentMember.photo} 
                  alt={currentMember.name} 
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>

              <div className="w-[54%] flex flex-col justify-between pointer-events-none">
                
                <div className="text-right flex flex-col items-end">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">🌐</span>
                    <span className="font-black text-sm tracking-tighter text-black">NITTFEST</span>
                  </div>
                  <div className="text-[10px] font-black bg-black text-cyan-300 px-1.5 py-0.5 tracking-wide uppercase italic -mt-0.5">
                    WebOps
                  </div>
                </div>

                <div className="my-2">
                  <h3 className="text-black font-black text-base md:text-lg tracking-tight uppercase truncate leading-tight">
                    {currentMember.name}
                  </h3>
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-tighter mt-0.5 line-clamp-2">
                    {currentMember.role}
                  </p>
                </div>

                <div className="w-full flex flex-col items-end border-t border-black/20 pt-1.5">
                  <span className="text-[9px] text-black font-mono tracking-[2px] leading-none whitespace-nowrap">
                    {currentMember.barcode}
                  </span>
                  <span className="text-[8px] text-black/60 font-bold tracking-tight mt-0.5">
                    SECURE ID: #{currentMember.id}
                  </span>
                </div>

              </div>
            </div>

            <button 
              onClick={handleNext} 
              className="bg-black/70 text-white p-3 rounded-md border border-cyan-400 hover:bg-black transition-transform active:scale-90 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              ▶
            </button>
          </div>

          <div className="absolute bottom-4 left-4 w-56 bg-[#cfcfcf] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[10px] text-black hidden lg:block z-10">
            <div className="bg-gray-400 p-1 flex justify-between items-center border-b border-black font-bold text-[9px]">
              <span>CLASSIFIED.EXE</span>
              <span className="cursor-pointer">✕</span>
            </div>
            <div className="p-2 font-mono space-y-0.5 bg-gray-200">
              <p className="text-emerald-700 font-bold">access_granted();</p>
              <p className="text-red-600 font-bold">breach_detected();</p>
              <p>firewall_override = <span className="text-blue-600 font-bold">true</span>;</p>
              <p className="text-slate-500 animate-pulse">system_scan_active();</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}