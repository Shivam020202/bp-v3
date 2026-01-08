import { motion } from "framer-motion";

const WhyChooseUs = () => {
    const benefits = [
        {
            title: "Expert Team",
            desc: "Industry-leading professionals with proven track records",
            color: "#3B82F6",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            )
        },
        {
            title: "Innovative Solutions",
            desc: "Cutting-edge technologies and modern approaches",
            color: "#8B5CF6",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "Client Success",
            desc: "Dedicated support and partnership throughout",
            color: "#EC4899",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: "Global Impact",
            desc: "Trusted by clients worldwide",
            color: "#10B981",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Excellence delivered through expertise
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            whileHover={{ y: -6 }}
                        >
                            <div
                                className="relative bg-white rounded-xl p-5 h-full border-2 border-transparent hover:border-current transition-all shadow-sm hover:shadow-xl"
                                style={{ color: benefit.color }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                                    style={{
                                        backgroundColor: `${benefit.color}15`,
                                        color: benefit.color
                                    }}
                                >
                                    {benefit.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-base font-bold text-gray-900 mb-1.5">
                                    {benefit.title}
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
