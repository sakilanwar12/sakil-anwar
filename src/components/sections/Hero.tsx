import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Separator } from "../ui/separator";
const technologies = ["React", "TypeScript", "Node.js", "Next.js", "Vue.js"];

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
   
      <div className="text-center z-10 max-w-4xl mx-auto relative">
        <div className="relative inline-block px-4 sm:px-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75"></div>
          <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
            Sakil Anwar
          </h1>
        </div>

        <div className="flex items-center gap-3 justify-center mb-6 mt-16">
          <Separator className="data-[orientation=horizontal]:w-16 bg-primary/30" />
          <h2 className="text-2xl md:text-3xl text-primary/60  font-light whitespace-nowrap">
            Web Developer
          </h2>
          <Separator className="data-[orientation=horizontal]:w-16 bg-primary/30" />
        </div>

        <p className="text-lg md:text-xl text-default-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with modern web technologies
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className="px-4 py-2 text-sm text-default-200 transition-colors border border-border  hover:border-primary rounded-full hover:bg-[#2D333B]"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          <div className="flex items-center gap-2 text-default-400 animate-pulse">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
