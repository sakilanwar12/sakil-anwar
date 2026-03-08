"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

function PreLoader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background System */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl font-bold tracking-tighter text-white md:text-4xl lg:text-5xl"
          >
            Sakil <span className="text-default-400 font-medium">Anwar</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <div className="h-px w-40 overflow-hidden bg-white/10 md:w-48">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            />
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
            <span>Loading</span>
            <span className="w-8 text-cyan-400/80">{percent}%</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-10 left-10 font-mono text-[9px] tracking-[0.5em] text-white/20 uppercase"
      >
        © 2026 Portfolio
      </motion.div>
    </motion.div>
  );
}

export default PreLoader;
