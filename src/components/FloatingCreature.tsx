"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FloatingCreatureProps {
  src: string;
  alt?: string;
  /** Width in pixels (default 120) */
  size?: number;
  /** CSS opacity 0-1 (default 0.12 — very subtle) */
  opacity?: number;
  /** Position classes e.g. "top-10 right-10" */
  position?: string;
  /** Float animation duration in seconds (default 7) */
  floatDuration?: number;
  /** Float range in pixels (default 12) */
  floatRange?: number;
  /** Optional rotation range in degrees (default 0) */
  rotateRange?: number;
  /** Delay before appearing in seconds (default 0) */
  delay?: number;
}

export default function FloatingCreature({
  src,
  alt = "",
  size = 120,
  opacity = 0.12,
  position = "top-10 right-10",
  floatDuration = 7,
  floatRange = 12,
  rotateRange = 0,
  delay = 0,
}: FloatingCreatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, delay }}
      className={`pointer-events-none absolute z-[1] ${position}`}
      style={{ mixBlendMode: "screen" }}
    >
      <motion.div
        animate={{
          y: [-floatRange, floatRange, -floatRange],
          ...(rotateRange
            ? { rotate: [-rotateRange, rotateRange, -rotateRange] }
            : {}),
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-contain"
          style={{
            opacity,
            width: `${size}px`,
            height: "auto",
            filter: `drop-shadow(0 0 ${size * 0.2}px rgba(232,39,44,0.12))`,
            maskImage:
              "radial-gradient(ellipse 80% 80% at center, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at center, black 30%, transparent 70%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
