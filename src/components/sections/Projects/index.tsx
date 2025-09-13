"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  Zap,
  Globe,
  Code2,
  Smartphone,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "./constant";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");


  const categories = [
    { id: "all", name: "All Projects", icon: Globe },
    { id: "fullstack", name: "Full Stack", icon: Code2 },
    { id: "frontend", name: "Frontend", icon: Zap },
    { id: "mobile", name: "Mobile", icon: Smartphone },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-default-900 via-black/60 to-default-900 ">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Projects"
          description="A showcase of my recent work in web development, featuring modern technologies and best practices"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white"
                } border border-gray-600/30`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
