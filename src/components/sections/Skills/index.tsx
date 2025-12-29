"use client";

import SectionHeader from "../../SectionHeader";
import { skills as staticSkills } from "./data";
import SkillItem from "./SkillItem";
import { Skill } from "@/lib/types/portfolio";

interface SkillsProps {
  data?: any; // The raw object from DB grouping
}

function Skills({ data }: SkillsProps) {
  // Use dynamic data if available, otherwise static
  // Note: The structure might differ. The DB returns grouped data or array?
  // db-service getSkillsByCategory returns Record<string, Skill[]>
  // The UI expects that format.

  const displaySkills = data || staticSkills;

  return (
    <div className="bg-background relative min-h-screen py-32" id="skills">
      <div className="relative z-10 container">
        <SectionHeader
          title="Expertise"
          description="Technologies and tools I use to build exceptional digital experiences"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* If displaySkills is an array (from static) or object (from dynamic?) 
              Actually static data is an array of objects with {category, items[]}.
              db-service.getSkillsByCategory returns an Object { category: [items] }.
              We need to map that object to the array format expected by SkillItem.
          */}
          {Array.isArray(displaySkills)
            ? displaySkills.map((skillCategory: any) => (
                <SkillItem
                  key={skillCategory?.category}
                  skillItem={skillCategory}
                />
              ))
            : Object.entries(displaySkills).map(([category, items]) => (
                <SkillItem
                  key={category}
                  skillItem={{ category, items } as any}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
