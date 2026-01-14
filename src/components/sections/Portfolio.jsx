import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, MoveRight, Layers, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bloom Beauty",
    category: "Branding & Identity",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
    year: "2024",
    result: "200% Growth",
    color: "bg-rose-500",
  },
  {
    id: 2,
    title: "TechVenture",
    category: "Web Platform",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    year: "2023",
    result: "Series B Raised",
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Green Eats",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    year: "2024",
    result: "1M Users",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Artisan Coffee",
    category: "Packaging Design",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
    year: "2023",
    result: "Best Design Award",
    color: "bg-amber-600",
  },
  {
    id: 5,
    title: "FitLife Pro",
    category: "Product Design",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
    year: "2024",
    result: "#1 Health App",
    color: "bg-cyan-500",
  },
  {
    id: 6,
    title: "Urban Architecture",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    result: "Awwwards SOTD",
    color: "bg-zinc-800",
  },
];

const ProjectCard = ({ project, x }) => {
  // Parallax Effect: Map the container scroll (x) to image position
  // We need a way to know the item's position relative to viewport, but with drag="x" on parent,
  // the parent moves. Simple parallax: Move image opposite to drag direction slightly.
  // Using a simplified spring for "floaty" feel.

  return (
    <motion.div
      className="relative flex-shrink-0 w-[280px] sm:w-[350px] md:w-[450px] aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden group border border-white/10"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      {/* Parallax Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      {/* Floating Content */}
      <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold text-white border border-white/10">
            {project.year}
          </span>
          <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Bottom Info */}
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="mb-2 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${project.color}`} />
            <span className="text-white/70 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
            {project.title}
          </h3>
          <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-500">
            <p className="text-white/60 text-sm font-medium">
              Result: <span className="text-white">{project.result}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (trackRef.current && containerRef.current) {
      setWidth(trackRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-12 bg-white text-black overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
          <div className="max-w-xl">
            <span className="text-blue-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3 md:mb-4 block">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 italic font-serif pr-4">
                LANDMARKS.
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            {/* Mobile Swipe Indicator */}
            <div className="flex md:hidden items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
              <svg className="w-5 h-5 text-blue-600 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Swipe to Explore
            </div>
            {/* Desktop Drag Indicator */}
            <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
              <MoveRight size={16} className="text-blue-600 animate-pulse" />
              Drag to Explore
            </div>
            <button className="hidden sm:flex px-4 md:px-6 py-2 md:py-3 rounded-full bg-gray-100 text-black font-bold text-xs md:text-sm hover:bg-black hover:text-white transition-all items-center gap-2 group">
              View All Projects{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Arrows - Above the slider */}
        <div className="flex md:hidden items-center justify-between mb-4">
          <span className="text-xs text-gray-400">Swipe or use arrows</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const currentX = x.get();
                x.set(Math.min(currentX + 300, 0));
              }}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                const currentX = x.get();
                x.set(Math.max(currentX - 300, -width));
              }}
              className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Containerized Slider */}
        <div
          ref={containerRef}
          className="w-full bg-gray-50 rounded-2xl md:rounded-[3rem] p-3 sm:p-4 md:p-8 border border-gray-100 relative overflow-hidden group cursor-grab active:cursor-grabbing"
        >
          {/* Background Deco */}
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-100 pointer-events-none" />

          {/* Motion Track */}
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            style={{ x }}
            className="flex gap-4 sm:gap-6 md:gap-8 w-max px-2 sm:px-4 md:px-0"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} x={x} />
            ))}
          </motion.div>

          {/* Fade overlay on right to hint scroll */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-20 hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
