"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  product: [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "mailto:pranav@wavetechhq.com" },
  ],
  social: [
    { name: "TikTok", href: "#", icon: "🎵" },
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "Twitter", href: "#", icon: "🐦" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 pt-16 pb-8 md:pb-24">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🤪</span>
              <span className="text-xl font-bold font-[family-name:var(--font-display)] text-white">
                Choppleganger
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Find your ugly celebrity twin with AI.
              <br />
              Embrace the chaos.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                >
                  <span className="text-lg">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} Wave Tech LLC. All rights reserved.
            </p>

            {/* App Store Badge */}
            <div className="glass rounded-xl px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🍎</span>
                <div className="text-left">
                  <p className="text-[10px] text-white/60">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun tagline */}
        <motion.p
          className="text-center text-muted/50 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Made with 🤪 and questionable life choices
        </motion.p>
      </div>
    </footer>
  );
}
