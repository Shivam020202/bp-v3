import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    FaCode,
    FaBolt,
    FaMobileAlt,
    FaServer,
    FaShieldAlt,
    FaExpandArrowsAlt,
} from "react-icons/fa";

const KeyBenefits = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const benefits = [
        {
            icon: <FaCode />,
            title: "Custom Web Solutions",
            description:
                "Craft bespoke web applications tailored to your specific business needs.",
            color: "bg-cream-300",
            iconColor: "text-warm-700",
        },
        {
            icon: <FaBolt />,
            title: "Performance Optimization",
            description:
                "Build ultra-fast websites with streamlined code and rapid load times.",
            color: "bg-cream-300",
            iconColor: "text-warm-700",
        },
        {
            icon: <FaMobileAlt />,
            title: "Responsive Design",
            description:
                "Ensure flawless experience on all devices with adaptive designs.",
            color: "bg-cream-300",
            iconColor: "text-warm-700",
        },
        {
            icon: <FaServer />,
            title: "Backend Integration",
            description:
                "Implement strong backend frameworks with seamless integration.",
            color: "bg-cream-300",
            iconColor: "text-warm-700",
        },
        {
            icon: <FaShieldAlt />,
            title: "Advanced Security",
            description:
                "Employ stringent security measures including SSL encryption.",
            color: "bg-cream-300",
            iconColor: "text-warm-700",
        },
        {
            icon: <FaExpandArrowsAlt />,
            title: "Scalable Solutions",
            description:
                "Create applications designed to scale with your business demands.",
            color: "bg-cream-300",
            iconColor: "text-warm-700",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <section className="py-16 bg-cream-200 relative overflow-hidden" ref={ref}>
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
                        Key Benefits ✨
                    </motion.span>

                    <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-900 mb-3">
                        What Branding Pioneers
                        <span className="relative mx-2">
                            <span className="relative z-10 text-warm-600"> Delivers</span>
                            <motion.span
                                className="absolute -bottom-1 left-0 right-0 h-2 bg-cream-300/60 -z-0 rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            />
                        </span>
                    </h2>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300 border border-cream-300"
                            whileHover={{ y: -5 }}
                        >
                            {/* Icon */}
                            <motion.div
                                className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center text-xl ${benefit.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {benefit.icon}
                            </motion.div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-warm-900 mb-2 group-hover:text-warm-600 transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="text-warm-600 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default KeyBenefits;
