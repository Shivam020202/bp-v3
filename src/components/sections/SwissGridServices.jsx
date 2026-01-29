import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    description:
      "We architect belief systems. Uncovering the unique truth at the heart of your business to build a brand that resonates.",
    tags: [
      "Market Analysis",
      "Positioning",
      "Voice & Tone",
      "Brand Architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Visual Identity",
    description:
      "Crafting distinct visual languages. From logos to comprehensive design systems that work across every touchpoint.",
    tags: ["Logo Design", "Typography", "Color Theory", "Design Systems"],
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Digital Experience",
    description:
      "Websites that perform. Blending aesthetic excellence with technical robustness to turn visitors into customers.",
    tags: ["Web Design", "UI/UX", "WebGL", "E-Commerce"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Growth Marketing",
    description:
      "Campaigns that convert. Data-driven strategies designed to scale your reach and maximize ROI.",
    tags: ["SEO/SEM", "Content Strategy", "Social Media", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "AI Integration",
    description:
      "Future-proofing your workflow. Implementing cutting-edge AI tools to automate the mundane and amplify creativity.",
    tags: ["LLM Deployment", "Automation", "Predictive AI", "Consulting"],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Content Production",
    description:
      "Stories that stick. High-fidelity video, photography, and copy that captures your brand's narrative.",
    tags: ["Video Production", "Photography", "Copywriting", "Motion Design"],
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2622&auto=format&fit=crop",
  },
];

const SwissGridServices = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
              Global Ecosystem
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-black mb-6">
              TRUSTED BY <br />
              <span className="text-transparent bg-clip-text bg-[#C4A484] italic font-serif pr-2">
                THE GIANTS
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-light">
              We partner with the world's most ambitious brands to define what's
              possible in the digital age.
            </p>
          </div>

          <div className="flex-shrink-0 mb-2 md:mb-0">
            <button className="group flex items-center gap-2 border-b border-black pb-1 hover:border-[#C4A484] hover:text-[#C4A484] transition-all duration-300">
              <span className="font-mono text-sm uppercase tracking-widest">
                View All Services
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 border-l border-t border-warm-900/50">
          {services.map((service, index) => (
            <GridCell key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GridCell = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      className="relative border-r border-b border-warm-900/50 h-[250px] md:h-[300px] group cursor-pointer overflow-hidden bg-white"
    >
      {/* Background Image (Visible by default) */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-0 bg-warm-900"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-full p-4 md:p-10 flex flex-col justify-between transition-colors duration-300">
        {/* Top: ID & Tags */}
        <div className="flex justify-between items-start">
          <span
            className={`font-mono text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-300 ${
              !isHovered ? "text-white/70" : "text-warm-900/40"
            }`}
          >
            ( {service.id} )
          </span>
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
            className="hidden md:flex flex-col items-end gap-1"
          >
            {service.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] uppercase tracking-wider text-warm-900/60"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom: Title & Description */}
        <div>
          <h3
            className={`text-xl md:text-3xl lg:text-4xl font-display font-medium mb-3 md:mb-4 leading-tight transition-colors duration-300 ${
              !isHovered ? "text-white" : "text-warm-900"
            }`}
          >
            {service.title}
          </h3>

          <div className="relative overflow-hidden">
            {/* Default State: Description (Visible on Image) */}
            <motion.p
              animate={{ y: isHovered ? 20 : 0, opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className={`text-xs md:text-sm leading-relaxed max-w-xs ${
                !isHovered ? "text-white/80" : "text-warm-900/60"
              }`}
            >
              <span className="line-clamp-3 md:line-clamp-none">
                {service.description}
              </span>
            </motion.p>

            {/* Hover State: Button */}
            {/* Keep functionality: Show button on hover */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute top-0 left-0"
            >
              <button className="flex items-center gap-2 md:gap-3 text-warm-900 group-hover:gap-3 md:group-hover:gap-4 transition-all">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                  Dig Deeper
                </span>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-warm-900/10 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Corner (Visible on Hover/Plain) */}
      <div
        className={`absolute top-0 right-0 p-4 transition-opacity duration-300 ${
          !isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-warm-900/20" />
      </div>
    </div>
  );
};

export default SwissGridServices;
