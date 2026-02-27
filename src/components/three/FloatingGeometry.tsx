"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingGeometry() {
  const meshRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    // Auto-rotation
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.rotation.z = time * 0.1;

    // Floating bob
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.3;

    // Mouse follow
    const pointer = state.pointer;
    meshRef.current.rotation.x += pointer.y * 0.2;
    meshRef.current.rotation.y += pointer.x * 0.2;

    // Pulsing scale
    const scale = 1 + Math.sin(time * 0.8) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={meshRef}>
      {/* Wireframe icosahedron */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial
          wireframe
          color="#00d4ff"
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Points on vertices */}
      <points ref={pointsRef}>
        <icosahedronGeometry args={[2, 2]} />
        <pointsMaterial
          size={0.04}
          color="#7b2ff7"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#7b2ff7"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
