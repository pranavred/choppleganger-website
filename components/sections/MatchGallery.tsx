"use client";

import { motion } from "framer-motion";

const exampleMatches = [
  {
    userEmoji: "😴",
    celebEmoji: "🤪",
    celebName: "Nicolas Cage",
    matchPercent: 94,
    rank: "1ST",
    rotation: -3,
  },
  {
    userEmoji: "🙄",
    celebEmoji: "😑",
    celebName: "Steve Buscemi",
    matchPercent: 89,
    rank: "2ND",
    rotation: 2,
  },
  {
    userEmoji: "😬",
    celebEmoji: "🤨",
    celebName: "Renée Zellweger",
    matchPercent: 87,
    rank: "3RD",
    rotation: -2,
  },
  {
    userEmoji: "🥴",
    celebEmoji: "😵",
    celebName: "Gary Busey",
    matchPercent: 92,
    rank: "1ST",
    rotation: 4,
  },
  {
    userEmoji: "😤",
    celebEmoji: "🫠",
    celebName: "Cher",
    matchPercent: 85,
    rank: "4TH",
    rotation: -1,
  },
  {
    userEmoji: "🤢",
    celebEmoji: "🥺",
    celebName: "Adam Driver",
    matchPercent: 91,
    rank: "2ND",
    rotation: 3,
  },
];

export function MatchGallery() {
  return (
    <section className="py-24 px-6 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl" />
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
            The Results Speak For Themselves
          </h2>
          <p className="text-muted text-xl">
            (And they&apos;re not holding back)
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {exampleMatches.map((match, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30, rotate: match.rotation }}
              whileInView={{ opacity: 1, y: 0, rotate: match.rotation }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 10,
              }}
            >
              {/* Match Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                {/* Split Image Container */}
                <div className="flex">
                  {/* User Side */}
                  <div className="w-1/2 aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border-r-2 border-dashed border-gray-400">
                    <span className="text-6xl">{match.userEmoji}</span>
                  </div>
                  {/* Celebrity Side */}
                  <div className="w-1/2 aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-6xl">{match.celebEmoji}</span>
                  </div>
                </div>

                {/* Match Info */}
                <div className="p-4 bg-dark text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wide">
                        Your match
                      </p>
                      <p className="font-bold text-lg">
                        <span className="bg-primary-yellow text-dark px-2 py-0.5 rounded">
                          {match.celebName}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                        {match.rank} MATCH
                      </span>
                    </div>
                  </div>
                </div>

                {/* Percentage Badge */}
                <motion.div
                  className="absolute -top-3 -right-3 w-14 h-14 bg-primary-yellow rounded-full flex items-center justify-center shadow-lg border-4 border-dark"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <span className="text-sm font-bold text-dark">
                    {match.matchPercent}%
                  </span>
                </motion.div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-24"
                initial={false}
              >
                <span className="text-white font-bold px-4 py-2 glass rounded-full text-sm">
                  Share to TikTok
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <motion.p
          className="text-center text-muted text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Real results. Real roasts. Real therapy bills.{" "}
          <span className="text-primary-yellow">(Just kidding. Mostly.)</span>
        </motion.p>
      </div>
    </section>
  );
}
