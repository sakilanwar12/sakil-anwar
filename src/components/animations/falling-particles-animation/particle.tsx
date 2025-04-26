"use client";

import { useMemo } from "react";

const Particle = () => {
  const { startX, opacity, size, fallDuration } = useMemo(() => {
    return {
      startX: Math.random() * 100,
      opacity: 0.3 + Math.random() * 0.7,
      size: 2 + Math.random() * 4,
      fallDuration: 10 + Math.random() * 5,
    };
  }, []);

  return (
    <div
      className="absolute -top-1 rounded-full bg-gray-400 drop-shadow animate-fall"
      style={{
        left: `${startX}%`,
        opacity,
        width: `${size}px`,
        height: `${size}px`,
        transition: "opacity 1s ease-out",
        animationDuration: `${fallDuration}s`,
      }}
    />
  );
};

export default Particle;
