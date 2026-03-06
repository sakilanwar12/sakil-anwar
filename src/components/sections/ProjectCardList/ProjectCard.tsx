"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "./constant";
import { motion, MotionValue, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
}

function ProjectCard({
  project,
  index,
  range,
  targetScale,
  progress,
}: ProjectCardProps) {
  const { title, description, image, link, technologies } = project;

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center pt-24">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className="group relative h-[70vh] w-full overflow-hidden rounded-xl border border-transparent hover:border-default-700  bg-[#1A1A1A] backdrop-blur-sm transition-all  md:h-[80vh]"
      >
        <Link href={link} className="block h-full w-full">
          {/* Project Image */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          {/* Immersive Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end bg-black/20 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
            <div className="relative z-10 translate-y-4 transform p-8 transition-transform duration-500 group-hover:translate-y-0">
              {/* Title */}
              <h3 className="mb-4 font-serif text-3xl leading-tight font-bold text-white lg:text-5xl">
                {title}
              </h3>

              {/* Description - Brief on mobile, shown on hover */}
              <p className="mb-6  text-sm leading-relaxed text-slate-300 max-w-[992px] opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100 lg:text-lg">
                {description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 opacity-0 transition-opacity delay-200 duration-500 group-hover:opacity-100">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-white backdrop-blur-md lg:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow Link Icon - Top Right Corner */}
            <div className="absolute top-8 right-8 z-20 rounded-full border border-white/20 bg-white/10 p-3 opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
              <ArrowUpRight className="size-6 text-white" />
            </div>

            {/* Gradient Tint */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
