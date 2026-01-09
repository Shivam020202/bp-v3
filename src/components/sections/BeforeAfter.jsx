import { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, ScanEye } from "lucide-react";

const cases = [
  {
    id: 1,
    client: "GreenLeaf Cafe",
    category: "Rebranding",
    beforeImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop&sat=-100",
    afterImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop",
    stats: [
      { label: "Foot Traffic", value: "+120%" },
      { label: "Revenue", value: "+85%" },
      { label: "Social", value: "+340%" },
    ],
  },
  {
    id: 2,
    client: "TechStart",
    category: "UI/UX Design",
    beforeImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=800&fit=crop&sat=-100",
    afterImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=800&fit=crop",
    stats: [
      { label: "Retention", value: "+200%" },
      { label: "App Rating", value: "4.8" },
      { label: "Downloads", value: "500K" },
    ],
  },
  {
    id: 3,
    client: "Velvet & Co",
    category: "Packaging",
    beforeImage:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&h=800&fit=crop&sat=-100",
    afterImage:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&h=800&fit=crop",
    stats: [
      { label: "Shelf Appeal", value: "Max" },
      { label: "Sales", value: "+250%" },
      { label: "Restocks", value: "3x" },
    ],
  },
];

const BeforeAfter = () => {
  const [activeCase, setActiveCase] = useState(0);
  const containerRef = useRef(null);

  // Mouse position for the lens effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the mask position
  const maskX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const maskY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // 3D Tilt values derived from mouse position
  const rotateX = useTransform(mouseY, [0, 600], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 800], [-5, 5]);

  const current = cases[activeCase];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const nextCase = () => setActiveCase((prev) => (prev + 1) % cases.length);
  const prevCase = () =>
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section className="py-20 bg-white text-black overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <span className="text-blue-600 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
              Proven Outcomes
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              REAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 italic font-serif pr-2">
                RESULTS.
              </span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevCase}
              className="p-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all hover:scale-110"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCase}
              className="p-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all hover:scale-110"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Magic Viewer */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* The Lens Container (Takes up major space) */}
          <div className="lg:col-span-8 perspective-1000 relative z-20">
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                mouseX.set(400); // Reset to center-ish
                mouseY.set(300);
              }}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 cursor-none group"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Base: Before Layer (Desaturated) */}
                  <img
                    src={current.beforeImage}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 filter grayscale brightness-75 transition-all duration-500"
                  />

                  {/* Overlay: After Layer (Vibrant) - Revealed by Mask */}
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      WebkitMaskImage: useTransform(
                        [maskX, maskY],
                        ([x, y]) =>
                          `radial-gradient(circle 200px at ${x}px ${y}px, black 0%, transparent 100%)`
                      ),
                      maskImage: useTransform(
                        [maskX, maskY],
                        ([x, y]) =>
                          `radial-gradient(circle 200px at ${x}px ${y}px, black 0%, transparent 100%)`
                      ),
                    }}
                  >
                    <img
                      src={current.afterImage}
                      alt="After"
                      className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-125"
                    />
                  </motion.div>

                  {/* The "Lens" Ring UI tracking mouse */}
                  <motion.div
                    className="absolute w-[250px] h-[250px] rounded-full border-2 border-white/50 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      x: useTransform(maskX, (x) => x - 125),
                      y: useTransform(maskY, (y) => y - 125),
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-[10px] font-mono tracking-widest text-white uppercase bg-black/50 px-2 py-1 rounded backdrop-blur">
                      Revealing Results
                    </span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Default Center Hint */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center gap-3">
                  <ScanEye className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-bold tracking-widest uppercase">
                    Hover to Unveil
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Metrics & Details */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1 block">
                    {current.category}
                  </span>
                  <h3 className="text-4xl font-bold">{current.client}</h3>
                </div>

                <div className="space-y-4">
                  {current.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="group bg-gray-50 hover:bg-black hover:text-white transition-all duration-300 p-6 rounded-xl border border-black/5 cursor-default"
                    >
                      <div className="flex items-end justify-between mb-2">
                        <p className="text-4xl font-black tracking-tighter group-hover:text-blue-400 transition-colors">
                          {stat.value}
                        </p>
                        <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 text-yellow-400 transition-opacity" />
                      </div>
                      <p className="text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
