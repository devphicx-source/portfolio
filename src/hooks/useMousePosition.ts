"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const latestPos = useRef<MousePosition>({ x: 0, y: 0 });

  const updatePosition = useCallback(() => {
    setPosition({ ...latestPos.current });
    rafRef.current = 0;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      latestPos.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updatePosition]);

  return position;
}
