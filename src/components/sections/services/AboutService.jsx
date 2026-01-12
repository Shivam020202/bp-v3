import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AboutService = () => {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 0,
            title: "Frontend Development",
            description: "Modern, responsive user interfaces built with React and cutting-edge technologies for exceptional user experiences.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&auto=format",
            technologies: ["React", "Vue.js", "TypeScript"],
            features: [
                "Responsive Design",
                "Modern UI/UX",
                "Performance Optimized"
            ]
        },
        {
            id: 1,
            title: "Backend Development",
            description: "Robust server-side applications, RESTful APIs, and database architecture for scalable web solutions.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format",
            technologies: ["Node.js", "Express.js", "MongoDB"],
            features: [
                "RESTful APIs",
                "Database Design",
                "Authentication & Security"
            ]
        },
        {
            id: 2,
            title: "E-commerce Solutions",
            description: "Custom online stores with shopping carts, payment processing, and inventory management systems.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format",
            technologies: ["Shopify", "WooCommerce", "Stripe"],
            features: [
                "Payment Gateway",
                "Inventory System",
                "Order Management"
            ]
        },
        {
            id: 3,
            title: "CMS Development",
            description: "Content Management Systems that allow easy content updates and website management.",
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop&auto=format",
            technologies: ["WordPress", "Strapi", "Contentful"],
            features: [
                "Easy Content Management",
                "Custom Admin Panel",
                "Multi-user Access"
            ]
        }
    ];

    const currentService = services[activeService];

    return (
        <section className="relative bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            {/* Top Gradient from Hero */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-transparent" />

            <div className="max-w-6xl mx-auto relative">
                {/* Section Header - Left Aligned */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[3px]" style={{ backgroundColor: '#C4A484' }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#C4A484' }}>
                            Our Services
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
                        Expert Web Development
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                        Comprehensive solutions from frontend to backend that drive business growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
                    {/* Left Side - Services Menu + Buttons */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Mobile: Horizontal Scrollable Filter */}
                        <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                            <div className="flex gap-2 min-w-max">
                                {services.map((service, index) => (
                                    <button
                                        key={service.id}
                                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0 ${activeService === index
                                            ? 'text-white shadow-md'
                                            : 'bg-white text-gray-600 hover:bg-gray-100'
                                            }`}
                                        style={{
                                            backgroundColor: activeService === index ? '#C4A484' : undefined
                                        }}
                                        onClick={() => setActiveService(index)}
                                    >
                                        {service.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Desktop: Vertical List */}
                        <div className="hidden lg:block space-y-4 flex-grow">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${activeService === index
                                        ? 'bg-white shadow-lg border-l-4'
                                        : 'bg-transparent hover:bg-white/50'
                                        }`}
                                    style={{
                                        borderLeftColor: activeService === index ? '#C4A484' : 'transparent'
                                    }}
                                    onClick={() => setActiveService(index)}
                                    whileHover={{ x: 5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${activeService === index
                                        ? 'text-gray-900'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}>
                                        {service.title}
                                    </h3>
                                    {activeService === index && (
                                        <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Buttons - Hidden on mobile, shown on desktop */}
                        <div className="hidden lg:flex gap-3 mt-6">
                            <motion.button
                                className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors font-semibold text-sm"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Get Started
                            </motion.button>
                            <motion.button
                                className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition-colors font-semibold text-sm"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Side - Dynamic Content */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="bg-gray-200 rounded-xl lg:rounded-2xl overflow-hidden h-48 md:h-64 lg:h-72 shadow-lg">
                                    <img
                                        src={currentService.image}
                                        alt={currentService.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-3 md:space-y-4 mt-4 md:mt-5 flex-grow flex flex-col justify-between">
                                    <div className="space-y-3 md:space-y-4">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'serif' }}>
                                            {currentService.title}
                                        </h3>

                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                            {currentService.description}
                                        </p>

                                        {/* Features List */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                            {currentService.features.map((feature, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C4A484' }} />
                                                    <span className="text-xs md:text-sm text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technologies - At bottom to align with left buttons */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {currentService.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium text-white rounded-full"
                                                style={{ backgroundColor: '#C4A484' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Mobile CTA Buttons */}
                                    <div className="flex gap-3 mt-4 lg:hidden">
                                        <button className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors font-semibold text-sm">
                                            Get Started
                                        </button>
                                        <button className="flex-1 border-2 border-gray-900 text-gray-900 px-4 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition-colors font-semibold text-sm">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutService;