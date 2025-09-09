import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Code2,
  Rocket,
  Laptop,
  Flame,
  Palette,
  Zap,
  Database,
  Cloud,
  Gamepad2,
  Smartphone,
  Shield,
  Settings,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Footer from "@/components/sections/Footer";
import PreLoader from "@/components/loaders/preloader";

const WebDeveloperPortfolio = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      items: [
        { name: "React & Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Modern CSS", level: 95 },
        { name: "Web Animation", level: 85 },
      ],
    },
    {
      category: "Backend & APIs",
      icon: <Zap className="w-6 h-6" />,
      items: [
        { name: "Node.js", level: 90 },
        { name: "RESTful APIs", level: 95 },
        { name: "GraphQL", level: 85 },
        { name: "Database Design", level: 88 },
      ],
    },
    {
      category: "Performance & DevOps",
      icon: <Rocket className="w-6 h-6" />,
      items: [
        { name: "Web Performance", level: 92 },
        { name: "CI/CD", level: 88 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 82 },
      ],
    },
  ];

  const projects = [
    {
      title: "E-commerce PWA",
      description:
        "High-performance Progressive Web App with offline capabilities",
      metrics: { performance: 98, accessibility: 100, seo: 100 },
      features: [
        "Service Worker implementation",
        "IndexedDB for offline data",
        "Streaming SSR",
        "Dynamic code splitting",
      ],
    },
    {
      title: "Real-time Collaboration Platform",
      description: "WebSocket-based platform with conflict resolution",
      metrics: { performance: 95, accessibility: 98, seo: 100 },
      features: [
        "WebSocket optimization",
        "CRDT implementation",
        "Custom state management",
        "WebRTC integration",
      ],
    },
  ];

  const capabilities = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "WebGL & 3D",
      items: ["Three.js", "WebGL Shaders", "Performance optimization"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Progressive Web Apps",
      items: ["Offline support", "Push notifications", "App-like experience"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Features",
      items: ["WebSockets", "WebRTC", "Server-Sent Events"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Browser APIs",
      items: ["File System Access", "Web Workers", "Service Workers"],
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      items: ["Code splitting", "Tree shaking", "Resource optimization"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      items: ["CSP", "CORS configuration", "Security headers"],
    },
  ];

  const technologies = ["React", "TypeScript", "Node.js", "Next.js", "GraphQL"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
 
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-20"></div>
   
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-6 text-4xl md:text-6xl">
            <span className="animate-bounce" style={{ animationDelay: "0s" }}>
              ⚛️
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              🚀
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              💻
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>
              🔥
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            MD. Sakil Anwar
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
            Web Developer
          </h2>

          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern web
            technologies
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 transition-colors"
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
            <div className="flex items-center gap-2 text-slate-400 animate-pulse">
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                      {skillGroup.icon}
                    </div>
                    <CardTitle className="text-white">
                      {skillGroup.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-slate-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Performance Metrics */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-4">
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">
                          {project.metrics.performance}
                        </div>
                        <div className="text-xs text-slate-400">
                          performance
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">
                          {project.metrics.accessibility}
                        </div>
                        <div className="text-xs text-slate-400">
                          accessibility
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">
                          {project.metrics.seo}
                        </div>
                        <div className="text-xs text-slate-400">seo</div>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-white/10" />

                  {/* Technical Implementation */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-4">
                      Technical Implementation
                    </h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <span className="text-blue-400 mt-1">▹</span>
                          <span className="text-slate-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg border border-white/10 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                    <Code2 className="w-12 h-12 text-white/30" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Web Capabilities */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Modern Web Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                      {capability.icon}
                    </div>
                  </div>

                  <h3 className="text-white font-semibold mb-4">
                    {capability.title}
                  </h3>

                  <div className="space-y-2">
                    {capability.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="text-blue-400">•</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  <PreLoader />
      <Footer />
    </div>
  );
};

export default WebDeveloperPortfolio;
