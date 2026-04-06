"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Primary crimson orb */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 h-[700px] w-[700px] rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,39,44,0.35) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 80, 40, 0],
          y: [0, 40, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Warm orange orb */}
      <motion.div
        className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -60, -30, 0],
          y: [0, 60, -20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Bottom red bleed */}
      <motion.div
        className="absolute -bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,39,44,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
