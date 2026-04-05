"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { siteConfig } from "@/data/site-config";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import Image from "next/image";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    setMobileMenuOpen(false);
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

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="group relative text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                data-cursor-pointer
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
          <li>
            <Magnetic>
              <button
                onClick={() => handleClick("#contact")}
                className="flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                data-cursor-pointer
              >
                Let&apos;s Talk
                <ArrowUpRight size={14} />
              </button>
            </Magnetic>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
          data-cursor-pointer
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="w-full rounded-lg px-4 py-3 text-left text-base font-medium text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
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
