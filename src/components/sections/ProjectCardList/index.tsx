import ProjectCard from "./ProjectCard";
import { projects } from "./constant";

function ProjectCardList() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-x-24 lg:gap-y-44 [&>*:nth-child(even)]:md:translate-y-32">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}

export default ProjectCardList;
