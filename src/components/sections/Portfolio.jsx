import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaArrowRight, FaEye, FaHeart } from "react-icons/fa";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Branding" },
    { id: "social", label: "Social Media" },
    { id: "web", label: "Web Design" },
    { id: "packaging", label: "Packaging" },
  ];

  const projects = [
    {
      id: 1,
      title: "Bloom Beauty",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
      tags: ["Brand Identity", "Packaging"],
      result: "200% Sales Increase",
      color: "from-pink-400 to-rose-500",
    },
    {
      id: 2,
      title: "TechVenture",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Web Design", "UI/UX"],
      result: "3x User Engagement",
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: 3,
      title: "Green Eats",
      category: "social",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      tags: ["Social Media", "Content"],
      result: "50K New Followers",
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 4,
      title: "Artisan Coffee",
      category: "packaging",
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
      tags: ["Packaging", "Branding"],
      result: "Retail Expansion",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 5,
      title: "FitLife App",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop",
      tags: ["App Design", "Branding"],
      result: "1M Downloads",
      color: "from-purple-400 to-violet-500",
    },
    {
      id: 6,
      title: "Urban Style",
      category: "social",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      tags: ["Campaign", "Social"],
      result: "Viral Campaign",
      color: "from-red-400 to-rose-500",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cream-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-coral-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        >
          <motion.span
            className="inline-block bg-cream-300/50 text-warm-700 px-4 py-2 rounded-full text-sm font-funky font-bold mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Our Creative Work ✨
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6">
            Projects That
            <span className="relative mx-3">
              <span className="relative z-10 text-warm-600">Speak</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-cream-300/60 -z-0"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </span>
            Volumes
          </h2>

          <p className="text-warm-600 text-lg max-w-2xl mx-auto font-funky">
            Each project is a story, each brand a journey. Here&apos;s a peek at
            the magic we&apos;ve created with some incredible folks. 🎨
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-funky font-bold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-warm-700 text-white shadow-lg shadow-warm-700/30"
                  : "bg-cream-200 text-warm-700 hover:bg-cream-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-warm-700 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEye />
                  </motion.button>
                  <motion.button
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-warm-700 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaHeart />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-funky bg-cream-200 text-warm-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-warm-900 mb-2 group-hover:text-warm-600 transition-colors">
                  {project.title}
                </h3>

                {/* Result Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-warm-500 text-sm font-funky">
                    Result:{" "}
                    <span className="text-warm-700 font-bold">
                      {project.result}
                    </span>
                  </span>
                  <motion.div
                    className="w-8 h-8 bg-cream-300 rounded-full flex items-center justify-center text-warm-700 group-hover:bg-warm-700 group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <FaArrowRight className="text-sm" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="group bg-cream-300 text-warm-800 px-8 py-4 rounded-full font-funky font-bold text-lg hover:bg-warm-700 hover:text-white transition-colors duration-300 flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
