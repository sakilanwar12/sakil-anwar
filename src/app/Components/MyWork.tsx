import ProjectCardList from "@/components/sections/ProjectCardList";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function MyWork() {
  return (
    <div className="my-20">
      <h3 className="text-default-100 mb-10 text-3xl font-bold">My Work</h3>
      <div>
        <ProjectCardList />
      </div>

      <h2 className="mt-44 text-3xl leading-12 font-normal max-w-[80%]">
        Across a myriad of industries, teams, and projects I've solved critical
        user problems and business challenges, or as I would say, "slaying
        dragons."
      </h2>

      <Link href="/work" className="mt-16 text-xl flex items-center gap-2 text-default-100 hover:text-primary">
        See more work <ArrowRight className="w-5 h-5 mt-0.5" />
      </Link>
    </div>
  );
}

export default MyWork;
