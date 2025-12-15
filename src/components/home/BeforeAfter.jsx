import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const BeforeAfter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const transformations = [
    {
      id: 1,
      client: "GreenLeaf Cafe",
      description:
        "From bland to bold – a complete brand makeover that doubled their foot traffic!",
      before: {
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=350&fit=crop&sat=-100",
        caption: "Before: Generic & Forgettable",
      },
      after: {
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=350&fit=crop",
        caption: "After: Fresh & Inviting",
      },
      metrics: [
        { label: "Foot Traffic", value: "+120%" },
        { label: "Social Growth", value: "+340%" },
        { label: "Revenue", value: "+85%" },
      ],
    },
    {
      id: 2,
      client: "TechStart App",
      description:
        "Transforming a confusing interface into a user-friendly experience people actually love.",
      before: {
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=350&fit=crop&sat=-100",
        caption: "Before: Cluttered & Confusing",
      },
      after: {
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=350&fit=crop",
        caption: "After: Clean & Intuitive",
      },
      metrics: [
        { label: "User Retention", value: "+200%" },
        { label: "App Rating", value: "4.8★" },
        { label: "Downloads", value: "+500K" },
      ],
    },
    {
      id: 3,
      client: "Artisan Bakery",
      description:
        "A packaging revolution that made their products fly off the shelves!",
      before: {
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=350&fit=crop&sat=-100",
        caption: "Before: Plain & Uninspired",
      },
      after: {
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=350&fit=crop",
        caption: "After: Premium & Delightful",
      },
      metrics: [
        { label: "Shelf Appeal", value: "+180%" },
        { label: "Sales", value: "+250%" },
        { label: "Reorders", value: "+90%" },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + transformations.length) % transformations.length
    );
  };

  const current = transformations[currentSlide];

  return (
    <section className="py-24 bg-cream-200 relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-coral-100/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-cream-300/50 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        >
          <motion.span
            className="inline-block bg-white/80 text-warm-700 px-4 py-2 rounded-full text-sm font-funky font-bold mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            The Magic Happens Here 🪄
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6">
            Before &
            <span className="relative mx-3">
              <span className="relative z-10 text-warm-600">After</span>
              <motion.span
                className="absolute -inset-2 bg-cream-300/70 rounded-xl -z-0 rotate-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
              />
            </span>
          </h2>

          <p className="text-warm-600 text-lg max-w-xl mx-auto font-funky">
            See the incredible transformations we&apos;ve created. Because every
            brand deserves its glow-up moment! ✨
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Client Info */}
          <motion.div
            key={current.id}
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-warm-900 mb-2">
              {current.client}
            </h3>
            <p className="text-warm-600 font-funky">{current.description}</p>
          </motion.div>

          {/* Before/After Comparison */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Before */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute -top-4 left-4 bg-warm-600 text-white px-4 py-2 rounded-full font-funky font-bold text-sm z-10 flex items-center gap-2">
                  <FaArrowLeft />
                  Before
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-warm-200 bg-warm-100">
                  <img
                    src={current.before.image}
                    alt="Before"
                    className="w-full h-64 md:h-80 object-cover filter grayscale opacity-80"
                  />
                </div>
                <p className="text-center text-warm-500 mt-4 font-funky italic">
                  {current.before.caption}
                </p>
              </motion.div>

              {/* After */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="absolute -top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-funky font-bold text-sm z-10 flex items-center gap-2">
                  After
                  <FaArrowRight />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-cream-300 bg-white">
                  <img
                    src={current.after.image}
                    alt="After"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <p className="text-center text-warm-700 mt-4 font-funky font-bold">
                  {current.after.caption}
                </p>
              </motion.div>
            </div>

            {/* Arrow Connector */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                className="w-16 h-16 bg-warm-700 rounded-full flex items-center justify-center text-white text-xl shadow-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
            </div>
          </div>

          {/* Metrics */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {current.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl px-6 py-4 shadow-lg text-center min-w-[120px]"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <p className="text-2xl font-bold text-warm-700 font-display">
                  {metric.value}
                </p>
                <p className="text-warm-500 text-sm font-funky">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-warm-700 shadow-lg hover:bg-cream-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-warm-700 w-8"
                      : "bg-cream-400 hover:bg-cream-500"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 bg-warm-700 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-warm-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
