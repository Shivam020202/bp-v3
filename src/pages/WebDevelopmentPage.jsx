import ServiceHero from "../components/sections/services/ServiceHero";
import KeyBenefits from "../components/sections/services/KeyBenefits";
import WhyChooseService from "../components/sections/services/WhyChooseService";
import DevelopmentJourney from "../components/sections/services/DevelopmentJourney";
import CaseStudies from "../components/sections/services/CaseStudies";
import ServiceFAQ from "../components/sections/services/ServiceFAQ";
import ServiceTestimonials from "../components/sections/services/ServiceTestimonials";
import ServiceCTA from "../components/sections/services/ServiceCTA";

const WebDevelopmentPage = () => {
    // Hero video from Cloudinary
    const heroVideoUrl = "https://res.cloudinary.com/damfndmrm/video/upload/v1767779440/file_1_o6gkmf.mp4";

    return (
        <>
            <ServiceHero videoUrl={heroVideoUrl} />
            <KeyBenefits />
            <WhyChooseService />
            <DevelopmentJourney />
            <CaseStudies />
            <ServiceFAQ />
            <ServiceTestimonials />
            <ServiceCTA />
        </>
    );
};

export default WebDevelopmentPage;
