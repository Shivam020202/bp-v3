import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHeart,
  FaRocket,
  FaUsers,
  FaPalette,
  FaChartLine,
  FaClock,
  FaHandshake,
  FaStar,
  FaCoffee,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: <FaHeart />,
      title: "We Actually Care",
      description:
        "Not just about your project, but about YOU. Your success is our success, and we genuinely get excited when you win.",
      emoji: "💕",
      color: "bg-pink-100 text-pink-500",
    },
    {
      icon: <FaPalette />,
      title: "Creativity Overload",
      description:
        "We don't do boring. Every project gets our creative juice flowing, and we always push for that 'wow' factor.",
      emoji: "🎨",
      color: "bg-purple-100 text-purple-500",
    },
    {
      icon: <FaUsers />,
      title: "No Corporate BS",
      description:
        "We speak human, not jargon. Clear communication, real conversations, and zero pretentious buzzwords.",
      emoji: "🙌",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: <FaChartLine />,
      title: "Results That Matter",
      description:
        "Pretty designs are cool, but results are cooler. We obsess over metrics that actually move your business forward.",
      emoji: "📈",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: <FaClock />,
      title: "Fast & Furious",
      description:
        "We respect your time. Quick turnarounds without sacrificing quality – because good things don't always have to take forever.",
      emoji: "⚡",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <FaHandshake />,
      title: "True Partners",
      description:
        "We're not just vendors, we're your creative partners. Your vision + our expertise = magic.",
      emoji: "🤝",
      color: "bg-orange-100 text-orange-500",
    },
  ];

  const funFacts = [
    { icon: <FaCoffee />, text: "2,847 cups of coffee consumed" },
    { icon: <FaStar />, text: "4.9 average client rating" },
    { icon: <FaRocket />, text: "0 boring projects accepted" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Blobs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-cream-300/40 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-coral-100/30 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

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
            Why Pick Us? 🤔
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6">
            We&apos;re Kind of
            <span className="relative mx-3">
              <span className="relative z-10 text-warm-600">Awesome</span>
              <motion.span
                className="absolute -inset-2 bg-cream-300/60 rounded-xl -z-0 -rotate-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
              />
            </span>
            <span className="text-3xl ml-2">😎</span>
          </h2>

          <p className="text-warm-600 text-lg max-w-2xl mx-auto font-funky">
            Okay, we may be a tiny bit biased, but here are the real reasons why
            500+ brands chose to work with us (and keep coming back!)
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-cream-100/50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-cream-300"
              whileHover={{ y: -10 }}
            >
              {/* Emoji Background */}
              <span className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                {reason.emoji}
              </span>

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 10 }}
              >
                {reason.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-warm-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-warm-600 leading-relaxed">
                {reason.description}
              </p>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-cream-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Facts Bar */}
        <motion.div
          className="bg-warm-700 rounded-3xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h3 className="font-display text-2xl font-bold mb-2">
                Fun Facts About Us 🎉
              </h3>
              <p className="text-white/70 font-funky">
                Because numbers can be fun too!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <span className="text-cream-300 text-xl">{fact.icon}</span>
                  <span className="text-white font-funky font-medium">
                    {fact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-warm-600 font-funky text-lg mb-6">
            Still not convinced? Let&apos;s have a chat! ☕
          </p>
          <motion.button
            className="group bg-cream-300 text-warm-800 px-8 py-4 rounded-full font-funky font-bold text-lg hover:bg-warm-700 hover:text-white transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Discovery Call
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
