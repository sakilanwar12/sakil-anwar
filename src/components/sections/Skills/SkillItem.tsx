"use client";

import { TSkill } from "./data";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import { useEffect, useRef, useState } from "react";

function SkillItem({ skill }: { skill: TSkill }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useTiltEffect(8);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={itemRef} className="skill-card">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(0,212,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]"
      >
        {/* Corner glow on hover */}
        <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-[rgba(0,212,255,0.1)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Icon + Title */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(0,212,255,0.15)] to-[rgba(123,47,247,0.15)] text-[#00d4ff]">
            {skill.icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
        </div>

        {/* Skill bars */}
        <div className="space-y-4">
          {skill.items.map((item, idx) => (
            <div key={idx}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm text-[#b0b0cc]">{item.name}</span>
                <span className="text-xs font-medium text-[#00d4ff]">
                  {item.level}%
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                <div
                  className="progress-glow h-full rounded-full bg-gradient-to-r from-[#00d4ff] via-[#7b2ff7] to-[#ff2d7c] transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${item.level}%` : "0%",
                    transitionDelay: `${idx * 150}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillItem;
