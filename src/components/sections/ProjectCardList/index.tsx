import ProjectCard from "./ProjectCard";
import { projects } from "./constant";

function ProjectCardList() {
  return (
    <div className="flex flex-col gap-24 lg:gap-44">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}

export default ProjectCardList;
