"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientOnly from "@/components/ClientOnly";
import CustomCursor from "@/components/CustomCursor";
import BackgroundEffects from "@/components/BackgroundEffects";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <ClientOnly>
        <CustomCursor />
        <BackgroundEffects />
        <FloatingWhatsApp />
      </ClientOnly>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
