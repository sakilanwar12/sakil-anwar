"use client"
import { useState } from "react";
import { TSkill } from "./data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function SkillItem({ skillItem }: { skillItem: TSkill }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      className={cn({
        "animated-border relative z-10 shadow-[inset_2.13px_4.26px_17.04px_0px_rgba(248,248,248,0.06),_0px_25.56px_25.56px_-17.04px_rgba(5,5,5,0.09),_0px_6.39px_13.85px_0px_rgba(5,5,5,0.10),_0px_6.39px_4.26px_-4.26px_rgba(5,5,5,0.10),_0px_5.33px_1.6px_-4.26px_rgba(5,5,5,0.25)]":
          isHovered,
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 border-primary/20 rounded-lg border p-2">
            <div className="text-primary">{skillItem.icon}</div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg leading-none font-semibold">
              {skillItem.category}
            </h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-4">
        {skillItem.items.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="group flex items-center justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-muted-foreground group-hover:text-primary text-sm">
                {skill.level}%
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default SkillItem;
