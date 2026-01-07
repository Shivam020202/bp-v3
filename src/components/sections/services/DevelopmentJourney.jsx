import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    FaLightbulb,
    FaProjectDiagram,
    FaPaintBrush,
    FaCode,
    FaClipboardCheck,
    FaRocket,
} from "react-icons/fa";

const DevelopmentJourney = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const steps = [
        { icon: <FaLightbulb />, title: "Insight & Engagement", step: 1 },
        { icon: <FaProjectDiagram />, title: "Strategy & Blueprint", step: 2 },
        { icon: <FaPaintBrush />, title: "Design & Innovation", step: 3 },
        { icon: <FaCode />, title: "Coding & Execution", step: 4 },
        { icon: <FaClipboardCheck />, title: "Testing & Validation", step: 5 },
        { icon: <FaRocket />, title: "Launch & Enhancement", step: 6 },
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                >
                    <motion.span
                        className="inline-block bg-cream-300/50 text-warm-700 px-4 py-2 rounded-full text-sm font-bold mb-3"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        Our Process 🛤️
                    </motion.span>

                    <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-900">
                        Development <span className="text-warm-600">Journey</span>
                    </h2>
                </motion.div>

                {/* Steps - Horizontal Flow */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-cream-300" />
                            )}

                            {/* Icon Circle */}
                            <motion.div
                                className="relative z-10 w-16 h-16 bg-cream-300 rounded-full flex items-center justify-center text-warm-700 text-xl mx-auto mb-3 shadow-lg"
                                whileHover={{ scale: 1.1, backgroundColor: "#9F7AEA", color: "#fff" }}
                            >
                                {step.icon}
                            </motion.div>

                            {/* Step Number */}
                            <div className="text-xs font-bold text-warm-500 mb-1">Step {step.step}</div>

                            {/* Title */}
                            <h3 className="text-sm font-bold text-warm-900">{step.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevelopmentJourney;
