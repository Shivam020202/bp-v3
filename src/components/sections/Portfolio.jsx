import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, ArrowRight, MousePointer2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects as allProjects } from "../../constants/projects";

const projects = allProjects.slice(0, 5);

const Portfolio = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Custom Drag Scroll Logic
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
    if (Math.abs(walk) > 5) setHasMoved(true);
  };

  const handleCardClick = (projectId) => {
    if (!hasMoved) {
      navigate(`/portfolio/${projectId}`);
    }
  };

  return (
    <section className="py-32 bg-white text-black overflow-hidden select-none">
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-black"></span>
            <span className="text-sm font-bold tracking-[0.2em] uppercase">
              Selected Works
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]"
          >
            DIGITAL
            <br />
            <span className="text-gray-400 font-serif italic font-light">
              masterpieces
            </span>
          </motion.h2>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-bold tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <MousePointer2 className="w-4 h-4 animate-bounce-x" />
            <span>Drag or Scroll</span>
          </div>
          <button
            onClick={() => navigate("/portfolio")}
            className="w-12 h-12 rounded-full border border-black hover:bg-black hover:text-white transition-all flex items-center justify-center"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-[10vw] pb-20 pt-10 hide-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {projects.map((project, index) => (
          <PortfolioCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => handleCardClick(project.id)}
          />
        ))}

        {/* View All Card */}
        <div
          onClick={() => !hasMoved && navigate("/portfolio")}
          className="min-w-[300px] aspect-[3/4] rounded-none border-l border-black/10 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer group"
        >
          <div className="text-center">
            <div className="w-20 h-20 rounded-full border border-black/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform bg-white">
              <ArrowRight size={24} />
            </div>
            <h3 className="text-2xl font-black">View All</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">
              Explore Archive
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="container mx-auto px-6 mt-8">
        <div className="w-full h-[1px] bg-black/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-black"
            style={{ width: "20%" }}
            animate={{
              left: ["0%", "80%", "0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ project, index, onClick }) => {
  const cardRef = useRef(null);
  const { scrollXProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  // Parallax effect for image
  const x = useTransform(scrollXProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      className="relative min-w-[85vw] md:min-w-[600px] aspect-[16/9] md:aspect-[1.5/1] group"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.5, ease: "circOut" }}
    >
      {/* Number */}
      <div className="absolute -top-12 left-0 text-9xl font-black text-black/5 z-0 font-serif translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Image Container */}
      <div className="absolute inset-0 overflow-hidden bg-gray-200 shadow-2xl shadow-black/10">
        <motion.div className="w-[120%] h-full absolute left-[-10%] top-0">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            style={{ x }}
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex items-end justify-between bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest">
              {project.category || "Case Study"}
            </span>
            <span className="text-white/80 text-xs font-mono">
              {project.year || "2024"}
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white leading-none mb-2">
            {project.title}
          </h3>
          <p className="text-white/80 max-w-md hidden md:block">
            {project.excerpt || "A digital experience crafted for impact."}
          </p>
        </div>

        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <ArrowUpRight className="text-black w-6 h-6" />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
