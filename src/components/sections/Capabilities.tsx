import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Rocket,
  Zap,
  Gamepad2,
  Smartphone,
  Shield,
  Settings,
} from "lucide-react";
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
    
function Capabilities() {
  return (
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

  )
}

export default Capabilities