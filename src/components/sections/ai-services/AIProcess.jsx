import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Audit & Strategy",
    desc: "We analyze your data infrastructure and identify high-impact automation opportunities.",
  },
  {
    num: "02",
    title: "Data Engineering",
    desc: "Structuring and sanitizing datasets to ensure model accuracy and reliability.",
  },
  {
    num: "03",
    title: "Model Development",
    desc: "Fine-tuning LLMs or deploying custom inference engines tailored to your KPIs.",
  },
  {
    num: "04",
    title: "Deployment",
    desc: "Seamless integration into your existing stack with enterprise-grade security.",
  },
];

const AIProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">
            DEPLOYMENT <span className="text-[#c69563]">PROTOCOL.</span>
          </h2>
          <p className="max-w-xs text-right text-gray-500 text-sm mt-4 md:mt-0 font-medium">
            Systematic approach to sovereign AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="text-[#c69563] font-mono text-xs font-bold mb-3">
                {step.num}
              </div>

              <h3 className="text-lg font-bold mb-2 text-black group-hover:text-[#c69563] transition-colors">
                {step.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProcess;
