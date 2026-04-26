"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Zap, Users, Trophy, Star } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import Magnetic from "./Magnetic";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
} as const;

const socialLinks = [
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    href: siteConfig.socials.instagram,
    label: "Instagram",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: siteConfig.socials.linkedin,
    label: "LinkedIn",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    href: siteConfig.socials.github,
    label: "GitHub",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: siteConfig.socials.twitter,
    label: "X",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-12 lg:pt-32"
    >
      {/* ─── Ambient Background Glows ─── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary center glow — behind jellyfish */}
        <div
          className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[900px] sm:w-[900px]"
          style={{
            background:
              "radial-gradient(circle, rgba(232,39,44,0.2) 0%, rgba(232,39,44,0.05) 40%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        {/* Secondary warm glow — bottom right */}
        <div
          className="absolute -right-1/4 bottom-1/4 hidden h-[500px] w-[500px] rounded-full opacity-[0.08] sm:block"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* ─── MAIN JELLYFISH — Dramatic Center Piece ─── */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="relative translate-x-[15%] sm:translate-x-[10%] lg:translate-x-0"
        >
          {/* Floating animation — CSS-driven for mobile performance */}
          <div className="jellyfish-float">
            <Image
              src="/jellyfish-main.png"
              alt="Glowing red jellyfish"
              width={750}
              height={750}
              className="jellyfish-hero h-auto w-[280px] object-contain sm:w-[400px] lg:w-[700px]"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* ─── SMALL JELLYFISH — Bottom Left Accent ─── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="pointer-events-none absolute bottom-16 left-6 z-[2] hidden lg:block"
        style={{ mixBlendMode: "screen" }}
      >
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/jellyfish-small.png"
            alt=""
            width={200}
            height={200}
            className="h-auto w-[160px] object-contain"
            style={{
              opacity: 0.75,
              filter: "drop-shadow(0 0 40px rgba(232,39,44,0.35)) drop-shadow(0 0 80px rgba(232,39,44,0.15))",
              maskImage:
                "radial-gradient(ellipse 95% 95% at center, black 45%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 95% 95% at center, black 45%, transparent 80%)",
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-[1200px]"
      >
        {/* Top row: Main content + Sidebar */}
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* ─── Left: Main Content ─── */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div variants={item}>
              <span className="tag-pill mb-8 inline-flex">
                <Zap size={12} className="text-accent" />
                Digital Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-heading mb-6 text-[2.5rem] leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-[4.25rem] lg:leading-[1.05]"
            >
              Your Digital{" "}
              <span className="gradient-text">Growth Partner</span>
              <br className="hidden sm:block" />
              <span className="text-text-secondary font-bold"> On Demand</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={item}
              className="mb-10 max-w-[520px] text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              From discovery to deployment, we design & develop stunning
              websites that don&apos;t just look beautiful — they drive real
              business growth for your brand.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Magnetic>
                <button
                  onClick={() =>
                    document
                      .querySelector("#services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-secondary"
                  data-cursor-pointer
                >
                  Explore Services
                </button>
              </Magnetic>
              <Magnetic>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Devphicx!%20I%20need%20a%20website%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  data-cursor-pointer
                >
                  <Phone size={16} />
                  Book a Free Call
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* ─── Right: Sidebar Bento Cards ─── */}
          <div className="hidden flex-col gap-4 lg:flex">
            {/* Projects delivered card */}
            <motion.div
              variants={item}
              className="bento-card flex flex-col items-center justify-center text-center"
              style={{ minHeight: "140px" }}
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                <Trophy size={20} className="text-accent" />
              </div>
              <div className="font-heading text-4xl font-extrabold text-accent">
                50+
              </div>
              <div className="mt-1 text-sm text-text-muted">
                Projects successfully delivered
              </div>
            </motion.div>

            {/* Trusted clients card */}
            <motion.div
              variants={item}
              className="bento-card flex flex-col items-center justify-center text-center"
              style={{ minHeight: "140px" }}
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-warm/10">
                <Users size={20} className="text-accent-warm" />
              </div>
              <div className="font-heading text-4xl font-extrabold text-text-primary">
                30+
              </div>
              <div className="mt-1 text-sm text-text-muted">
                Trusted Partners
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="bento-card">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-muted">
                Social Presence
              </div>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-text-muted transition-all duration-300 hover:bg-accent/10 hover:text-accent"
                      data-cursor-pointer
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── Bottom: Stats Strip ─── */}
        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-16"
        >
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bento-card flex items-center gap-4 px-5 py-4"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  idx % 2 === 0
                    ? "bg-accent/10 text-accent"
                    : "bg-accent-warm/10 text-accent-warm"
                }`}
              >
                {idx === 0 && <Zap size={18} />}
                {idx === 1 && <Users size={18} />}
                {idx === 2 && <Star size={18} />}
                {idx === 3 && <Trophy size={18} />}
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-text-primary sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-text-muted">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <div className="h-8 w-[1px] bg-gradient-to-b from-accent/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
