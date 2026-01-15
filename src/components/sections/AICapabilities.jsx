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
  const [mobileActiveId, setMobileActiveId] = useState(null);

  const toggleMobileItem = (id) => {
    setMobileActiveId(mobileActiveId === id ? null : id);
  };

  return (
    <section className="py-8 md:py-12 bg-white text-black overflow-hidden relative border-t border-gray-100 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header - Matching AboutCompany Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="max-w-3xl">
            <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
              AI Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
              POWERED BY <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 font-serif italic pr-2">
                INTELLIGENCE.
              </span>
            </h2>
          </div>
          <p className="hidden md:block text-gray-500 text-sm max-w-xs text-right leading-relaxed border-l border-gray-200 pl-4">
            Unlock the potential of next-gen generative models to scale your
            digital presence 10x faster.
          </p>
        </div>

        {/* Desktop: Horizontal Accordion */}
        <div className="hidden lg:flex flex-row gap-4 h-[500px]">
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
                    ? "flex-[3.5]"
                    : "flex-[1] bg-gray-50 hover:bg-gray-100 border border-gray-100"
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
                                <div className="p-0.5 rounded-full bg-gray-800 text-white">
                                  <Check className="w-3 h-3" />
                                </div>
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <button className="h-14 w-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] shrink-0 self-end">
                          <ArrowUpRight strokeWidth={2} />
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}

                {/* Inactive Content (Vertical Text) */}
                {!isActive && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-between p-6 text-gray-400 group-hover:text-black transition-colors">
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-110 text-gray-400 group-hover:text-black">
                      {item.icon}
                    </span>

                    <div className="[writing-mode:vertical-rl] rotate-180 font-bold text-xl tracking-wide whitespace-nowrap">
                      {item.title}
                    </div>

                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-black transition-colors" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Tablet: Vertical Accordion List */}
        <div className="lg:hidden flex flex-col gap-3">
          {capabilities.map((item) => {
            const isActive = mobileActiveId === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                className="rounded-xl overflow-hidden border border-gray-200"
              >
                {/* Header - Always visible */}
                <button
                  onClick={() => toggleMobileItem(item.id)}
                  className={`w-full flex items-center justify-between p-4 transition-all duration-300 ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "bg-white text-black hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`${
                        isActive ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <div className="text-left">
                      <h3 className="font-bold text-base">{item.title}</h3>
                      <p
                        className={`text-xs ${
                          isActive ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="relative">
                        {/* Image */}
                        <div className="relative h-48 w-full">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <p className="text-sm leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.benefits.map((benefit, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1"
                              >
                                <Check className="w-3 h-3 text-gray-400" />
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="p-4 bg-gray-50 border-t border-gray-100">
                        <button className="w-full py-3 bg-black text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                          Learn More
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
