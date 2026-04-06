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
        {/* Divider glow */}
        <div className="divider-glow mx-auto mb-16 max-w-[200px]" />

        <ScrollReveal>
          <div className="mx-auto max-w-[600px] text-center">
            <span className="tag-pill mb-4 inline-flex">How We Work</span>
            <h3 className="font-heading mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
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
          <div className="absolute top-0 bottom-0 left-[29px] hidden w-px sm:block"
            style={{
              background: "linear-gradient(to bottom, rgba(232,39,44,0.3) 0%, rgba(255,107,53,0.2) 60%, transparent 100%)",
            }}
          />

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
                      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-bg-card border border-border transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:shadow-[0_0_25px_rgba(232,39,44,0.12)]">
                        <Icon
                          size={24}
                          className="text-text-muted transition-colors group-hover:text-accent"
                        />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
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
