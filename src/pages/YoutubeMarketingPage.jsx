import ServiceBannerHero from "../components/sections/services/ServiceBannerHero";
import ServiceAboutSection from "../components/sections/services/ServiceAboutSection";
import PortfolioShowcase from "../components/sections/services/PortfolioShowcase";
import ServiceJourney from "../components/sections/services/ServiceJourney";
import WhyChooseUs from "../components/sections/services/WhyChooseUs";
import ServiceFAQSection from "../components/sections/services/ServiceFAQSection";
import { servicesData } from "../constants/servicesData";

const YoutubeMarketingPage = () => {
    const service = servicesData["youtube-marketing"];

    return (
        <div className="relative">
            {/* Hero - Banner */}
            <ServiceBannerHero
                title={service.title}
                titleHighlight={service.titleHighlight}
                subtitle={service.subtitle}
                description={service.description}
                heroImage={service.heroImage}
                stats={service.stats}
            />

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

export default YoutubeMarketingPage;
