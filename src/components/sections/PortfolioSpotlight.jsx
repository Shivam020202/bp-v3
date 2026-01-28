import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaExternalLinkAlt } from "react-icons/fa";

const spotlights = [
  {
    id: "healthcare",
    tab: "Healthcare",
    logo: "https://www.apollohospitals.com/themes/custom/apollo/assets/svg/apollo-logo.svg",
    badge: "Instagram Growth",
    title: "Apollo Hospitals Delhi",
    description:
      "Transformed Apollo Hospitals Delhi's Instagram presence with a modern, engaging design that resonated with their audience and drove more engagement and followers.",
    metrics: [
      { value: "300%", label: "Increase in Visits" },
      { value: "2x", label: "Increase in Engagement" },
      { value: "-40%", label: "Drop-off Rate" },
    ],
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1769591214/WhatsApp_Image_2026-01-28_at_2.33.21_PM_1_f76zqa.jpg",
    cardGradient: "linear-gradient(180deg, #017E97 0%, #00333dff 100%)", // Dark Sage
  },
  {
    id: "fashion",
    tab: "E-Commerce",
    logo: "https://www.apollohospitals.com/themes/custom/apollo/assets/svg/apollo-logo.svg",
    badge: "YouTube Growth",
    title: "Apollo Hospitals Delhi",
    description:
      "Transformed Apollo Hospitals Delhi's YouTube presence with a modern, engaging design that resonated with their audience and drove more engagement and followers.",
    metrics: [
      { value: "+150%", label: "Increase in Followers" },
      { value: "2x", label: "Increase in Engagement" },
      { value: "-40%", label: "Drop-off Rate" },
    ],
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1769591213/WhatsApp_Image_2026-01-28_at_2.33.20_PM_ta2whe.jpg",
    cardGradient: "linear-gradient(180deg, #017E97 0%, #00333dff 100%)", // Dark Coral/Rust
  },
  {
    id: "realestate",
    tab: "Real Estate",
    logo: "https://www.atulpeters.com/front/img/logo-04.png",
    badge: "YouTube Growth",
    title: " Dr. Atul Peters",
    description:
      "Transformed Dr. Atul Peters' YouTube presence with a modern, engaging design that resonated with their audience and drove more engagement and followers.",
    metrics: [
      { value: "+85%", label: "Increase in Followers" },
      { value: "2x", label: "Increase in Engagement" },
      { value: "-40%", label: "Drop-off Rate" },
    ],
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1769591214/WhatsApp_Image_2026-01-28_at_2.33.20_PM_1_tnpcks.jpg",
    cardGradient: "linear-gradient(180deg, #81CDBF 0%, #154779 100%)", // Warm Brown
  },
  {
    id: "realestate-insta",
    tab: "Real Estate",
    logo: "https://www.atulpeters.com/front/img/logo-04.png",
    badge: "Instagram Growth",
    title: "Dr Atul Peters",
    description:
      "Transformed Dr Atul Peters' Instagram presence with a modern, engaging design that resonated with their audience and drove more engagement and followers.",
    metrics: [
      { value: "+85%", label: "Increase in Followers" },
      { value: "2x", label: "Increase in Engagement" },
      { value: "-40%", label: "Drop-off Rate" },
    ],
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1769591214/WhatsApp_Image_2026-01-28_at_2.33.21_PM_vrha4m.jpg",
    cardGradient: "linear-gradient(180deg, #81CDBF 0%, #154779 100%)", // Another Sage/Green variant
  },
];

const PortfolioSpotlight = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 md:py-12 bg-white relative flex justify-center items-center">
      <div className="container mx-auto  max-w-[1500px]">
        {/* Main Card Container */}
        <motion.div
          animate={{ background: spotlights[activeTab].cardGradient }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="rounded-[2rem] md:rounded-[3rem] p-6 mobile:pt-10 md:p-12 relative overflow-visible shadow-2xl flex flex-col md:flex-row items-center gap-12 md:gap-8 min-h-[auto] md:min-h-[500px]"
        >
          {/* Content Side (Left on Desktop, Bottom on Mobile) */}
          <div className="w-full md:w-3/5 relative z-10 flex flex-col justify-center order-2 md:order-1">
            {/* Tabs (Logos) */}
            <div className="flex flex-wrap gap-4 mb-6 md:mb-8 justify-center md:justify-start">
              {spotlights.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-16 h-10 md:w-20 md:h-20 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 border backdrop-blur-sm p-2 ${
                    activeTab === index
                      ? "border-white/40 bg-white/20 shadow-lg scale-110"
                      : "border-white/5 hover:bg-white/15"
                  }`}
                >
                  <img
                    src={item.logo}
                    alt={item.tab}
                    className={`w-full h-full object-contain filter transition-all duration-300 ${
                      activeTab === index
                        ? "brightness-0 invert"
                        : "brightness-0 invert"
                    }`}
                  />
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center md:text-left"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-3 mb-4 mx-auto md:mx-0">
                  <div className="w-8 h-[1px] bg-coral-300" />
                  <span className="text-coral-300 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                    {spotlights[activeTab].badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-cream-50 mb-4 md:mb-6 leading-[1.1]">
                  {spotlights[activeTab].title}
                </h2>

                {/* Description */}
                <p className="text-warm-100/90 text-sm md:text-base mb-8 leading-relaxed max-w-lg font-light mx-auto md:mx-0 tracking-wide">
                  {spotlights[activeTab].description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10 text-left border-t border-white/10 pt-6">
                  {spotlights[activeTab].metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center md:items-start"
                    >
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl md:text-4xl font-display text-cream-50 leading-none">
                          {metric.value}
                        </span>
                        <FaArrowUp className="text-coral-300 text-xs md:text-sm mb-1" />
                      </div>
                      <span className="text-warm-200 text-[10px] md:text-xs uppercase font-bold tracking-wider text-center md:text-left">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="flex justify-center md:justify-start">
                  <button className="flex items-center gap-3 bg-cream-50 text-warm-900 px-6 md:px-8 py-3 md:py-3.5 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group text-xs md:text-sm tracking-wide">
                    <span>View Case Study</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      width={24}
                      height={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M15 13.5V9M15 9H10.5M15 9L9.00019 14.9999M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Side - Floating Phone */}
          {/* Mobile: Inside flow (relative), Desktop: Absolute overlapping right edge */}
          <div className="relative w-full md:w-auto md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-12 lg:-translate-x-16 order-1 md:order-2 flex justify-center z-20 pointer-events-none">
            <div className="relative w-[240px] md:w-[320px] rotate-[8deg] transition-transform duration-500 ease-out">
              {/* Real 3D Phone Body */}
              <div
                className="relative w-full h-auto bg-[#121212] rounded-[36px] md:rounded-[48px] overflow-hidden p-1"
                style={{
                  boxShadow: `0 0 0 1px #333,
                       0 0 0 3px #1a1a1a,
                       0 0 0 6px #050505,
                       25px 35px 60px -15px rgba(0,0,0,0.6),
                       inset 0 0 20px rgba(255,255,255,0.05)`,
                }}
              >
                {/* Dynamic Island / Notch Area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-30 flex justify-center items-center gap-2">
                  <div className="w-10 h-1 rounded-full bg-[#1a1a1a]"></div>
                  <div className="w-1 h-1 rounded-full bg-[#1a1a1a]"></div>
                </div>

                {/* Screen Content */}
                <div className="relative w-full h-auto bg-[#121212] overflow-hidden rounded-[30px] md:rounded-[42px]">
                  {/* Invisible Spacer Image to set Container Height */}
                  <img
                    src={spotlights[activeTab].image}
                    alt="Spacer"
                    className="w-full h-auto opacity-0 relative z-0"
                    aria-hidden="true"
                  />

                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={activeTab}
                      src={spotlights[activeTab].image}
                      alt="Project Screen"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                  </AnimatePresence>

                  {/* Screen Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40 pointer-events-none z-20" />
                  {/* Bottom Navigation Bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/70 rounded-full z-20 backdrop-blur-sm" />
                </div>
              </div>

              {/* Side Buttons (Volume/Power) - ABSOLUTE to main wrapper */}
              <div className="absolute top-20 -left-[5px] w-[5px] h-10 bg-[#2a2a2a] rounded-l-md shadow-inner" />
              <div className="absolute top-36 -left-[5px] w-[5px] h-10 bg-[#2a2a2a] rounded-l-md shadow-inner" />
              <div className="absolute top-28 -right-[5px] w-[5px] h-16 bg-[#2a2a2a] rounded-r-md shadow-inner" />
            </div>
          </div>

          {/* Right SVG/Circle Decoration (Background) */}
          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent rounded-r-[3.5rem] pointer-events-none mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSpotlight;
