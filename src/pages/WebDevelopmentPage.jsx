import WebDevBannerHero from "../components/sections/services/WebDevBannerHero";
import PortfolioShowcase from "../components/sections/services/PortfolioShowcase";
import DevelopmentJourney from "../components/sections/services/DevelopmentJourney";
import WhyChooseUs from "../components/sections/services/WhyChooseUs";
import AboutService from "../components/sections/services/AboutService";
import FAQ from "../components/sections/services/FAQ";

const WebDevelopmentPage = () => {
    return (
        <div className="relative">
            {/* Hero - Banner */}
            <WebDevBannerHero />

            {/* Sections with alternating backgrounds */}
            <AboutService />
            <PortfolioShowcase />
            <DevelopmentJourney />
            <WhyChooseUs />
            <FAQ />
        </div>
    );
};

export default WebDevelopmentPage;
