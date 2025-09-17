"use client";

import { useMemo } from "react";

function Particle() {
  const { startX, startY, opacity, size, fallDuration } = useMemo(() => {
    return {
      startX: Math.random() * 100, // Random X position
      startY: Math.random() * 100, // Random top position
      opacity: 0.3 + Math.random() * 0.7,
      size: 2 + Math.random() * 4,
      fallDuration: 10 + Math.random() * 5,
    };
  }, []);

  return (
    <div
      className="fixed rounded-full bg-default-600 drop-shadow animate-fall"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        opacity,
        width: `${size}px`,
        height: `${size}px`,
        transition: "opacity 1s ease-out",
        animationDuration: `${fallDuration}s`,
      }}
    />
  );
}

export default Particle;
