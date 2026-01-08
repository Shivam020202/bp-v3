import { motion } from "framer-motion";

const AboutService = () => {
    const services = [
        {
            title: "Custom Web Development",
            desc: "Tailored solutions with modern frameworks",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            color: "blue"
        },
        {
            title: "UI/UX Design",
            desc: "Beautiful interfaces that convert",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            color: "purple"
        },
        {
            title: "E-Commerce Solutions",
            desc: "Scalable stores with secure payments",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: "orange"
        },
        {
            title: "API Integration",
            desc: "Seamless third-party connections",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: "green"
        },
        {
            title: "Performance Optimization",
            desc: "Fast load times and better SEO",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: "yellow"
        },
        {
            title: "Support & Maintenance",
            desc: "Ongoing updates and monitoring",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: "indigo"
        }
    ];

    const colorMap = {
        blue: "from-blue-500 to-blue-600",
        purple: "from-purple-500 to-purple-600",
        orange: "from-orange-500 to-orange-600",
        green: "from-green-500 to-green-600",
        yellow: "from-yellow-500 to-orange-500",
        indigo: "from-indigo-500 to-indigo-600"
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Our Services
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Complete web development solutions for your business
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="h-full bg-white rounded-xl p-5 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorMap[service.color]} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-base font-bold text-gray-900 mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutService;
