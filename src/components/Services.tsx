"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/data/services";
import { Globe, ShoppingBag, Palette, TrendingUp, Check } from "lucide-react";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  globe: Globe,
  "shopping-bag": ShoppingBag,
  palette: Palette,
  "trending-up": TrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative z-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              What We Do
            </h2>
            <h3 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">
              Solutions That{" "}
              <span className="gradient-text">Grow Your Business</span>
            </h3>
            <p className="text-text-secondary">
              We don&apos;t just build websites — we build revenue machines.
              Every project is designed to solve a real business problem.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <ScrollReveal key={service.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card group h-full p-8 transition-all duration-300"
                  data-cursor-hover
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h4 className="font-heading mb-2 text-xl font-bold text-text-primary">
                    {service.title}
                  </h4>
                  <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <Check
                          size={14}
                          className="shrink-0 text-green-400"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
