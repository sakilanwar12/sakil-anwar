import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard() {
  return (
    <div>
      <div className="group relative">
        <div className="w-full h-[500px] overflow-hidden mb-6">
          <Image
            src="/images/p1.png"
            alt="Project 1"
            width={700}
            height={500}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
           {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute bottom-6 left-0 px-6  w-full z-50 items-center gap-2 hidden group-hover:flex">
          <div className="flex-1">
            <h2 className="text-sm font-semibold mb-2">Dashboard</h2>
            <p className="text-white">Project Description</p>
          </div>
          <Link href="/">
            <ArrowUpRight className="h-7 w-7" />
          </Link>
        </div>
      </div>

      <p>Project 1: Next js Portfolio Website</p>
    </div>
  );
}

export default ProjectCard;
