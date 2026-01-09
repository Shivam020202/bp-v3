import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ClienteleCTA = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-12 relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header - Left Aligned, Smaller */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Get in Touch
                    </h2>
                    <p className="text-sm text-gray-500">
                        Let's build something great together
                    </p>
                </motion.div>

                {/* CTA Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 md:p-8"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        Want to elevate your brand experience?
                    </h3>

                    <p className="text-white/80 text-sm mb-5">
                        Just bring your creative business idea or the communication problem. Let's solve them together.
                    </p>

                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors duration-300 shadow-md"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Us →
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default ClienteleCTA;
