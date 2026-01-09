import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bloom Beauty",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=800&fit=crop",
    result: "200% Growth",
    year: "2024",
  },
  {
    id: 2,
    title: "TechVenture",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    result: "3x Engagement",
    year: "2023",
  },
  {
    id: 3,
    title: "Green Eats",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop",
    result: "50k+ Followers",
    year: "2024",
  },
  {
    id: 4,
    title: "Artisan Coffee",
    category: "Packaging",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=800&fit=crop",
    result: "Retail Expansion",
    year: "2023",
  },
  {
    id: 5,
    title: "FitLife App",
    category: "Product Design",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&h=800&fit=crop",
    result: "1M+ Downloads",
    year: "2024",
  },
];

const variants = {
  enter: (direction) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    y: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleProjectClick = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section className="relative w-full pb-16 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Compact Header */}
        <div className="mb-12 border-b border-black/10 pb-6 flex items-end justify-between">
          <div>
            <span className="text-blue-600 font-mono text-xs uppercase tracking-[0.2em] mb-2 block">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              DIGITAL IMPACT
            </h2>
          </div>
          <p className="hidden md:block text-gray-500 text-xs max-w-xs text-right">
            Defining categories through bold strategy and meticulous design.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-auto lg:h-[500px]">
          {/* Left: Compact Project List */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(index)}
                  className={`group relative border-b border-black/5 last:border-0 py-4 cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? "bg-gray-50/50 lg:bg-transparent"
                      : "hover:bg-gray-50/30 lg:hover:bg-transparent"
                  }`}
                >
                  {/* Title Row */}
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[10px] font-mono transition-colors ${
                          isActive ? "text-blue-600" : "text-gray-300"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <h3
                        className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${
                          isActive
                            ? "text-black pl-2"
                            : "text-gray-400 group-hover:text-black group-hover:pl-2"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Desktop Arrow (only shows on active) */}
                    <div className="hidden lg:block">
                      <ArrowUpRight
                        className={`w-4 h-4 transition-all duration-300 ${
                          isActive
                            ? "opacity-100 text-blue-600 translate-x-0"
                            : "opacity-0 -translate-x-2"
                        }`}
                      />
                    </div>

                    {/* Mobile Arrow for Accordion */}
                    <div className="lg:hidden">
                      <div
                        className={`transition-transform duration-300 ${
                          isActive ? "rotate-90" : "rotate-0"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Inline Info & Image (Mobile Only - Accordion) */}
                  <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "max-h-[400px] opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <div className="px-2 pb-2">
                      <div className="flex gap-2 mb-3">
                        <span className="text-[10px] uppercase font-bold bg-black text-white px-2 py-0.5 rounded-full">
                          {project.result}
                        </span>
                        <span className="text-[10px] uppercase font-mono text-gray-500 pt-0.5">
                          {project.category}
                        </span>
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Desktop Sub-info (Only visible when active) */}
                  <div
                    className="hidden lg:flex items-center gap-4 pl-10 overflow-hidden transition-all duration-300"
                    style={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? "0.5rem" : 0,
                    }}
                  >
                    <span className="text-xs font-mono uppercase text-gray-400">
                      {project.category}
                    </span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {project.result}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sliding Image Preview (Desktop Only) */}
          <div className="hidden lg:block w-7/12 relative h-full rounded-xl overflow-hidden bg-gray-100">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <p className="text-xs font-bold font-mono tracking-widest text-black">
                    {projects[activeIndex].year}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
