import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Implementation Timeline?",
    a: "Timelines vary by complexity. Standard integrations take 2-4 weeks. Enterprise custom models require 2-3 months.",
  },
  {
    q: "Data Privacy & Security?",
    a: "We deploy within your VPC ensuring data sovereignty. SOC2 and GDPR compliant architectures available.",
  },
  {
    q: "Custom vs. API?",
    a: "Hybrid approach. Frontier APIs for reasoning; Open-source models for sensitive, domain-specific tasks.",
  },
  {
    q: "Post-Launch Support?",
    a: "Continuous monitoring, re-training pipelines, and 24/7 system health checks included in all SLAs.",
  },
];

const AIFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-black text-black">FAQ</h2>
            <p className="text-sm text-gray-500 mt-2">
              Common inquiries regarding our operations.
            </p>
          </div>

          <div className="md:col-span-8">
            {faqs.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50/50 transition-colors px-2"
                >
                  <span className="text-lg font-bold text-gray-900">
                    {item.q}
                  </span>
                  <Plus
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openIndex === idx ? "rotate-45 text-black" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-2 pr-10 text-sm text-gray-500 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFaq;
