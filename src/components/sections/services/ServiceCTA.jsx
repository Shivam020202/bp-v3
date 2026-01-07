import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaRocket } from "react-icons/fa";

const ServiceCTA = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-16 bg-cream-200 relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="relative bg-warm-700 rounded-3xl p-10 overflow-hidden text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                >
                    {/* Background Pattern */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                            backgroundSize: "30px 30px",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <motion.div
                            className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-5"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ delay: 0.2, type: "spring" }}
                        >
                            <FaRocket className="text-white text-xl" />
                        </motion.div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Transform Your Digital Presence
                        </h2>

                        <p className="text-white/70 mb-6 text-sm">
                            Join the digital revolution and elevate your brand with our cutting-edge solutions.
                        </p>

                        <motion.button
                            className="bg-cream-300 text-warm-800 px-8 py-3 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Today →
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceCTA;
