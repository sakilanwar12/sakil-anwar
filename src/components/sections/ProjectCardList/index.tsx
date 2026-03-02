import ProjectCard from "./ProjectCard";
import { projects } from "./constant";

function ProjectCardList() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}

export default ProjectCardList;
