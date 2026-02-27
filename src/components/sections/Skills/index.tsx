"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import SkillItem from "./SkillItem";
import { skills } from "./data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".skills-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // Card stagger animation
      gsap.fromTo(
        ".skill-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skill-cards-grid",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-4 py-32" id="expertise">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(123,47,247,0.03)] blur-[150px]" />
      </div>

      <div className="relative z-10 container">
        <div className="skills-heading">
          <SectionHeader
            title="Expertise"
            description="Technologies and tools I specialize in"
          />
        </div>

        <div className="skill-cards-grid mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
