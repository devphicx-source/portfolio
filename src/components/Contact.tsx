"use client";

import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/data/site-config";
import { Mail, Phone, ArrowUpRight, Send, MapPin } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Get In Touch
            </h2>
            <h3 className="font-heading mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to{" "}
              <span className="gradient-text">Grow Your Business?</span>
            </h3>
            <p className="text-lg leading-relaxed text-text-secondary">
              Tell us about your project and let&apos;s discuss how we can help
              you get more customers.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[900px] gap-8 lg:grid-cols-5">
          {/* Contact form */}
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                const whatsappMsg = `Hi Devphicx! I'm ${name} (${email}). ${message}`;
                window.open(
                  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`,
                  "_blank"
                );
              }}
              className="glass-card space-y-5 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-text-secondary"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-border bg-bg-primary/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-text-secondary"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-border bg-bg-primary/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="project-type"
                  className="mb-2 block text-sm font-medium text-text-secondary"
                >
                  Project Type
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  className="w-full rounded-lg border border-border bg-bg-primary/50 px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                >
                  <option value="">Select a service</option>
                  <option value="website">Website Development</option>
                  <option value="ecommerce">E-Commerce Store</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-text-secondary"
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Briefly describe your project, goals, and timeline..."
                  className="w-full resize-none rounded-lg border border-border bg-bg-primary/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                />
              </div>

              <Magnetic>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  data-cursor-pointer
                >
                  <Send size={16} />
                  Send via WhatsApp
                  <ArrowUpRight size={14} />
                </button>
              </Magnetic>
            </form>
          </ScrollReveal>

          {/* Contact info sidebar */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Email card */}
              <Magnetic>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="glass-card group flex items-start gap-4 p-6 transition-all duration-300"
                  data-cursor-pointer
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-text-muted">
                      Email us
                    </div>
                    <div className="text-sm font-semibold text-text-primary">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>
              </Magnetic>

              {/* Phone card */}
              <Magnetic>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="glass-card group flex items-start gap-4 p-6 transition-all duration-300"
                  data-cursor-pointer
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-text-muted">
                      Call us
                    </div>
                    <div className="text-sm font-semibold text-text-primary">
                      {siteConfig.phone}
                    </div>
                  </div>
                </a>
              </Magnetic>

              {/* Location card */}
              <div className="glass-card flex items-start gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="mb-1 text-sm font-medium text-text-muted">
                    Based in
                  </div>
                  <div className="text-sm font-semibold text-text-primary">
                    India — Working Globally
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-xl bg-accent/5 border border-accent/10 p-5 text-center">
                <div className="mb-1 text-2xl font-bold text-accent font-heading">
                  &lt; 2 Hours
                </div>
                <div className="text-xs text-text-muted">
                  Average response time
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
