"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(dot, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.1,
      });
    };

    const onMouseEnterInteractive = () => {
      gsap.to(cursor, {
        scale: 1.8,
        borderColor: "rgba(0, 212, 255, 0.6)",
        duration: 0.3,
      });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(cursor, {
        scale: 1,
        borderColor: "rgba(0, 212, 255, 0.3)",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover]",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[99999] hidden h-8 w-8 rounded-full border border-[rgba(0,212,255,0.3)] mix-blend-difference transition-none lg:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot pointer-events-none fixed top-0 left-0 z-[99999] hidden h-2 w-2 rounded-full bg-[#00d4ff] mix-blend-difference lg:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
