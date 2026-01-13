"use client";

import { motion } from "framer-motion";
import { Star, Twitter } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "I got matched with Nicolas Cage looking confused at an airport. I've never felt more seen.",
    author: "@jessicamakes",
    platform: "TikTok",
    stars: 5,
    avatar: "/images/avatars/jessica.png",
  },
  {
    quote:
      "Showed my Choppleganger to my boyfriend. He couldn't stop laughing. We're on a break now.",
    author: "Sarah T.",
    platform: "App Store Review",
    stars: 5,
    avatar: "/images/avatars/sarah.png",
  },
  {
    quote:
      "I didn't need to know I look like Steve Buscemi mid-sneeze. But now I can't unknow it. 10/10.",
    author: "@danknews",
    platform: "Twitter",
    stars: 5,
    icon: Twitter,
    avatar: "/images/avatars/dan.png",
  },
  {
    quote:
      "This app ended friendships and started group chat wars. Best $6.99 I've ever spent.",
    author: "Marcus R.",
    platform: "Verified Subscriber",
    stars: 5,
    avatar: "/images/avatars/marcus.png",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary-purple/20 to-primary-blue/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-yellow/20 rounded-full blur-3xl" />
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
            What They&apos;re Saying
          </h2>
          <p className="text-muted text-xl">
            (When They&apos;re Done Crying)
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary-yellow text-primary-yellow"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-white mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted">{testimonial.platform}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TikTok Trending Banner */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-8 py-4">
            <span className="text-2xl">🔥</span>
            <span className="text-white font-semibold">
              Trending on TikTok
            </span>
            <span className="text-primary-yellow font-bold">
              #ChopplegangerChallenge
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
