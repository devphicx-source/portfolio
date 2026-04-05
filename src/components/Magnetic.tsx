"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

interface MagneticProps {
  children: ReactNode;
}

export default function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current?.getBoundingClientRect() || {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
    };

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
