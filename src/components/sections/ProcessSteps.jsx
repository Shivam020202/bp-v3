import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Contact Us",
    description: "You get in touch with us by filling out the form above.",
  },
  {
    number: "2",
    title: "Discovery",
    description:
      "We hash out the details together. You tell us about your budget and business goals, and we audit your digital assets and channels.",
  },
  {
    number: "3",
    title: "Strategy",
    description:
      "We prepare a comprehensive, custom growth strategy tailored exactly to the needs of your organization.",
  },
  {
    number: "4",
    title: "Growth",
    description: "You sit back and watch as your business grows.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-black mb-6"
          >
            Ready to work with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
              Branding Pioneers?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl"
          >
            Here's what will go down after you contact us:
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-warm-300 to-transparent hidden md:block" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="mb-6 relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 mx-auto rounded-full bg-white border-4 border-warm-200 flex items-center justify-center shadow-lg relative z-10 group-hover:border-[#C4A484] transition-colors duration-300"
                  >
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#C4A484] to-[#8B6F47]">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#C4A484] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed px-4 text-sm md:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-warm-100 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 opacity-50" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-cream-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
    </section>
  );
};

export default ProcessSteps;
