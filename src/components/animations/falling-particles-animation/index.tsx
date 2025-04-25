"use client";

import { useEffect, useState, useRef } from "react";
import Particle from "./particle";

const FallingParticlesAnimation = () => {
  const [particles, setParticles] = useState<number[]>([]);
  const idRef = useRef(0); // unique ID generator

  useEffect(() => {
    const interval = setInterval(() => {
      const id = idRef.current++;

      setParticles((prev) => [...prev, id]);

      // Remove particle after 5 seconds
      setTimeout(() => {
        setParticles((prev) => prev.filter((pid) => pid !== id));
      }, 5000);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {particles.map((id) => (
        <Particle key={id} />
      ))}
    </div>
  );
};

export default FallingParticlesAnimation;
