"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "./constant";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, image, link, technologies } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative aspect-4/3 overflow-hidden rounded-xl border border-white/5 bg-white/2 backdrop-blur-sm transition-all hover:border-cyan-500/30"
    >
      <Link href={link} className="block h-full w-full">
        {/* Project Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Immersive Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
          <div className="relative z-10 translate-y-4 transform p-8 transition-transform duration-500 group-hover:translate-y-0">
            {/* Category/Index */}
            <span className="mb-3 block font-mono text-[10px] tracking-widest text-cyan-400 uppercase">
              0{index + 1} // {project.category.split(" — ")[0]}
            </span>

            {/* Title */}
            <h3 className="mb-4 font-serif text-3xl leading-tight font-bold text-white">
              {title}
            </h3>

            {/* Description - Brief on mobile, shown on hover */}
            <p className="text-default-300 mb-6 line-clamp-2 text-sm leading-relaxed opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 opacity-0 transition-opacity delay-200 duration-500 group-hover:opacity-100">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mono text-base text-white backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mono text-base text-white backdrop-blur-md">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Arrow Link Icon - Top Right Corner */}
          <div className="absolute top-8 right-8 z-20 rounded-full border border-white/20 bg-white/10 p-3 opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
            <ArrowUpRight className="size-5 text-white" />
          </div>

          {/* Gradient Tint */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
