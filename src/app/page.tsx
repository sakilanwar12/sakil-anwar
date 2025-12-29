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
import AdminSidebar from "@/components/admin/AdminSidebar";
import { portfolioDb } from "@/lib/db-service";

export const dynamic = "force-dynamic";

async function WebDeveloperPortfolio() {
  let homeData = null;
  let skillsData = null;
  let projectsData = null;

  try {
    const [home, skills, projects] = await Promise.all([
      portfolioDb.getHomeSection(),
      portfolioDb.getSkillsByCategory(), // This returns filtered/grouped view for display
      portfolioDb.getPublishedProjects(),
    ]);

    homeData = home;
    skillsData = skills;
    projectsData = projects;
  } catch (error) {
    console.error("Failed to fetch portfolio data", error);
  }

  return (
    <div>
      <MouseEffectProvider>
        <MouseEffect />
        <div className="min-h-screen">
          <Header />
          <Hero data={homeData?.hero} />
          <Skills data={skillsData} />
          <Projects data={projectsData} />
          <Footer />
        </div>
      </MouseEffectProvider>

      <FallingParticlesAnimation />

      <GridBackground />
      <SocialItems />
      <AdminSidebar />
    </div>
  );
}

export default WebDeveloperPortfolio;
