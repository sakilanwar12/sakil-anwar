import MyWork from "./Components/MyWork";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import ClosingQuote from "./Components/ClosingQuote";
import Contact from "@/components/sections/Contact";
import Hero from "./Components/Hero";

function WebDeveloperPortfolio() {
  return (
    <>
      <Hero />
      <MyWork />
      <Experience />
      <TechStack />
      <Skills />
      <ClosingQuote />
      <Contact />
    </>
  );
}

export default WebDeveloperPortfolio;
