import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { Zap, TrendingDown, Crosshair, Clock } from "lucide-react";

// --- Glitch/Scramble Text Component ---
const GlitchText = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericValue = typeof value === "number" ? value : parseFloat(value);
    const isFloat = !Number.isInteger(numericValue);
    const duration = 1500; // ms
    const startTime = Date.now();
    const chars = "0123456789";

    let animationFrame;

    const update = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing
      const ease = 1 - Math.pow(1 - progress, 3);

      const current = numericValue * ease;

      // Glitch effect: randomly replace ending characters with random numbers during transition
      let formatted;
      if (progress === 1) {
        formatted = isFloat
          ? numericValue.toFixed(1)
          : Math.round(numericValue).toString();
      } else {
        const temp = isFloat
          ? current.toFixed(1)
          : Math.round(current).toString();
        const glitchLen = Math.max(
          0,
          temp.length - Math.floor(progress * temp.length),
        );
        const cleanPart = temp.slice(0, temp.length - glitchLen);
        let glitchPart = "";
        for (let i = 0; i < glitchLen; i++) {
          glitchPart += chars[Math.floor(Math.random() * chars.length)];
        }
        // Handle decimal point in glitch
        if (
          isFloat &&
          cleanPart.length < temp.length &&
          temp.indexOf(".") > cleanPart.length
        ) {
          // ensure dot is potentially preserved or glitched appropriately,
          // but simple concatenation is usually enough for visual noise
        }
        formatted = cleanPart + glitchPart;
      }

      setDisplayValue(formatted);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono tracking-tighter">
      {displayValue}
      <span className="text-blue-400/80 ml-0.5 font-sans font-bold">
        {suffix}
      </span>
    </span>
  );
};

// --- Spotlight Card Component ---
const StatItem = ({ icon: Icon, value, label, subValue, index, total }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className={`
        relative group flex flex-col items-center justify-center p-8 
        border-r border-white/5 last:border-r-0
        hover:bg-white/[0.02] transition-colors duration-500
      `}
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(400px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
          ),
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Glowing Icon Container */}
        <div className="mb-4 relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300">
            <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          </div>
        </div>

        {/* Value */}
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300 ease-out shadow-black drop-shadow-2xl">
          {typeof value === "string" && value.includes("/") ? (
            // Special case for 24/7 or non-numeric
            <span className="font-mono tracking-tighter">{value}</span>
          ) : (
            <GlitchText value={value} suffix={subValue} />
          )}
        </div>

        {/* Label */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors duration-300 text-center">
          {label}
        </p>
      </div>

      {/* Decorative corners for tech feel -> Only show on hover */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-blue-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-blue-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </motion.div>
  );
};

const AIStats = () => {
  const stats = [
    { label: "Efficiency", value: 300, subValue: "%", icon: Zap },
    { label: "Cost Save", value: 45, subValue: "%", icon: TrendingDown },
    { label: "Accuracy", value: 99.9, subValue: "%", icon: Crosshair },
    { label: "Uptime", value: "24/7", subValue: "", icon: Clock },
  ];

  return (
    <section className="py-10 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      {/* Ambient Background Noise/Grain could go here if assets allowed */}

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Header Text (Optional, keeps it self-contained if removed, but adds context) */}
        {/* <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white/40 text-sm font-mono mb-8 uppercase tracking-widest"
        >
            System Metrics
        </motion.h2> */}

        {/* Main Fused Grid Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block w-full container"
        >
          <div className="relative bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-blue-900/10">
            {/* Scanning Laser Line */}
            <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent blur-sm opacity-50 animate-scan pointer-events-none" />

            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-white/5">
              {stats.map((stat, idx) => (
                <StatItem
                  key={idx}
                  {...stat}
                  index={idx}
                  total={stats.length}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            left: -10%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 110%;
            opacity: 0;
          }
        }
        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AIStats;
