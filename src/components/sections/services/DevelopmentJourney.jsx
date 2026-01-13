import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const DevelopmentJourney = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [techIndices, setTechIndices] = useState({});

    const steps = [
        {
            number: "01",
            title: "Discovery & Research",
            description: "We dive deep into understanding your business, goals, target audience, and competitive landscape to build a solid foundation.",
            icon: "🔍",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format",
            details: ["Market Analysis", "User Research", "Competitive Audit", "Goals Definition"]
        },
        {
            number: "02",
            title: "Strategy & Planning",
            description: "Creating a comprehensive roadmap with clear milestones, timelines, and deliverables tailored to your project needs.",
            icon: "📋",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format",
            details: ["Project Roadmap", "Tech Stack Selection", "Timeline Planning", "Resource Allocation"]
        },
        {
            number: "03",
            title: "Design & Prototyping",
            description: "Crafting beautiful, intuitive interfaces through wireframes, mockups, and interactive prototypes for validation.",
            icon: "🎨",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format",
            details: ["Wireframing", "UI Design", "Prototyping", "User Testing"]
        },
        {
            number: "04",
            title: "Development",
            description: "Building robust, scalable solutions using modern technologies with clean, maintainable code architecture.",
            icon: "💻",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format",
            details: ["Frontend Dev", "Backend Dev", "API Integration", "Database Setup"]
        },
        {
            number: "05",
            title: "Testing & QA",
            description: "Rigorous testing across devices and browsers to ensure flawless performance and exceptional user experience.",
            icon: "✅",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format",
            details: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Audit"]
        },
        {
            number: "06",
            title: "Launch & Support",
            description: "Seamless deployment with ongoing maintenance, monitoring, and support to ensure continued success.",
            icon: "🚀",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
            details: ["Deployment", "Monitoring", "Maintenance", "Optimization"]
        },
    ];

    // Technologies with rotating logos - using reliable CDN sources
    const technologies = [
        {
            name: "React",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            ]
        },
        {
            name: "Node.js",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
            ]
        },
        {
            name: "TypeScript",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            ]
        },
        {
            name: "MongoDB",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
            ]
        },
        {
            name: "WordPress",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
            ]
        },
        {
            name: "PHP",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
            ]
        },
        {
            name: "Shopify",
            logos: [
                "https://cdn.worldvectorlogo.com/logos/shopify.svg",
                "https://cdn.worldvectorlogo.com/logos/shopify.svg"
            ]
        },
        {
            name: "WooCommerce",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-plain.svg"
            ]
        },
        {
            name: "AWS",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
            ]
        },
        {
            name: "Docker",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
            ]
        },
        {
            name: "Figma",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            ]
        },
        {
            name: "PostgreSQL",
            logos: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
            ]
        },
    ];

    const currentStep = steps[activeStep];

    // Initialize tech indices
    useEffect(() => {
        const initialIndices = {};
        technologies.forEach((_, index) => {
            initialIndices[index] = 0;
        });
        setTechIndices(initialIndices);
    }, []);

    // Auto-cycle tech logos
    useEffect(() => {
        const intervals = technologies.map((tech, index) => {
            const randomInterval = 4000 + Math.random() * 3000;
            return setInterval(() => {
                setTechIndices(prev => ({
                    ...prev,
                    [index]: (prev[index] + 1) % tech.logos.length
                }));
            }, randomInterval);
        });

        return () => intervals.forEach(interval => clearInterval(interval));
    }, []);

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
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
                            Our Process
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
                        Development Journey
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                        A proven methodology that transforms your ideas into successful digital products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Side - Timeline Steps */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative">
                            {/* Vertical Line */}
                            <div
                                className="absolute left-6 top-0 bottom-0 w-[2px]"
                                style={{ backgroundColor: '#F0E6DC' }}
                            />

                            {/* Progress Line */}
                            <motion.div
                                className="absolute left-6 top-0 w-[2px]"
                                style={{ backgroundColor: '#C4A484' }}
                                initial={{ height: 0 }}
                                animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            />

                            <div className="space-y-2">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={step.number}
                                        className={`relative flex items-start gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 ${activeStep === index
                                            ? 'bg-gray-50'
                                            : 'hover:bg-gray-50/50'
                                            }`}
                                        onClick={() => setActiveStep(index)}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.08 }}
                                        whileHover={{ x: 3 }}
                                    >
                                        {/* Step Number Circle */}
                                        <div
                                            className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${activeStep === index
                                                ? 'text-white shadow-lg'
                                                : activeStep > index
                                                    ? 'text-white'
                                                    : 'text-gray-400 bg-white border-2'
                                                }`}
                                            style={{
                                                backgroundColor: activeStep >= index ? '#C4A484' : 'white',
                                                borderColor: activeStep >= index ? '#C4A484' : '#E5E7EB'
                                            }}
                                        >
                                            {activeStep > index ? '✓' : step.number}
                                        </div>

                                        {/* Step Title */}
                                        <div className="flex-1 pt-2">
                                            <h3 className={`font-semibold text-base transition-colors duration-300 ${activeStep === index
                                                ? 'text-gray-900'
                                                : 'text-gray-500'
                                                }`}>
                                                {step.title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Step Details */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col"
                            >
                                {/* Step Image */}
                                <div className="relative h-40 md:h-48 rounded-xl overflow-hidden mb-5">
                                    <motion.img
                                        key={currentStep.image}
                                        src={currentStep.image}
                                        alt={currentStep.title}
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1.1, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    <div
                                        className="absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-white/90 backdrop-blur-sm shadow-lg"
                                    >
                                        {currentStep.icon}
                                    </div>
                                </div>

                                {/* Step Header */}
                                <div className="mb-4">
                                    <span
                                        className="text-xs font-bold uppercase tracking-wider"
                                        style={{ color: '#C4A484' }}
                                    >
                                        Step {currentStep.number}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
                                        {currentStep.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {currentStep.description}
                                </p>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {currentStep.details.map((detail, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-2 p-2 bg-white rounded-lg"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                        >
                                            <div
                                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: '#C4A484' }}
                                            />
                                            <span className="text-xs font-medium text-gray-700">{detail}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Navigation Dots */}
                                <div className="flex items-center gap-2 mt-auto pt-3">
                                    {steps.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveStep(index)}
                                            className={`transition-all duration-300 rounded-full ${activeStep === index
                                                ? 'w-6 h-1.5'
                                                : 'w-1.5 h-1.5 hover:bg-gray-400'
                                                }`}
                                            style={{
                                                backgroundColor: activeStep === index ? '#C4A484' : '#D1D5DB'
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Technologies Section - Portfolio Style */}
                <motion.div
                    className="mt-12 md:mt-16 pt-10 md:pt-16 border-t border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-6 md:gap-8 items-start">
                        {/* Left Side - Title */}
                        <div className="mb-4 lg:mb-0">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-[2px]" style={{ backgroundColor: '#C4A484' }} />
                                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#C4A484' }}>
                                    Tech Stack
                                </span>
                            </div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>
                                Technologies We Use
                            </h3>
                            <p className="text-gray-500 text-sm hidden md:block">
                                Cutting-edge tools for modern solutions
                            </p>
                        </div>

                        {/* Right Side - Tech Cards Grid */}
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    className="group relative bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100"
                                    style={{ aspectRatio: '1' }}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.03 }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setTechIndices(prev => ({
                                            ...prev,
                                            [index]: (prev[index] + 1) % tech.logos.length
                                        }));
                                    }}
                                >
                                    {/* Logo Container */}
                                    <div className="relative w-full h-full flex items-center justify-center p-2 md:p-4 bg-white">
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={techIndices[index]}
                                                src={tech.logos[techIndices[index] || 0]}
                                                alt={tech.name}
                                                className="w-full h-full object-contain"
                                                initial={{ y: "100%", opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: "-100%", opacity: 0 }}
                                                transition={{
                                                    duration: 0.8,
                                                    ease: [0.43, 0.13, 0.23, 0.96]
                                                }}
                                            />
                                        </AnimatePresence>
                                    </div>

                                    {/* Hover Border Accent */}
                                    <div
                                        className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300"
                                        style={{ borderColor: 'transparent' }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#C4A484'}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DevelopmentJourney;
