import SocialMediaBannerHero from "../components/sections/services/SocialMediaBannerHero";
import ServiceAboutSection from "../components/sections/services/ServiceAboutSection";
import PortfolioShowcase from "../components/sections/services/PortfolioShowcase";
import ServiceJourney from "../components/sections/services/ServiceJourney";
import WhyChooseUs from "../components/sections/services/WhyChooseUs";
import ServiceFAQSection from "../components/sections/services/ServiceFAQSection";
import { servicesData } from "../constants/servicesData";

const SocialMediaPage = () => {
    const service = servicesData["social-media"];

    return (
        <div className="relative">
            {/* Hero - Banner */}
            <SocialMediaBannerHero />

            {/* Services Section */}
            <ServiceAboutSection
                title={service.title}
                titleHighlight={service.titleHighlight}
                services={service.services}
            />

            {/* Portfolio Showcase */}
            <PortfolioShowcase />

            {/* Journey/Process */}
            <ServiceJourney journey={service.journey} />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* FAQ */}
            <ServiceFAQSection faqs={service.faqs} />
        </div>
    );
};

export default SocialMediaPage;
