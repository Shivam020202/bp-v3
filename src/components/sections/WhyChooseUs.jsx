import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const principles = [
  {
    id: "speed",
    title: "SPEED IS A FEATURE",
    description:
      "We don't believe in month-long onboarding. We ship fast while maintaining world-class quality, because momentum is everything in the digital age.",
    image: "/Swimming.png",
  },
  {
    id: "craft",
    title: "OBSESSED WITH CRAFT",
    description:
      "Pixel-perfect isn't a goal; it's our baseline. We sweat the details that others ignore, creating experiences that feel premium and polished.",
    image: "/Sculpture Studio.png",
  },
  {
    id: "data",
    title: "DATA, NOT GUESSES",
    description:
      "Pretty isn't enough. We build strategies backed by hard data and user behavior analysis to ensure specific, measurable results.",
    image: "/Data Scientist.png",
  },
  {
    id: "future",
    title: "BUILT FOR TOMORROW",
    description:
      "We use cutting-edge tech stacks that scale. No legacy code, no bloated frameworks. Just clean, modern, future-proof engineering.",
    image: "/Content Planning.png",
  },
];

const WhyChooseUs = () => {
  const [activeId, setActiveId] = useState(principles[0].id);

  return (
    <section className="pb-8 md:pb-10 bg-white text-black overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-4 max-w-2xl">
          <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
            Our DNA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
            WHY WE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 italic font-serif pr-2">
              WIN.
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-10 lg:gap-20">
          {/* Left: The Manifesto List */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4 md:gap-6 z-10">
            {principles.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className="cursor-pointer group relative"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  {/* Status Indicator Line */}
                  <motion.div
                    className={`w-6 md:w-8 h-[2px] transition-colors duration-300 ${
                      activeId === item.id ? "bg-black" : "bg-gray-200"
                    }`}
                    layout
                  />

                  <h3
                    className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tighter transition-colors duration-300 ${
                      activeId === item.id
                        ? "text-black"
                        : "text-gray-200 group-hover:text-gray-400"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeId === item.id ? "auto" : 0,
                    opacity: activeId === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="overflow-hidden pl-9 md:pl-[3rem]"
                >
                  <p className="text-gray-500 pt-2 md:pt-3 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right: The Visual Anchor - Now visible on mobile too */}
          <div className="w-full lg:w-5/12 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] flex items-center justify-center rounded-2xl overflow-hidden order-first lg:order-last">
            {/* Main Graphic - Image */}
            <div className="relative w-full h-full p-4 sm:p-6 md:p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeId}
                  src={principles.find((p) => p.id === activeId).image}
                  alt="Visual"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-contain "
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
