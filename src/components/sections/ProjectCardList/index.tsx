"use client";

import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./constant";
import { useScroll } from "motion/react";

function ProjectCardList() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative mt-20 flex flex-col gap-[10vh]">
      {projects.map((project, index) => {
        const targetScale = 1 - (projects.length - index) * 0.04;
        return (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}

export default ProjectCardList;
