import ProjectCard from "./ProjectCard";
import { projects } from "./constant";

function ProjectCardList() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-20 md:gap-y-32 [&>*:nth-child(even)]:md:translate-y-20">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectCardList;
