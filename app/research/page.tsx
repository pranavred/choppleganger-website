import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { PixelButton } from "@/components/ui/PixelButton";
import { RetroWindow } from "@/components/ui/RetroWindow";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-tavus-beige noise-bg relative flex flex-col">
      <Navbar />
      
      <div className="flex-grow grid lg:grid-cols-2 min-h-screen">
        {/* Left Content */}
        <div className="pt-32 pb-20 px-6 lg:px-16 flex flex-col justify-center">
          <div className="max-w-xl">
             <span className="font-mono text-xs uppercase tracking-widest text-tavus-muted mb-4 block">
                OUR APPROACH
             </span>
             <h1 className="font-serif text-5xl md:text-7xl leading-[0.9] mb-8">
                Human communication is like a <span className="italic">dance</span>
             </h1>
             <p className="font-sans text-lg text-tavus-muted mb-8 leading-relaxed">
                Human conversation is a rhythm—every glance, pause, and tone changes the meaning. At Tavus, we study that rhythm, designing AI that understands emotion, intent, and timing as one signal. We’re building systems that don’t just respond, they move with you.
             </p>
             <PixelButton className="bg-tavus-pink hover:bg-tavus-pink-hover">
                SEE DOCS
             </PixelButton>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative bg-[#E0D8C0] overflow-hidden flex items-center justify-center p-12 border-l border-black">
           {/* Dithered Background Pattern */}
           <div className="absolute inset-0 opacity-50" 
                style={{ 
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1v1H5zM0 5h1v1H0z'/%3E%3C/g%3E%3C/svg%3E")` 
                }} 
           />
           
           {/* Colorful Noise Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 via-pink-200/50 to-blue-200/50 mix-blend-multiply" />
           
           {/* Retro Window with Point Cloud Visual */}
           <RetroWindow 
              title="THE DANCE" 
              className="w-full max-w-md bg-white relative z-10 shadow-retro"
              headerClassName="bg-white border-b border-black"
           >
              <div className="aspect-square bg-white relative overflow-hidden flex items-center justify-center">
                 {/* Point Cloud Figure Placeholder */}
                 <div className="w-3/4 h-3/4 relative">
                    {[...Array(100)].map((_, i) => (
                       <div 
                          key={i}
                          className="absolute w-1 h-1 bg-black rounded-full"
                          style={{
                             left: `${50 + Math.cos(i * 0.1) * 30 + (Math.random() * 10 - 5)}%`,
                             top: `${50 + Math.sin(i * 0.1) * 40 + (Math.random() * 10 - 5)}%`,
                             opacity: Math.random() * 0.8 + 0.2
                          }}
                       />
                    ))}
                    {/* Central Density */}
                    {[...Array(50)].map((_, i) => (
                       <div 
                          key={`center-${i}`}
                          className="absolute w-1 h-1 bg-black rounded-full"
                          style={{
                             left: `${50 + (Math.random() * 20 - 10)}%`,
                             top: `${50 + (Math.random() * 40 - 20)}%`,
                          }}
                       />
                    ))}
                 </div>
                 
                 {/* Scanline Effect */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none" />
              </div>
           </RetroWindow>
        </div>
      </div>
    </main>
  );
}
