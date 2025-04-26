"use client";

import { useRef } from "react";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
