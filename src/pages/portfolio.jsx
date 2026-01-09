import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants/projects";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaFilter,
  FaHeart,
  FaStar,
  FaTrophy,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
const PortfolioPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const projectsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" });

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

  // Client logos data with multiple images (9 clients)
  const clientsData = [
    {
      name: "BAGMANE",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop",
      ],
    },
    {
      name: "BOSCH",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      ],
    },
    {
      name: "Cult",
      images: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
      ],
    },
    {
      name: "Celerity",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      ],
    },
    {
      name: "Puravankara",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      ],
    },
    {
      name: "Pidilite",
      images: [
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      ],
    },
    {
      name: "Prestige Group",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
      ],
    },
    {
      name: "Thoughtworks",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
      ],
    },
    {
      name: "Red Hat",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      ],
    },
  ];

  // Initialize image indices
  useEffect(() => {
    const initialIndices = {};
    clientsData.forEach((client, index) => {
      initialIndices[index] = 0;
    });
    setClientImageIndices(initialIndices);
  }, []);

  // Function to cycle images for a specific client
  const cycleClientImage = (clientIndex) => {
    setClientImageIndices((prev) => ({
      ...prev,
      [clientIndex]: (prev[clientIndex] + 1) % clientsData[clientIndex].images.length,
    }));
  };

  // Auto-cycle images at different intervals for each client
  useEffect(() => {
    const intervals = clientsData.map((_, index) => {
      const randomInterval = 6000 + Math.random() * 3000; // 6-9 seconds, random for each
      return setInterval(() => {
        cycleClientImage(index);
      }, randomInterval);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [clientsData.length]);

  return (
    <div className="min-h-screen bg-cream-200">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-warm-700 via-warm-600 to-coral-400"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-cream-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-coral-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-white/30 rounded-xl"
            animate={{ rotate: 360, y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-white/20 funky-border"
            animate={{ rotate: -360, x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8"
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="text-lg">✨</span>
              <span>Award-Winning Design Portfolio</span>
              <span className="text-lg">🏆</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Creating{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Memorable</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-4 bg-cream-300/60 -z-0 wavy-border"
                  initial={{ scaleX: 0 }}
                  animate={isHeroInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                />
              </span>
              <br />
              Brand Experiences
            </motion.h1>

            <motion.p
              className="text-cream-50 text-xl md:text-2xl mb-10 font-light"
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
                className="group bg-white text-warm-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-100 transition-all duration-300 shadow-xl flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
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
      <section className="py-12 bg-cream-100 sticky top-0 z-40 shadow-sm relative overflow-hidden">
        {/* Subtle Wave Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              #8b6f47 20px,
              #8b6f47 21px
            )`
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaFilter className="text-warm-600" />
            <span className="text-warm-700 font-semibold text-sm uppercase tracking-wide">
              Filter by Category
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${activeFilter === filter.id
                    ? "bg-warm-700 text-white shadow-lg shadow-warm-700/30 scale-105"
                    : "bg-white text-warm-700 hover:bg-cream-200 hover:shadow-md"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                <span className="text-lg">{filter.icon}</span>
                {filter.label}
                {activeFilter === filter.id && (
                  <motion.span
                    className="bg-white text-warm-700 px-2 py-0.5 rounded-full text-xs font-bold"
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
      <section ref={projectsRef} className="py-20 bg-cream-200 relative overflow-hidden">
        {/* Organic Blob Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="organic-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M 50 100 Q 75 75, 100 100 T 150 100"
                  stroke="#8b6f47"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="50" cy="100" r="3" fill="#c69563" />
                <circle cx="150" cy="100" r="3" fill="#c69563" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#organic-pattern)" />
          </svg>
        </div>

        {/* Gradient Mesh Background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #ff7a42 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, #c69563 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, #8b6f47 0%, transparent 50%)
            `
          }}
        />

        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-40 right-20 w-96 h-96 bg-coral-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-warm-200/40 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
                        scale: hoveredProject === project.id ? 1.1 : 1,
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
                      className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-warm-700 font-bold text-sm shadow-lg"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.year}
                    </motion.div>

                    {/* Category Badge - Top Left */}
                    <motion.div
                      className="absolute top-6 left-6 bg-warm-700 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {filters.find((f) => f.id === project.category)?.label}
                    </motion.div>

                    {/* Main Content - Always visible at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      {/* Tags - Visible on hover */}
                      <motion.div
                        className="flex flex-wrap gap-2 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 10,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs font-bold bg-white/90 text-warm-700 px-3 py-1.5 rounded-full backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      {/* Title - Visible on hover */}
                      <motion.h3
                        className="font-display text-3xl md:text-4xl font-bold mb-2 leading-tight"
                        animate={{
                          y: hoveredProject === project.id ? 0 : 20,
                          opacity: hoveredProject === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Subtitle - Visible on hover */}
                      <motion.p
                        className="text-cream-100 font-medium text-base mb-4"
                        animate={{
                          y: hoveredProject === project.id ? 0 : 20,
                          opacity: hoveredProject === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                      >
                        {project.subtitle}
                      </motion.p>

                      {/* Description - Visible on hover */}
                      <motion.p
                        className="text-white/90 text-sm mb-4 leading-relaxed"
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
                        className="grid grid-cols-3 gap-3 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 10,
                        }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                      >
                        {Object.entries(project.stats).map(([key, value], i) => (
                          <motion.div
                            key={key}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={
                              hoveredProject === project.id
                                ? { scale: 1, opacity: 1 }
                                : { scale: 0.8, opacity: 0 }
                            }
                            transition={{ delay: 0.2 + i * 0.05 }}
                          >
                            <div className="text-xs text-white/70 uppercase tracking-wide font-semibold mb-1">
                              {key}
                            </div>
                            <div className="text-lg font-bold text-white">
                              {value}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Result Badge - Visible on hover */}
                      <motion.div
                        className="flex items-center justify-between"
                        animate={{
                          y: hoveredProject === project.id ? 0 : 20,
                          opacity: hoveredProject === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-white/90 text-xs font-bold uppercase tracking-wide">
                            Result
                          </span>
                          <span className="text-white font-bold text-sm">
                            {project.result}
                          </span>
                        </div>

                        {/* Action Buttons - Visible on hover */}
                        <motion.div
                          className="flex gap-2"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{
                            opacity: hoveredProject === project.id ? 1 : 0,
                            x: hoveredProject === project.id ? 0 : 10,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.button
                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-warm-700 shadow-lg hover:bg-white transition-colors"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaExternalLinkAlt className="text-sm" />
                          </motion.button>
                          {/* <motion.button
                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-warm-700 shadow-lg hover:bg-white transition-colors"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaHeart className="text-sm" />
                          </motion.button> */}
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
              <h3 className="font-display text-2xl font-bold text-warm-800 mb-2">
                No projects found
              </h3>
              <p className="text-warm-600">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>


      {/* Clients Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Modern Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #8b6f47 1px, transparent 1px),
              linear-gradient(to bottom, #8b6f47 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Decorative Dots Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #c69563 1.5px, transparent 1.5px)`,
            backgroundSize: "40px 40px"
          }}
        />

        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 w-1 h-64 bg-gradient-to-b from-transparent via-coral-400 to-transparent opacity-60" />
        <div className="absolute top-32 left-0 w-32 h-1 bg-gradient-to-r from-coral-400 to-transparent opacity-60" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[400px,1fr] gap-12 items-center">
            {/* Left Side - Title & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight">
                Our
                <br />
                Clientele
              </h2>
              <p className="text-warm-600 text-lg mb-8 leading-relaxed">
                A global mix of disruptors and leaders.
              </p>
              <motion.button
                className="group inline-flex items-center gap-3 text-warm-700 font-bold text-lg hover:text-warm-900 transition-colors"
                whileHover={{ x: 5 }}
              >
                View Clients
                <div className="w-10 h-10 rounded-full border-2 border-warm-700 group-hover:border-warm-900 flex items-center justify-center transition-colors">
                  <FaArrowRight className="text-sm" />
                </div>
              </motion.button>
            </motion.div>

            {/* Right Side - Client Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {clientsData.map((client, index) => (
                <motion.div
                  key={client.name}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  onClick={() => cycleClientImage(index)}
                >
                  {/* Image Container with AnimatePresence for smooth transitions */}
                  <div className="relative w-full h-full overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={clientImageIndices[index]}
                        src={client.images[clientImageIndices[index] || 0]}
                        alt={client.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{
                          duration: 1.2,
                          ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                      />
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Client Name Overlay */}

                    {/* Hover Indicator */}

                    {/* Image Counter Dots */}

                    {/* Border Accent */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-warm-400/50 rounded-2xl transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 right-0 w-1 h-64 bg-gradient-to-t from-transparent via-warm-400 to-transparent opacity-60" />
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
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
                <span className="text-warm-600 font-bold text-sm uppercase tracking-wider">
                  FAQs
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight">
                Frequently ask questions
              </h2>
              <p className="text-warm-600 text-lg mb-8 leading-relaxed">
                Experience intelligent, efficient, and sustainable software designed to drive progress.
              </p>
              <motion.button
                className="group inline-flex items-center gap-3 bg-warm-700 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-warm-800 transition-all duration-300 shadow-lg"
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
                  answer: "Our software provides comprehensive features including advanced analytics, automated workflows, seamless integrations, real-time collaboration tools, and customizable dashboards designed to streamline your business operations."
                },
                {
                  number: "002",
                  question: "How does this solution improve efficiency?",
                  answer: "This solution boosts efficiency by automating tasks, streamlining workflows, and providing data insights that support faster, smarter decision-making."
                },
                {
                  number: "003",
                  question: "What kind of support is provided?",
                  answer: "We offer 24/7 customer support through multiple channels including email, chat, and phone. Our dedicated team provides onboarding assistance, training resources, comprehensive documentation, and ongoing technical support to ensure your success."
                },
                {
                  number: "004",
                  question: "How secure is the data managed by this software?",
                  answer: "We implement industry-leading security measures including end-to-end encryption, regular security audits, compliance with international standards (ISO 27001, GDPR), multi-factor authentication, and automated backup systems to protect your sensitive data."
                },
                {
                  number: "005",
                  question: "Can the software integrate with our existing systems?",
                  answer: "Yes, our software seamlessly integrates with popular platforms and tools through our robust API and pre-built connectors. We support integrations with CRM systems, marketing tools, payment gateways, and custom applications to ensure smooth workflow continuity."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index
                      ? "bg-white border-warm-300 shadow-lg"
                      : "bg-cream-100 border-transparent hover:border-warm-200"
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-warm-400 font-bold text-sm">
                          {faq.number}
                        </span>
                        <h3 className="font-bold text-warm-900 text-lg md:text-xl group-hover:text-warm-700 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaqIndex === index
                          ? "bg-warm-700 text-white"
                          : "bg-warm-200 text-warm-700"
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
                            <p className="text-warm-600 leading-relaxed">
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
      <section className="py-20 bg-gradient-to-br from-warm-800 via-warm-700 to-coral-500 relative overflow-hidden">
        {/* Modern Hexagon Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagon-pattern" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <path
                  d="M25 0 L75 0 L100 43.5 L75 87 L25 87 L0 43.5 Z"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
          </svg>
        </div>

        {/* Diagonal Stripes Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              white 40px,
              white 42px
            )`
          }}
        />

        {/* Radial Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span>🚀</span>
              <span>Ready to Start Your Project?</span>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Create Something
              <br />
              <span className="text-cream-200">Amazing Together</span>
            </h2>

            <p className="text-cream-100 text-xl mb-10 leading-relaxed">
              Whether you need branding, web design, or a full marketing
              campaign, we&apos;re here to bring your vision to life.
            </p>

            <motion.button
              className="bg-white text-warm-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-cream-100 transition-all duration-300 shadow-2xl flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
