import React from "react";

export function SocialProof() {
  const companies = [
    "Deloitte", "Cyberbar", "M13", "Amazon", "Google", "Microsoft", "OpenAI", "Anthropic"
  ];

  return (
    <section className="py-12 border-y border-black bg-tavus-beige overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="font-serif italic text-xl text-tavus-muted">
          Top companies are building & employing AI humans
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[...companies, ...companies, ...companies].map((company, i) => (
            <span
              key={`${company}-${i}`}
              className="font-mono text-2xl md:text-4xl text-tavus-muted/50 uppercase font-bold tracking-tighter hover:text-black transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center ml-16">
           {[...companies, ...companies, ...companies].map((company, i) => (
            <span
              key={`${company}-${i}-2`}
              className="font-mono text-2xl md:text-4xl text-tavus-muted/50 uppercase font-bold tracking-tighter hover:text-black transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
