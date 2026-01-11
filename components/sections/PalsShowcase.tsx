import React from "react";
import { RetroWindow } from "@/components/ui/RetroWindow";
import { PixelButton } from "@/components/ui/PixelButton";

export function PalsShowcase() {
  const pals = [
    { name: "Chat", content: "I'm thinking of going on a bike trip in patagonia, could you price it out?", type: "text" },
    { name: "Face-to-Face Video", content: "VIDEO FEED", type: "video" },
    { name: "Voice", content: "Audio Waveform", type: "audio" },
  ];

  return (
    <section className="py-24 px-6 bg-tavus-beige border-b border-black overflow-hidden">
      <div className="container mx-auto text-center mb-16">
        <h2 className="font-serif text-5xl md:text-7xl mb-6">Meet the PALs.</h2>
        <p className="font-sans text-xl text-tavus-muted max-w-2xl mx-auto">
          Your personal AI that remembers, evolves, and never logs off.
          Call them. Text them. Or talk face-to-face.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto h-[600px] flex items-center justify-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF7EB6_0%,transparent_70%)] opacity-20 blur-3xl" />

        {/* Floating Windows */}
        <div className="relative w-full h-full">
           {/* Center Video Window */}
           <RetroWindow 
              title="FACE-TO-FACE VIDEO" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] z-20 shadow-2xl"
              headerClassName="bg-white"
           >
              <div className="aspect-[3/4] bg-neutral-800 relative">
                 <div className="absolute inset-0 flex items-center justify-center text-white/50 font-mono">
                    [VIDEO FEED]
                 </div>
                 <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    <button className="bg-white p-2 border border-black hover:bg-gray-100"><div className="w-4 h-4 border border-black" /></button>
                    <button className="bg-white p-2 border border-black hover:bg-gray-100"><div className="w-4 h-4 rounded-full border border-black" /></button>
                    <button className="bg-white p-2 border border-black hover:bg-gray-100"><div className="w-4 h-4 border-b-2 border-black" /></button>
                 </div>
              </div>
           </RetroWindow>

           {/* Left Chat Window */}
           <RetroWindow 
              title="CHAT" 
              className="absolute top-1/4 left-[10%] w-[300px] z-10 -rotate-3 blur-[1px] hover:blur-0 hover:rotate-0 transition-all duration-300 bg-white/90"
           >
              <div className="p-4 font-mono text-xs space-y-4 h-[200px] flex flex-col">
                 <div className="bg-gray-100 p-2 border border-black self-end max-w-[80%]">
                    I'm thinking of going on a bike trip in patagonia...
                 </div>
                 <div className="bg-tavus-pink/20 p-2 border border-black self-start max-w-[80%]">
                    <span className="font-bold">PAL:</span> No prob. I did a bunch of research...
                 </div>
                 <div className="mt-auto border-t border-black pt-2 text-gray-400">
                    WRITE A RESPONSE...
                 </div>
              </div>
           </RetroWindow>

           {/* Right Voice Window */}
           <RetroWindow 
              title="VOICE" 
              className="absolute bottom-1/4 right-[10%] w-[300px] z-10 rotate-2 blur-[1px] hover:blur-0 hover:rotate-0 transition-all duration-300 bg-white/90"
           >
              <div className="p-4 h-[150px] flex flex-col items-center justify-center gap-4">
                 <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                    <div className="h-full bg-tavus-code-text w-2/3" />
                 </div>
                 <PixelButton className="w-full bg-tavus-code-text hover:bg-green-400">LISTEN</PixelButton>
                 <div className="flex items-end gap-1 h-8">
                    {[...Array(20)].map((_, i) => (
                       <div key={i} className="w-1 bg-black" style={{ height: `${Math.random() * 100}%` }} />
                    ))}
                 </div>
              </div>
           </RetroWindow>
        </div>
      </div>
    </section>
  );
}
