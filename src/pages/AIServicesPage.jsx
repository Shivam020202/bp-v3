import AIHero from "../components/sections/ai-services/AIHero";
import AICapabilities from "../components/sections/AICapabilities";
import AIWorkShowcase from "../components/sections/ai-services/AIWorkShowcase";
import AITechTicker from "../components/sections/ai-services/AITechTicker";
import AIProcess from "../components/sections/ai-services/AIProcess";
import AIStats from "../components/sections/ai-services/AIStats";
import AIBentoGrid from "../components/sections/ai-services/AIBentoGrid";
import AIPartners from "../components/sections/ai-services/AIPartners";
import AIFaq from "../components/sections/ai-services/AIFaq";
import { useEffect } from "react";

const AIServicesPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Solutions | Branding Pioneers";
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <AIHero />
      <div className="relative z-20 bg-white">
        <AITechTicker />
        <AIProcess />
        <AIStats />
        <AIBentoGrid />
        {/* <AICapabilities /> */}
        <AIWorkShowcase />
        <AIFaq />
        <AIPartners />
      </div>
    </main>
  );
};

export default AIServicesPage;
