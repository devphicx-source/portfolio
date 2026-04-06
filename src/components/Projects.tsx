"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ExternalLink, TrendingUp, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="work" className="section-padding relative z-10">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Divider glow */}
        <div className="divider-glow mx-auto mb-16 max-w-[200px]" />

        <ScrollReveal>
          <div className="mx-auto max-w-[600px] text-center">
            <span className="tag-pill mb-4 inline-flex">Our Work</span>
            <h3 className="font-heading mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Real Projects,{" "}
              <span className="gradient-text">Real Results</span>
            </h3>
            <p className="text-text-secondary">
              Every project below solved a real business problem and delivered
              measurable outcomes. Click to see the details.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento project grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            // First 2 projects span wider on large screens
            const isLarge = idx < 2;
            return (
              <ScrollReveal
                key={project.title}
                delay={idx * 0.1}
                className={isLarge ? "lg:col-span-1 sm:col-span-1" : ""}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="glass-card group h-full overflow-hidden transition-all duration-300"
                  data-cursor-hover
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />

                    {/* Red accent line on hover */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-accent-warm transition-all duration-500 group-hover:w-full" />

                    {/* Industry badge */}
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-bg-primary/80 px-3 py-1 text-xs font-medium text-accent-light backdrop-blur-sm border border-accent/10">
                        {project.industry}
                      </span>
                    </div>

                    {/* Live link */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent-light opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-accent/40 group-hover:opacity-100"
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
                    <p className="mb-4 text-sm leading-relaxed text-text-secondary line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metrics strip */}
                    <div className="flex gap-4 border-t border-border pt-4">
                      {project.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="flex items-center justify-center gap-1 text-sm font-bold text-accent">
                            <TrendingUp size={12} />
                            {metric.value}
                          </div>
                          <div className="text-xs text-text-muted">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View project link */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100"
                      >
                        View Project <ArrowUpRight size={14} />
                      </a>
                    )}
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
