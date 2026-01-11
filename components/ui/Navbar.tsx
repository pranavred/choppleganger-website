"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🤪</span>
              <span className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-white">
                Choppleganger
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                className="flex items-center gap-2 px-5 py-2.5 bg-primary-yellow text-dark font-bold text-sm rounded-full hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Get the App
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                className="flex items-center gap-2 px-8 py-4 bg-primary-yellow text-dark font-bold text-lg rounded-full mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Download className="w-5 h-5" />
                Get the App
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-dark/90 backdrop-blur-xl border-t border-white/10 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      >
        <button className="w-full flex items-center justify-center gap-2 py-4 bg-primary-yellow text-dark font-bold text-lg rounded-full">
          <Download className="w-5 h-5" />
          Find Your Ugly Twin — Free
        </button>
      </motion.div>
    </>
  );
}
