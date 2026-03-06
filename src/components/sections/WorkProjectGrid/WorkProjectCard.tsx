import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../ProjectCardList/constant";

interface WorkProjectCardProps {
  project: Project;
}

function WorkProjectCard({ project }: WorkProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-white/20">
      {/* Project Image */}
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay - Now contains both Title and Button */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
          <div className="translate-y-4 transform p-6 text-center transition-transform duration-500 group-hover:translate-y-0">
            <h3 className="mb-6 px-4 text-2xl font-bold text-white">
              {project.title}
            </h3>
            <Link
              href={project.link}
              className="hover:bg-primary inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-colors hover:text-white"
            >
              Live Demo
              <ExternalLink className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProjectCard;
