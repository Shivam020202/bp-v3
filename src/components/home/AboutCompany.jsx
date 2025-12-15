import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHeart,
  FaRocket,
  FaCrown,
  FaUsers,
  FaCoffee,
  FaLightbulb,
} from "react-icons/fa";

const AboutCompany = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <FaHeart />,
      number: "500+",
      label: "Happy Clients",
      color: "bg-pink-100 text-pink-500",
    },
    {
      icon: <FaRocket />,
      number: "1000+",
      label: "Projects Launched",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: <FaCrown />,
      number: "50+",
      label: "Awards Won",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <FaCoffee />,
      number: "∞",
      label: "Cups of Coffee",
      color: "bg-warm-100 text-warm-600",
    },
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Creative Rebels",
      description:
        "We don't follow trends, we start them. Our team thinks outside every box imaginable.",
    },
    {
      icon: <FaUsers />,
      title: "Human First",
      description:
        "Behind every brand is a story. We help you tell yours in a way that actually connects.",
    },
    {
      icon: <FaHeart />,
      title: "Passion Driven",
      description:
        "We genuinely love what we do. That excitement? It shows in everything we create.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cream-300/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block bg-cream-300/50 text-warm-700 px-4 py-2 rounded-full text-sm font-funky font-bold mb-4"
          >
            Hey, Nice to Meet You! 👋
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6"
          >
            We&apos;re Not Your
            <span className="relative mx-3">
              <span className="relative z-10 text-warm-600">Typical</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <motion.path
                  d="M2 10C50 2 150 2 198 10"
                  stroke="#FBD9BE"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
            </span>
            Agency
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-warm-600 text-lg max-w-2xl mx-auto font-funky leading-relaxed"
          >
            We&apos;re a bunch of creative misfits, caffeine enthusiasts, and
            brand obsessives who believe that marketing should feel less like a
            chore and more like a conversation with a good friend. 🎨✨
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-cream-100 rounded-3xl hover:shadow-xl transition-shadow duration-300 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 10 }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-warm-900 mb-2 font-display"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-warm-600 font-funky">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Our creative team"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/40 to-transparent" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-cream-300 rounded-2xl p-4 shadow-xl z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-warm-800 font-bold font-funky">
                  Since 2018 🎉
                </p>
              </motion.div>

              <motion.div
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌍</span>
                  <span className="text-warm-700 font-funky font-bold">
                    Global Reach
                  </span>
                </div>
              </motion.div>

              {/* Decorative blob */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-coral-100 rounded-full blur-2xl opacity-60" />
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="font-display text-3xl md:text-4xl font-bold text-warm-900 mb-8"
            >
              Why We&apos;re Different
              <span className="text-cream-400 ml-2">*</span>
            </motion.h3>

            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex gap-5 p-6 bg-cream-100/50 rounded-2xl hover:bg-cream-200/50 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-14 h-14 bg-cream-300 rounded-2xl flex items-center justify-center text-warm-700 text-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-warm-900 text-xl mb-2 font-funky">
                      {value.title}
                    </h4>
                    <p className="text-warm-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-10">
              <motion.button
                className="group bg-warm-700 text-white px-8 py-4 rounded-full font-funky font-bold text-lg shadow-xl shadow-warm-700/20 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get to Know Us Better
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
