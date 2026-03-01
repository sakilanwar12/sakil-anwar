"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import ScrollDown from "@/components/ScrollDown";

function Hero() {
  const headline = "Slaying Dragons with Clean Code.";
  const words = headline.split(" ");

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
      {/* Dynamic Background Layer */}
      <div className="mesh-gradient animate-mesh absolute inset-0 -z-10" />

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
            className="text-default-400 mb-4 text-xl font-medium tracking-widest uppercase"
          >
            Senior Frontend Developer
          </motion.h2>
          <motion.h1 className="font-serif text-7xl leading-[1.1] font-bold md:text-8xl lg:text-[10rem]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVars}
                className="mr-[0.2em] inline-block"
              >
                {word === "Dragons" ? (
                  <span className="text-primary italic">Dragons</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            variants={wordVars}
            className="text-default-200 mt-10 max-w-2xl text-xl leading-relaxed md:text-3xl"
          >
            I'm <span className="text-primary font-bold">Sakil Anwar</span>,
            building modern, editorial, and premium web experiences for
            high-impact brands and agencies.
          </motion.p>
          <motion.div
            variants={wordVars}
            className="mt-14 flex flex-wrap justify-center gap-6 lg:justify-start"
          >
            <Button
              className="glow-button bg-primary hover:bg-primary/90 rounded-full px-12 py-8 text-2xl font-bold text-white transition-all hover:scale-105"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              color="outline"
              className="rounded-full border-white/10 px-12 py-8 text-2xl font-bold transition-all hover:scale-105 hover:bg-white/5"
              size="lg"
            >
              Let's Talk
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
            {/* Soft Glow Background */}
            <div className="bg-primary/20 absolute inset-0 -bottom-20 rounded-full opacity-40 blur-[120px]" />

            <div className="mask-vignette relative h-full w-full overflow-hidden">
              <Image
                src="/images/user.jpg"
                alt="Sakil Anwar"
                fill
                className="object-cover grayscale transition-all duration-1000 hover:scale-105 hover:grayscale-0"
                priority
              />
              {/* Soft blend overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-transparent opacity-90" />
            </div>

            {/* Subtle accent border */}
            <div className="border-primary/20 animate-spin-slow absolute -inset-4 rounded-3xl border border-dashed opacity-30" />
          </div>
        </motion.div>
      </div>

      <ScrollDown />
    </section>
  );
}

export default Hero;
