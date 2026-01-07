import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaAward, FaLightbulb, FaHeadset, FaGlobeAmericas } from "react-icons/fa";

const WhyChooseService = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const reasons = [
        {
            number: "01",
            icon: <FaAward />,
            title: "Expertise Without Parallel",
            description:
                "Unmatched proficiency and deep industry insights for top-tier results.",
        },
        {
            number: "02",
            icon: <FaLightbulb />,
            title: "Innovation at the Core",
            description:
                "Cutting-edge technology solutions, staying ahead by innovating relentlessly.",
        },
        {
            number: "03",
            icon: <FaHeadset />,
            title: "Dedicated to Client Triumph",
            description:
                "Exceptional support tailored to ensure success at every step.",
        },
        {
            number: "04",
            icon: <FaGlobeAmericas />,
            title: "Worldwide Influence",
            description:
                "Global impact reaching audiences across different continents.",
        },
    ];

    return (
        <section className="py-16 bg-[#9F7AEA] relative overflow-hidden" ref={ref}>
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                >
                    <motion.span
                        className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-3"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        Why Choose Us 🎯
                    </motion.span>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Precision in Every
                        <span className="text-cream-300"> Element</span>
                    </h2>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/20 transition-all duration-300 border border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Number */}
                            <div className="text-4xl font-bold text-white/20 mb-3">{reason.number}</div>

                            {/* Icon */}
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white mb-3">
                                {reason.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-base font-bold text-white mb-2">
                                {reason.title}
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseService;
