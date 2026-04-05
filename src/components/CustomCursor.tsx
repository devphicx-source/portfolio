"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cleanupRef = useRef<(() => void)[]>([]);

  // Smooth springs for the trailing effect
  const ringSize = useMotionValue(28);
  const ringX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20, mass: 0.1 });
  const ringY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20, mass: 0.1 });

  const dotX = useSpring(useMotionValue(0), { stiffness: 800, damping: 40, mass: 0.2 });
  const dotY = useSpring(useMotionValue(0), { stiffness: 800, damping: 40, mass: 0.2 });

  const attachListeners = useCallback(() => {
    // Clean up previous listeners
    cleanupRef.current.forEach((fn) => fn());
    cleanupRef.current = [];

    const pointers = document.querySelectorAll("a, button, [data-cursor-pointer]");
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, input, textarea");

    pointers.forEach((el) => {
      const enter = () => setCursorType("pointer");
      const leave = () => setCursorType("default");
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      cleanupRef.current.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    });

    textElements.forEach((el) => {
      const enter = () => setCursorType("text");
      const leave = () => setCursorType("default");
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      cleanupRef.current.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    });
  }, []);

  useEffect(() => {
    const checkTouch = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      if (!isTouch) {
        document.body.classList.add("custom-cursor-active");
      }
    };
    checkTouch();

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
      cleanupRef.current.forEach((fn) => fn());
      cleanupRef.current = [];
      document.body.classList.remove("custom-cursor-active");
    };
  }, [attachListeners]);

  useEffect(() => {
    // Offset for centering
    const dotOffset = 4;
    const ringOffset = cursorType === "pointer" ? 24 : 14;

    dotX.set(x - dotOffset);
    dotY.set(y - dotOffset);
    
    ringX.set(x - (isClicking ? 10 : ringOffset));
    ringY.set(y - (isClicking ? 10 : ringOffset));
    ringSize.set(isClicking ? 20 : (cursorType === "pointer" ? 48 : 28));
  }, [x, y, cursorType, isClicking, dotX, dotY, ringX, ringY, ringSize]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-[1px]"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-accent-light mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicking ? 0.7 : cursorType === "pointer" ? 1.5 : 1,
        }}
      />

      {/* Glow */}
      <motion.div
        className="fixed top-0 left-0 h-40 w-40 rounded-full"
        style={{
          x: x - 80,
          y: y - 80,
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          opacity: isVisible ? 1 : 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
