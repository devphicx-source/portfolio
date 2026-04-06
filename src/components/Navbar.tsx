"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { siteConfig } from "@/data/site-config";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import Image from "next/image";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.navLinks
        .map((link) => link.href.replace("#", ""))
        .filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-border bg-bg-primary/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3"
          data-cursor-pointer
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-border bg-bg-card/50 p-1">
            <Image
              src="/devphicx logo.png"
              alt="DevPhicx Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="font-heading text-lg font-bold text-text-primary transition-colors group-hover:text-accent">
            {siteConfig.shortName}
          </span>
        </button>

        {/* Desktop nav — pill container */}
        <div className="hidden items-center gap-1 rounded-full border border-border bg-bg-card/40 px-1.5 py-1.5 backdrop-blur-md md:flex">
          {siteConfig.navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                data-cursor-pointer
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Magnetic>
            <button
              onClick={() => handleClick("#contact")}
              className="flex items-center gap-1.5 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_25px_rgba(232,39,44,0.35)]"
              data-cursor-pointer
            >
              Let&apos;s Talk
              <ArrowUpRight size={14} />
            </button>
          </Magnetic>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card/50 text-white md:hidden"
          aria-label="Toggle menu"
          data-cursor-pointer
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-bg-primary/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleClick(link.href)}
                      className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                        isActive
                          ? "bg-accent/10 text-accent-light"
                          : "text-text-secondary hover:bg-bg-card hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
              <li className="mt-2">
                <button
                  onClick={() => handleClick("#contact")}
                  className="btn-primary w-full justify-center"
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={14} />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
