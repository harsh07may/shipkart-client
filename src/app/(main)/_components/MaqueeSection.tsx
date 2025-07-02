"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function MarqueeSection() {
  const containerRef = useRef(null);

  // Track scroll within the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // start scrolling in, end scrolling out
  });

  // Transform scroll progress into horizontal x movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const smoothX = useSpring(x, { damping: 20, stiffness: 100 });

  return (
    <div
      ref={containerRef}
      className="font-rubik-mono relative overflow-hidden bg-[#FF9F9F] py-4"
    >
      <motion.div
        style={{ x: smoothX }}
        className="flex text-lg tracking-widest whitespace-nowrap text-white uppercase"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="mx-5">
            BE YOUR BEST &bull;
          </span>
        ))}
      </motion.div>
    </div>
  );
}
