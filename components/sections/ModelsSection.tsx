import React from "react";
import { RetroWindow } from "@/components/ui/RetroWindow";

export function ModelsSection() {
  const models = [
    { name: "Phoenix [4]", color: "bg-red-500", desc: "Photorealistic 3D diffusion model for high-fidelity video generation." },
    { name: "Raven [1]", color: "bg-black", desc: "Raw multi-modal perception engine. Sees and understands the world." },
    { name: "Sparrow [1]", color: "bg-blue-500", desc: "State-of-the-art transformer for real-time conversation and reasoning." },
  ];

  return (
    <section className="py-24 px-6 bg-tavus-beige border-b border-black">
      <div className="container mx-auto">
        <div className="mb-16">
           <h2 className="font-serif text-5xl md:text-7xl mb-6">Models</h2>
           <p className="font-sans text-xl text-tavus-muted max-w-2xl">
              We build models that teach machines perception, empathy, and expression.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {models.map((model, i) => (
              <RetroWindow key={i} title={model.name} className="h-full hover:-translate-y-2 transition-transform duration-300">
                 <div className="p-8 flex flex-col gap-6 h-full">
                    {/* Pixelated Bird Placeholder */}
                    <div className="w-full aspect-square bg-white border border-black relative overflow-hidden flex items-center justify-center">
                       <div className={`w-16 h-16 ${model.color} opacity-80`} style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 20% 50%)" }} />
                       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvc3ZnPg==')] opacity-30" />
                    </div>
                    
                    <div>
                       <h3 className="font-mono font-bold text-lg mb-2 uppercase">{model.name}</h3>
                       <p className="font-sans text-tavus-muted text-sm">{model.desc}</p>
                    </div>
                 </div>
              </RetroWindow>
           ))}
        </div>
      </div>
    </section>
  );
}
