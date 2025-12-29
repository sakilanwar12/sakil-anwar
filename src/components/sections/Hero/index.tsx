"use client";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Separator } from "../../ui/separator";
import Link from "next/link";
import ScrollDown from "@/components/ScrollDown";
import { useAdmin } from "@/hooks/useAdmin";
import { useAdminContext } from "@/context/admin-context";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface HeroProps {
  data?: {
    title: string;
    subtitle: string;
    description: string;
    technologies?: string[];
    ctaText?: string;
    ctaLink?: string;
  };
}

const defaultTechnologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Vue.js",
];

function Hero({ data }: HeroProps) {
  const { isAdmin } = useAdmin();
  const { openSidebar } = useAdminContext();

  const technologies =
    data?.technologies && data.technologies.length > 0
      ? data.technologies
      : defaultTechnologies;

  return (
    <section
      className="from-default-900 to-default-900 relative flex min-h-screen items-center justify-center bg-gradient-to-br via-black/60 px-4"
      id="hero"
    >
      <div className="relative z-10 mx-auto -mt-20 max-w-4xl px-3 text-center md:px-0">
        <div className="relative inline-block px-4 sm:px-0">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-xl"></div>
          <h1 className="relative bg-gradient-to-r from-white to-gray-300 bg-clip-text pb-2 text-5xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl">
            {data?.title || "Sakil Anwar"}
          </h1>
        </div>

        <div className="mt-10 mb-6 flex items-center justify-center gap-3">
          <Separator className="bg-primary/30 data-[orientation=horizontal]:w-16" />
          <h2 className="text-primary/80 text-2xl font-light whitespace-nowrap md:text-3xl">
            {data?.subtitle || "Frontend Developer"}
          </h2>
          <Separator className="bg-primary/30 data-[orientation=horizontal]:w-16" />
        </div>

        <p className="text-default-400 mx-auto mb-8 max-w-2xl text-lg leading-relaxed md:text-xl">
          {data?.description ||
            "Crafting exceptional digital experiences with modern web technologies"}
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {technologies?.map((tech, index) => (
            <Badge
              key={index}
              className="text-default-200 border-border hover:border-primary/40 rounded-full border px-4 py-2 text-sm transition-colors hover:bg-[#2D333B]"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link
            href={data?.ctaLink || "#work"}
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur transition group-hover:opacity-100"></div>
            <span className="relative inline-flex w-full items-center justify-center rounded-full bg-[#161B22] px-6 py-3 sm:w-auto sm:px-8">
              {data?.ctaText || "Explore My Projects"}
              <ArrowRight className="size-3" />
            </span>
          </Link>
          <Link
            href="#contact"
            className="bg-background rounded-full border border-[#2D333B] px-6 py-3 text-center transition-colors hover:border-gray-600 hover:bg-[#2D333B] sm:px-8"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <ScrollDown />
    </section>
  );
}

export default Hero;
