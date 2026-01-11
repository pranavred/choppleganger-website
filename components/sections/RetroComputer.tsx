import React from "react";
import { PixelButton } from "@/components/ui/PixelButton";
import { RetroWindow } from "@/components/ui/RetroWindow";

export function RetroComputer() {
  return (
    <section className="py-24 px-6 bg-tavus-beige border-b border-black overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
           {/* Vintage Computer Visual Construction */}
           <div className="relative w-full max-w-lg mx-auto">
              {/* Monitor */}
              <div className="bg-[#E0DBC8] p-4 rounded-xl border-4 border-[#B0A890] shadow-xl relative z-10">
                 <div className="bg-black p-4 rounded-lg aspect-[4/3] relative overflow-hidden border-2 border-[#807860]">
                    {/* Screen Content */}
                    <div className="text-tavus-code-text font-mono text-sm">
                       <p>{">"} INITIALIZING TAVUS_OS...</p>
                       <p>{">"} LOADING MODULES...</p>
                       <p>{">"} CONNECTING TO NEURAL NET...</p>
                       <p className="animate-pulse">{">"} READY_</p>
                       
                       <div className="mt-8 border border-tavus-code-text p-2 inline-block">
                          HELLO WORLD
                       </div>
                    </div>
                    {/* Scanlines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none" />
                 </div>
                 {/* Monitor Brand */}
                 <div className="mt-2 flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full" />
                    <span className="font-serif italic text-[#807860] text-xs">Tavus II</span>
                 </div>
              </div>
              {/* Stand */}
              <div className="h-8 w-1/3 bg-[#C0B8A0] mx-auto border-x-4 border-[#908870]" />
              <div className="h-4 w-1/2 bg-[#C0B8A0] mx-auto rounded-t-lg border-t-4 border-[#908870]" />
           </div>
           
           {/* Floating Cards */}
           <RetroWindow title="PALs for you" className="absolute top-0 -right-4 w-48 bg-white z-20 shadow-retro">
              <div className="p-4 flex flex-col gap-2">
                 <p className="font-mono text-xs">Personal AI companion</p>
                 <PixelButton className="text-xs py-1 px-2">START FREE TRIAL</PixelButton>
              </div>
           </RetroWindow>
           
           <RetroWindow title="PALs for enterprises" className="absolute bottom-12 -left-8 w-56 bg-white z-20 shadow-retro">
              <div className="p-4 flex flex-col gap-2">
                 <p className="font-mono text-xs">Scale your workforce</p>
                 <PixelButton variant="secondary" className="text-xs py-1 px-2">GET IN TOUCH</PixelButton>
              </div>
           </RetroWindow>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-none">
            Computing that feels like a <span className="italic">conversation</span>.
          </h2>
          <p className="font-sans text-xl text-tavus-muted mb-8">
            Forget command lines and clicks. Just talk. Your computer understands context, nuance, and intent.
          </p>
        </div>
      </div>
    </section>
  );
}
