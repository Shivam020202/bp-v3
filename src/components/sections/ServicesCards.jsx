import { motion } from 'framer-motion';
import { useState } from 'react';

const ServicesCards = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format",
            icon: "🌐",
            technologies: ["React", "Next.js", "Node.js", "TypeScript"],
            features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"]
        },
        {
            id: 2,
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android with seamless user interfaces.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&auto=format",
            icon: "📱",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            features: ["Cross-platform", "Native Performance", "App Store Ready", "Push Notifications"]
        },
        {
            id: 3,
            title: "Backend Development",
            description: "Robust server-side solutions, APIs, and database architecture for scalable applications.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&auto=format",
            icon: "⚙️",
            technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
            features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security First"]
        },
        {
            id: 4,
            title: "E-commerce Solutions",
            description: "Complete online store development with payment integration and inventory management systems.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
            icon: "🛒",
            technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
            features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics Dashboard"]
        },
        {
            id: 5,
            title: "UI/UX Design",
            description: "User-centered design solutions that combine aesthetics with functionality for exceptional user experiences.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&auto=format",
            icon: "🎨",
            technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
        },
        {
            id: 6,
            title: "Cloud & DevOps",
            description: "Cloud infrastructure setup, deployment automation, and continuous integration/delivery pipelines.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&auto=format",
            icon: "☁️",
            technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
            features: ["Auto Scaling", "Load Balancing", "Monitoring", "Backup Solutions"]
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[3px]" style={{ backgroundColor: '#C4A484' }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#C4A484' }}>
                            What We Offer
                        </span>
                        <div className="w-12 h-[3px]" style={{ backgroundColor: '#C4A484' }} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
                        Our Development Services
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        From concept to deployment, we deliver comprehensive development solutions 
                        tailored to your business needs with cutting-edge technologies.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onHoverStart={() => setHoveredCard(service.id)}
                            onHoverEnd={() => setHoveredCard(null)}
                        >
                            {/* Card Container */}
                            <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                                {/* Folded Corner Effect */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-200 to-transparent rounded-bl-3xl opacity-30" />
                                
                                {/* Image Container */}
                                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-3xl overflow-hidden">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    
                                    {/* Service Icon */}
                                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.slice(0, 3).map((tech, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-medium rounded-full"
                                                    style={{ 
                                                        backgroundColor: '#C4A484', 
                                                        color: 'white' 
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {service.technologies.length > 3 && (
                                                <span className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-600 rounded-full">
                                                    +{service.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Expandable Features */}
                                    <motion.div
                                        initial={false}
                                        animate={{ 
                                            height: hoveredCard === service.id ? 'auto' : 0,
                                            opacity: hoveredCard === service.id ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="border-t border-gray-100 pt-4 mb-4">
                                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                                            <div className="grid grid-cols-2 gap-1">
                                                {service.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C4A484' }} />
                                                        <span className="text-xs text-gray-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* CTA Button */}
                                    <motion.button
                                        className="w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden"
                                        style={{ 
                                            backgroundColor: hoveredCard === service.id ? '#C4A484' : '#f8f9fa',
                                            color: hoveredCard === service.id ? 'white' : '#C4A484'
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="relative z-10">
                                            {hoveredCard === service.id ? 'Get Started →' : 'Learn More'}
                                        </span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <div className="inline-flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900">Need a Custom Solution?</h3>
                        <p className="text-gray-600 max-w-md text-center">
                            Don't see exactly what you're looking for? We create tailored development solutions.
                        </p>
                        <motion.button
                            className="px-8 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{ backgroundColor: '#C4A484' }}
                            whileHover={{ scale: 1.05, backgroundColor: '#B8956F' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Discuss Your Project
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesCards;