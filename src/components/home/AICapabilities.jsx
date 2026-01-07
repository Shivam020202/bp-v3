import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCogs,
  FaVideo,
  FaImage,
  FaUserTie,
  FaArrowRight,
} from "react-icons/fa";
import NeuButton from "../NeuButton";

const AICapabilities = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 0,
      label: "AUTOMATION",
      title: "Workflow Automation",
      description:
        "Streamline complex business operations with custom AI agents. We build systems that handle repetitive tasks, data analysis, and reporting with human-like precision.",
      benefit: "Efficiency: +400%",
      icon: <FaCogs />,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
    },
    {
      id: 1,
      label: "VIDEO_GEN",
      title: "Generative Video",
      description:
        "Produce high-quality video content at scale. From personalized marketing messages to localized social media clips, generated instantly without traditional production costs.",
      benefit: "Scale: Infinite",
      icon: <FaVideo />,
      image:
        "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&h=800&fit=crop",
    },
    {
      id: 2,
      label: "VISUALS",
      title: "Visual Assets",
      description:
        "Create stunning, on-brand imagery for campaigns, websites, and social media. Our fine-tuned models generate photorealistic or stylized assets instantly.",
      benefit: "Speed: Instant",
      icon: <FaImage />,
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=800&fit=crop",
    },
    {
      id: 3,
      label: "ASSISTANTS",
      title: "Smart Assistants",
      description:
        "Deploy intelligent virtual assistants that understand your brand voice. Perfect for 24/7 customer support, lead qualification, and internal knowledge management.",
      benefit: "Availability: 24/7",
      icon: <FaUserTie />,
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=800&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b border-gray-200 pb-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">
              Strategic AI Integration
            </h2>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
              // Future-Proofing Brands
            </p>
          </div>
          <div className="text-right hidden md:block">
            <NeuButton className="group flex items-center gap-2 !px-5 !py-2.5 !bg-black !text-white !rounded-lg !text-sm !font-medium hover:!bg-gray-800 hover:!shadow-none transition-all">
              Explore AI Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
            </NeuButton>
          </div>
        </div>

        {/* The Control Panel */}
        <div className="bg-black text-white rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] border border-gray-800">
          {/* Menu - horizontal scroll on mobile, vertical sidebar on desktop */}
          <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible">
            <div className="hidden md:block p-6 border-b border-white/10 bg-white/5">
              <span className="text-xs font-mono text-gray-400">
                SELECT CAPABILITY
              </span>
            </div>

            {modules.map((mod, index) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(index)}
                className={`flex-shrink-0 md:flex-shrink md:w-full text-left p-4 md:p-6 border-r md:border-r-0 md:border-b border-white/5 transition-all duration-200 relative group ${
                  activeModule === index
                    ? "bg-white text-black"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <span
                    className={`font-mono text-[10px] md:text-xs uppercase tracking-widest ${
                      activeModule === index ? "text-black/60" : "text-gray-600"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  {/* Desktop Title */}
                  <span
                    className={`hidden md:block font-bold text-sm ${
                      activeModule === index ? "text-black" : "text-white"
                    }`}
                  >
                    {mod.label}
                  </span>
                  {activeModule === index && (
                    <FaArrowRight className="hidden md:block text-xs" />
                  )}
                </div>
                {/* Mobile Title Icon (centered) */}
                <div className="md:hidden text-2xl mt-1 mb-1 mx-auto w-max">
                  {mod.icon}
                </div>
                <span
                  className={`md:hidden font-bold text-xs block text-center mt-1 ${
                    activeModule === index ? "text-black" : "text-white"
                  }`}
                >
                  {mod.label}
                </span>
              </button>
            ))}
          </div>

          {/* Viewport / Display */}
          <div className="flex-1 relative p-6 md:p-12 bg-zinc-900 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            {/* Content */}
            <div className="relative z-10 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col md:flex-row gap-8 md:gap-12 items-center"
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
                    <div className="inline-flex items-center justify-center md:justify-start gap-3 text-gray-400 mb-2">
                      <span className="text-2xl">
                        {modules[activeModule].icon}
                      </span>
                      <span className="font-mono text-sm uppercase tracking-widest border-l border-gray-700 pl-3">
                        {modules[activeModule].label}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold font-display leading-tight">
                      {modules[activeModule].title}
                    </h3>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                      {modules[activeModule].description}
                    </p>

                    <div className="inline-block px-4 py-2 border border-white/20 rounded bg-white/5 backdrop-blur-sm mt-2">
                      <span className="text-sm font-mono text-green-400 font-bold">
                        {modules[activeModule].benefit}
                      </span>
                    </div>
                  </div>

                  {/* Square Image */}
                  <div className="w-full md:w-1/2 max-w-sm order-1 md:order-2">
                    <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black">
                      <img
                        src={modules[activeModule].image}
                        alt={modules[activeModule].title}
                        className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110"
                      />
                      {/* Overlay tech lines */}
                      <div className="absolute inset-0 border-[1px] border-white/10 m-2 rounded pointer-events-none" />
                      <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
