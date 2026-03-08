"use client";

import { motion, Variants } from "motion/react";

interface SubHeroProps {
  title: string;
  subtitle: string;
}

function SubHero({ title, subtitle }: SubHeroProps) {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden pt-20">
      {/* Background System */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />
        <div className="absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 container px-6 text-center"
      >
        <motion.h1
          variants={itemVars}
          className="font-serif text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={itemVars}
          className="text-default-300 mx-auto mt-8 max-w-2xl text-lg font-medium tracking-wide md:text-xl lg:text-2xl"
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}

export default SubHero;
