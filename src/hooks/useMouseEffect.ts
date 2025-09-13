
import { useState, useEffect, useRef } from 'react';

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

interface UseMouseEffectOptions {
  particleCount?: number;
  colors?: string[];
  enabled?: boolean;
}

interface UseMouseEffectReturn {
  mousePosition: MousePosition;
  particles: Particle[];
  isMoving: boolean;
}

export const useMouseEffect = (options: UseMouseEffectOptions = {}): UseMouseEffectReturn => {
  const { particleCount = 15, colors, enabled = true } = options;
  
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const particleIdRef = useRef<number>(0);

  const getRandomColor = (): string => {
    if (colors && colors.length > 0) {
      return colors[Math.floor(Math.random() * colors.length)];
    }
    return `hsl(${Math.random() * 360}, 70%, 60%)`;
  };

  useEffect(() => {
    if (!enabled) return;

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
      
      setParticles(prev => [...prev.slice(-particleCount), newParticle]);
      timeoutId = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [enabled, particleCount, colors]);

  useEffect(() => {
    if (!enabled) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map((particle: Particle): Particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 0.02,
            vy: particle.vy + 0.1,
          }))
          .filter((particle: Particle) => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [enabled]);

  return { mousePosition, particles, isMoving };
};