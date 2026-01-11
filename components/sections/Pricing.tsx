"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const features = [
  "Unlimited scans",
  "Full celebrity database access",
  "Ad-free experience",
  "Save to camera roll",
  "Priority AI processing",
  "Cancel anytime — we'll miss you",
];

export function Pricing() {
  return (
    <section className="py-24 px-6 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-4">
            Less Than a Coffee.
            <br />
            <span className="text-primary-yellow">More Therapy-Inducing.</span>
          </h2>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Premium Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-primary-yellow text-dark px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                <Sparkles className="w-4 h-4" />
                CHOPPLEGANGER PREMIUM
              </div>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 pt-12">
              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-primary-yellow font-semibold text-xl mb-2">
                  Try Free for 3 Days
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white">$6.99</span>
                  <span className="text-muted">/week</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-yellow/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-yellow" />
                    </div>
                    <span className="text-white">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className="w-full py-4 bg-primary-yellow text-dark font-bold text-lg rounded-full hover:shadow-xl transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(255, 214, 10, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
              </motion.button>

              {/* Trust text */}
              <p className="text-center text-muted text-sm mt-4">
                No commitment. No judgment.
                <br />
                Just brutal AI honesty about your face.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-full px-4 py-2 text-sm text-muted flex items-center gap-2">
              <span>🍎</span> Available on App Store
            </div>
            <div className="glass rounded-full px-4 py-2 text-sm text-muted flex items-center gap-2">
              <span>🔒</span> Secure payments via Apple
            </div>
            <div className="glass rounded-full px-4 py-2 text-sm text-muted flex items-center gap-2">
              <span>↩️</span> Cancel anytime in Settings
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
