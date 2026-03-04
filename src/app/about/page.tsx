import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import ClosingQuote from "../Components/ClosingQuote";
import SubHero from "../Components/SubHero";

export default function AboutPage() {
  return (
    <>
      <SubHero title="About Me" subtitle="The Story Behind the Code" />
      <Experience />
      <TechStack />
      <Skills />
      <ClosingQuote />
    </>
  );
}
