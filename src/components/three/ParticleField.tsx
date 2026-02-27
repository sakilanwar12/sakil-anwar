"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField({ count = 2000 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color("#00d4ff"),
      new THREE.Color("#7b2ff7"),
      new THREE.Color("#ff2d7c"),
      new THREE.Color("#00ffd5"),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const color =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    return geometry;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();

    mesh.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    mesh.current.rotation.y = Math.sin(time * 0.15) * 0.1;

    // Subtle mouse follow
    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * 0.3 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * 0.3 - mouseRef.current.y) * 0.02;

    mesh.current.rotation.x += mouseRef.current.y * 0.1;
    mesh.current.rotation.y += mouseRef.current.x * 0.1;

    // Animate particle positions
    const posArray = mesh.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3 + 1] += Math.sin(time + i * 0.1) * 0.001;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh} geometry={particleGeometry}>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
