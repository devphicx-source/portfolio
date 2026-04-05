"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ExternalLink, TrendingUp } from "lucide-react";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section-padding relative z-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Our Work
            </h2>
            <h3 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">
              Real Projects,{" "}
              <span className="gradient-text">Real Results</span>
            </h3>
            <p className="text-text-secondary">
              Every project below solved a real business problem and delivered
              measurable outcomes. Click to see the details.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured projects — larger cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {featured.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-card group overflow-hidden transition-all duration-300"
                data-cursor-hover
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />

                  {/* Industry badge */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-bg-primary/80 px-3 py-1 text-xs font-medium text-accent-light backdrop-blur-sm">
                      {project.industry}
                    </span>
                  </div>

                  {/* Live link */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent-light opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-accent/40 group-hover:opacity-100"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-1 text-xs font-medium text-text-muted">
                    {project.client}
                  </div>
                  <h4 className="font-heading mb-2 text-lg font-bold text-text-primary">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  {/* Metrics strip */}
                  <div className="flex gap-4 border-t border-border pt-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="flex items-center justify-center gap-1 text-sm font-bold text-green-400">
                          <TrendingUp size={12} />
                          {metric.value}
                        </div>
                        <div className="text-xs text-text-muted">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other projects — compact grid */}
        {others.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, idx) => (
              <ScrollReveal key={project.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card group overflow-hidden transition-all duration-300"
                  data-cursor-hover
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-bg-primary/80 px-2.5 py-0.5 text-xs font-medium text-accent-light backdrop-blur-sm">
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="mb-1 text-xs font-medium text-text-muted">
                      {project.client}
                    </div>
                    <h4 className="font-heading mb-2 text-base font-bold text-text-primary">
                      {project.title}
                    </h4>
                    <p className="mb-3 text-sm leading-relaxed text-text-secondary line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex gap-3 border-t border-border pt-3">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label}>
                          <span className="text-xs font-bold text-green-400">
                            {metric.value}
                          </span>
                          <span className="ml-1 text-xs text-text-muted">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
