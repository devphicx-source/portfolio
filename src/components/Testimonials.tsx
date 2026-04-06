"use client";

import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative z-10">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Divider glow */}
        <div className="divider-glow mx-auto mb-16 max-w-[200px]" />

        <ScrollReveal>
          <div className="mx-auto max-w-[600px] text-center">
            <span className="tag-pill mb-4 inline-flex">Client Love</span>
            <h3 className="font-heading mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Don&apos;t Take Our Word —{" "}
              <span className="gradient-text">Hear Theirs</span>
            </h3>
            <p className="text-text-secondary">
              Real feedback from real clients who trusted us with their business.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured testimonial */}
        <div className="relative mx-auto mt-16 max-w-[800px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="glass-card relative overflow-hidden p-8 sm:p-10"
            >
              {/* Decorative corner glow */}
              <div
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,39,44,0.3) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              <Quote size={40} className="mb-6 text-accent/25" />
              <p className="mb-8 text-lg leading-relaxed text-text-secondary sm:text-xl">
                &ldquo;{testimonials[active].content}&rdquo;
              </p>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  {testimonials[active].image && (
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent/20 shadow-xl">
                      <Image
                        src={testimonials[active].image || ""}
                        alt={testimonials[active].name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-heading text-base font-bold text-text-primary">
                      {testimonials[active].name}
                    </div>
                    <div className="text-sm text-text-muted">
                      {testimonials[active].role},{" "}
                      {testimonials[active].company}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[active].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-accent-warm text-accent-warm"
                      />
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar for auto-rotation */}
          <div className="mt-6 flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className="group relative h-1 flex-1 overflow-hidden rounded-full bg-bg-card"
                data-cursor-pointer
              >
                {idx === active && (
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    key={`bar-${active}`}
                  />
                )}
                {idx < active && (
                  <div className="absolute inset-0 rounded-full bg-accent/40" />
                )}
              </button>
            ))}
          </div>

          {/* Navigation pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                onClick={() => setActive(idx)}
                className={`flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all duration-300 ${
                  idx === active
                    ? "bg-accent/15 text-accent-light border border-accent/30 shadow-[0_0_15px_rgba(232,39,44,0.15)]"
                    : "bg-bg-card text-text-muted hover:text-text-secondary border border-transparent"
                }`}
                data-cursor-hover
              >
                {t.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
