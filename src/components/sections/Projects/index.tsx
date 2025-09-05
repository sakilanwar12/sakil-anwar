import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className="container">
        <h3 className="text-3xl text-center text-white mb-2">My Projects</h3>
        <p className="text-lg text-center">Explore My Latest Created Sites</p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-14">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
