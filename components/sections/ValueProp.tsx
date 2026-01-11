import React from "react";
import { RetroWindow } from "@/components/ui/RetroWindow";

export function ValueProp() {
  return (
    <section className="py-24 px-6 border-b border-black bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-12">
          What if you could talk to your computer like a{" "}
          <span className="bg-tavus-pink px-2 italic inline-block transform -rotate-1 border border-black shadow-retro">
            collaborator
          </span>
          ?
        </h2>

        <div className="relative mt-16">
           <RetroWindow title="BRIDGING THE HUMAN-MACHINE DIVIDE" className="max-w-3xl mx-auto">
              <div className="aspect-[16/9] bg-neutral-200 relative overflow-hidden">
                {/* Dithered Image Placeholder */}
                <div 
                  className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg')] bg-cover bg-center opacity-80 mix-blend-multiply filter contrast-125 grayscale"
                  style={{ imageRendering: "pixelated" }}
                />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />
              </div>
           </RetroWindow>
        </div>
      </div>
    </section>
  );
}
