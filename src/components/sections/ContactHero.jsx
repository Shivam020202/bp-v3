import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { FaArrowRight, FaGlobeAmericas } from "react-icons/fa";

const ContactHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[85vh] overflow-hidden bg-black text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background with Video */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source
            src="https://res.cloudinary.com/de4kw1t2i/video/upload/v1768548652/hf_20260116_072754_a6514d7f-751e-4a41-942f-c2943b1b63ea_l0a1x8.mp4"
            type="video/mp4"
          />
        </video>
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-32 left-6 md:left-0 flex items-center gap-2 overflow-hidden"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-white/70">
            Available for new projects
          </span>
        </motion.div>

        {/* Big Typography */}
        <div className="flex flex-col items-center justify-center w-full">
          {/* Row 1 */}
          <div className="flex items-center gap-4 md:gap-8 w-full justify-center lg:justify-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cream-100 to-warm-200"
            >
              CRAFT
            </motion.h1>
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="hidden md:flex w-24 h-24 rounded-full border border-white/20 items-center justify-center backdrop-blur-md"
            >
              <FaGlobeAmericas className="text-4xl text-warm-300 animate-spin-slow" />
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-4 md:gap-8 w-full justify-center lg:justify-end lg:pr-20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.6, duration: 1 }}
              className="hidden md:block h-2 bg-warm-500 rounded-full"
            />
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter text-transparent stroke-text"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}
            >
              IMPACT
            </motion.h1>
          </div>

          {/* Row 3 - Hero Description Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center max-w-2xl mx-auto glass-panel p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <p className="text-lg md:text-xl text-cream-50/90 font-light leading-relaxed">
              We bridge the gap between{" "}
              <span className="text-warm-300 font-medium italic">vision</span>{" "}
              and{" "}
              <span className="text-warm-300 font-medium italic">reality</span>.
              Let's discuss how we can elevate your brand to the next dimension.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <FloatingBadge mouseX={mouseX} mouseY={mouseY} />
    </section>
  );
};

const FloatingBadge = ({ mouseX, mouseY }) => {
  const x = useSpring(useTransform(mouseX, [0, window.innerWidth], [-20, 20]), {
    stiffness: 150,
    damping: 15,
  });
  const y = useSpring(
    useTransform(mouseY, [0, window.innerHeight], [-20, 20]),
    { stiffness: 150, damping: 15 },
  );

  return (
    <motion.div
      style={{ x, y }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute bottom-20 right-10 md:bottom-32 md:right-20 pointer-events-none z-20 hidden md:block"
    >
      <div className="relative w-40 h-40">
        {/* Rotating Text */}
        <div className="absolute inset-0 animate-spin-slow">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text
              fontSize="11"
              fill="white"
              fontWeight="bold"
              letterSpacing="2"
            >
              <textPath href="#circle">
                SCROLL DOWN • EXPLORE MORE • GET IN TOUCH •
              </textPath>
            </text>
          </svg>
        </div>
        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <FaArrowRight className="text-2xl -rotate-45" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactHero;
