"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Zap, Globe, Code2, Smartphone, Layers } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "./constant";
import CategoryButton from "./CategoryButton";

const categories = [
  { id: "all", name: "All Projects", icon: Globe },
  { id: "dashboards", name: "Dashboards", icon: Code2 },
  { id: "webapps", name: "Web Apps", icon: Zap },
  { id: "landing", name: "Landing Pages", icon: Smartphone },
  { id: "ui", name: "UI Components", icon: Layers },
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects?.filter((project) => project?.category === selectedCategory);

  return (
    <div className="py-32 bg-gradient-to-br from-default-900 via-black/60 to-default-900" id="projects">
      <div className="container">
        <SectionHeader
          title="Projects"
          description="A showcase of my recent work in web development, featuring modern technologies and best practices"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => {
            const IconComponent = category.icon;
            return (
              <CategoryButton
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                icon={<IconComponent className="w-4 h-4 mr-2" />}
                name={category.name}
                selectedCategory={selectedCategory}
                activeCategory={category.id}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
