import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

function ProjectCard() {
  const projectLink = useMemo(() => {
    return "/project";
  }, []);
  return (
    <Card>
      <CardContent>
        <div className="group relative">
          <div className="w-full h-[370px] overflow-hidden mb-6">
            <Image
              src="/images/projects/dashtail-dark.png"
              alt="Project 1"
              width={700}
              height={500}
              className="w-full h-full  rounded-md transition-all duration-300 block group-hover:hidden"
            />
            <Image
              src="/images/projects/dashtail.jpg"
              alt="Project 1"
              width={700}
              height={500}
              className="w-full h-full  rounded-md transition-all duration-300 hidden group-hover:block"
            />
          </div>
          {/* Gradient Overlay */}
          <Link
            href={projectLink}
            className="absolute inset-0 rounded-md bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></Link>

          <Link
            href={projectLink}
            className="absolute bottom-6 left-0 px-6  w-full z-50 items-center gap-2 hidden group-hover:flex"
          >
            <div className="flex-1">
              <h2 className="text-sm font-semibold mb-2">Dashboard</h2>
              <p className="text-white">Project Description</p>
            </div>

            <ArrowUpRight className="h-7 w-7 transition-all duration-300 hover:text-primary hover:-translate-y-0.5 hover:translate-x-0.5" />
          </Link>
        </div>

        <p>
          DashTail - Admin Template
        </p>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
