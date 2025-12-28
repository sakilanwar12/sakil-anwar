import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Header from "@/components/Header";
import { MouseEffectProvider } from "@/context/MouseEffectContext";
import MouseEffect from "@/components/MouseEffect";
import FallingParticlesAnimation from "@/components/animations/falling-particles-animation";
import GridBackground from "@/components/GridBackground";
import SocialItems from "@/components/sections/Hero/SocialItems";

function WebDeveloperPortfolio() {
  return (
    <div>
      <MouseEffectProvider>
        <MouseEffect />
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </MouseEffectProvider>

      <FallingParticlesAnimation />

      <GridBackground />
      <SocialItems />
    </div>
  );
}

export default WebDeveloperPortfolio;
