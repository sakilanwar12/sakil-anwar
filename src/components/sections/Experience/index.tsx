"use client";

import Image from "next/image";
import { experiences } from "./constant";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="bg-background px-6 py-44">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-32 font-serif text-6xl font-bold md:text-9xl">
          Experience
        </h2>

        <div className="relative" ref={containerRef}>
          {/* Drawing Vertical Line */}
          <motion.div
            style={{ scaleY }}
            className="bg-primary absolute top-0 left-4 h-full w-px origin-top opacity-30 md:left-0"
          />

          {/* Static Background Line */}
          <div className="absolute top-0 left-4 h-full w-px bg-white/5 md:left-0" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative mb-32 pl-16 last:mb-0 md:pl-24"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                className="bg-primary absolute top-6 left-[10px] z-10 size-4 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] md:left-[-8px]"
              />

              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
                {/* Logo Section */}
                <div className="hover:border-primary/30 relative size-24 shrink-0 overflow-hidden rounded-2xl border border-white/5 bg-white/2 p-4 transition-all">
                  <div className="bg-primary/10 absolute inset-0" />
                  <div className="relative flex h-full w-full items-center justify-center font-bold text-white/20">
                    LOGO
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                    <h3 className="text-default-100 font-serif text-4xl font-bold md:text-5xl">
                      {exp.role}
                    </h3>
                    <span className="text-primary mt-4 inline-block text-xl font-medium tracking-wider uppercase lg:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className="text-default-400 mt-2 mb-8 text-2xl font-medium">
                    {exp.company}
                  </h4>
                  <p className="text-default-200 max-w-4xl text-xl leading-relaxed md:text-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
