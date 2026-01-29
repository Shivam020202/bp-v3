import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const JourneyTimeline = ({ journeyData = [] }) => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [loadedImages, setLoadedImages] = useState({});

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Preload all images on mount
    useEffect(() => {
        journeyData.forEach((item, index) => {
            const img = new Image();
            img.src = item.image;
            img.onload = () => {
                setLoadedImages(prev => ({ ...prev, [index]: true }));
            };
        });
    }, [journeyData]);

    // Auto-advance timeline only when current image is loaded
    useEffect(() => {
        if (!isAutoPlaying || !isImageLoaded) return;

        const timer = setTimeout(() => {
            setIsImageLoaded(false); // Reset for next image
            setActiveIndex(prev => (prev + 1) % journeyData.length);
        }, 6000);

        return () => clearTimeout(timer);
    }, [isAutoPlaying, isImageLoaded, journeyData.length, activeIndex]);

    // Set image as loaded when the current image loads
    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    // Also check if image was preloaded
    useEffect(() => {
        if (loadedImages[activeIndex]) {
            setIsImageLoaded(true);
        }
    }, [activeIndex, loadedImages]);

    const handleDotClick = (index) => {
        setActiveIndex(index);
        setIsAutoPlaying(false);
        setIsImageLoaded(false);
    };

    return (
        <section ref={containerRef} className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                        Our Story
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
                        THE JOURNEY <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                            SO FAR.
                        </span>
                    </h2>
                </motion.div>

                {/* Desktop - Interactive Showcase */}
                <div className="hidden lg:block">
                    <div className="max-w-6xl mx-auto">
                        {/* Main Content Area */}
                        <div className="grid grid-cols-2 gap-12 items-center min-h-[500px]">
                            {/* Left - Image Showcase */}
                            <motion.div
                                className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        className="absolute inset-0"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <img
                                            src={journeyData[activeIndex]?.image}
                                            alt={journeyData[activeIndex]?.title}
                                            className="w-full h-full object-cover"
                                            onLoad={handleImageLoad}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Year Badge */}
                                <motion.div
                                    className="absolute top-6 left-6 px-5 py-2 rounded-full text-white text-2xl font-bold shadow-lg"
                                    style={{ backgroundColor: '#C4A484' }}
                                    key={`year-${activeIndex}`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {journeyData[activeIndex]?.year}
                                </motion.div>

                                {/* Progress Bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                                    <motion.div
                                        className="h-full"
                                        style={{ backgroundColor: '#C4A484' }}
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 6, ease: "linear" }}
                                        key={`progress-${activeIndex}`}
                                    />
                                </div>
                            </motion.div>

                            {/* Right - Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="mb-4">
                                            <span
                                                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                                                style={{ backgroundColor: '#C4A484' }}
                                            >
                                                {journeyData[activeIndex]?.subtitle}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                            {journeyData[activeIndex]?.title}
                                        </h3>

                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                            {journeyData[activeIndex]?.desc}
                                        </p>

                                        {/* Stats/Metrics */}
                                        <div className="flex items-center gap-8">
                                            <div>
                                                <div className="text-3xl font-bold" style={{ color: '#C4A484' }}>
                                                    {journeyData[activeIndex]?.year}
                                                </div>
                                                <div className="text-sm text-gray-500 uppercase tracking-wider">Year</div>
                                            </div>
                                            <div className="w-px h-12 bg-gray-200" />
                                            <div>
                                                <div className="text-3xl font-bold text-gray-900">
                                                    {activeIndex + 1}/{journeyData.length}
                                                </div>
                                                <div className="text-sm text-gray-500 uppercase tracking-wider">Milestone</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </div>

                        {/* Timeline Navigation */}
                        <motion.div
                            className="mt-12 relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {/* Progress Line */}
                            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200">
                                <motion.div
                                    className="h-full"
                                    style={{
                                        backgroundColor: '#C4A484',
                                        width: `${((activeIndex + 1) / journeyData.length) * 100}%`
                                    }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            {/* Timeline Points */}
                            <div className="relative flex justify-between">
                                {journeyData.map((item, index) => (
                                    <motion.button
                                        key={index}
                                        className="flex flex-col items-center group"
                                        onClick={() => handleDotClick(index)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Dot */}
                                        <motion.div
                                            className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 cursor-pointer border-4 border-white shadow-lg"
                                            style={{
                                                backgroundColor: index <= activeIndex ? '#C4A484' : '#e5e5e5',
                                                color: index <= activeIndex ? 'white' : '#666'
                                            }}
                                            animate={{
                                                scale: index === activeIndex ? 1.15 : 1,
                                                boxShadow: index === activeIndex
                                                    ? '0 0 30px rgba(196, 164, 132, 0.5)'
                                                    : '0 4px 15px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            {item.year.slice(-2)}
                                        </motion.div>

                                        {/* Label */}
                                        <div className="mt-3 text-center">
                                            <div
                                                className="text-xs font-bold uppercase tracking-wider transition-colors"
                                                style={{ color: index === activeIndex ? '#C4A484' : '#999' }}
                                            >
                                                {item.year}
                                            </div>
                                            <div
                                                className="text-xs text-gray-500 max-w-[100px] truncate mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                {item.title}
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Tablet View - 2 columns */}
                <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
                    {journeyData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Year Badge */}
                                <div
                                    className="absolute bottom-4 left-4 px-4 py-1.5 rounded-full text-white font-bold"
                                    style={{ backgroundColor: '#C4A484' }}
                                >
                                    {item.year}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#C4A484] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-medium mb-2" style={{ color: '#C4A484' }}>
                                    {item.subtitle}
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Hover Accent */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                style={{ backgroundColor: '#C4A484' }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View - Vertical Timeline */}
                <div className="md:hidden relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

                    {journeyData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-16 pb-10 last:pb-0"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                className="absolute left-4 top-0 w-5 h-5 rounded-full border-4 border-white shadow-lg z-10"
                                style={{ backgroundColor: '#C4A484' }}
                                whileInView={{ scale: [0, 1.2, 1] }}
                                viewport={{ once: true }}
                            />

                            {/* Year */}
                            <div
                                className="inline-block px-3 py-1 rounded-full text-white text-sm font-bold mb-3"
                                style={{ backgroundColor: '#C4A484' }}
                            >
                                {item.year}
                            </div>

                            {/* Card */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                {/* Image */}
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm font-medium mb-2" style={{ color: '#C4A484' }}>
                                        {item.subtitle}
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneyTimeline;
