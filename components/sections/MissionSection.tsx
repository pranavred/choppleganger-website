import React from "react";
import { PixelButton } from "@/components/ui/PixelButton";

export function MissionSection() {
  return (
    <section className="grid md:grid-cols-2 border-b border-black">
      {/* Visual Side */}
      <div className="bg-black relative min-h-[500px] overflow-hidden group">
         <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale mix-blend-screen transition-transform duration-700 group-hover:scale-105"
            style={{ imageRendering: "pixelated" }}
         />
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      {/* Content Side */}
      <div className="bg-white p-12 md:p-24 flex flex-col justify-center">
         <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            Teaching machines how to be <span className="italic">human</span>
         </h2>
         <p className="font-sans text-lg text-tavus-muted mb-10 leading-relaxed">
            Tavus is a San Francisco-based AI research lab. We are a team of researchers, engineers, and designers building the future of human-computer interaction.
         </p>
         <div>
            <PixelButton>JOIN THE TEAM</PixelButton>
         </div>
      </div>
    </section>
  );
}
