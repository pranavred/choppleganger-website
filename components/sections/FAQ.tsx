"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this real? Like, actually real?",
    answer:
      "Unfortunately for your self-esteem, yes. Our AI uses advanced facial recognition to find genuine matches. We don't make this stuff up.",
  },
  {
    question: "Will you store my photos?",
    answer:
      "Your selfies are processed and deleted within 24 hours. We're here to roast you, not run a surveillance operation.",
  },
  {
    question: "What if I don't like my match?",
    answer:
      "That's... kind of the point? But you can always scan again. Your face has many unflattering angles to explore.",
  },
  {
    question: "Can I match my friends without them knowing?",
    answer:
      "Absolutely. Upload any photo. We encourage chaos.",
  },
  {
    question: "Is the $6.99/week worth it?",
    answer:
      "That depends. How much is endless content and friend group entertainment worth to you? Also, you get a 3-day free trial. Use it.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-dark-secondary relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-4">
            Questions We Get Asked
          </h2>
          <p className="text-muted text-xl">
            (Usually in a Panicked Tone)
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-primary-yellow" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
