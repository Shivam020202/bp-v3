import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, ClipboardList, Palette, Code, CheckCircle, Rocket } from "lucide-react";

const DevelopmentJourney = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: "01",
            title: "Discovery & Research",
            description: "We dive deep into understanding your business, goals, target audience, and competitive landscape to build a solid foundation.",
            icon: Search,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format",
            details: ["Market Analysis", "User Research", "Competitive Audit", "Goals Definition"]
        },
        {
            number: "02",
            title: "Strategy & Planning",
            description: "Creating a comprehensive roadmap with clear milestones, timelines, and deliverables tailored to your project needs.",
            icon: ClipboardList,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format",
            details: ["Project Roadmap", "Tech Stack Selection", "Timeline Planning", "Resource Allocation"]
        },
        {
            number: "03",
            title: "Design & Prototyping",
            description: "Crafting beautiful, intuitive interfaces through wireframes, mockups, and interactive prototypes for validation.",
            icon: Palette,
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format",
            details: ["Wireframing", "UI Design", "Prototyping", "User Testing"]
        },
        {
            number: "04",
            title: "Development",
            description: "Building robust, scalable solutions using modern technologies with clean, maintainable code architecture.",
            icon: Code,
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format",
            details: ["Frontend Dev", "Backend Dev", "API Integration", "Database Setup"]
        },
        {
            number: "05",
            title: "Testing & QA",
            description: "Rigorous testing across devices and browsers to ensure flawless performance and exceptional user experience.",
            icon: CheckCircle,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format",
            details: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Audit"]
        },
        {
            number: "06",
            title: "Launch & Support",
            description: "Seamless deployment with ongoing maintenance, monitoring, and support to ensure continued success.",
            icon: Rocket,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
            details: ["Deployment", "Monitoring", "Maintenance", "Optimization"]
        },
    ];

    const technologies = [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
        { name: "WooCommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ];

    const currentStep = steps[activeStep];
    const IconComponent = currentStep.icon;

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                        Our Process
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4 text-black">
                        DEVELOPMENT <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                            JOURNEY.
                        </span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                        A proven methodology that transforms your ideas into successful digital products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    {/* Left Side - Timeline */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="hidden md:block absolute left-5 lg:left-6 top-0 bottom-0 w-[2px] bg-gray-100" />
                            <motion.div
                                className="hidden md:block absolute left-5 lg:left-6 top-0 w-[2px]"
                                style={{ backgroundColor: '#C4A484' }}
                                initial={{ height: 0 }}
                                animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Mobile scroll */}
                            <div className="md:hidden flex overflow-x-auto pb-3 gap-2 -mx-4 px-4 scrollbar-hide">
                                {steps.map((step, index) => (
                                    <button
                                        key={step.number}
                                        className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-full transition-all ${activeStep === index ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}
                                        onClick={() => setActiveStep(index)}
                                    >
                                        <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: activeStep === index ? 'rgba(196,164,132,0.3)' : '#e5e7eb' }}>
                                            {step.number}
                                        </span>
                                        <span className="text-xs font-medium whitespace-nowrap">{step.title.split(' ')[0]}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Desktop timeline */}
                            <div className="hidden md:block space-y-2">
                                {steps.map((step, index) => {
                                    const StepIcon = step.icon;
                                    return (
                                        <motion.div
                                            key={step.number}
                                            className={`relative flex items-start gap-4 p-3 rounded-xl cursor-pointer transition-all ${activeStep === index ? 'bg-gray-50' : 'hover:bg-gray-50/50'}`}
                                            onClick={() => setActiveStep(index)}
                                            whileHover={{ x: 3 }}
                                        >
                                            <motion.div
                                                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all ${activeStep >= index ? 'text-white shadow-lg' : 'text-gray-400 bg-white border-2 border-gray-200'}`}
                                                style={{ backgroundColor: activeStep >= index ? '#C4A484' : 'white' }}
                                            >
                                                {activeStep > index ? (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    <StepIcon className="w-5 h-5" />
                                                )}
                                            </motion.div>
                                            <div className="flex-1 pt-2">
                                                <h3 className={`font-semibold text-base ${activeStep === index ? 'text-gray-900' : 'text-gray-500'}`}>
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Details */}
                    <motion.div className="lg:col-span-7 flex flex-col" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col"
                            >
                                <div className="relative h-48 rounded-xl overflow-hidden mb-5">
                                    <img src={currentStep.image} alt={currentStep.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    <div className="absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center bg-white/90 shadow-lg">
                                        <IconComponent className="w-5 h-5" style={{ color: '#C4A484' }} />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#C4A484' }}>Step {currentStep.number}</span>
                                    <h3 className="text-2xl font-bold text-gray-900">{currentStep.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{currentStep.description}</p>
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {currentStep.details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C4A484' }} />
                                            <span className="text-xs font-medium text-gray-700">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 mt-auto pt-3">
                                    {steps.map((_, i) => (
                                        <button key={i} onClick={() => setActiveStep(i)} className={`rounded-full transition-all ${activeStep === i ? 'w-6 h-1.5' : 'w-1.5 h-1.5'}`} style={{ backgroundColor: activeStep === i ? '#C4A484' : '#D1D5DB' }} />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Technologies */}
                <motion.div className="mt-16 pt-16 border-t border-gray-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-8 items-start">
                        <div>
                            <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">Tech Stack</span>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4 text-black">
                                TECH <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">WE USE.</span>
                            </h3>
                            <p className="text-gray-500 text-sm md:text-base hidden sm:block">Cutting-edge tools for modern solutions</p>
                        </div>
                        <div className="grid grid-cols-4 lg:grid-cols-6 gap-3">
                            {technologies.map((tech, i) => (
                                <motion.div
                                    key={tech.name}
                                    className="aspect-square bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-center hover:shadow-lg hover:border-[#C4A484] transition-all cursor-pointer"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.03 }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                >
                                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
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
