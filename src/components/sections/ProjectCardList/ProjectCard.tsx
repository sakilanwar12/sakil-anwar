import Image from "next/image";
import Link from "next/link";
import { Project } from "./constant";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, link, category, technologies } = project;

  return (
    <div>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="h-[600px] w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <h2 className="mt-16 mb-8 text-3xl font-bold">
        <Link href={link}>{title}</Link>
      </h2>
      <p className="text-default-200 text-xl font-bold">{category}</p>
      <p className="text-default-200 mt-4 text-lg leading-[28px]">
        {description}
      </p>
      <div className="mt-10 flex items-center gap-10">
        {technologies.map((tech) => (
          <span key={tech} className="text-xl font-normal uppercase">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
