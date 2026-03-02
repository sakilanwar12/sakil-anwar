"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import ScrollDown from "@/components/ScrollDown";
import Link from "next/link";
import BookACallButton from "@/components/BookACallButton";

function Hero() {
  const headline = "Hi, I'm Sakil Anwar";
  const bio =
    "Senior Frontend Engineer. I design and build scalable admin dashboards and high-performance web applications. With a strong focus on clean architecture, reusability, and performance, I help teams ship reliable and maintainable frontend systems.";

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVars = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* High-Fidelity Background System */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        {/* Architectural Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 90%)",
          }}
        />

        {/* Ethereal Mesh Gradients */}
        <div className="absolute -top-[10%] -right-[5%] h-[900px] w-[900px] animate-pulse rounded-full bg-violet-600/10 mix-blend-screen blur-[140px]" />
        <div className="absolute -bottom-[10%] -left-[5%] h-[700px] w-[700px] rounded-full bg-cyan-500/10 mix-blend-overlay blur-[120px]" />

        {/* Subtle Grain Texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
            filter: "contrast(170%) brightness(1000%)",
          }}
        />
      </div>

      <div className="z-10 container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Headline & Bio */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <motion.div
              variants={wordVars}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 py-1.5 pr-4 pl-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-white uppercase opacity-70">
                Available for collaboration
              </span>
            </motion.div>

            <motion.h1
              variants={wordVars}
              className="font-serif text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={wordVars}
              className="text-default-200 mt-8 max-w-xl text-lg leading-relaxed md:text-xl md:leading-[1.6]"
            >
              {bio}
            </motion.p>

            <motion.div
              variants={wordVars}
              className="mt-12 flex flex-wrap gap-6"
            >
              <Button
                asChild
                className="group relative h-14 overflow-hidden rounded-full bg-white px-10 text-lg font-bold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <Link href="/works">View Works</Link>
              </Button>
              <Button
                asChild
                className="hover:border-default-400 border-default-800 h-14 rounded-full border px-10 text-lg font-bold text-white transition-all hover:bg-white/5"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Technical Visual Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glass Terminal Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-white/20">
                <div className="mb-6 flex gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/30" />
                </div>

                <div className="space-y-4 font-mono text-[13px] leading-relaxed">
                  <div className="flex gap-4">
                    <span className="text-violet-400">class</span>
                    <span className="text-bold tracking-wider text-cyan-300">
                      SeniorFrontendDeveloper
                    </span>
                    <span className="text-white">{`{`}</span>
                  </div>
                  <div className="space-y-2 pl-6">
                    <p className="text-default-400">{`// Core Specialization`}</p>
                    <div className="flex gap-3">
                      <span className="text-violet-400">readonly</span>
                      <span className="text-white">stack</span>
                      <span className="text-white">=</span>
                      <span className="text-emerald-400">
                        ['React', 'Next.js', 'TypeScript',"Vue.js","Remix","Node.js"]
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-violet-400">readonly</span>
                      <span className="text-white">focus</span>
                      <span className="text-white">=</span>
                      <span className="text-emerald-400">'Performance'</span>
                    </div>
                  </div>
                  <div className="text-white">{`}`}</div>
                </div>

                {/* Ambient glow inside card */}
                <div className="absolute -top-20 -right-20 h-64 w-64 bg-violet-600/5 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-cyan-500/5 blur-3xl" />
              </div>

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 rounded-xl border border-white/5 bg-white/5 px-4 py-3 shadow-2xl backdrop-blur-md"
              >
                <span className="font-mono text-[10px] font-bold tracking-widest text-cyan-400">
                  99+ LIGHHOUSE
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollDown />
    </section>
  );
}

export default Hero;
