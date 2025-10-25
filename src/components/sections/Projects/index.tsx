"use client";

import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";
import { Zap, Globe, Smartphone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "./constant";
import CategoryButton from "./CategoryButton";

const categories = [
  { id: "all", name: "All Projects", icon: Globe },
  { id: "dashboard", name: "Dashboards", icon: Zap },
  { id: "website", name: "Website", icon: Smartphone },
];

const PROJECTS_PER_PAGE = 6;

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    const filtered =
      selectedCategory === "all"
        ? projects
        : projects?.filter((project) => project?.category === selectedCategory);

    // Reset to page 1 when category changes
    setCurrentPage(1);
    return filtered;
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of projects section
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
