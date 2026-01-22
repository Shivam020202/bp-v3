import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Predictive Analytics",
    desc: "Convert raw historical data into accurate future forecasts.",
    stat: "94% Accuracy",
  },
  {
    title: "Autonomous Agents",
    desc: "Self-learning bots that execute complex workflows 24/7.",
    stat: "Zero Downtime",
  },
  {
    title: "Computer Vision",
    desc: "Automated ocular systems for high-speed quality control.",
    stat: "< 0.1s Latency",
  },
  {
    title: "Natural Language",
    desc: "Enterprise LLMs fine-tuned for your specific industry.",
    stat: "Human-Level",
  },
];

const AIBentoGrid = () => {
  return (
    <section className="py-24 bg-white text-black border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <span className="text-[#c69563] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
            Our Engine
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black">
            CORE <span className="text-[#c69563]">SYSTEMS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col justify-between p-8 bg-gray-50 border border-gray-100 hover:border-[#c69563] transition-colors duration-300 group relative min-h-[320px]"
            >
              <div className="absolute top-0 right-0 p-6 opacity-30 font-mono text-xs tracking-widest text-black group-hover:text-[#c69563] transition-colors">
                sys_0{idx + 1}
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-[#c69563] transition-colors leading-tight">
                  {item.title}
                </h3>
                <div className="h-0.5 w-8 bg-gray-300 mb-6 group-hover:w-12 group-hover:bg-[#c69563] transition-all duration-500" />
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 group-hover:border-[#c69563]/20 transition-colors">
                <span className="block text-3xl font-black text-gray-200 group-hover:text-black transition-colors">
                  {item.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIBentoGrid;
