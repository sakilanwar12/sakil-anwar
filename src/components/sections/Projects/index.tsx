"use client";

import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";
import SectionHeader from "@/components/SectionHeader";
import { categories, projects } from "./constant";
import CategoryButton from "./CategoryButton";
import usePagination from "@/hooks/usePagination";



const PROJECTS_PER_PAGE = 6;

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects?.filter((project) => project?.category === selectedCategory);
  }, [selectedCategory]);

  const {
    currentPage,
    totalPages,
    paginatedData: paginatedProjects,
    goToPage,
  } = usePagination({
    data: filteredProjects,
    itemsPerPage: PROJECTS_PER_PAGE,
    onPageChange: (page) => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  });

  const handlePageChange = (page: number) => {
    goToPage(page);
  };

  return (
    <div
      className="from-default-900 to-default-900 bg-gradient-to-br via-black/60 py-32"
      id="projects"
    >
      <div className="container">
        <SectionHeader
          title="Projects"
          description="A showcase of my recent work in web development, featuring modern technologies and best practices"
        />

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories?.map((category) => {
            const IconComponent = category.icon;
            return (
              <CategoryButton
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                icon={<IconComponent className="mr-2 h-4 w-4" />}
                name={category.name}
                selectedCategory={selectedCategory}
                activeCategory={category.id}
              />
            );
          })}
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ProjectsSection;
