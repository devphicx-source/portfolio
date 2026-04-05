"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-[800px]">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              About Me
            </h2>
            <h3 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
              Passionate about building{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                exceptional
              </span>{" "}
              digital products
            </h3>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-[800px] gap-8 sm:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
              <p className="leading-relaxed text-gray-400">
                I&apos;m a developer who loves turning complex problems into
                simple, beautiful, and intuitive solutions. With several years
                of experience in full-stack development, I specialize in React,
                Next.js, and modern web technologies.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
              <p className="leading-relaxed text-gray-400">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge through tech blogs. I believe in clean code,
                continuous learning, and creating impact through technology.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <ScrollReveal delay={0.3}>
          <div className="mx-auto mt-12 grid max-w-[800px] grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "50+", label: "Projects Built" },
              { value: "30+", label: "Happy Clients" },
              { value: "10+", label: "Technologies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-cyan-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
