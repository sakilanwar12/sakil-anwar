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

const getTechColor = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("react") || t.includes("next"))
    return "text-blue-400 bg-blue-400/10 border-blue-400/20";
  if (t.includes("node") || t.includes("express"))
    return "text-green-400 bg-green-400/10 border-green-400/20";
  if (t.includes("typescript") || t.includes("ts"))
    return "text-purple-400 bg-purple-400/10 border-purple-400/20";
  if (t.includes("tailwind") || t.includes("css"))
    return "text-cyan-400 bg-cyan-400/10 border-cyan-400/20";
  return "text-default-300 bg-white/5 border-white/10";
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, image, link, category, technologies } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: (index % 2) * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group hover-lift relative flex flex-col overflow-hidden rounded-[2.5rem] bg-[#121212] transition-all"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 backdrop-blur-md transition-opacity duration-700 group-hover:opacity-100">
          <Link
            href={link}
            className="bg-primary flex h-24 w-24 items-center justify-center rounded-full text-white shadow-2xl transition-transform duration-500 hover:scale-110"
          >
            <ArrowUpRight className="size-10" />
          </Link>
          <span className="mt-6 text-2xl font-bold tracking-tight text-white">
            Case Study →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 md:p-14">
        <div className="mb-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-bold tracking-wider uppercase transition-colors",
                getTechColor(tech),
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-primary mb-4 text-xl font-bold tracking-widest uppercase">
          {category}
        </p>

        <h3 className="mb-8 font-serif text-4xl leading-[1.2] font-bold md:text-5xl">
          {title}
        </h3>

        <p className="text-default-400 line-clamp-3 text-xl leading-relaxed">
          {description}
        </p>

        <Link
          href={link}
          className="group/link hover:text-primary mt-12 flex items-center gap-3 text-2xl font-bold text-white transition-all"
        >
          View Case Study
          <ArrowUpRight className="size-6 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
