import Title from "@/components/Title";
import ExperienceCard from "./experience-card";

function Experience() {
  return (
    <section className="py-20">
      <div className="container">
        <Title title="Experience" />
        <div className="space-y-7 mt-10">
          <ExperienceCard
            companyName="CodeShaper"
            jobTitle="Sr. Frontend Developer"
            startDate="2022"
            endDate="Present"
          />
          <ExperienceCard
            companyName="Spellon"
            jobTitle="Frontend Developer"
            startDate="2022"
            endDate="Present"
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
