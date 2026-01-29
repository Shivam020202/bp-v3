import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants/projects";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaHeart,
  FaStar,
  FaTrophy,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import portfolioVideo from "../assets/portfolio-demo/portfolio-video.mp4";
import PortfolioSpotlight from "../components/sections/PortfolioSpotlight";
import DeviceShowcase from "../components/sections/DeviceShowcase";
const PortfolioPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const projectsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isProjectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [clientImageIndices, setClientImageIndices] = useState({});
  const [openFaqIndex, setOpenFaqIndex] = useState(1); // Default to second FAQ open

  const filters = [
    { id: "all", label: "All Projects", icon: "🎨" },
    { id: "branding", label: "Branding", icon: "✨" },
    { id: "web", label: "Web Design", icon: "💻" },
    { id: "social", label: "Social Media", icon: "📱" },
    { id: "packaging", label: "Packaging", icon: "📦" },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: FaTrophy },
    { number: "98%", label: "Client Satisfaction", icon: FaHeart },
    { number: "50+", label: "Industry Awards", icon: FaStar },
    { number: "4.9", label: "Average Rating", icon: FaStar },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

<<<<<<< Updated upstream
  // All client logos in a flat array
  const allClientLogos = [
    { name: "Max Home", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/max_home-logo_ya130a.png" },
    { name: "SCOD", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/scod-favicon_b2d7cp.png" },
    { name: "La Midas", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/La-Midas-Logo_swzrlp.webp" },
    { name: "IGEHRC", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/IGEHRC-new-logo_ydf3ww.webp" },
    { name: "Lifecare", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/lifecare-new-logo_xerg1l.webp" },
    { name: "Aureus", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/aureus-new-logo_lbyme0.webp" },
    { name: "Astrovazar", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/astrovazar_wbf12h.webp" },
    { name: "Ecovana", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/ecovana-logo_a1r4ct.webp" },
    { name: "DST", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/dst_k894jm.webp" },
    { name: "Ivy", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/ivy-new-logo_tnjcme.webp" },
    { name: "Cloudnine", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/cloudnine-logo_mcocql.webp" },
    { name: "AIIMS", logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580793/aiims_pleq0o.webp" },
=======
  // Client logos data from homepage - each logo repeated 3 times for cycling effect
  const clientsData = [
    {
      name: "Max Home",
      images: [
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/max_home-logo_ya130a.png",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/max_home-logo_ya130a.png",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/max_home-logo_ya130a.png",
      ],
    },
    {
      name: "SCOD",
      images: [
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/scod-favicon_b2d7cp.png",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/scod-favicon_b2d7cp.png",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/scod-favicon_b2d7cp.png",
      ],
    },

    {
      name: "IGEHRC",
      images: [
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/IGEHRC-new-logo_ydf3ww.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/IGEHRC-new-logo_ydf3ww.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/IGEHRC-new-logo_ydf3ww.webp",
      ],
    },
    {
      name: "LCH Africa",
      images: [
        "https://lchafrica.com/img/cropped-FINAL-LOGO-svg.png",
        "https://lchafrica.com/img/cropped-FINAL-LOGO-svg.png",
        "https://lchafrica.com/img/cropped-FINAL-LOGO-svg.png",
      ],
    },
    {
      name: "Aureus",
      images: [
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/aureus-new-logo_lbyme0.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/aureus-new-logo_lbyme0.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/aureus-new-logo_lbyme0.webp",
      ],
    },
    {
      name: "Astrovazar",
      images: [
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/astrovazar_wbf12h.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/astrovazar_wbf12h.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/astrovazar_wbf12h.webp",
      ],
    },
    {
      name: "Ecovana",
      images: [
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/ecovana-logo_a1r4ct.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/ecovana-logo_a1r4ct.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/ecovana-logo_a1r4ct.webp",
      ],
    },
    {
      name: "DST",
      images: [
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/dst_k894jm.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/dst_k894jm.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/dst_k894jm.webp",
      ],
    },
    {
      name: "Ivy",
      images: [
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/ivy-new-logo_tnjcme.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/ivy-new-logo_tnjcme.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/ivy-new-logo_tnjcme.webp",
      ],
    },
    {
      name: "Cloudnine",
      images: [
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/cloudnine-logo_mcocql.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/cloudnine-logo_mcocql.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/cloudnine-logo_mcocql.webp",
      ],
    },
    {
      name: "AIIMS",
      images: [
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580793/aiims_pleq0o.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580793/aiims_pleq0o.webp",
        "https://res.cloudinary.com/damfndmrm/image/upload/v1769580793/aiims_pleq0o.webp",
      ],
    },
>>>>>>> Stashed changes
  ];

  // Number of card slots to display
  const cardSlots = 9;

  // Initialize each card slot with a different random logo index
  useEffect(() => {
    const initialIndices = {};
    const usedIndices = new Set();
    for (let i = 0; i < cardSlots; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * allClientLogos.length);
      } while (usedIndices.has(randomIndex));
      usedIndices.add(randomIndex);
      initialIndices[i] = randomIndex;
    }
    setClientImageIndices(initialIndices);
  }, []);

  // Function to cycle to a random different logo for a specific card slot
  const cycleClientImage = (slotIndex) => {
    setClientImageIndices((prev) => {
      const currentIndex = prev[slotIndex];
      const otherSlotIndices = Object.entries(prev)
        .filter(([key]) => parseInt(key) !== slotIndex)
        .map(([, value]) => value);

      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * allClientLogos.length);
      } while (newIndex === currentIndex || otherSlotIndices.includes(newIndex));

      return { ...prev, [slotIndex]: newIndex };
    });
  };

  // Auto-cycle each card slot at different random intervals
  useEffect(() => {
    const intervals = Array.from({ length: cardSlots }, (_, index) => {
      const randomInterval = 3000 + Math.random() * 4000; // 3-7 seconds, random for each
      return setInterval(() => {
        cycleClientImage(index);
      }, randomInterval);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={portfolioVideo} type="video/mp4" />
          </video>

          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-xs font-medium mb-8 tracking-[0.2em] uppercase"
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span>Selected Works</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                IMPACT.
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-200 text-lg md:text-2xl mb-10 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Transforming visions into visual masterpieces that captivate,
              engage, and convert.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="group relative overflow-hidden flex items-center gap-3 px-10 py-3 bg-white text-black rounded-full font-medium text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Work</span>
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                className="group relative overflow-hidden flex items-center gap-3 px-10 py-3 bg-white/10 backdrop-blur-sm border border-white/50 text-white rounded-full font-medium text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get in Touch</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Removed if redundant */}
      </section>

      {/* Stats Section */}
      {/* <section ref={statsRef} className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-white to-cream-100 opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-warm-400 to-coral-400 rounded-full mb-4 text-white text-2xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon />
                </motion.div>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-warm-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-warm-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Filter Section */}
      <section className="py-8 md:py-12 bg-white sticky top-0 z-40 border-b border-black/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em]">
              Filter by Category
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${activeFilter === filter.id
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-gray-100 text-black hover:bg-gray-200 hover:shadow-md"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {/* <span className="text-base">{filter.icon}</span> */}
                {filter.label}
                {activeFilter === filter.id && (
                  <motion.span
                    className="bg-white text-black px-2 py-0.5 rounded-full text-xs font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    {filteredProjects.length}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        ref={projectsRef}
        className="py-12 md:py-16 bg-gray-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onClick={() => navigate(`/portfolio/${project.id}`)}
                  layout
                >
                  {/* Full Scale Image with Overlay */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {/* Background Image */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1 : 1,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    {/* Dark Gradient Overlay - Only on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Colored Gradient Overlay - Only on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply`}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 0.4 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Year Badge - Top Right */}
                    <motion.div
                      className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-black font-bold text-sm shadow-lg"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.year}
                    </motion.div>

                    {/* Category Badge - Top Left */}
                    <motion.div
                      className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {filters.find((f) => f.id === project.category)?.label}
                    </motion.div>

                    {/* Main Content - Always visible at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white">
                      {/* Tags - Visible on hover */}
                      <motion.div
                        className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 10,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.tags.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] sm:text-xs font-bold bg-white/90 text-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      {/* Title - Visible on hover */}
                      <motion.h3
                        className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 leading-tight"
                        animate={{
                          y: hoveredProject === project.id ? 0 : 20,
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Subtitle - Visible on hover */}
                      <motion.p
                        className="text-cream-100 font-medium text-xs sm:text-sm md:text-base mb-2 sm:mb-3"
                        animate={{
                          y: hoveredProject === project.id ? 0 : 20,
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                      >
                        {project.subtitle}
                      </motion.p>

                      {/* Description - Visible on hover (hidden on mobile) */}
                      <motion.p
                        className="hidden sm:block text-white/90 text-xs md:text-sm mb-3 leading-relaxed line-clamp-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          height: hoveredProject === project.id ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Stats Grid - Visible on hover */}
                      <motion.div
                        className="grid grid-cols-3 gap-1 sm:gap-2 mb-2 sm:mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 10,
                        }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                      >
                        {Object.entries(project.stats).map(
                          ([key, value], i) => (
                            <motion.div
                              key={key}
                              className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-3 border border-white/20"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={
                                hoveredProject === project.id
                                  ? { scale: 1, opacity: 1 }
                                  : { scale: 0.8, opacity: 0 }
                              }
                              transition={{ delay: 0.2 + i * 0.05 }}
                            >
                              <div className="text-[8px] sm:text-[10px] md:text-xs text-white/70 uppercase tracking-wide font-semibold mb-0.5">
                                {key}
                              </div>
                              <div className="text-xs sm:text-sm md:text-lg font-bold text-white">
                                {value}
                              </div>
                            </motion.div>
                          ),
                        )}
                      </motion.div>

                      {/* Result Badge - Visible on hover */}
                      <motion.div
                        className="flex items-center justify-between gap-2"
                        animate={{
                          y: hoveredProject === project.id ? 0 : 20,
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 min-w-0 flex-1">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                          <span className="text-white/90 text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wide flex-shrink-0">
                            Result
                          </span>
                          <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm truncate">
                            {project.result}
                          </span>
                        </div>

                        {/* Action Buttons - Visible on hover */}
                        <motion.div
                          className="flex gap-1 sm:gap-2 flex-shrink-0"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{
                            opacity: hoveredProject === project.id ? 1 : 0,
                            x: hoveredProject === project.id ? 0 : 10,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.button
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black shadow-lg hover:bg-white transition-colors"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaExternalLinkAlt className="text-[10px] sm:text-xs md:text-sm" />
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Hover Arrow Indicator - Center */}
                    {/* <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: hoveredProject === project.id ? 1 : 0,
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight className="text-white text-xl" />
                    </motion.div> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-black text-black mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Feature Spotlight */}
      <PortfolioSpotlight />

      {/* Device Showcase (New Section) */}
      {/* <DeviceShowcase /> */}

      {/* Clients Section */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[400px,1fr] gap-12 items-center">
            {/* Left Side - Title & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
                Trusted By
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-[0.9] tracking-tighter">
                OUR
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                  CLIENTS.
                </span>
              </h2>
              <p className="text-gray-500 text-base mb-8 leading-relaxed">
                A global mix of disruptors and leaders.
              </p>
              <motion.button
                className="group inline-flex items-center gap-3 text-black font-bold text-base hover:text-blue-600 transition-colors"
                whileHover={{ x: 5 }}
              >
                View All
                <div className="w-10 h-10 rounded-full border-2 border-black group-hover:border-[#C4A484] flex items-center justify-center transition-colors">
                  <FaArrowRight className="text-sm" />
                </div>
              </motion.button>
            </motion.div>

            {/* Right Side - Client Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {Array.from({ length: cardSlots }, (_, index) => {
                const logoIndex = clientImageIndices[index] ?? 0;
                const client = allClientLogos[logoIndex];
                return (
                  <motion.div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    onClick={() => cycleClientImage(index)}
                  >
                    {/* Image Container with AnimatePresence for smooth transitions */}
                    <div className="relative w-full h-full overflow-hidden bg-white">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={logoIndex}
                          src={client?.logo}
                          alt={client?.name}
                          className="absolute inset-0 w-full h-full object-contain p-8"
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{
                            duration: 1.2,
                            ease: [0.43, 0.13, 0.23, 0.96],
                          }}
                        />
                      </AnimatePresence>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-50/30 via-transparent to-transparent pointer-events-none" />

                      {/* Border Accent */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C4A484]/50 rounded-2xl transition-all duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 right-0 w-1 h-64 bg-gradient-to-t from-transparent via-warm-400 to-transparent opacity-60" />
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Side - Title & Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32"
            >
              <div className="mb-6">
                <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em]">
                  FAQs
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-[0.9] tracking-tighter">
                Frequently Asked <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                  Questions
                </span>
              </h2>
              <p className="text-gray-500 text-base mb-8 leading-relaxed">
                Experience intelligent, efficient, and sustainable software
                designed to drive progress.
              </p>
              <motion.button
                className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium text-sm tracking-[0.1em] uppercase hover:bg-gray-900 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact us</span>
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <FaArrowRight className="text-xs" />
                </div>
              </motion.button>
            </motion.div>

            {/* Right Side - FAQ Accordion */}
            <div className="space-y-4">
              {[
                {
                  number: "001",
                  question: "What features does this software offer?",
                  answer:
                    "Our software provides comprehensive features including advanced analytics, automated workflows, seamless integrations, real-time collaboration tools, and customizable dashboards designed to streamline your business operations.",
                },
                {
                  number: "002",
                  question: "How does this solution improve efficiency?",
                  answer:
                    "This solution boosts efficiency by automating tasks, streamlining workflows, and providing data insights that support faster, smarter decision-making.",
                },
                {
                  number: "003",
                  question: "What kind of support is provided?",
                  answer:
                    "We offer 24/7 customer support through multiple channels including email, chat, and phone. Our dedicated team provides onboarding assistance, training resources, comprehensive documentation, and ongoing technical support to ensure your success.",
                },
                {
                  number: "004",
                  question: "How secure is the data managed by this software?",
                  answer:
                    "We implement industry-leading security measures including end-to-end encryption, regular security audits, compliance with international standards (ISO 27001, GDPR), multi-factor authentication, and automated backup systems to protect your sensitive data.",
                },
                {
                  number: "005",
                  question:
                    "Can the software integrate with our existing systems?",
                  answer:
                    "Yes, our software seamlessly integrates with popular platforms and tools through our robust API and pre-built connectors. We support integrations with CRM systems, marketing tools, payment gateways, and custom applications to ensure smooth workflow continuity.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index
                    ? "bg-white border-gray-200 shadow-lg"
                    : "bg-white border-transparent hover:border-gray-200"
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-2">
                        <span
                          className="font-mono text-xs font-bold"
                          style={{ color: "#C4A484" }}
                        >
                          {faq.number}
                        </span>
                        <h3 className="font-bold text-black text-lg md:text-xl hover:text-[#C4A484] transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaqIndex === index
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black"
                        }`}
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openFaqIndex === index ? (
                        <FaMinus className="text-sm" />
                      ) : (
                        <FaPlus className="text-sm" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="pl-12">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 md:py-16 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-xs font-medium mb-8 tracking-[0.2em] uppercase"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span>Ready to Start?</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
              LET&apos;S CREATE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 italic font-serif">
                Together
              </span>
            </h2>

            <p className="text-gray-200 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Whether you need branding, web design, or a full marketing
              campaign, we&apos;re here to bring your vision to life.
            </p>

            <motion.button
              className="group relative overflow-hidden flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-medium text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project</span>
              <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default PortfolioPage;
