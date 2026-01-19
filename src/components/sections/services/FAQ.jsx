import { motion } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What technologies do you use for web development?",
            answer: "We utilize modern frameworks like React, Next.js, and Node.js to build scalable, high-performance web applications tailored to your needs."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity. A standard website takes 4-6 weeks, while complex web applications may require 3-6 months. We provide detailed timelines during consultation."
        },
        {
            question: "Do you provide ongoing support after launch?",
            answer: "Yes! We offer comprehensive maintenance packages including updates, security patches, performance monitoring, and technical support to ensure your application runs smoothly."
        },
        {
            question: "Can you integrate with existing systems?",
            answer: "Absolutely. We specialize in seamless integrations with CRMs, payment gateways, APIs, and third-party services to enhance your digital ecosystem."
        },
        {
            question: "What is your development process?",
            answer: "Our proven 6-step process includes Discovery, Strategy, Design, Development, Testing, and Launch - ensuring quality at every stage with transparent communication throughout."
        }
    ];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Left - FAQ Content */}
                    <div>
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                                FAQ
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4 text-black">
                                COMMON <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 italic font-serif">
                                    QUESTIONS.
                                </span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg">
                                Everything you need to know about our services
                            </p>
                        </motion.div>

                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <div
                                        className={`border rounded-xl transition-all cursor-pointer ${openIndex === i
                                            ? "border-[#C4A484] bg-[#C4A484]/5"
                                            : "border-gray-200 bg-white hover:border-gray-300"
                                            }`}
                                        onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                    >
                                        <div className="flex items-start justify-between p-4">
                                            <h3 className="text-sm font-semibold text-gray-900 pr-4">
                                                {faq.question}
                                            </h3>
                                            <motion.div
                                                animate={{ rotate: openIndex === i ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="flex-shrink-0"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </motion.div>
                                        </div>
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: openIndex === i ? "auto" : 0,
                                                opacity: openIndex === i ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-sm text-gray-600 px-4 pb-4 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Illustration */}
                    <motion.div
                        className="relative hidden lg:block"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="sticky top-24">
                            <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto">
                                {/* Background circles */}
                                <circle cx="200" cy="200" r="160" fill="#F3F4F6" />
                                <circle cx="200" cy="200" r="120" fill="#E5E7EB" opacity="0.4" />

                                {/* Question marks floating */}
                                <motion.g
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <text x="80" y="100" fontSize="40" fill="#3B82F6" opacity="0.3">?</text>
                                </motion.g>
                                <motion.g
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                >
                                    <text x="280" y="120" fontSize="32" fill="#8B5CF6" opacity="0.3">?</text>
                                </motion.g>
                                <motion.g
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                                >
                                    <text x="300" y="280" fontSize="36" fill="#EC4899" opacity="0.3">?</text>
                                </motion.g>

                                {/* Central document/FAQ icon */}
                                <motion.g
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", delay: 0.2 }}
                                >
                                    <rect x="140" y="160" width="120" height="140" rx="8" fill="white" stroke="#3B82F6" strokeWidth="3" />
                                    {/* Lines inside document */}
                                    <line x1="160" y1="185" x2="240" y2="185" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="160" y1="205" x2="230" y2="205" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="160" y1="225" x2="235" y2="225" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="160" y1="245" x2="220" y2="245" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                                    <line x1="160" y1="265" x2="225" y2="265" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                                </motion.g>

                                {/* Checkmark */}
                                <motion.circle
                                    cx="240" cy="180"
                                    r="18"
                                    fill="#10B981"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", delay: 0.5 }}
                                />
                                <motion.path
                                    d="M 233 180 L 237 184 L 245 176"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7, duration: 0.3 }}
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
