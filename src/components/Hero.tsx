"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

import Image from "next/image";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden px-6 pt-40 pb-20">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow */}
        <div
          className="absolute top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        {/* Secondary glow */}
        <div
          className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-[1000px] text-center"
      >
        {/* Trust badge */}
        <motion.div variants={item}>
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-accent-light">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Trusted by 30+ businesses
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={item}
          className="font-heading mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-7xl"
        >
          We Build Websites That{" "}
          <span className="gradient-text">Bring You Customers</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-[600px] text-lg leading-relaxed text-text-secondary sm:text-xl"
        >
          {siteConfig.shortName} is a full-stack digital agency. We design &
          develop stunning websites that don&apos;t just look beautiful — they
          drive real business growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Magnetic>
            <button
              onClick={() =>
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
              data-cursor-pointer
            >
              See Our Work
              <ArrowRight size={16} />
            </button>
          </Magnetic>
          <Magnetic>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Devphicx!%20I%20need%20a%20website%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              data-cursor-pointer
            >
              <Phone size={16} />
              Book a Free Call
            </a>
          </Magnetic>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          variants={item}
          className="relative mx-auto mt-16 hidden w-fit overflow-hidden rounded-2xl border border-border/50 shadow-2xl transition-transform duration-500 hover:scale-[1.02] sm:block"
        >
          <Image
            src="/devphicx banner.png"
            alt="DevPhicx Digital Agency Banner"
            width={1200}
            height={600}
            className="h-auto w-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent" />
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={item}
          className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="font-heading text-2xl font-bold text-text-primary sm:text-3xl"
              >
                {stat.value}
              </motion.div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-text-muted">
                {stat.label}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <div className="h-8 w-[1px] bg-gradient-to-b from-text-muted/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
