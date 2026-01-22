import { motion } from "framer-motion";
import { Brain, Network, Rocket, Shield } from "lucide-react";

// Adapted reasons from WhyChooseUs but for AI
const reasons = [
  {
    icon: <Brain />,
    title: "Strategic AI",
    description:
      "We don't just implement models; we align AI architecture with your core business KPIs.",
  },
  {
    icon: <Rocket />,
    title: "Rapid Deployment",
    description:
      "From concept to inference in record time using our pre-trained modular engines.",
  },
  {
    icon: <Network />,
    title: "Edge To Cloud",
    description:
      "Whether it's localized inference for privacy or scalable cloud clusters, we handle it.",
  },
  {
    icon: <Shield />,
    title: "Ethical & Secure",
    description:
      "Enterprise-grade security guardrails ensuring your data remains yours, always.",
  },
];

const AIWhyChooseUs = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#8b6f47] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
            The Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#6b5744] tracking-tight mb-6">
            WHY PARTNER WITH <br />
            <span className="font-serif italic text-[#c69563]">
              INNOVATION?
            </span>
          </h2>
          <p className="text-gray-500">
            Navigation through the noise of the AI revolution requires a pilot
            who knows the terrain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#f4e7e1]/50 border border-[#fbd9be] hover:bg-[#f4e7e1] transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#6b5744] mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#6b5744] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWhyChooseUs;
