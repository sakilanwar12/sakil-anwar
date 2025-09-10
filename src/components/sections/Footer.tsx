import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
       <footer className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Looking for a developer who can create high-performance, interactive web experiences?
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          <p className="text-slate-400">
            San Francisco, CA
          </p>
        </div>
      </footer>
  );
}

export default Footer;
