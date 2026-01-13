import { motion } from "framer-motion";

const WhyChooseUs = () => {
    const features = [
        {
            title: "Expert Developers",
            description: "Certified professionals with proven track records",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop&auto=format"
        },
        {
            title: "Fast Delivery",
            description: "Quick turnaround without compromising quality",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop&auto=format"
        },
        {
            title: "Fair Pricing",
            description: "Transparent pricing with no hidden costs",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=500&fit=crop&auto=format"
        },
        {
            title: "Full Support",
            description: "Ongoing maintenance and dedicated assistance",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=500&fit=crop&auto=format"
        }
    ];

    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-[2px]" style={{ backgroundColor: '#C4A484' }} />
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#C4A484' }}>
                            Why Us
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'serif' }}>
                        Why choose us?
                    </h2>
                    <p className="text-gray-500 text-sm max-w-lg">
                        Reliable expertise for projects of any scale
                    </p>
                </motion.div>

                {/* Image Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer"
                            style={{ aspectRatio: '3/4' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            {/* Background Image */}
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Beige accent line on hover */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                style={{ backgroundColor: '#C4A484' }}
                            />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                                <h3 className="text-base md:text-lg font-bold text-white mb-1" style={{ fontFamily: 'serif' }}>
                                    {feature.title}
                                </h3>
                                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-8 text-center md:text-left"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="px-6 py-3 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        style={{ backgroundColor: '#C4A484' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Start Your Project
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
