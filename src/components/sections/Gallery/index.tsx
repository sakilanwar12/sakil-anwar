"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  AlertCircle,
  Terminal,
  MousePointer2,
  Settings2,
  Cpu,
  RefreshCcw,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

function PlaygroundCard({
  title,
  description,
  tag = "INTERACTIVE",
  children,
}: {
  title: string;
  description: string;
  tag?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative flex flex-col rounded-[2.5rem] border border-white/5 bg-white/2 p-10 backdrop-blur-sm transition-all hover:border-cyan-500/20">
      <div className="mb-10 flex items-center justify-between">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 font-mono text-[10px] tracking-widest text-cyan-400 uppercase">
          {tag}
        </span>
        <div className="rounded-lg bg-white/5 p-2 opacity-40 transition-opacity group-hover:opacity-100">
          <Settings2 size={16} />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mb-4 font-serif text-3xl font-bold">{title}</h3>
        <p className="text-default-400 mb-12 text-lg leading-relaxed">
          {description}
        </p>
        <div className="relative flex min-h-[250px] flex-1 items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-black/40">
          {children}
        </div>
      </div>
    </div>
  );
}

function VisualPlayground() {
  const [email, setEmail] = useState("");
  const isValid = email.includes("@") && email.includes(".");

  return (
    <section id="playground" className="bg-[#000000] px-6 py-64">
      <div className="mx-auto max-w-7xl">
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8 font-mono text-xl tracking-[0.3em] text-cyan-400 uppercase"
          >
            Engineering Craft
          </motion.h2>
          <h2 className="font-serif text-6xl font-bold md:text-9xl">
            Visual <br /> Playground
          </h2>
          <p className="text-default-400 mt-12 max-w-2xl text-2xl leading-relaxed">
            Curated interactive component previews demonstrating specialized
            frontend engineering patterns and micro-interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Card 1: Dynamic Form Field */}
          <PlaygroundCard
            title="Dynamic Form Field"
            description="Real-time validation feedback with smooth state transitions."
            tag="LIVE COMPONENT"
          >
            <div className="flex w-full max-w-xs flex-col gap-4 p-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email..."
                  className={cn(
                    "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm transition-all focus:outline-hidden",
                    email === ""
                      ? "border-white/10"
                      : isValid
                        ? "border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                        : "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]",
                  )}
                />
                <div className="absolute top-1/2 right-4 -translate-y-1/2 transition-all">
                  {email !== "" &&
                    (isValid ? (
                      <CheckCircle2 className="text-green-500" size={18} />
                    ) : (
                      <AlertCircle className="text-red-500" size={18} />
                    ))}
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-default-500 font-mono text-[10px]">
                  HOVER FOR VALIDATION
                </span>
                <motion.div
                  animate={isValid ? { scale: [1, 1.2, 1] } : {}}
                  className={cn(
                    "text-[10px] font-bold uppercase",
                    isValid ? "text-green-500" : "text-default-500",
                  )}
                >
                  {isValid ? "Payload Ready" : "Invalid Input"}
                </motion.div>
              </div>
            </div>
          </PlaygroundCard>

          {/* Card 2: Custom SVG Icon Animation */}
          <PlaygroundCard
            title="SVG Animation"
            description="Complex icon state transitions powered by Framer Motion."
            tag="MICRO-INTERACTION"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              className="group/icon relative flex cursor-pointer items-center justify-center rounded-full border border-white/5 bg-white/5 p-12 transition-all hover:border-cyan-500/30"
            >
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-opacity group-hover/icon:opacity-100" />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Cpu className="relative z-10 size-20 text-cyan-400" />
              </motion.div>
              <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-400 uppercase opacity-0 transition-all group-hover/icon:opacity-100">
                <RefreshCcw size={12} className="animate-spin-slow" />
                Rotate to play
              </div>
            </motion.div>
          </PlaygroundCard>

          {/* Card 3: Code Snippet Highlight */}
          <PlaygroundCard
            title="Code Highlighting"
            description="Crystal-clear visualization of technical implementations."
            tag="SYSTEM"
          >
            <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-2">
                <Terminal size={12} className="text-cyan-400" />
                <span className="font-mono text-[10px] opacity-50">
                  Theme.config.ts
                </span>
              </div>
              <div className="group/code relative overflow-hidden p-6 font-mono text-[11px] leading-relaxed">
                <div className="flex gap-4">
                  <span className="opacity-30 select-none">1</span>
                  <span className="text-purple-400">export const</span>
                  <span className="text-cyan-400"> Theme</span>
                </div>
                <div className="flex gap-4">
                  <span className="opacity-30 select-none">2</span>
                  <span className="text-default-100"> primary:</span>
                  <span className="text-amber-300"> "#06b6d4"</span>
                </div>
                <div className="flex gap-4">
                  <span className="opacity-30 select-none">3</span>
                  <span className="text-default-100"> blur:</span>
                  <span className="text-amber-300"> "backdrop-blur-xl"</span>
                </div>
                <div className="flex gap-4">
                  <span className="opacity-30 select-none">4</span>
                  <span className="text-red-400"> mode:</span>
                  <span className="text-amber-300"> "ultra-clean"</span>
                </div>

                {/* Floating tag */}
                <div className="absolute top-4 right-4 animate-bounce">
                  <Badge className="border-cyan-500/30 bg-cyan-500/20 px-2 py-0 text-[9px] text-cyan-400">
                    LIVE
                  </Badge>
                </div>
              </div>
            </div>
          </PlaygroundCard>
        </div>
      </div>
    </section>
  );
}

export default VisualPlayground;
