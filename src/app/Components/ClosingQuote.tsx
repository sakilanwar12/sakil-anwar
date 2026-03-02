"use client";

import { motion } from "motion/react";

function ClosingQuote() {
  const quote =
    "“Design is not just what it looks like and feels like. Design is how it works.”";
  const author = "— Steve Jobs";

  return (
    <section className="relative overflow-hidden py-64">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >
          <p className="font-serif text-5xl leading-tight text-white italic md:text-8xl">
            “Design is not just what it looks like and feels like. <br />
            <span className="text-cyan-400">Design is how it works.</span>”
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <span className="text-default-400 font-serif text-3xl">
              — Steve Jobs
            </span>
            <span className="font-mono text-xs tracking-[0.5em] text-cyan-400/50 uppercase">
              Refined UX Philosophy
            </span>
          </motion.div>
        </motion.div>

        {/* Ethereal Glows */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>
    </section>
  );
}

export default ClosingQuote;
