"use client";

import { experiences } from "./constant";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section
      id="experience"
      className="overflow-hidden bg-[#000000] px-6 py-64"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-44">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8 font-mono text-xl tracking-[0.3em] text-cyan-400 uppercase"
          >
            Track Record
          </motion.h2>
          <h2 className="font-serif text-6xl font-bold md:text-9xl">
            Professional <br /> Experience
          </h2>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Drawing Vertical Line (Neon Cyan) */}
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 left-4 h-full w-[2px] origin-top bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] md:left-0"
          />

          {/* Static Background Line */}
          <div className="absolute top-0 left-4 h-full w-[2px] bg-white/5 md:left-0" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative mb-44 last:mb-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline Node (Neon) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className={cn(
                    "absolute top-6 left-[10px] z-10 size-4 rounded-full border-2 border-cyan-400 bg-black transition-all duration-500 md:left-[-7px]",
                    hoveredIndex === index
                      ? "scale-150 bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                      : "shadow-[0_0_10px_rgba(6,182,212,0.3)]",
                  )}
                />

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col">
                      <span className="mb-4 inline-block font-mono text-xl tracking-wider text-cyan-400 uppercase">
                        {exp.duration}
                      </span>
                      <h3 className="text-default-100 font-serif text-4xl font-bold transition-colors group-hover:text-cyan-400 md:text-6xl">
                        {exp.role}
                      </h3>
                      <h4 className="text-default-400 mt-4 text-2xl font-medium">
                        {exp.company}
                      </h4>
                    </div>
                    <p className="text-default-200 max-w-xl text-xl leading-relaxed md:text-2xl">
                      {exp.description}
                    </p>
                  </div>

                  {/* Hover Side Panel (Desktop only for better UX) */}
                  <div className="relative hidden lg:block">
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, x: 40, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 40, scale: 0.95 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute inset-0 z-20 flex flex-col justify-between rounded-4xl border border-cyan-500/10 bg-white/5 p-10 backdrop-blur-xl"
                        >
                          <div>
                            <h5 className="mb-6 font-mono text-xs tracking-widest text-cyan-400 uppercase">
                              Key Achievements
                            </h5>
                            <ul className="space-y-4">
                              {exp.achievements.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-default-100 flex items-start gap-3 text-lg leading-relaxed"
                                >
                                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full text-cyan-500" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-8 border-t border-white/5 pt-8">
                            <h5 className="text-default-400 mb-4 font-mono text-xs tracking-widest uppercase">
                              Stack
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.techStack.map((tech) => (
                                <Badge
                                  key={tech}
                                  className="text-default-300 border-white/10 bg-white/5 px-3 py-1 font-mono text-xs transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Placeholder / visual texture when not hovered */}
                    <div className="absolute inset-0 flex items-center justify-center rounded-4xl border border-dashed border-white/5 opacity-20 transition-opacity group-hover:opacity-0">
                      <span className="rotate-90 font-mono text-xs tracking-[0.5em] uppercase">
                        Hover Details
                      </span>
                    </div>
                  </div>

                  {/* Mobile Details (always visible) */}
                  <div className="flex flex-col gap-6 border-t border-white/5 pt-6 lg:hidden">
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          className="text-default-300 border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
