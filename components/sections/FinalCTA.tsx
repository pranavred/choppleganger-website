"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-purple to-primary-blue animate-gradient" />

      {/* Glow effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-yellow/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] mb-6">
            Ready to Meet Your{" "}
            <span className="text-primary-yellow">Ugly Twin?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-10">
            They&apos;re waiting. They&apos;re unflattering.{" "}
            <span className="text-primary-yellow">They&apos;re you.</span>
          </p>

          {/* CTA Button */}
          <motion.button
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary-yellow text-dark font-bold text-xl rounded-full shadow-2xl hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(255, 214, 10, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-6 h-6" />
            Download Free on iOS
          </motion.button>

          {/* App Store Badge placeholder */}
          <div className="mt-8">
            <div className="inline-block glass rounded-xl px-6 py-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🍎</span>
                <div className="text-left">
                  <p className="text-xs text-white/60">Download on the</p>
                  <p className="text-lg font-semibold text-white">App Store</p>
                </div>
              </div>
            </div>
          </div>

          {/* Micro-copy */}
          <motion.p
            className="mt-8 text-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            3-day free trial • Cancel anytime • Roasts guaranteed
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
