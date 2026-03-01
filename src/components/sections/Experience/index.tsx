"use client";

import Image from "next/image";
import { experiences } from "./constant";
import { motion } from "motion/react";

function Experience() {
  return (
    <section id="experience" className="bg-background px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-20 font-serif text-5xl font-bold md:text-7xl">
          Experience
        </h2>

        <div className="relative ml-4 border-l border-white/10 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-20 pl-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="bg-primary absolute top-2 left-[-6px] size-3 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
                {/* Logo */}
                <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border border-white/5 bg-white/5 p-2">
                  <div className="bg-primary/10 absolute inset-0" />
                  {/* Using a placeholder if logo doesn't exist */}
                  <div className="relative flex h-full w-full items-center justify-center font-bold text-white/20">
                    LOGO
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col justify-between md:flex-row md:items-center">
                    <h3 className="text-default-100 text-3xl font-bold">
                      {exp.role}
                    </h3>
                    <span className="text-primary mt-2 flex items-center text-lg font-medium md:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className="text-default-300 mb-6 text-xl font-medium">
                    {exp.company}
                  </h4>
                  <p className="text-default-200 max-w-3xl text-lg leading-relaxed md:text-xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
