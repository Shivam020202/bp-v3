import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Code,
  Video,
  Palette,
  Mic,
  Bot,
  Check,
} from "lucide-react";

const capabilities = [
  {
    id: "landing",
    title: "AI Landing Pages",
    subtitle: "Web Experience",
    description: "Generative high-conversion layouts optimized for speed.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    benefits: ["SEO Optimized", "Instant Deploy", "A/B Testing"],
    icon: <Code />,
  },
  {
    id: "video",
    title: "AI Video Gen",
    subtitle: "Media Synthesis",
    description: "Cinematic text-to-video production in minutes.",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    benefits: ["4K Resolution", "Avatars", "Multi-Language"],
    icon: <Video />,
  },
  {
    id: "graphics",
    title: "AI Graphics",
    subtitle: "Visual Assets",
    description: "Stunning brand-consistent imagery on demand.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Vector Export", "Brand Aligned", "Fast Gen"],
    icon: <Palette />,
  },
  {
    id: "audio",
    title: "Neural Audio",
    subtitle: "Voice Cloning",
    description: "Studio-quality voiceovers and soundscapes.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Voice Cloning", "Clean Audio", "Multi-Track"],
    icon: <Mic />,
  },
  {
    id: "assistant",
    title: "AI Agents",
    subtitle: "24/7 Support",
    description: "Intelligent voice assistants handling calls automagically.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Natural Voice", "CRM Sync", "Sentiment Analysis"],
    icon: <Bot />,
  },
];

const AICapabilities = () => {
  const [activeId, setActiveId] = useState("landing");

  return (
    <section className="py-20 bg-white text-black overflow-hidden relative border-t border-gray-100 font-sans">
      <div className="container mx-auto px-6">
        {/* Header - Matching AboutCompany Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-blue-600"></span>
              <span className="text-blue-600 font-mono text-sm tracking-widest uppercase">
                AI Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-none">
              POWERED BY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-serif italic pr-2">
                INTELLIGENCE
              </span>
            </h2>
          </div>
          <p className="hidden md:block text-gray-500 text-sm max-w-xs text-right leading-relaxed border-l border-gray-200 pl-4">
            Unlock the potential of next-gen generative models to scale your
            digital presence 10x faster.
          </p>
        </div>

        {/* Horizontal Accordion */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">
          {capabilities.map((item) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive
                    ? "flex-[3] lg:flex-[3.5] h-[450px] lg:h-auto"
                    : "flex-[1] h-24 lg:h-auto bg-gray-50 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                {/* Active Content (Background Image + Details) */}
                {isActive && (
                  <>
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0 z-0"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute inset-0 z-10 flex flex-col justify-end p-8"
                    >
                      <div className="bg-white/10 backdrop-blur-md w-fit rounded-full px-3 py-1 border border-white/20 text-white/80 text-xs font-mono uppercase mb-4">
                        {item.subtitle}
                      </div>

                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                          <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-white/80 max-w-md text-sm md:text-base leading-relaxed mb-6">
                            {item.description}
                          </p>

                          {/* Benefits List */}
                          <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {item.benefits.map((benefit, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-white/90 text-sm font-medium"
                              >
                                <div className="p-0.5 rounded-full bg-blue-600 text-white">
                                  <Check className="w-3 h-3" />
                                </div>
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <button className="h-14 w-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] shrink-0 self-end">
                          <ArrowUpRight strokeWidth={2} />
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}

                {/* Inactive Content (Vertical Text) */}
                {!isActive && (
                  <div className="absolute inset-0 z-10 flex lg:flex-col items-center justify-between p-6 text-gray-400 group-hover:text-black transition-colors">
                    <span className="text-xl lg:text-2xl transition-transform duration-300 group-hover:scale-110 text-blue-600/50 group-hover:text-blue-600">
                      {item.icon}
                    </span>

                    {/* Desktop Vertical Text */}
                    <div className="hidden lg:block [writing-mode:vertical-rl] rotate-180 font-bold text-xl tracking-wide whitespace-nowrap">
                      {item.title}
                    </div>

                    {/* Mobile Horizontal Text */}
                    <div className="lg:hidden font-bold text-lg text-black">
                      {item.title}
                    </div>

                    <span className="hidden lg:block w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-600 transition-colors" />
                    <ArrowUpRight className="lg:hidden w-5 h-5 text-gray-400" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
