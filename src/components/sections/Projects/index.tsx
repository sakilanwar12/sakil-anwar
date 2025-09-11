import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-24" id="projects">
      <div className="container">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

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
