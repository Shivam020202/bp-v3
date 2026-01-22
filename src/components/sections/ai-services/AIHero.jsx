import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const AIHero = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const calculateBlocks = () => {
      const blockSize = window.innerWidth < 768 ? 60 : 100;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cols = Math.ceil(width / blockSize);
      const rows = Math.ceil(height / blockSize);
      const total = cols * rows;

      const newBlocks = Array.from({ length: total }, (_, i) => ({
        id: i,
      }));
      setBlocks(newBlocks);
    };

    calculateBlocks();

    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateBlocks, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex flex-col items-center justify-center bg-gray-50 border-b border-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          autoPlay
          muted
          loop
          src="https://res.cloudinary.com/de4kw1t2i/video/upload/v1768903217/hf_20260120_095730_4a3b9cbb-494f-452e-a950-02c909349a08_xyn1yk.mp4"
          className="w-full h-full object-cover opacity-90"
          loading="eager"
        />
        {/* <div className="absolute inset-0 bg-white/30" /> */}
      </div>

      {/* Grid */}
      <div className="absolute inset-0 flex flex-wrap content-start z-10">
        {blocks.map((b) => (
          <Block key={b.id} size={window.innerWidth < 768 ? 60 : 100} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] text-[#c69563] shadow-sm">
            Next-Gen Automation
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6 ">
          <span className="block">APPLIED</span>
          <span className="block">INTELLIGENCE.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-lg mx-auto text-base md:text-lg text-gray-800 font-light leading-relaxed mb-8 mix-blend-darken"
        >
          We engineer scalable AI infrastructure that transforms raw data into
          decisive business advantage.
        </motion.p>

        <div className="pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative h-12 px-6 bg-black text-white font-bold tracking-wide rounded-full overflow-hidden transition-transform hover:scale-105 shadow-lg">
            <span className="relative z-10 flex items-center gap-2 text-xs">
              START PROJECT <ArrowDownRight className="w-3 h-3" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

const Block = memo(({ size }) => {
  return (
    <motion.div
      className="flex-grow-0 flex-shrink-0 border-[0.5px] border-black/5 box-border relative"
      style={{
        width: size,
        height: size,
      }}
      initial={{ opacity: 1, backdropFilter: "blur(0px)" }}
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(255,255,255,0.8)",
        transition: { duration: 0, ease: "linear" },
      }}
      animate={{
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
        border: "0.5px solid rgba(0,0,0,0.05)",
        transition: { duration: 0.6, ease: "easeOut" },
      }}
    />
  );
});

Block.displayName = "Block";

export default AIHero;
