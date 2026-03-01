"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "./constant";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, link, category, technologies } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group hover:shadow-primary/10 relative flex flex-col overflow-hidden rounded-3xl bg-[#121212] transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
          <Link
            href={link}
            className="bg-primary flex h-20 w-20 items-center justify-center rounded-full text-white shadow-xl transition-transform duration-300 hover:scale-110"
          >
            <ArrowUpRight className="size-8" />
          </Link>
          <span className="mt-4 text-xl font-bold text-white">
            View Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10">
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-primary/10 text-primary border-primary/20 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wider uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-primary mb-4 text-lg font-bold tracking-tight">
          {category}
        </p>

        <h3 className="mb-6 font-serif text-3xl leading-tight font-bold md:text-4xl">
          {title}
        </h3>

        <p className="text-default-200 line-clamp-3 text-lg leading-relaxed">
          {description}
        </p>

        <Link
          href={link}
          className="hover:text-primary mt-8 flex items-center gap-2 text-xl font-bold text-white transition-all hover:gap-4"
        >
          Case Study <ArrowUpRight className="size-5" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
