"use client";

import { motion } from "motion/react";
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  Spline as Curve,
  Network,
  Binary,
  TestTube2,
  Search,
  Activity,
  Terminal,
  Torus,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

function SkillCard({
  title,
  description,
  className,
  children,
  delay = 0,
}: {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#080808] p-10 transition-all hover:border-[#3b82f6]/60 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]",
        className,
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        <h3 className="mb-3 font-serif text-3xl font-bold text-[#f0f0f0]">
          {title}
        </h3>
        <p className="mb-8 max-w-xs text-lg leading-relaxed text-[#888]">
          {description}
        </p>
        <div className="flex flex-1 items-center justify-center">
          {children}
        </div>
      </div>

      {/* Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(59,130,246,0.05),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-[#080808] pt-44 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-4 block font-mono text-xs tracking-[0.3em] text-[#3b82f6] uppercase"
          >
            Technical Prowess
          </motion.span>
          <h2 className="font-serif text-6xl font-bold text-[#f0f0f0] md:text-9xl">
            Skills & <br /> Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:grid-rows-3">
          <SkillCard
            title="Component Architecture"
            description="Scalable, reusable structures built with atomic design and compositional patterns."
            className="md:col-span-2 md:row-span-1"
            delay={0.1}
          >
            <div className="group/editor relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-2">
                <div className="flex gap-1.5">
                  <div className="size-2 rounded-full bg-red-500/50" />
                  <div className="size-2 rounded-full bg-amber-500/50" />
                  <div className="size-2 rounded-full bg-green-500/50" />
                </div>
                <span className="font-mono text-[10px] text-[#888]">
                  Structure.tsx
                </span>
              </div>
              <div className="p-6 font-mono text-xs leading-relaxed">
                <div className="flex gap-4">
                  <span className="text-[#888]/30">1</span>
                  <span className="text-[#3b82f6]">import</span>
                  <span className="text-[#f0f0f0]"> {"{ Atom }"} </span>
                  <span className="text-[#3b82f6]">from</span>
                  <span className="text-amber-500/80"> "@ui"</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#888]/30">2</span>
                  <span className="text-[#3b82f6]">export const</span>
                  <span className="text-purple-400"> Pattern</span>
                  <span className="text-[#3b82f6]"> = </span>
                  <span className="text-[#f0f0f0]">() =&gt; (</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#888]/30">3</span>
                  <span className="text-[#f0f0f0]"> &lt;</span>
                  <span className="text-[#3b82f6]">Composition</span>
                  <span className="text-[#f0f0f0]">&gt;</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#888]/30">4</span>
                  <span className="text-[#f0f0f0]"> &lt;</span>
                  <span className="text-[#3b82f6]">Logic</span>
                  <span className="text-[#f0f0f0]"> /&gt;</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#888]/30">5</span>
                  <span className="text-[#f0f0f0]"> &lt;/</span>
                  <span className="text-[#3b82f6]">Composition</span>
                  <span className="text-[#f0f0f0]">&gt;</span>
                </div>
              </div>

              <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute right-4 bottom-4"
              >
                <Code2 size={48} className="text-[#3b82f6]" />
              </motion.div>
            </div>
          </SkillCard>

          {/* Card 2: State Management (Small) */}
          <SkillCard
            title="State Management"
            description="Complex data flows with Redux, Zustand, and Context API."
            className="md:col-span-1"
            delay={0.2}
          >
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex size-20 items-center justify-center rounded-full border-2 border-dashed border-[#3b82f6]/20"
                >
                  <Cpu className="text-[#3b82f6]" size={32} />
                </motion.div>
                <div className="absolute inset-0 rounded-full bg-[#3b82f6]/10 blur-2xl" />
              </div>
              <div className="flex gap-2">
                <span className="rounded-full border border-[#3b82f6]/20 bg-[#3b82f6]/10 px-3 py-1 font-mono text-[10px] tracking-widest text-[#3b82f6] uppercase">
                  Redux
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-widest text-[#888] uppercase">
                  Zustand
                </span>
              </div>
            </div>
          </SkillCard>

          {/* Card 3: Testing Strategies (Small) */}
          <SkillCard
            title="Testing"
            description="Bulletproof code with unit, integration, and E2E tests."
            className="md:col-span-1"
            delay={0.3}
          >
            <div className="flex w-full max-w-[120px] flex-col gap-1.5">
              <div className="mx-auto flex h-6 w-[60%] items-center justify-center rounded-t border border-[#3b82f6]/30 bg-[#3b82f6]/20">
                <span className="text-[8px] font-bold text-[#3b82f6]">E2E</span>
              </div>
              <div className="mx-auto flex h-8 w-[80%] items-center justify-center border border-[#3b82f6]/20 bg-[#3b82f6]/10">
                <span className="text-[8px] font-bold text-[#3b82f6]">
                  INTEGRATION
                </span>
              </div>
              <div className="flex h-10 w-full items-center justify-center rounded-b border border-white/10 bg-white/5">
                <span className="text-[8px] font-bold text-[#888]">UNIT</span>
              </div>
            </div>
          </SkillCard>

          {/* Card 4: Performance (Small) */}
          <SkillCard
            title="Performance"
            description="Optimizing Core Web Vitals and ensuring 60fps interactions."
            className="md:col-span-1"
            delay={0.4}
          >
            <div className="flex w-full flex-col gap-4">
              <div className="flex h-12 items-end gap-1.5">
                {[30, 60, 45, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="flex-1 rounded-t-sm bg-[#3b82f6]/30"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between font-mono text-[10px]">
                <div className="flex items-center gap-1 text-[#3b82f6]">
                  <Zap size={10} />
                  <span>LCP: 1.1s</span>
                </div>
                <div className="font-bold text-green-500 italic">99</div>
              </div>
            </div>
          </SkillCard>

          {/* Card 5: Animation & Motion (Small) */}
          <SkillCard
            title="Animation"
            description="Fluid, performant experiences using Framer Motion and GSAP."
            className="md:col-span-1"
            delay={0.5}
          >
            <div className="relative flex size-24 items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full overflow-visible text-[#3b82f6]/20"
              >
                <path
                  d="M 10 90 C 20 10, 80 10, 90 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <motion.path
                  d="M 10 90 C 20 10, 80 10, 90 10"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  r="4"
                  fill="#3b82f6"
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  style={{
                    offsetPath: "path('M 10 90 C 20 10, 80 10, 90 10')",
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </div>
          </SkillCard>

          {/* Card 6: API Integration (Wide Bottom) */}
          <SkillCard
            title="API Integration"
            description="Seamless data synchronization with RESTful services and GraphQL."
            className="md:col-span-2"
            delay={0.6}
          >
            <div className="relative flex h-24 w-full items-center justify-around">
              <div className="flex flex-col items-center gap-2">
                <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Globe size={20} className="text-[#888]" />
                </div>
                <span className="font-mono text-[8px] text-[#888]">REST</span>
              </div>

              <div className="relative flex flex-1 items-center justify-center">
                <div className="h-px w-full bg-linear-to-r from-transparent via-[#3b82f6]/30 to-transparent" />
                <motion.div
                  animate={{ x: [-50, 50], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute size-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]"
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex size-10 items-center justify-center rounded-xl border border-[#3b82f6]/30 bg-[#3b82f6]/10">
                  <Network size={20} className="text-[#3b82f6]" />
                </div>
                <span className="font-mono text-[8px] text-[#3b82f6]">
                  GraphQL
                </span>
              </div>
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}

export default Skills;
