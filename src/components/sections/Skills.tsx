import React from "react";
import {
  Code,
  Palette,
  Zap,
  Server,
  Database,
  Globe,
  Frame,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      items: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "SVG", level: 95 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      icon: <Frame className="h-5 w-5" />,
      items: [
        { name: "React & Next.js", level: 90 },
        { name: "Vue & Nuxt.js", level: 90 },
        { name: "Angular", level: 80 },
        { name: "Express & Nest.js", level: 70 },
        { name: "Bootstrap & Tailwind CSS", level: 75 },
      ],
    },
    {
      category: "UI & Products",
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
        { name: "Git & GitHub", level: 90 },
        { name: "Chrome DevTools", level: 95 },
        { name: "Vite & Webpack", level: 90 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20  relative" id="skills">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional digital
            experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {skills.map((skillCategory, index) => (
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
                {skillCategory.items.map((skill, skillIndex) => (
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
};

export default Skills;
