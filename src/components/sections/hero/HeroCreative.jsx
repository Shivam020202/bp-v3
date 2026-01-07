import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaStar, FaHeart } from "react-icons/fa";

const HeroCreative = () => {
  const floatingElements = [
    { emoji: "✨", delay: 0, x: "10%", y: "20%" },
    { emoji: "🎨", delay: 0.5, x: "85%", y: "15%" },
    { emoji: "💡", delay: 1, x: "75%", y: "70%" },
    { emoji: "🚀", delay: 1.5, x: "15%", y: "75%" },
    { emoji: "⭐", delay: 2, x: "90%", y: "45%" },
  ];

  return (
    <section className="relative min-h-screen bg-cream-200 overflow-hidden pt-32 pb-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large blob shapes */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-cream-300/60 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-coral-100/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sage-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Floating Emojis */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl md:text-5xl"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            opacity: { delay: el.delay, duration: 0.5 },
            y: {
              delay: el.delay,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              delay: el.delay,
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {el.emoji}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-cream-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="flex items-center gap-1 text-warm-600">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </span>
              <span className="text-warm-700 font-medium text-sm">
                Loved by 500+ brands
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-warm-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We make brands
              <span className="relative inline-block mx-2">
                <span className="relative z-10 text-warm-600">pop</span>
                <motion.span
                  className="absolute -inset-2 bg-cream-300 rounded-xl -z-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                />
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-600 to-coral-500">
                & stories stick
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg md:text-xl text-warm-700 mb-8 max-w-xl leading-relaxed font-funky"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hey there! 👋 We&apos;re the creative crew that turns
              &quot;meh&quot; into &quot;WOW!&quot; No boring corporate stuff
              here – just real, authentic branding that makes people actually
              care about your brand.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="group relative bg-warm-700 text-white px-8 py-4 rounded-full font-funky font-bold text-lg overflow-hidden shadow-xl shadow-warm-700/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s Create Magic
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-warm-800"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                className="group flex items-center gap-3 px-6 py-4 rounded-full font-funky font-bold text-warm-700 hover:text-warm-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:bg-cream-300 transition-colors">
                  <FaPlay className="text-sm ml-1" />
                </span>
                Watch Our Story
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-12 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-cream-300 to-cream-400 border-2 border-white flex items-center justify-center text-warm-700 font-bold text-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                  >
                    {["😊", "🎉", "💪", "❤️"][i - 1]}
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-warm-800 font-bold">500+ Happy Clients</p>
                <p className="text-warm-600 text-sm">& counting every day!</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Creative Collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Image */}
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-warm-600 to-warm-700 rounded-3xl overflow-hidden shadow-2xl"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Creative team collaboration"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 to-transparent" />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <p className="text-warm-900 font-bold">300%</p>
                    <p className="text-warm-600 text-sm">Growth Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <FaHeart className="text-pink-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-warm-900 font-bold">Loved</p>
                    <p className="text-warm-600 text-sm">By Clients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-cream-300 rounded-2xl px-4 py-3 shadow-xl"
                animate={{ x: [0, 10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <p className="text-warm-800 font-funky font-bold">
                  Let&apos;s go! 🚀
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="currentColor"
            opacity=".5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,googl172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroCreative;
