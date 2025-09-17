"use client";

import { useEffect, useState } from "react";
import Particle from "./particle";

type ParticleType = {
  id: string;
};

function FallingParticlesAnimation() {
  const [particles, setParticles] = useState<ParticleType[]>([]);

  const updateParticles = () => {
    const id = crypto.randomUUID(); // create a unique id
    setParticles((prev) => [...prev, { id }]);

    // Remove this particle after 3 seconds
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 10000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateParticles();
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <Particle key={particle.id} />
      ))}
    </>
  );
}

export default FallingParticlesAnimation;
