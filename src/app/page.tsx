import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Capabilities from "@/components/sections/Capabilities";
import Header from "@/components/Header";

const WebDeveloperPortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-default-900 via-black/60 to-default-100 text-foreground overflow-hidden">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Capabilities />
      <Footer />
    </div>
  );
};

export default WebDeveloperPortfolio;
