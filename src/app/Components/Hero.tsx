"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import ScrollDown from "@/components/ScrollDown";
import Link from "next/link";

function Hero() {
  const title = "Crafting Scalable, Performant, & Accessible User Interfaces.";
  const words = title.split(" ");

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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Dynamic Ethereal Background Layer */}
      <div className="absolute inset-0 -z-10">
        <div className="animate-mesh absolute inset-0 bg-[#000000]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05)_0%,transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-24">
        {/* Text Content */}
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="z-10 flex-1 text-center lg:text-left"
        >
          <motion.h2
            variants={wordVars}
            className="mb-4 font-mono text-xl tracking-[0.3em] text-cyan-400 uppercase"
          >
            Senior Frontend Developer
          </motion.h2>

          <motion.h1 className="font-serif text-6xl leading-[1.1] font-bold md:text-7xl lg:text-8xl">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVars}
                className="mr-[0.3em] inline-block last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div variants={wordVars} className="mt-10 space-y-6">
            <p className="text-default-100 max-w-2xl text-xl leading-relaxed font-medium md:text-2xl">
              Over the years, I've broken, fixed, solved problems, and shipped
              products. I've led teams, optimized systems, and transformed
              complex ideas into high-performance, accessible interfaces.
            </p>
            <p className="text-default-400 max-w-2xl text-lg leading-relaxed md:text-xl">
              I'm <span className="font-bold text-cyan-400">Sakil Anwar</span>,
              building modern, editorial, and premium web experiences for
              high-impact brands and agencies.
            </p>
          </motion.div>

          <motion.div
            variants={wordVars}
            className="mt-14 flex flex-wrap justify-center gap-6 lg:justify-start"
          >
            <Button
              asChild
              className="rounded-full border border-white/10 bg-white/5 px-12 py-8 text-2xl font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:border-cyan-500/50 hover:bg-white/10"
            >
              <Link href="#work">View Portfolio</Link>
            </Button>
            <Button
              asChild
              color="ghost"
              className="rounded-full px-12 py-8 text-2xl font-bold transition-all hover:bg-white/5 hover:text-cyan-400"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="relative flex-none"
        >
          <div className="relative h-[450px] w-[350px] md:h-[650px] md:w-[500px]">
            {/* Ethereal Cyan Glow */}
            <div className="absolute inset-0 -bottom-20 rounded-full bg-cyan-500/20 opacity-40 blur-[120px]" />

            <div className="mask-vignette relative h-full w-full overflow-hidden rounded-[2.5rem]">
              <Image
                src="/images/user.jpg"
                alt="Sakil Anwar"
                fill
                className="object-cover grayscale transition-all duration-1000 hover:scale-105 hover:grayscale-0"
                priority
              />
              {/* Soft blend overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-transparent to-transparent opacity-90" />
            </div>

            {/* Subtle accent border */}
            <div className="animate-spin-slow absolute -inset-4 rounded-3xl border border-dashed border-cyan-500/20 opacity-30" />
          </div>
        </motion.div>
      </div>

      <ScrollDown />
    </section>
  );
}

export default Hero;
