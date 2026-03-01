"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Layers,
  Cpu,
  Activity,
  TestTube2,
  Binary,
  Zap,
  Search,
  Code2,
} from "lucide-react";

function BentoCard({
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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-cyan-500/10 bg-white/2 p-10 backdrop-blur-md transition-all hover:border-cyan-500/30",
        className,
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        <h3 className="text-default-100 mb-4 font-serif text-3xl font-bold">
          {title}
        </h3>
        <p className="text-default-400 mb-10 text-lg leading-relaxed">
          {description}
        </p>
        <div className="flex-1">{children}</div>
      </div>
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(6,182,212,0.1),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:grid-rows-2">
      {/* Large Card: Component Architecture */}
      <BentoCard
        title="Component Architecture"
        description="Scalable, reusable structures built with atomic design principles and compositional patterns."
        className="md:col-span-2 md:row-span-2"
        delay={0.1}
      >
        <div className="relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-4 font-mono text-sm">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2 text-cyan-400">
            <Layers className="size-4" />
            <span>ProjectStructure.tsx</span>
          </div>
          <div className="space-y-3 opacity-80">
            <div className="flex items-center gap-3">
              <div className="size-2 rounded-full bg-cyan-500" />
              <div className="h-2 w-32 rounded-full bg-white/10" />
            </div>
            <div className="ml-5 flex items-center gap-3 border-l border-white/10 pl-4">
              <div className="size-2 rounded-full bg-white/30" />
              <div className="h-2 w-24 rounded-full bg-white/10" />
            </div>
            <div className="ml-5 flex items-center gap-3 border-l border-white/10 pl-4">
              <div className="size-2 rounded-full bg-white/30" />
              <div className="h-2 w-28 rounded-full bg-white/10" />
            </div>
            <div className="ml-10 flex items-center gap-3 border-l border-white/10 pl-4">
              <div className="size-2 rounded-full bg-cyan-500/50" />
              <div className="h-2 w-20 rounded-full bg-white/10" />
            </div>
          </div>
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-[20px] right-[-20px] opacity-10"
          >
            <Code2 size={240} className="text-cyan-500" />
          </motion.div>
        </div>
      </BentoCard>

      {/* Medium Card: State Management */}
      <BentoCard
        title="State Management"
        description="Mastery over complex data flows using Redux, Zustand, and Context API."
        className="md:col-span-2"
        delay={0.2}
      >
        <div className="flex items-center justify-center gap-12 py-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl" />
            <Cpu size={80} className="relative z-10 text-purple-400" />
            <span className="absolute right-1/2 -bottom-2 translate-x-1/2 font-mono text-xs opacity-50">
              REDUX
            </span>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl" />
            <Binary size={80} className="relative z-10 text-amber-400" />
            <span className="absolute right-1/2 -bottom-2 translate-x-1/2 font-mono text-xs opacity-50">
              ZUSTAND
            </span>
          </div>
        </div>
      </BentoCard>

      {/* Small Card: Testing Strategies */}
      <BentoCard
        title="Testing Strategies"
        description="Bulletproof code with unit, integration, and E2E tests."
        className="md:col-span-1"
        delay={0.3}
      >
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full flex-col gap-2">
            {/* Pyramid Visual */}
            <div className="mx-auto flex h-6 w-[60%] items-center justify-center rounded-t-lg border border-cyan-400/30 bg-cyan-400/20">
              <span className="text-[10px] font-bold">E2E</span>
            </div>
            <div className="mx-auto flex h-8 w-[80%] items-center justify-center border border-cyan-400/20 bg-cyan-400/10">
              <span className="text-[10px] font-bold">INTEGRATION</span>
            </div>
            <div className="mx-auto flex h-10 w-full items-center justify-center rounded-b-lg border border-white/10 bg-white/5">
              <span className="text-[10px] font-bold">UNIT</span>
            </div>
          </div>
          <div className="mt-4 flex gap-4 opacity-50">
            <TestTube2 size={24} />
            <Search size={24} />
          </div>
        </div>
      </BentoCard>

      {/* Wide Card: Performance Optimization */}
      <BentoCard
        title="Performance"
        description="Optimizing Core Web Vitals and ensuring 60fps interactions."
        className="md:col-span-1"
        delay={0.4}
      >
        <div className="flex flex-col gap-6">
          <div className="flex h-16 items-end gap-2">
            {[40, 70, 45, 90, 60, 85].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                className="flex-1 rounded-t-sm bg-cyan-500/30"
              />
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-white/5 pt-2 font-mono text-[10px] opacity-80">
            <div className="flex items-center gap-1">
              <Zap size={12} className="text-cyan-400" />
              <span>LCP: 1.2s</span>
            </div>
            <div className="flex items-center gap-1">
              <Activity size={12} className="text-green-400" />
              <span>99/100</span>
            </div>
          </div>
        </div>
      </BentoCard>
    </div>
  );
}

function MyStory() {
  const storyRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(storyRef, { once: true, margin: "-200px" });

  return (
    <section className="py-44">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-default-100 font-serif text-5xl leading-[1.4] md:text-7xl md:leading-[1.3]"
        >
          Over the years, I’ve broken things, fixed them, solved problems,
          shipped products, and moved the needle. I’ve led teams, improved
          systems, and turned complex ideas into clean, scalable interfaces.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="text-default-400 mt-12 max-w-3xl text-3xl"
        >
          This site is my place to humble-brag about the products I’ve built and
          the challenges I’ve conquered.
        </motion.p>

        <div className="mt-44" ref={storyRef}>
          <motion.h2
            className={cn(
              "mb-8 font-mono text-xl tracking-[0.3em] text-cyan-400 uppercase transition-all duration-1000",
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
            )}
          >
            Engineering Journal
          </motion.h2>

          <motion.h2
            className={cn(
              "mb-24 font-serif text-6xl font-bold transition-all duration-1000 md:text-9xl",
              isInView
                ? "blur-0 translate-y-0 opacity-100"
                : "translate-y-10 opacity-0 blur-xl",
            )}
          >
            Professional <br /> Journey
          </motion.h2>

          <BentoGrid />
        </div>
      </div>
    </section>
  );
}

export default MyStory;
