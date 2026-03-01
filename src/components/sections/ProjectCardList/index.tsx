import ProjectCard from "./ProjectCard";

function ProjectCardList() {
  return (
    <div className="grid grid-cols-1 gap-24 md:grid-cols-2 [&>*:nth-child(even)]:md:translate-y-16">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default ProjectCardList;
