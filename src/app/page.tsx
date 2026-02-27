import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Header from "@/components/Header";

function WebDeveloperPortfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a1a]">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
}

export default WebDeveloperPortfolio;
