import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import { TProject } from "./constant";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = ({ project }: { project: TProject }) => {
 
  return (
    <div className="group relative transform transition-all duration-500 cursor-pointer">
      <div className="relative bg-default-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-default-700/50 hover:border-default-600/50 transition-all duration-500 h-full">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={240}
            className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-default-900/60 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center space-x-3 transition-opacity duration-300 bg-default/70 opacity-0 group-hover:opacity-100">
            <Link
              href={project.live}
              className="bg-blue-600 hover:bg-blue-700 text-default-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
            <a
              href={project.github}
              className="bg-default-700 hover:bg-default-600 text-default-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-default-50 group-hover:text-blue-400 transition-colors mb-3 line-clamp-1">
            {project.title}
          </h3>

          <p className="text-default-300 mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies
              .map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-default-700/50 text-default-300 rounded-full text-xs font-medium border border-default-600/30 hover:border-blue-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-default-700/30">
            <div className="flex items-center space-x-4 text-sm text-default-400">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {project.stats.users}
              </div>
            </div>
            <div className="text-xs text-default-500">
              {project.stats.commits} commits
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
