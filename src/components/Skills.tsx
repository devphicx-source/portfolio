"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
} as const;

const tagVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
} as const;

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Skills & Expertise
          </h2>
          <h3 className="mb-16 text-center text-3xl font-bold text-white sm:text-4xl">
            Technologies I work with
          </h3>
        </ScrollReveal>

        <div className="mx-auto grid max-w-[900px] gap-10 sm:grid-cols-3">
          {skills.map((group, groupIdx) => (
            <ScrollReveal key={group.category} delay={groupIdx * 0.1}>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
                <h4 className="mb-4 text-lg font-semibold text-white">
                  {group.category}
                </h4>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={tagVariant}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(0,240,255,0.3)",
                      }}
                      className="cursor-default rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-400 transition-colors hover:border-cyan-400/30"
                      data-cursor-hover
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
