"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, your customers, and your goals. No jargon — just a real conversation about what you need.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "We create stunning designs that guide your visitors to take action. You get to review and approve every screen before we write a single line of code.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Develop",
    description:
      "We build your website with modern technology — fast, secure, and mobile-friendly. Regular updates keep you in the loop throughout.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Grow",
    description:
      "We don't disappear after launch. We help you go live, set up analytics, and provide ongoing support to keep your website performing at its best.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding relative z-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              How We Work
            </h2>
            <h3 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">
              A Simple,{" "}
              <span className="gradient-text">Proven Process</span>
            </h3>
            <p className="text-text-secondary">
              No surprises, no confusion. Here&apos;s exactly how we take your
              project from idea to launch.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-[29px] hidden w-px bg-gradient-to-b from-accent/30 via-accent-purple/30 to-transparent sm:block" />

          <div className="grid gap-8 sm:gap-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={idx * 0.15}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="group flex gap-6"
                  >
                    {/* Step icon */}
                    <div className="relative shrink-0">
                      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-bg-card border border-border transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
                        <Icon
                          size={24}
                          className="text-text-muted transition-colors group-hover:text-accent"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <div className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">
                        Step {step.number}
                      </div>
                      <h4 className="font-heading mb-2 text-xl font-bold text-text-primary">
                        {step.title}
                      </h4>
                      <p className="max-w-[500px] text-sm leading-relaxed text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
