"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "./ProjectCard";
import CategoryButton from "./CategoryButton";
import Pagination from "./Pagination";
import { projects, categories, TProjectCategory } from "./constant";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PER_PAGE = 6;

function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<TProjectCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "all"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory],
  );

  const totalPages = Math.ceil(filteredProjects.length / PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate cards when they change
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      },
    );
  }, [selectedCategory, currentPage]);

  const handleCategoryChange = (category: TProjectCategory) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section ref={sectionRef} className="relative px-4 py-32" id="work">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[500px] rounded-full bg-[rgba(0,212,255,0.03)] blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[500px] rounded-full bg-[rgba(255,45,124,0.03)] blur-[150px]" />
      </div>

      <div className="relative z-10 container">
        <div className="projects-heading">
          <SectionHeader
            title="Projects"
            description="A showcase of my recent work and side projects"
          />
        </div>

        {/* Category Filter */}
        <div className="mt-10 mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <CategoryButton
              key={cat.id}
              category={cat}
              isActive={selectedCategory === cat.id}
              onClick={() => handleCategoryChange(cat.id as TProjectCategory)}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
}

export default Projects;
