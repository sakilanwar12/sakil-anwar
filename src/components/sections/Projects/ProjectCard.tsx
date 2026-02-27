"use client";

import { TProject } from "./constant";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTiltEffect } from "@/hooks/useTiltEffect";

function ProjectCard({ project }: { project: TProject }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useTiltEffect(6);

  return (
    <div className="project-card">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card glass-card group relative overflow-hidden rounded-2xl transition-all duration-300 hover:border-[rgba(0,212,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-transparent opacity-60" />

          {/* Hover overlay with links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[rgba(10,10,26,0.8)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link
              href={project.github}
              target="_blank"
              className="glass flex h-12 w-12 items-center justify-center rounded-full text-white transition-all hover:bg-[rgba(0,212,255,0.2)] hover:text-[#00d4ff]"
            >
              <Github className="size-5" />
            </Link>
            <Link
              href={project.live}
              target="_blank"
              className="glass flex h-12 w-12 items-center justify-center rounded-full text-white transition-all hover:bg-[rgba(0,212,255,0.2)] hover:text-[#00d4ff]"
            >
              <ExternalLink className="size-5" />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-[#00d4ff]">
            {project.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-[#8888aa]">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-[rgba(0,212,255,0.08)] px-3 py-1 text-xs text-[#00d4ff]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
