import Image from "next/image";
import Link from "next/link";

function ProjectCard() {
  return (
    <div>
      <div className="overflow-hidden rounded-lg">
        <Image
          src="/images/projects/project-1.jpg"
          alt="Dashcode - Admin Dashboard"
          width={600}
          height={600}
          className="h-[600px] w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <h2 className="mt-16 mb-8 text-3xl font-bold">
        <Link href="">
          Helping developers build production-ready projects, faster.{" "}
        </Link>
      </h2>
      <p className="text-default-200 text-xl font-bold">
        Dashtail — ThemeForest
      </p>
      <p className="text-default-200 mt-4 text-lg leading-[28px]">
        I led the development of Dashtail, an admin dashboard template reviewed
        and approved by ThemeForest. Designed with developers in mind, it
        provides a clean, scalable foundation that eliminates repetitive setup —
        so teams can focus on what matters most: building their product. From
        architecture decisions to component design, I owned the project
        end-to-end to deliver a solution trusted by the developer community.
      </p>
      <div className="mt-10 flex items-center gap-10">
        {["React", "Next.js", "Tailwind CSS", "Framer Motion", "ShadCN UI"].map(
          (tech) => (
            <span key={tech} className="text-xl font-normal uppercase">
              {tech}
            </span>
          ),
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
