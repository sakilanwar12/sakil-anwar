import ProjectCardList from "@/components/sections/ProjectCardList";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function MyWork() {
  return (
    <section className="container py-32">
      <h2 className="mb-12 font-serif text-5xl font-bold md:text-7xl">
        Selected Works
      </h2>

      <ProjectCardList />

      <div className="mt-20 w-full">
        <h2 className="text-default-100 text-4xl leading-tight font-normal md:text-5xl">
          Across a myriad of industries, teams, and projects I've solved
          critical user problems and business challenges, or as I would say,
          <span className="text-primary italic"> "slaying dragons."</span>
        </h2>

        <Link
          href="/work"
          className="group hover:text-primary mt-10 flex items-center gap-4 text-2xl font-bold text-white transition-all"
        >
          See more work
          <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
}

export default MyWork;
