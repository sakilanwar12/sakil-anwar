import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../ProjectCardList/constant";



function ProjectCard() {
  return (
    <div className="max-w-[1024px]">
    <div className="group relative overflow-hidden  rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-white/20">
      {/* Project Image */}
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src="/images/projects/p1.png"
          alt="Project 1"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

      </div>
    </div>
    </div>
  );
}

export default ProjectCard;
