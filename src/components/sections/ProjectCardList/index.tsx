import ProjectCard from "./ProjectCard";
import { projects } from "./constant";

function ProjectCardList() {
  return (
    <div className="grid grid-cols-1 gap-24 md:grid-cols-2 [&>*:nth-child(even)]:md:translate-y-16">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectCardList;
