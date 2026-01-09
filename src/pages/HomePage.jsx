import ScrollVideoHero from "../components/sections/hero/ScrollVideoHero";
import AboutCompany from "../components/sections/AboutCompany";
import OurClients from "../components/sections/OurClients";
import Portfolio from "../components/sections/Portfolio";
import BeforeAfter from "../components/sections/BeforeAfter";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Gallery from "../components/sections/Gallery";

const HomePage = () => {
  return (
    <>
      <ScrollVideoHero />
      <AboutCompany />
      <OurClients />
      <Portfolio />
      {/* <BeforeAfter /> */}
      <WhyChooseUs />
      {/* <Gallery /> */}
    </>
  );
};

export default HomePage;
