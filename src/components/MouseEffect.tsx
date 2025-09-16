"use client";

import { useMouseEffectContext } from "@/context/MouseEffectContext";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  life: number;
}

const MouseEffect: React.FC = () => {
  const { settings } = useMouseEffectContext();
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const particleIdRef = useRef<number>(0);

  const getRandomColor = (): string => {
    if (settings.colors && settings.colors.length > 0) {
      return settings.colors[
        Math.floor(Math.random() * settings.colors.length)
      ];
    }
    return `hsl(${Math.random() * 360}, 70%, 60%)`;
  };

  useEffect(() => {
    if (!settings.enabled) return;

    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeoutId);

      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        color: getRandomColor(),
        size: Math.random() * 6 + 4,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 1,
      };

      setParticles((prev) => [
        ...prev.slice(-settings.particleCount),
        newParticle,
      ]);
      timeoutId = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [settings.enabled, settings.particleCount, settings.colors]);

  useEffect(() => {
    if (!settings.enabled) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map(
            (particle: Particle): Particle => ({
              ...particle,
              x: particle.x + particle.vx,
              y: particle.y + particle.vy,
              life: particle.life - 0.02,
              vy: particle.vy + 0.1,
            })
          )
          .filter((particle: Particle) => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [settings.enabled]);

  if (!settings.enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: isMoving ? "scale(1.5)" : "scale(1)",
        }}
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-default-50 to-primary bg-primary blur-lg border-primary"></div>
      </div>

      <div
        className={cn("fixed w-1 h-1 rounded-full pointer-events-none z-50", {
          "bg-primary": isMoving,
        })}
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      ></div>
      {particles.map((particle: Particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-45 rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default MouseEffect;
