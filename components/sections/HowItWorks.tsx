"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles, Flame } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Snap a Selfie",
    description:
      "Use your front camera or upload your most questionable photo. Don't worry — we've seen worse.",
    color: "from-primary-blue to-blue-600",
  },
  {
    icon: Sparkles,
    title: "AI Does Its Thing",
    description:
      "Our algorithm compares your face to 10,000+ celebrity photos. Not the magazine covers. The paparazzi ambushes.",
    color: "from-primary-purple to-purple-600",
  },
  {
    icon: Flame,
    title: "Get Your Match",
    description:
      "Discover which A-lister you channel when you're running on 3 hours of sleep. Share it before your friends do.",
    color: "from-orange-500 to-red-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-dark relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary/50 to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-4">
            Three Steps to{" "}
            <span className="text-primary-yellow">Humiliation</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            It&apos;s fast, it&apos;s brutal, and your friends will never let you forget it.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-yellow text-dark font-bold text-xl rounded-full flex items-center justify-center z-10 shadow-lg">
                {index + 1}
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Arrow connectors (desktop only) */}
        <div className="hidden md:flex justify-center gap-4 mt-8">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary-yellow/30 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
