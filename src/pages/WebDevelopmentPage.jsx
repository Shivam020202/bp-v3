import TechStackHero from "../components/sections/services/TechStackHero";
import PortfolioShowcase from "../components/sections/services/PortfolioShowcase";
import DevelopmentJourney from "../components/sections/services/DevelopmentJourney";
import WhyChooseUs from "../components/sections/services/WhyChooseUs";
import AboutService from "../components/sections/services/AboutService";
import FAQ from "../components/sections/services/FAQ";

const WebDevelopmentPage = () => {
    // Hero video from Cloudinary
    const heroVideoUrl = "https://res.cloudinary.com/damfndmrm/video/upload/v1767787523/49949B00-9B30-46C4-Bcac-B91c47930d82_kiwg7n.mp4";

    return (
        <div className="relative">
            {/* Hero - Video Only */}
            <TechStackHero videoUrl={heroVideoUrl} />

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
