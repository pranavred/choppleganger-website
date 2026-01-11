import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { PixelButton } from "@/components/ui/PixelButton";
import { RetroWindow } from "@/components/ui/RetroWindow";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-tavus-beige noise-bg relative flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block border border-black bg-white px-4 py-1 mb-8 shadow-retro">
              <span className="font-mono text-xs uppercase tracking-widest">Pricing</span>
            </div>
            
            <div className="flex justify-center mb-8">
              <div className="flex border border-black bg-white shadow-retro">
                <button className="px-8 py-2 bg-tavus-pink border-r border-black font-mono text-xs uppercase font-bold hover:bg-tavus-pink-hover transition-colors">
                  PALs
                </button>
                <button className="px-8 py-2 bg-tavus-beige font-mono text-xs uppercase font-bold hover:bg-gray-100 transition-colors">
                  Developer
                </button>
              </div>
            </div>

            <div className="relative inline-block mx-auto">
               <div className="bg-white border border-black shadow-retro p-8 md:p-12 relative z-10">
                  <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-4">
                     PALs: AI humans for you
                  </h1>
                  <p className="font-sans text-xl text-tavus-muted">
                     Flexible plans for every kind of conversation
                  </p>
               </div>
               {/* Decorative elements behind title */}
               <div className="absolute -top-4 -left-4 w-full h-full border border-black bg-tavus-pink -z-10" />
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Free Tier */}
            <div className="bg-[#E6E6FA] border border-black shadow-retro p-8 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold mb-2">Free</h3>
                <p className="font-sans text-sm text-tavus-muted">For the curious and the naturally chatty</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-6xl">$0</span>
                <span className="font-serif text-2xl text-tavus-muted">/mo</span>
                <p className="font-sans text-xs text-tavus-muted mt-2">No upfront payment</p>
              </div>
              <div className="mt-auto">
                <PixelButton variant="secondary" className="w-full bg-[#D8D8EF] hover:bg-white">GET STARTED</PixelButton>
              </div>
            </div>

            {/* Plus Tier */}
            <div className="bg-[#FFDAB9] border border-black shadow-retro p-8 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300 relative">
               {/* Popular Badge */}
               <div className="absolute -top-3 right-8 bg-black text-white px-2 py-1 font-mono text-[10px] uppercase">
                  Most Popular
               </div>
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold mb-2">Plus</h3>
                <p className="font-sans text-sm text-tavus-muted">For those who text their PAL goodnight</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-6xl">$20</span>
                <span className="font-serif text-2xl text-tavus-muted">/mo</span>
                <p className="font-sans text-xs text-tavus-muted mt-2">Monthly access fee</p>
              </div>
              <div className="mt-auto">
                <PixelButton className="w-full">GET STARTED</PixelButton>
              </div>
            </div>

            {/* Max Tier */}
            <div className="bg-[#FCEDA3] border border-black shadow-retro p-8 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold mb-2">Max</h3>
                <p className="font-sans text-sm text-tavus-muted">For the ones who never log off</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-6xl">$50</span>
                <span className="font-serif text-2xl text-tavus-muted">/mo</span>
                <p className="font-sans text-xs text-tavus-muted mt-2">Monthly access fee + pay as you go</p>
              </div>
              <div className="mt-auto">
                <PixelButton variant="secondary" className="w-full bg-[#F0E295] hover:bg-white">GET STARTED</PixelButton>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
