"use client";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Separator } from "../../ui/separator";
import Link from "next/link";
import useTargetScroll from "@/hooks/useTargetScroll";
import SocialItems from "./SocialItems";

const technologies = ["React", "TypeScript", "Node.js", "Next.js", "Vue.js"];
function Hero() {
  const scrollToTarget = useTargetScroll();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4"
      id="hero"
    >
      <div className="text-center z-10 max-w-4xl mx-auto relative">
        <div className="relative inline-block px-4 sm:px-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75"></div>
          <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
            Sakil Anwar
          </h1>
        </div>

        <div className="flex items-center gap-3 justify-center mb-6 mt-10">
          <Separator className="data-[orientation=horizontal]:w-16 bg-primary/30" />
          <h2 className="text-2xl md:text-3xl text-primary/80  font-light whitespace-nowrap">
            Frontend Developer
          </h2>
          <Separator className="data-[orientation=horizontal]:w-16 bg-primary/30" />
        </div>

        <p className="text-lg md:text-xl text-default-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with modern web technologies
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className="px-4 py-2 text-sm text-default-200 transition-colors border border-border  hover:border-primary/40 rounded-full hover:bg-[#2D333B]"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex justify-center  items-center gap-4">
          <Link
            href="#work"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
            <span className="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto">
              Explore My Projects
              <ArrowRight className="size-3" />
            </span>
          </Link>
          <Link
            href="#contact"
            className="px-6 sm:px-8 py-3 bg-background rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center"
          >
            Get in Touch
          </Link>
        </div>

      </div>
      <div
        onClick={() => scrollToTarget("#skills", 50)}
        className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-default-400 text-sm mb-2 text-center">
          Scroll to explore
        </span>

        <ArrowDown className="text-default-400 size-6" />
      </div>
    </section>
  );
}

export default Hero;
