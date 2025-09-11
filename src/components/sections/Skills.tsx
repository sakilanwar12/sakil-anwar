import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Rocket, Palette, Zap } from "lucide-react";
const skills = [
  {
    category: "Frontend Development",
    icon: <Palette className="w-6 h-6" />,
    items: [
      { name: "React & Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Modern CSS", level: 95 },
      { name: "Web Animation", level: 85 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: <Zap className="w-6 h-6" />,
    items: [
      { name: "Node.js", level: 90 },
      { name: "RESTful APIs", level: 95 },
      { name: "GraphQL", level: 85 },
      { name: "Database Design", level: 88 },
    ],
  },
  {
    category: "Performance & DevOps",
    icon: <Rocket className="w-6 h-6" />,
    items: [
      { name: "Web Performance", level: 92 },
      { name: "CI/CD", level: 88 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 82 },
    ],
  },
];

function Skills() {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    {skillGroup.icon}
                  </div>
                  <CardTitle className="text-white">
                    {skillGroup.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
