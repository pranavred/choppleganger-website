"use client";

import { motion } from "framer-motion";
import {
  Star,
  Target,
  Rocket,
  Microscope,
  Layers,
  ImageIcon,
} from "lucide-react";

const features = [
  {
    icon: Star,
    title: "10,000+ Celebs at Their Worst",
    description:
      "From hungover award show arrivals to gym parking lot disasters. We've curated them all.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Uncomfortably Accurate",
    description:
      "Our face-matching AI doesn't lie. It doesn't care about your feelings. It just finds the truth.",
    gradient: "from-primary-blue to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Built for Your Story",
    description:
      "One-tap sharing to TikTok, Instagram, and Snapchat. Watch the DMs flood in.",
    gradient: "from-primary-purple to-pink-500",
  },
  {
    icon: Microscope,
    title: "Emotion & Vibe Analysis",
    description:
      "We'll tell you what emotion your face radiates (spoiler: it's usually \"confused\").",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Layers,
    title: "Not Just One Match — Ten",
    description:
      "Because one ugly twin isn't enough. Get your full roster of unflattering doppelgangers.",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: ImageIcon,
    title: "Track Your Journey",
    description:
      "Save every scan. Challenge friends. See who has the worst celebrity twin.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-dark relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-4">
            Why 50,000 People Let Us
            <br />
            <span className="text-primary-yellow">Destroy Their Confidence</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
              transition={{ duration: 0.4 }}
            >
              <div className="glass rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-white relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
