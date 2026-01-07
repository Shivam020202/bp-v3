import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ServiceFAQ = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do I initiate services with you?",
            answer: "Reach out via our contact form or email. We'll schedule a free consultation to discuss your requirements and provide a customized proposal.",
        },
        {
            question: "Which payment options are available?",
            answer: "We offer bank transfers, cards, and digital payments. For larger projects, we structure milestone-based payments.",
        },
        {
            question: "Is it possible to modify my service plan?",
            answer: "Absolutely! You can upgrade, downgrade, or modify your plan at any point. We ensure seamless transitions.",
        },
        {
            question: "What are the ways to reach customer support?",
            answer: "Email support, live chat, scheduled video calls, and a dedicated project manager for ongoing engagements.",
        },
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                >
                    <motion.span
                        className="inline-block bg-cream-300/50 text-warm-700 px-4 py-2 rounded-full text-sm font-bold mb-3"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        FAQ 💬
                    </motion.span>

                    <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-900">
                        Frequently Asked <span className="text-warm-600">Questions</span>
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-2xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="bg-cream-100 rounded-xl overflow-hidden border border-cream-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <button
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-cream-200 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-warm-900 text-sm">{faq.question}</span>
                                <motion.div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${openIndex === index ? "bg-[#9F7AEA] text-white" : "bg-cream-300 text-warm-700"
                                        } transition-colors`}
                                >
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-4 text-warm-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQ;
