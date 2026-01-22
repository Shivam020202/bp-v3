import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const spotlights = [
  {
    id: "fintech",
    tab: "Fintech",
    badge: "New Release",
    title: "Finance Flow Pro",
    description:
      "Transform your financial management into seamless productivity. Track expenses, invest wisely, and collaborate on budgets like never before.",
    features: [
      "Real-time transaction categorization",
      "AI-powered spending predictions",
      "Biometric security integration",
      "Multi-currency support",
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    // Warm Gold Gradient
    gradient: "from-[#F9F5F1] to-[#E8DCC6]",
    textColor: "text-[#5C4D3C]",
    accentColor: "#C69563",
  },
  {
    id: "ecommerce",
    tab: "E-Commerce",
    badge: "Best Seller",
    title: "Luxe Market App",
    description:
      "Reimagining the luxury shopping experience. Immersive 3D product previews and a seamless checkout flow that converts.",
    features: [
      "3D Product Visualization",
      "One-click checkout",
      "Dynamic personalization",
      "Global inventory sync",
    ],
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop",
    // Cool Slate Gradient
    gradient: "from-[#F0F4F8] to-[#D9E2EC]",
    textColor: "text-[#243B53]",
    accentColor: "#334E68",
  },
  {
    id: "dashboard",
    tab: "Analytics",
    badge: "Enterprise",
    title: "DataVision AI",
    description:
      "Enterprise-grade analytics dashboard processing millions of data points into actionable visual insights instantly.",
    features: [
      "Real-time data streaming",
      "Customizable widgets",
      "Export to PDF/Excel",
      "Role-based access control",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    // Soft Purple Gradient
    gradient: "from-[#F3F0FF] to-[#E0D7FF]",
    textColor: "text-[#4C1D95]",
    accentColor: "#7C3AED",
  },
];

const PortfolioSpotlight = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Floating Tab Switcher - "On Top" feel */}
        <div className="flex justify-center mb-12 relative z-20">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-1.5 rounded-full shadow-lg flex gap-2">
            {spotlights.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                  activeTab === index
                    ? "text-white shadow-md transform scale-105"
                    : "text-gray-500 hover:text-gray-900 bg-transparent"
                }`}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-black rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Floating Card Container */}
        <div className="relative mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br ${spotlights[activeTab].gradient} relative z-10 min-h-[600px] md:min-h-[500px]`}
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-16 relative">
                {/* Left Content */}
                <div className="flex flex-col justify-center items-start relative z-10 h-full">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm shadow-sm mb-6 text-sm font-bold"
                    style={{ color: spotlights[activeTab].accentColor }}
                  >
                    <span>⚡</span> {spotlights[activeTab].badge}
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] ${spotlights[activeTab].textColor}`}
                  >
                    {spotlights[activeTab].title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`text-lg md:text-xl font-medium mb-8 leading-relaxed max-w-md ${spotlights[activeTab].textColor} opacity-80`}
                  >
                    {spotlights[activeTab].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 gap-3 mb-10 w-full max-w-md"
                  >
                    {spotlights[activeTab].features.map((feat, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 font-semibold ${spotlights[activeTab].textColor} opacity-90`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-current" />
                        {feat}
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <FaCheckCircle className="text-green-500" /> View Case
                      Study
                    </button>
                    <button className="flex items-center gap-3 bg-white/40 border border-white/50 text-black px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors duration-300 backdrop-blur-sm">
                      Live Preview
                    </button>
                  </motion.div>
                </div>

                {/* Right Phone Mockup - Floating Effect */}
                <div className="relative h-[400px] lg:h-auto flex items-center justify-center lg:justify-end lg:pr-10">
                  <motion.div
                    initial={{ y: 50, rotateY: -10, rotateX: 5, opacity: 0 }}
                    animate={{ y: 0, rotateY: -10, rotateX: 5, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      damping: 20,
                      delay: 0.4,
                    }}
                    className="relative w-[280px] md:w-[340px] aspect-[9/19] bg-black rounded-[50px] border-[12px] border-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden transform lg:absolute lg:top-8 lg:right-0 lg:bottom-auto lg:translate-x-12 z-20"
                  >
                    {/* Dynamic Screen Image */}
                    <img
                      src={spotlights[activeTab].image}
                      alt="Screen"
                      className="w-full h-full object-cover"
                    />

                    {/* Phone Reflections/Glass Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[38px]" />
                  </motion.div>

                  {/* Decorative Elements behind phone */}
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl -z-10" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSpotlight;
