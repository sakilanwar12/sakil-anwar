import WorkProjectGrid from "@/components/sections/WorkProjectGrid";
import SubHero from "../Components/SubHero";

export default function WorkPage() {
  return (
    <>
      <SubHero
        title="My Works"
        subtitle="Every project tells a story — here are mine"
      />
      <WorkProjectGrid />
    </>
  );
}
