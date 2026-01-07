import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OurClients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Sample client logos (using placeholder for demo)
  const clients = [
    { name: "TechFlow", logo: "🚀" },
    { name: "GreenLeaf", logo: "🌿" },
    { name: "Starlight", logo: "⭐" },
    { name: "CloudNine", logo: "☁️" },
    { name: "FireBrand", logo: "🔥" },
    { name: "WaveRider", logo: "🌊" },
    { name: "SunBeam", logo: "☀️" },
    { name: "MoonGlow", logo: "🌙" },
  ];

  const testimonials = [
    {
      quote:
        "These folks literally transformed our brand overnight. And they were fun to work with too!",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      quote:
        "Finally, an agency that actually listens and delivers. Our engagement went through the roof! 📈",
      author: "Mike Rodriguez",
      role: "Founder, GreenLeaf",
      avatar: "👨‍🦱",
      rating: 5,
    },
    {
      quote:
        "Creative, professional, and genuinely nice humans. What more could you ask for?",
      author: "Emma Thompson",
      role: "Marketing Director, Starlight",
      avatar: "👩‍🦰",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-cream-200 relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-cream-300/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-coral-100/40 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block bg-white/80 text-warm-700 px-4 py-2 rounded-full text-sm font-funky font-bold mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Our Amazing Clients 💝
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6">
            Brands We&apos;ve
            <span className="relative mx-3 inline-block">
              <span className="relative z-10 text-warm-600">Helped</span>
              <motion.span
                className="absolute -inset-2 bg-cream-300/60 rounded-xl -z-0 -rotate-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
              />
            </span>
            Shine
          </h2>

          <p className="text-warm-600 text-lg max-w-xl mx-auto font-funky">
            From startups to established brands, we&apos;ve had the privilege of
            working with some pretty awesome people. Here&apos;s the fam! 👨‍👩‍👧‍👦
          </p>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream-200 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream-200 to-transparent z-10" />

          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-40 h-24 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-4xl">{client.logo}</span>
                <span className="text-warm-700 font-funky font-bold text-sm">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-cream-300 rounded-lg flex items-center justify-center text-warm-600 font-bold text-xl">
                &quot;
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-warm-700 mb-6 leading-relaxed font-funky text-lg">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-warm-900">
                    {testimonial.author}
                  </p>
                  <p className="text-warm-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-cream-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-warm-600 font-funky text-lg mb-6">
            Want to join this awesome family? 🤗
          </p>
          <motion.button
            className="bg-warm-700 text-white px-8 py-4 rounded-full font-funky font-bold text-lg shadow-xl shadow-warm-700/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Work Together ✨
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
