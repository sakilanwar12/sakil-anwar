"use client";

import { useMemo } from "react";

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
}

export default function GlowingStars({ count = 80 }: { count?: number }) {
  const stars: Star[] = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
      opacity: Math.random() * 0.6 + 0.1,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor:
              star.size > 2.5
                ? "rgba(0, 212, 255, 0.8)"
                : star.size > 1.8
                  ? "rgba(123, 47, 247, 0.6)"
                  : "rgba(255, 255, 255, 0.5)",
            opacity: star.opacity,
            animation: `twinkle ${star.duration} ease-in-out ${star.delay} infinite`,
            boxShadow:
              star.size > 2
                ? `0 0 ${star.size * 3}px rgba(0, 212, 255, 0.3)`
                : "none",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}
