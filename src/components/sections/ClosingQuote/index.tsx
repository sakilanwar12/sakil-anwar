"use client";

import { motion } from "motion/react";

function ClosingQuote() {
  const quote =
    "“Design is not just what it looks like and feels like. Design is how it works.”";
  const author = "— Steve Jobs";

  return (
    <section className="py-64 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="font-serif text-5xl leading-tight text-white md:text-7xl"
        >
          {quote}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-primary mt-12 text-2xl font-bold tracking-widest uppercase"
        >
          {author}
        </motion.p>
      </div>
    </section>
  );
}

export default ClosingQuote;
