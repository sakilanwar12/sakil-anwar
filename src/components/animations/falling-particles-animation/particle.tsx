"use client";

import { useEffect, useState } from "react";

const Particle = () => {
  const [startX, setStartX] = useState(0);
  const [opacity, setOpacity] = useState(0.6);
  const [size, setSize] = useState(3);
  const [fallDuration, setFallDuration] = useState(0);

  useEffect(() => {
    setStartX(Math.random() * 100);
    setOpacity(0.3 + Math.random() * 0.7);
    setSize(2 + Math.random() * 4);
    setFallDuration(10 + Math.random() * 5);
  }, []);

  return (
    <div
      className="absolute -top-1 size-1 rounded-full bg-gray-400 drop-shadow   animate-fall"
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
