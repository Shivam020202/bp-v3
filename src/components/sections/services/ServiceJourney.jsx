import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, ClipboardList, Palette, Code, CheckCircle, Rocket } from "lucide-react";

const ServiceJourney = ({ journey }) => {
    const [activeStep, setActiveStep] = useState(0);

    // Default icons for each step
    const defaultIcons = [Search, ClipboardList, Palette, Code, CheckCircle, Rocket];

    const steps = journey.steps.map((step, index) => ({
        ...step,
        icon: defaultIcons[index] || Search,
        image: `https://images.unsplash.com/photo-155${1288049 + index * 11111}-bebda4e38f71?w=600&h=400&fit=crop&auto=format`
    }));

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
                        {journey.title} <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                            {journey.highlight}
                        </span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                        {journey.description}
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
                                <div className="relative h-48 rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-[#C4A484]/20 to-[#C4A484]/5 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-white shadow-lg">
                                            <IconComponent className="w-8 h-8" style={{ color: '#C4A484' }} />
                                        </div>
                                        <span className="text-4xl font-black" style={{ color: '#C4A484' }}>{currentStep.number}</span>
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
            </div>
        </section>
    );
};

export default ServiceJourney;
