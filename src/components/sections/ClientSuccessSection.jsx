import { motion } from "framer-motion";

const caseStudies = [
  {
    logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/logo_wfvwci.webp",
    metric: "400%",
    metricLabel: "Increase in Organic Traffic",
    title: "SEO \nDominance",
    description:
      "Implemented a comprehensive SEO strategy that established our client as the top authority in their field across search engines.",
    theme: "dark",
  },
  {
    logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/max_home-logo_ya130a.png",
    metric: "0.5s",
    metricLabel: "Average Page Load Time",
    title: "Dynamic \nArchitecture",
    description:
      "Revolutionized the user experience with a lightning-fast, dynamic website infrastructure handling thousands of daily active users.",
    theme: "light",
  },
  {
    logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/lifecare-new-logo_xerg1l.webp",
    metric: "1M+",
    metricLabel: "Social Media Engagement",
    title: "Viral \nGrowth",
    description:
      "Executed high-impact YouTube and Instagram campaigns that drove unprecedented engagement and community growth.",
    theme: "accent",
  },
];

const ClientSuccessSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em] mb-4"
          >
            Case Studies
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter leading-[0.9] mb-6"
          >
            See What We've Done
            <br />
            For Others
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            (And What We Could Do For You!)
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`
                relative p-8 md:p-10 rounded-3xl flex flex-col justify-between min-h-[500px] border transition-all duration-300 group hover:shadow-2xl
                ${study.theme === "dark"
                  ? "bg-zinc-900 border-zinc-800 text-white"
                  : study.theme === "light"
                    ? "bg-cream-50 border-warm-200 text-black"
                    : "bg-warm-100 border-warm-200 text-black"
                }
              `}
            >
              {/* Metric */}
              <div>
                <motion.h3
                  className={`text-6xl md:text-7xl font-black mb-4 font-display
                    ${study.theme === "dark" ? "text-white" : "text-zinc-900"}
                  `}
                >
                  {study.metric}
                </motion.h3>
                <div
                  className={`text-lg font-bold mb-8 font-body border-b pb-8 ${study.theme === "dark" ? "border-white/20" : "border-black/10"}`}
                >
                  {study.metricLabel}
                </div>

                <h4
                  className={`text-2xl font-bold mb-4 whitespace-pre-line font-display leading-tight
                   ${study.theme === "dark" ? "text-warm-300" : "text-warm-600"}
                `}
                >
                  {study.title}
                </h4>
                <p
                  className={`text-sm md:text-base leading-relaxed font-body
                  ${study.theme === "dark" ? "text-gray-400" : "text-gray-600"}
                `}
                >
                  {study.description}
                </p>
              </div>

              {/* Logo */}
              <div className="mt-8 pt-8 border-t border-black/5 flex items-end">
                <div className="h-16 flex items-center">
                  <img
                    src={study.logo}
                    alt="Client Logo"
                    className={`max-h-full w-auto object-contain group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 bg-white rounded-lg p-2`}
                  />
                </div>
              </div>

              {/* Decorative Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none
                 ${study.theme === "dark"
                    ? "bg-gradient-to-br from-warm-500/10 to-transparent"
                    : "bg-gradient-to-br from-white/40 to-transparent"
                  }
               `}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
