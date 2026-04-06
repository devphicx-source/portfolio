"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/data/services";
import { Globe, ShoppingBag, Palette, TrendingUp, Check, ArrowUpRight } from "lucide-react";

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
        {/* Divider glow */}
        <div className="divider-glow mx-auto mb-16 max-w-[200px]" />

        <ScrollReveal>
          <div className="mx-auto max-w-[600px] text-center">
            <span className="tag-pill mb-4 inline-flex">What We Do</span>
            <h3 className="font-heading mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Solutions That{" "}
              <span className="gradient-text">Grow Your Business</span>
            </h3>
            <p className="text-text-secondary">
              We don&apos;t just build websites — we build revenue machines.
              Every project is designed to solve a real business problem.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <ScrollReveal key={service.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card group h-full p-8 transition-all duration-300"
                  data-cursor-hover
                >
                  {/* Icon + title row */}
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(232,39,44,0.25)]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl font-bold text-text-primary">
                        {service.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 pl-16">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-text-muted"
                      >
                        <Check
                          size={14}
                          className="shrink-0 text-accent/70"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover arrow */}
                  <div className="mt-6 flex pl-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-accent">
                      Learn more <ArrowUpRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
