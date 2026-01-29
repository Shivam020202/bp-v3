import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Branding Pioneers offer?",
    answer:
      "We offer a comprehensive suite of digital services including Brand Strategy, UI/UX Design, Web Development, Social Media Marketing, and SEO/Content Strategy. Our goal is to be your one-stop partner for digital growth.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical branding and website project defaults to 4-8 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during our discovery phase.",
  },
  {
    question: "Do you work with startups or established companies?",
    answer:
      "We partner with ambitious brands of all sizes. From early-stage startups looking to make a splash to established corporations seeking a digital refresh, we adapt our strategies to meet your specific stage and goals.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We believe in transparent, value-based pricing. Since every project is unique, we create custom proposals tailored to your needs and budget. Contact us for a free consultation and quote.",
  },
  {
    question: "Will I have a dedicated project manager?",
    answer:
      "Absolutely. You will be assigned a dedicated project lead who serves as your primary point of contact, ensuring clear communication and keeping your project on track from kickoff to launch.",
  },
];

const FAQItem = ({ item, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={onClick}
        className={`w-full text-left p-6 md:p-8 rounded-3xl transition-all duration-300 flex items-start justify-between gap-4 group ${isOpen
          ? "bg-black text-white shadow-xl"
          : "bg-white hover:bg-cream-50 text-black border border-gray-100"
          }`}
      >
        <span
          className={`text-lg md:text-xl font-bold tracking-tight ${isOpen ? "text-white" : "text-black group-hover:text-warm-600"} transition-colors`}
        >
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen
            ? "border-warm-400 bg-warm-400 text-black rotate-180"
            : "border-gray-200 text-gray-400 group-hover:border-warm-400 group-hover:text-warm-400"
            }`}
        >
          {isOpen ? (
            <FaMinus className="text-xs md:text-sm" />
          ) : (
            <FaPlus className="text-xs md:text-sm" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8 pt-2 md:pt-2 px-8 md:px-10 text-gray-600 leading-relaxed max-w-3xl">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Header Section */}
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-6xl font-black text-black mb-6 leading-none tracking-tighter">
                Frequently Asked
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-400 to-warm-600 italic font-serif">
                  Questions
                </span>
              </h2>
              <p className="text-gray-500 text-lg mb-8">
                Everything you need to know about working with us.
              </p>

              <div className="hidden md:block w-20 h-1 bg-gradient-to-r from-warm-400 to-transparent rounded-full" />
            </motion.div>
          </div>

          {/* Questions List */}
          <div className="md:w-2/3">
            {faqs.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default FAQSection;
