import { motion } from "framer-motion";

const WhyChooseUs = () => {
    const features = [
        {
            title: "Expert Developers",
            description: "Certified professionals with proven track records",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop&auto=format",
            stat: "15+",
            statLabel: "Years Exp"
        },
        {
            title: "Fast Delivery",
            description: "Quick turnaround without compromising quality",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop&auto=format",
            stat: "2x",
            statLabel: "Faster"
        },
        {
            title: "Fair Pricing",
            description: "Transparent pricing with no hidden costs",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=500&fit=crop&auto=format",
            stat: "30%",
            statLabel: "Savings"
        },
        {
            title: "Full Support",
            description: "Ongoing maintenance and dedicated assistance",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=500&fit=crop&auto=format",
            stat: "24/7",
            statLabel: "Support"
        }
    ];

    // Stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header - Enhanced with animations */}
                <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Why Us
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            WHY
                        </motion.span>
                        <motion.span
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            CHOOSE US.
                        </motion.span>
                    </h2>
                    <motion.p
                        className="text-gray-500 text-sm md:text-base max-w-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Reliable expertise for projects of any scale
                    </motion.p>
                </motion.div>

                {/* Image Cards Grid - Enhanced with more animations */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                            style={{ aspectRatio: '3/4' }}
                            variants={cardVariants}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Background Image with zoom on hover */}
                            <motion.img
                                src={feature.image}
                                alt={feature.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.7 }}
                            />

                            {/* Gradient Overlay - Animated */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Stat Badge - Animated on hover */}
                            <motion.div
                                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'rgba(196, 164, 132, 0.3)'
                                }}
                            >
                                <span className="text-white font-bold text-sm">{feature.stat}</span>
                                <span className="text-white/70 text-xs ml-1">{feature.statLabel}</span>
                            </motion.div>

                            {/* Beige accent line - Animated */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-1"
                                style={{ backgroundColor: '#C4A484' }}
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Content - Animated slide up */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                                initial={{ y: 10 }}
                                whileHover={{ y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Icon */}
                                <motion.div
                                    className="mb-3 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center backdrop-blur-md"
                                    style={{ backgroundColor: 'rgba(196, 164, 132, 0.2)' }}
                                    whileHover={{ rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <span className="text-xl md:text-2xl">
                                        {index === 0 && '👨‍💻'}
                                        {index === 1 && '⚡'}
                                        {index === 2 && '💰'}
                                        {index === 3 && '🛡️'}
                                    </span>
                                </motion.div>

                                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                                    {feature.title}
                                </h3>
                                <motion.p
                                    className="text-white/70 text-xs md:text-sm leading-relaxed"
                                    initial={{ opacity: 0.7, height: 'auto' }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {feature.description}
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA - Enhanced */}
                <motion.div
                    className="mt-12 md:mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.button
                        className="group px-8 py-4 text-white text-sm font-semibold rounded-full shadow-lg relative overflow-hidden"
                        style={{ backgroundColor: '#C4A484' }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: '0 20px 40px -15px rgba(196, 164, 132, 0.4)'
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                            initial={{ x: '-150%' }}
                            whileHover={{ x: '150%' }}
                            transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Project
                            <motion.span
                                className="inline-block"
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                            >
                                →
                            </motion.span>
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
