"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";
import FloatingGeometry from "./FloatingGeometry";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Ambient light */}
          <ambientLight intensity={0.2} />

          {/* Colored point lights for neon glow */}
          <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={0.5} />
          <pointLight position={[-5, -5, 3]} color="#7b2ff7" intensity={0.3} />
          <pointLight position={[0, 3, -5]} color="#ff2d7c" intensity={0.2} />

          {/* Floating geometry */}
          <FloatingGeometry />

          {/* Particle field */}
          <ParticleField count={1500} />
        </Suspense>
      </Canvas>
    </div>
  );
}
