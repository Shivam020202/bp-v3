import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaExternalLinkAlt } from "react-icons/fa";

const spotlights = [
  {
    id: "healthcare",
    tab: "Healthcare",
    badge: "Success Story",
    title: "MediEase Portal",
    description:
      "A patient-first digital ecosystem connecting millions to healthcare professionals with zero friction. We streamlined the appointment process and integrated secure telemedicine features.",
    metrics: [
      { value: "300%", label: "Increase in Visits" },
      { value: "2x", label: "Patient Retention" },
      { value: "-40%", label: "Drop-off Rate" },
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "fashion",
    tab: "E-Commerce",
    badge: "Redesign",
    title: "Velvet & Vogue",
    description:
      "Elevating a luxury fashion brand with an immersive, high-performance headless commerce experience. The new design focuses on visual storytelling and speed.",
    metrics: [
      { value: "+150%", label: "Conversion Rate" },
      { value: "0.8s", label: "Page Load Time" },
      { value: "5x", label: "Mobile Sales" },
    ],
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "realestate",
    tab: "Real Estate",
    badge: "Web App",
    title: "Urban Estates",
    description:
      "Revolutionizing property search with AI-driven recommendations and dynamic map integrations. Users can now find their dream home in half the time.",
    metrics: [
      { value: "+85%", label: "Qualified Leads" },
      { value: "3x", label: "User Engagement" },
      { value: "95%", label: "CSAT Score" },
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1473&auto=format&fit=crop",
  },
];

const PortfolioSpotlight = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 md:py-24 bg-white relative flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-8 max-w-[1500px]">
        {/* Main Card Container */}
        <div className="bg-[#2D1B36] rounded-[2.5rem] md:rounded-[3rem] p-6 mobile:pt-12 md:p-16 relative overflow-visible shadow-2xl flex flex-col md:flex-row items-center gap-12 md:gap-0 min-h-[auto] md:min-h-[550px]">
          {/* Content Side (Left on Desktop, Bottom on Mobile) */}
          <div className="w-full md:w-3/5 relative z-10 flex flex-col justify-center order-2 md:order-1">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 justify-center md:justify-start">
              {spotlights.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 md:px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                    activeTab === index
                      ? "bg-[#FFE5D9] border-[#FFE5D9] text-[#2D1B36]"
                      : "bg-transparent border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {item.tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="text-center md:text-left"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-3 mb-4 mx-auto md:mx-0">
                  <div className="w-8 h-[2px] bg-[#FFE5D9]" />
                  <span className="text-[#FFE5D9] font-bold text-xs uppercase tracking-[0.2em]">
                    {spotlights[activeTab].badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
                  {spotlights[activeTab].title}
                </h2>

                {/* Description */}
                <p className="text-white/80 text-sm md:text-lg mb-8 leading-relaxed max-w-lg font-light mx-auto md:mx-0">
                  {spotlights[activeTab].description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 md:mb-10 text-left">
                  {spotlights[activeTab].metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center md:items-start"
                    >
                      <div className="flex items-end gap-2 mb-1">
                        <span className="text-2xl md:text-4xl font-black text-white leading-none">
                          {metric.value}
                        </span>
                        <FaArrowUp className="text-[#FFE5D9] text-sm md:text-lg mb-1" />
                      </div>
                      <span className="text-white/60 text-[10px] md:text-xs uppercase font-bold tracking-wider text-center md:text-left">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="flex justify-center md:justify-start">
                  <button className="flex items-center gap-3 bg-white text-[#2D1B36] px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg group text-sm md:text-base">
                    <span>View Case Study</span>
                    <FaExternalLinkAlt className="text-xs md:text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Side - Floating Phone */}
          {/* Mobile: Inside flow (relative), Desktop: Absolute overlapping right edge */}
          <div className="relative w-full md:w-auto md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-12 lg:-translate-x-20 order-1 md:order-2 flex justify-center z-20 pointer-events-none">
            <div className="relative w-[280px] md:w-[340px] aspect-[9/19] rotate-[8deg] transition-transform duration-500 ease-out">
              {/* Real 3D Phone Body */}
              <div
                className="relative  w-full h-full bg-[#121212] rounded-[40px] md:rounded-[50px] overflow-hidden"
                style={{
                  boxShadow: `0 0 0 1px #333,
                       0 0 0 3px #1a1a1a,
                       0 0 0 6px #000,
                       20px 30px 50px -10px rgba(0,0,0,0.5),
                       inset 0 0 20px rgba(255,255,255,0.1)`,
                }}
              >
                {/* Dynamic Island / Notch Area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30 flex justify-center items-center gap-3">
                  <div className="w-12 h-1.5 rounded-full bg-[#1a1a1a]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]"></div>
                </div>

                {/* Screen Content */}
                <div className="relative w-full h-full bg-[#121212] overflow-hidden rounded-[32px] md:rounded-[42px]">
                  <AnimatePresence>
                    <motion.img
                      key={activeTab}
                      src={spotlights[activeTab].image}
                      alt="Project Screen"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Screen Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-40 pointer-events-none z-20" />
                  {/* Bottom Navigation Bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/70 rounded-full z-20 backdrop-blur-sm" />
                </div>
              </div>

              {/* Side Buttons (Volume/Power) - ABSOLUTE to main wrapper */}
              <div className="absolute top-24 -left-[7px] w-[7px] h-12 bg-[#2a2a2a] rounded-l-md shadow-inner" />
              <div className="absolute top-40 -left-[7px] w-[7px] h-12 bg-[#2a2a2a] rounded-l-md shadow-inner" />
              <div className="absolute top-32 -right-[7px] w-[7px] h-20 bg-[#2a2a2a] rounded-r-md shadow-inner" />
            </div>
          </div>

          {/* Right SVG/Circle Decoration (Background) */}
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-white/5 to-transparent rounded-r-[3rem] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSpotlight;
