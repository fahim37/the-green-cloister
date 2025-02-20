"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  gradientSize = 300,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#4ADE80", // Light green
  gradientTo = "#16A34A", // Dark green
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={cardRef}
      className={cn("group relative flex rounded-lg", className)}
    >
      {/* Border gradient container */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientFrom},
              ${gradientTo},
              transparent 80%
            )
          `,
        }}
      />

      {/* Background container */}
      <div className="absolute inset-[1px] rounded-lg bg-background z-10" />

      {/* Content container */}
      <div className="relative z-20 w-full">{children}</div>

      {/* Hover gradient effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 80%
            )
          `,
          opacity: gradientOpacity,
        }}
      />
    </div>
  );
}
