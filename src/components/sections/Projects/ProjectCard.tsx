
import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import { TProject } from "./constant";
const ProjectCard = ({ project }: { project: TProject }) => {
  const isHovered = false;
  return (
    <div className="group relative transform transition-all duration-500">
      {/* Glow effect for featured projects */}
      {project.featured && (
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
      )}

      {/* Main card */}
      <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full">
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}

        {/* Status badge */}
        <div
          className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === "Completed"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
          }`}
        >
          {project.status}
        </div>

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

          {/* Overlay buttons */}
          <div
            className={`absolute inset-0 flex items-center justify-center space-x-3 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href={project.live}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href={project.github}
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {project.date}
            </div>
          </div>

          <p className="text-gray-300 mb-4 line-clamp-2">
            {isHovered ? project.longDescription : project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies
              .slice(0, isHovered ? 10 : 3)
              .map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-gray-600/30 hover:border-blue-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            {!isHovered && project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-700/30 text-gray-400 rounded-full text-xs">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {project.stats.users}
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                {project.stats.stars}
              </div>
            </div>
            <div className="text-xs text-gray-500">
              {project.stats.commits} commits
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
