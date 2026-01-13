"use client";

import { motion } from "framer-motion";
import { Star, Download } from "lucide-react";
import Image from "next/image";

const polaroidCards = [
  { rotation: -12, x: -180, y: 40, delay: 0, percent: 87, image: "/images/lookalikes/nicolas-cage-lookalike.png", celeb: "Nicolas Cage" },
  { rotation: 8, x: 160, y: -20, delay: 0.2, percent: 92, image: "/images/lookalikes/steve-buscemi-lookalike.png", celeb: "Steve Buscemi" },
  { rotation: -5, x: -120, y: -80, delay: 0.4, percent: 78, image: "/images/lookalikes/gary-busey-lookalike.png", celeb: "Gary Busey" },
  { rotation: 15, x: 200, y: 100, delay: 0.6, percent: 94, image: "/images/lookalikes/adam-driver-lookalike.png", celeb: "Adam Driver" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-purple to-primary-blue animate-gradient" />

      {/* Subtle particle/dot overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Floating Polaroid Cards */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {polaroidCards.map((card, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 polaroid w-32 h-40"
            style={{
              rotate: card.rotation,
            }}
            initial={{ opacity: 0, scale: 0.5, x: card.x, y: card.y }}
            animate={{
              opacity: 1,
              scale: 1,
              x: card.x,
              y: [card.y, card.y - 15, card.y],
            }}
            transition={{
              delay: card.delay,
              duration: 0.6,
              y: {
                repeat: Infinity,
                duration: 4 + index,
                ease: "easeInOut",
              },
            }}
          >
            {/* Match image */}
            <div className="w-full h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-sm overflow-hidden relative">
              <Image
                src={card.image}
                alt={`Match with ${card.celeb}`}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            {/* Match percentage badge */}
            <motion.div
              className="absolute -top-3 -right-3 w-10 h-10 bg-primary-yellow rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: card.delay + 0.3, type: "spring" }}
            >
              <span className="text-xs font-bold text-dark">{card.percent}%</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6">
            Every celebrity has{" "}
            <span className="text-primary-yellow">bad days.</span>
            <br />
            <span className="text-white/90">You look like one of them.</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Choppleganger uses AI to find the celebrity you resemble...
            <br />
            <span className="text-primary-yellow font-semibold">
              on their worst red carpet moment.
            </span>
            <br />
            Upload a selfie. Get roasted. Share the chaos.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="px-8 py-4 bg-primary-yellow text-dark font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 214, 10, 0.6)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Find Your Ugly Twin — Free
            </motion.button>

            <motion.a
              href="#how-it-works"
              className="px-6 py-4 text-white/90 font-medium hover:text-white transition-colors flex items-center gap-2"
              whileHover={{ y: 2 }}
            >
              See Examples ↓
            </motion.a>
          </motion.div>

          {/* Social Proof Badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-primary-yellow text-primary-yellow"
                />
              ))}
            </div>
            <span className="text-white font-semibold">4.9</span>
            <span className="text-white/70">•</span>
            <span className="text-white/70">50,000+ ugly twins found</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
