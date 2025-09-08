"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Download } from "lucide-react";
import WaveText from "@/components/animations/WaveText";
import FloatingParticles from "@/components/animations/FloatingParticles";
import AnimatedButton from "@/components/animations/AnimatedButton";
import SocialLinks from "./SocialLinks";


const BannerSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full flex flex-col justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${
            50 + mousePosition.x * 10
          }% ${
            50 + mousePosition.y * 10
          }%, rgb(34, 197, 94) 0%, transparent 50%)`,
        }}
      />

      <FloatingParticles />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="text-left relative">
          {/* Main heading with improved animations */}
          <div className="relative">
            <WaveText
              text="FRONTEND"
              className="text-green-400 font-bold tracking-wider"
              delay={500}
            />
            <div className="ml-8 md:ml-16">
              <WaveText
                text="DEVELOPER"
                className="text-white font-bold tracking-[0.2em]"
                delay={800}
              />
            </div>

            {/* Floating decorative element */}
            <div
              className="absolute top-10 right-0 w-16 h-16 opacity-60"
              style={{
                transform: `translate(${mousePosition.x * 20}px, ${
                  mousePosition.y * 20
                }px) rotate(${mousePosition.x * 10}deg)`,
              }}
            >
              <div className="w-full h-full border-2 border-green-400 rounded-full animate-spin-slow" />
              <div className="absolute inset-2 border border-green-400/50 rounded-full animate-ping" />
            </div>
          </div>

          {/* Enhanced description */}
          <div
            className={`max-w-4xl mt-12 transform transition-all duration-1000 delay-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 mb-2">
              <span className="text-green-400 font-semibold">
                Creative Frontend Developer
              </span>{" "}
              with 3+ years of experience
            </p>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              designing and developing{" "}
              <span className="text-white font-medium">
                interactive dashboards
              </span>
              ,{" "}
              <span className="text-white font-medium">scalable web apps</span>,
              and{" "}
              <span className="text-white font-medium">
                pixel-perfect landing pages
              </span>
              .
            </p>
          </div>

          {/* Action buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-12 transform transition-all duration-1000 delay-1200 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <AnimatedButton className="w-64">
              <Download className="w-5 h-5" />
              Download CV
            </AnimatedButton>

            <AnimatedButton
              onClick={scrollToProjects}
              className="border-white text-white hover:bg-white hover:text-black"
            >
              View Projects
            </AnimatedButton>
          </div>

          {/* Social links */}
          <div
            className={`transform transition-all duration-1000 delay-1400 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1600 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center text-gray-400 hover:text-green-400 transition-colors group"
        >
          <span className="text-sm mb-2 tracking-wider">SCROLL DOWN</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
