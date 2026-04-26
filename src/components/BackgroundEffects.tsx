"use client";

import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // On mobile: use simple static gradients instead of animated blurred orbs
  // This eliminates the heavy GPU repaints that cause jank
  if (isMobile) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-1/4 -left-1/4 h-[400px] w-[400px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, rgba(232,39,44,0.25) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -right-1/4 top-1/3 h-[300px] w-[300px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,53,0.2) 0%, transparent 65%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Primary crimson orb — use CSS animation instead of framer-motion for GPU compositing */}
      <div
        className="absolute -top-1/4 -left-1/4 h-[700px] w-[700px] rounded-full opacity-[0.08] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(232,39,44,0.35) 0%, transparent 65%)",
          filter: "blur(100px)",
          animation: "floatOrb1 25s linear infinite",
        }}
      />
      {/* Warm orange orb */}
      <div
        className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full opacity-[0.06] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 65%)",
          filter: "blur(90px)",
          animation: "floatOrb2 30s linear infinite",
        }}
      />
      {/* Bottom red bleed */}
      <div
        className="absolute -bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full opacity-[0.05] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(232,39,44,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "floatOrb3 35s linear infinite",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
