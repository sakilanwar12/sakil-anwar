"use client";

import { motion } from "motion/react";
import { Atom, Binary, Blocks, Cpu, Globe, Layers, Zap } from "lucide-react";

const technologies = [
  { name: "React", icon: Atom, level: "Expert" },
  { name: "Next.js", icon: Zap, level: "Professional" },
  { name: "TypeScript", icon: Binary, level: "Expert" },
  { name: "Node.js", icon: Cpu, level: "Expert" },
  { name: "GraphQL", icon: Blocks, level: "Advanced" },
  { name: "Tailwind", icon: Layers, level: "Expert" },
];

function TechStack() {
  return (
    <section className="bg-[#000000] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="mb-4 block font-mono text-xs tracking-widest text-cyan-400 uppercase">
            Engineered with
          </span>
          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            Core Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-4xl border border-white/5 bg-white/5 md:grid-cols-3 lg:grid-cols-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              whileHover={{ backgroundColor: "rgba(6, 182, 212, 0.05)" }}
              className="group relative flex flex-col items-center justify-center gap-6 border border-white/5 bg-black p-12 transition-colors"
            >
              <div className="absolute inset-0 bg-radial from-cyan-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <tech.icon className="text-default-400 size-16 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-400" />
              <div className="text-center">
                <h3 className="mb-1 text-lg font-bold text-white">
                  {tech.name}
                </h3>
                <span className="font-mono text-[10px] tracking-widest text-cyan-400/50 uppercase">
                  {tech.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
