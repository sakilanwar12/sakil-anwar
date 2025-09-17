import React from "react";
import { Code, Palette, Zap, Frame } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SectionHeader from "../SectionHeader";

function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      items: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "Markdown", level: 85 },
      ],
    },
    {
      category: "Frameworks",
      icon: <Frame className="h-5 w-5" />,
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 90 },
        { name: "Nuxt.js", level: 85 },
        { name: "Angular", level: 80 },
      ],
    },
    {
      category: "CSS Libraries",
      icon: <Palette className="h-5 w-5" />,
      items: [
        { name: "Bootstrap", level: 75 },
        { name: "Tailwind CSS", level: 75 },
        { name: "Material UI", level: 70 },
        { name: "Ant Design", level: 70 },
        { name: "Radix UI", level: 70 },
      ],
    },
    {
      category: "State Management Tools",
      icon: <Zap className="h-5 w-5" />,
      items: [
        { name: "Redux", level: 85 },
        { name: "RTK Query", level: 80 },
        { name: "React Query", level: 85 },
        { name: "Zustand", level: 80 },
        { name: "Pinia", level: 75 },
      ],
    },
    {
      category: "UI / Products",
      icon: <Palette className="h-5 w-5" />,
      items: [
        { name: "Custom Dashboard Templates", level: 95 },
        { name: "Landing Pages", level: 90 },
        { name: "Web Applications", level: 90 },
        { name: "API-Connected Interfaces", level: 95 },
        { name: "Responsive & Mobile-First Designs", level: 90 },
      ],
    },
    {
      category: "Development Tools",
      icon: <Zap className="h-5 w-5" />,
      items: [
        { name: "VS Code", level: 95 },
        { name: "Cursor", level: 90 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Chrome DevTools", level: 95 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-32  relative" id="skills">
      <div className="container relative z-10">
        <SectionHeader
          title="Expertise"
          description="Technologies and tools I use to build exceptional digital
            experiences"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="relative">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-primary">{skillCategory.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg leading-none">
                      {skillCategory.category}
                    </h3>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 relative">
                {skillCategory.items.map((skill) => (
                  <div key={skill.name} className="space-y-2 ">
                    <div className="flex justify-between items-center group">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-primary">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
