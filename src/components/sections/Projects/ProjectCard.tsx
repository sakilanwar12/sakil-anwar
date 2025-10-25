import { ExternalLink, Github } from "lucide-react";
import { TProject } from "./constant";
import Image from "next/image";
import Link from "next/link";
function ProjectCard({ project }: { project: TProject }) {
  return (
    <div className="group relative transform cursor-pointer transition-all duration-500">
      <div className="bg-default-800/90 border-default-700/50 hover:border-default-600/50 relative h-full overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500">
        <div className="p-2.5 ">
          <div className="relative h-60 overflow-hidden rounded-md">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={350}
              className="h-full w-full transition-transform duration-500"
            />
            <div className="from-default-900/10 absolute inset-0 bg-gradient-to-t to-transparent" />

             <div className="bg-default/70 absolute inset-0 flex items-center justify-center space-x-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href={project.live}
                className="text-default-50 transform rounded-full bg-blue-600 p-3 transition-all duration-300 hover:scale-110 hover:bg-blue-700"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
              <a
                href={project.github}
                className="bg-default-700 hover:bg-default-600 text-default-50 transform rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
            </div> 
          </div>
        </div>
        <div className="p-4 pt-3">
          <h3 className="text-default-50 mb-3 line-clamp-1 text-xl font-bold transition-colors group-hover:text-blue-400">
            {project.title}
          </h3>

          <p className="text-default-300 mb-4 line-clamp-4">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-default-700/50 text-default-300 border-default-600/30 rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:border-blue-500/50"
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
