import Header from "@/components/Header";
import MyStory from "./Components/MyStory";
import MyWork from "./Components/MyWork";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import VisualPlayground from "@/components/sections/Gallery";
import TechStack from "@/components/sections/TechStack";
import ClosingQuote from "@/components/sections/ClosingQuote";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "./Components/Hero";

function WebDeveloperPortfolio() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <Hero />
      <MyWork />
      <Experience />
      <TechStack />
      <MyStory />
      <Skills />
      <VisualPlayground />
      <ClosingQuote />

      <Contact />
      <Footer />
    </main>
  );
}

export default WebDeveloperPortfolio;
