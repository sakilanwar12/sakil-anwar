import { TSkill } from "./data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function SkillItem({ skillItem }: { skillItem: TSkill }) {
  return (
    <Card key={skillItem.category} className="relative">
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
