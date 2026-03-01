"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "./constant";
import { motion } from "motion/react";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, image, link, technologies } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative flex flex-col overflow-hidden rounded-[3rem] border border-white/5 bg-white/2 backdrop-blur-sm transition-all hover:border-cyan-500/20 lg:flex-row"
    >
      {/* Visual Side (Left) */}
      <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:w-3/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
        />

        {/* Hover Overlay with Video Preview Hint */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-cyan-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
          <PlayCircle className="mb-4 size-20 animate-pulse text-cyan-400" />
          <span className="font-mono text-sm tracking-widest text-white uppercase">
            Image Hover: View video preview
          </span>
        </div>
      </div>

      {/* Content Side (Right) */}
      <div className="relative flex flex-col justify-between border-t border-white/5 p-10 md:p-16 lg:w-2/5 lg:border-t-0 lg:border-l">
        <div>
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-6 font-mono text-xs tracking-widest text-cyan-400 uppercase"
          >
            Selected Work / 0{index + 1}
          </motion.h4>
          <h3 className="mb-8 font-serif text-5xl leading-tight font-bold transition-colors group-hover:text-cyan-400">
            {title}
          </h3>
          <p className="text-default-400 mb-12 line-clamp-4 text-xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-10">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-default-300 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={link}
            className="group/link inline-flex items-center gap-4 text-xl font-bold text-white transition-colors hover:text-cyan-400"
          >
            Explorer Project
            <div className="rounded-full border border-white/10 bg-white/5 p-3 transition-all group-hover/link:border-cyan-500/50">
              <ArrowUpRight className="size-5" />
            </div>
          </Link>
        </div>

        {/* Background texture */}
        <div className="pointer-events-none absolute top-0 right-0 p-8 font-mono text-xs uppercase opacity-[0.03] select-none">
          Engineering / {title.split(" ")[0]}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
