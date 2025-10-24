import SectionHeader from "../../SectionHeader";
import { skills } from "./data";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <div className="bg-background relative min-h-screen py-32" id="skills">
      <div className="relative z-10 container">
        <SectionHeader
          title="Expertise"
          description="Technologies and tools I use to build exceptional digital
            experiences"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory) => (
            <SkillItem
              key={skillCategory?.category}
              skillItem={skillCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
