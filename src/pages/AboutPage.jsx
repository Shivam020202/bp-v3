import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import SpiralTimeline from "../components/sections/SpiralTimeline";

const AboutPage = () => {
    const [flippedCard, setFlippedCard] = useState(null);
    const [activeService, setActiveService] = useState(0);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const leaders = [
        {
            name: "Arush Thapar",
            role: "Managing Partner",
            image: "https://brandingpioneers.com/assets/arush.webp",
            bio: "Branding Pioneers was born out of a vision to redefine what it means to create impactful connections between brands and their audiences.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        },
        {
            name: "Nishu Sharma",
            role: "Managing Partner",
            image: "https://brandingpioneers.com/assets/nishu.webp",
            bio: "Leading from the front—breaking barriers and setting benchmarks in the digital marketing space. Making brands unforgettable.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    const visionPoints = [
        {
            title: "INNOVATION",
            desc: "Pioneering creative solutions that push boundaries and set new industry standards in digital marketing.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=500&fit=crop"
        },
        {
            title: "EXCELLENCE",
            desc: "Committed to delivering exceptional results through meticulous attention to detail and unwavering quality.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
        },
        {
            title: "INTEGRITY",
            desc: "Building lasting relationships through transparency, trust, and honest communication with our clients.",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=500&fit=crop"
        },
        {
            title: "GROWTH",
            desc: "Empowering brands to reach their full potential through data-driven strategies and continuous improvement.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop"
        }
    ];

    const stats = [
        { number: "8+", label: "Years" },
        { number: "50+", label: "Team" },
        { number: "450+", label: "Clients" },
        { number: "48k+", label: "Projects" }
    ];

    const journeyData = [
        {
            year: "2018",
            title: "Building the Foundation",
            subtitle: "A New Workspace",
            desc: "Our commitment and swift expansion resulted in us being able to set up our first office. A co-working space designed to promote imagination and creativity.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2019",
            title: "Growing Stronger",
            subtitle: "100+ and Growing",
            desc: "Our team doubled as talented individuals joined the Branding Pioneers family, bringing diverse skills and perspectives that fueled our mission.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2020",
            title: "Client-Centered Success",
            subtitle: "400+ Happy Clients",
            desc: "We achieved a major milestone, delighting over 400 clients with tailored digital marketing solutions reflecting our commitment to satisfaction.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2021",
            title: "Recognition and Growth",
            subtitle: "Award-Winning Excellence",
            desc: "Our innovative approach earned us prestigious industry awards, cementing our reputation as a leader in digital marketing and design.",
            image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2022",
            title: "Scaling New Heights",
            subtitle: "1,000 Clients Served",
            desc: "Crossing the 1,000-client mark globally was a proud moment, showcasing our resilience and dedication to delivering impactful solutions.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2023",
            title: "Thriving Together",
            subtitle: "2,000 Happy Clients",
            desc: "We celebrated a record-breaking milestone with 2,000 satisfied clients. This achievement fueled our drive to keep innovating.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2024",
            title: "Reaching New Milestones",
            subtitle: "2,500 Clients and Counting",
            desc: "Crossing the 2,500-client mark globally is a testament to our relentless commitment to innovation and client satisfaction.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
        }
    ];

    // Horizontal scroll handler
    const timelineRef = useRef(null);
    const handleWheel = (e) => {
        if (timelineRef.current && window.innerWidth > 900) {
            e.preventDefault();
            timelineRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <div ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
            {/* Enhanced Animated Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Base Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/50" />

                {/* Animated Floating Orbs */}
                <motion.div
                    className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-200/50 to-cyan-200/30 rounded-full blur-[80px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-purple-200/40 to-pink-200/30 rounded-full blur-[80px]"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-[50%] left-[40%] w-[300px] h-[300px] bg-gradient-to-br from-cyan-200/30 to-blue-200/20 rounded-full blur-[60px]"
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -40, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />

                {/* Floating Dots Animation */}
                <motion.div
                    className="absolute top-[30%] right-[20%] w-3 h-3 bg-blue-400/30 rounded-full"
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-[60%] left-[15%] w-2 h-2 bg-purple-400/30 rounded-full"
                    animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute top-[40%] right-[40%] w-4 h-4 bg-cyan-400/20 rounded-full"
                    animate={{ y: [0, -25, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                />
            </div>

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center z-10 overflow-hidden">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="https://res.cloudinary.com/damfndmrm/video/upload/v1767787523/49949B00-9B30-46C4-Bcac-B91c47930d82_kiwg7n.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                            Since 2018
                        </motion.span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            Elevating Brands in the<br /><span style={{ color: '#C4A484' }}>Digital Stratosphere</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-xl mx-auto">
                            Your vision, our expertise — together we thrive.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Container */}
            <div className="relative z-10">

                {/* Who We Are Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                            {/* Left - Team Image */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-[400px] lg:h-[500px] object-cover"
                                    >
                                        <source src="https://res.cloudinary.com/damfndmrm/video/upload/v1768472297/bp_upd_1_orndgn.mp4" type="video/mp4" />
                                    </video>


                                </div>


                            </motion.div>

                            {/* Right - Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <span className="font-semibold text-sm uppercase tracking-widest mb-4 block" style={{ color: '#C4A484' }}>Who We Are</span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    <span style={{ color: '#C4A484' }}>Building Brands</span> That Stand Out in a Crowded World.
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    We combine creativity with strategic thinking to help brands discover their unique voice.
                                    Our team of experts crafts compelling narratives that resonate with your audience and
                                    drive meaningful engagement across all touchpoints.
                                </p>

                                {/* Services Grid */}
                                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></span>
                                        <span className="text-gray-700 font-medium">Brand Strategy</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></span>
                                        <span className="text-gray-700 font-medium">Brand Consulting</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></span>
                                        <span className="text-gray-700 font-medium">Logo Design & Identity</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></span>
                                        <span className="text-gray-700 font-medium">Creative Design Services</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></span>
                                        <span className="text-gray-700 font-medium">Digital Marketing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></span>
                                        <span className="text-gray-700 font-medium">Content Creation</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></span>
                                        <span className="text-gray-700 font-medium">Brand Activation</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></span>
                                        <span className="text-gray-700 font-medium">Brand Monitoring</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Partners/Clients Section */}
                <section className="py-20 overflow-hidden" style={{ backgroundColor: '#FDF8F3' }}>
                    <div className="container mx-auto px-6">
                        {/* Header */}
                        <motion.div
                            className="text-center mb-14"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                                Join over <span style={{ color: '#C4A484' }}>2,500+</span> businesses to
                                <br className="hidden md:block" /> create unique brand designs.
                            </h2>
                        </motion.div>
                    </div>

                    {/* Logo Marquee - Row 1 */}
                    <div className="relative mb-10 overflow-hidden">
                        <motion.div
                            className="flex items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                            style={{ width: "200%" }}
                        >
                            {[...Array(2)].map((_, setIndex) => (
                                <div key={setIndex} className="flex items-center justify-around flex-shrink-0 gap-8 md:gap-12 px-6" style={{ width: "50%" }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-7 md:h-9 w-auto object-contain flex-shrink-0" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="Spotify" className="h-7 md:h-9 w-auto object-contain flex-shrink-0" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-7 md:h-9 w-auto object-contain flex-shrink-0" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" className="h-7 md:h-9 w-auto object-contain flex-shrink-0" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" className="h-6 md:h-7 w-auto object-contain flex-shrink-0" />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Logo Marquee - Row 2 (Reverse) */}
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex items-center"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                            style={{ width: "200%" }}
                        >
                            {[...Array(2)].map((_, setIndex) => (
                                <div key={setIndex} className="flex items-center justify-around flex-shrink-0 gap-8 md:gap-12 px-6" style={{ width: "50%" }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-6 md:h-8 w-auto object-contain flex-shrink-0" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6 md:h-8 w-auto object-contain flex-shrink-0" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 md:h-8 w-auto object-contain flex-shrink-0" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-7 md:h-9 w-auto object-contain flex-shrink-0" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" alt="Adobe" className="h-6 md:h-8 w-auto object-contain flex-shrink-0" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Leadership Section - Meet The Principals */}
                <section className="py-16 bg-white overflow-visible">
                    <div className="container mx-auto px-6">
                        <div className="relative max-w-6xl mx-auto">
                            {/* Main Layout - Founders on sides, content in center */}
                            <div className="relative flex items-end justify-center min-h-[400px]">

                                {/* Left Founder - Extending outside */}
                                <motion.div
                                    className="hidden lg:block absolute left-0 bottom-0 z-10"
                                    style={{ transform: 'translateX(-15%)' }}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <div className="w-[240px] h-[320px] xl:w-[280px] xl:h-[360px]">
                                        <img
                                            src="https://brandingpioneers.com/assets/arush.webp"
                                            alt="Arush Thapar"
                                            className="w-full h-full object-cover object-top rounded-t-full"
                                        />
                                    </div>
                                </motion.div>

                                {/* Center Beige Card with White Text Box */}
                                <div
                                    className="relative rounded-3xl px-8 md:px-24 lg:px-40 py-16 md:py-20 mx-auto w-full lg:w-[75%]"
                                    style={{ backgroundColor: '#E8E0D8' }}
                                >
                                    {/* White Text Box - Extending more below the beige card */}
                                    <motion.div
                                        className="relative z-20 bg-white rounded-t-2xl p-6 md:p-8 mx-auto max-w-sm"
                                        style={{ marginBottom: '-100px', transform: 'translateY(60px)' }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 text-center" style={{ fontFamily: 'serif' }}>
                                            MEET OUR<br />FOUNDERS
                                        </h2>
                                        <p className="text-gray-500 text-sm leading-relaxed text-center">
                                            Visionaries who transformed Branding Pioneers from an ambitious idea into a leading digital agency, driving innovation and excellence in every project we undertake.
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Right Founder - Extending outside */}
                                <motion.div
                                    className="hidden lg:block absolute right-0 bottom-0 z-10"
                                    style={{ transform: 'translateX(15%)' }}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <div className="w-[240px] h-[320px] xl:w-[280px] xl:h-[360px]">
                                        <img
                                            src="https://brandingpioneers.com/assets/nishu.webp"
                                            alt="Nishu Sharma"
                                            className="w-full h-full object-cover object-top rounded-t-full"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Founder Names - Below the section, outside the card */}
                            <div className="hidden lg:flex justify-between mt-6 px-0">
                                <motion.div
                                    className="text-left"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <h3 className="text-2xl font-bold text-gray-900">Arush Thapar</h3>
                                    <p className="text-gray-500 uppercase tracking-widest text-xs mt-0.5">FOUNDER AND PRINCIPAL</p>
                                </motion.div>
                                <motion.div
                                    className="text-right"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <h3 className="text-2xl font-bold text-gray-900">Nishu Sharma</h3>
                                    <p className="text-gray-500 uppercase tracking-widest text-xs mt-0.5">FOUNDER AND PRINCIPAL</p>
                                </motion.div>
                            </div>

                            {/* Mobile Founders View */}
                            <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-full h-[180px] overflow-hidden rounded-xl mb-3">
                                        <img
                                            src="https://brandingpioneers.com/assets/arush.webp"
                                            alt="Arush Thapar"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900">Arush Thapar</h3>
                                    <p className="text-gray-500 uppercase tracking-wider text-[10px] mt-0.5">FOUNDER</p>
                                </motion.div>
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <div className="w-full h-[180px] overflow-hidden rounded-xl mb-3">
                                        <img
                                            src="https://brandingpioneers.com/assets/nishu.webp"
                                            alt="Nishu Sharma"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900">Nishu Sharma</h3>
                                    <p className="text-gray-500 uppercase tracking-wider text-[10px] mt-0.5">FOUNDER</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision Section - Reference Matched Layout */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                            {/* Left Side - Title, Description, and Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
                                    Our Vision
                                </h2>
                                <p className="text-gray-900 text-sm leading-relaxed mb-10 max-w-md">
                                    At Branding Pioneers, we offer a comprehensive range of services to bring your digital vision to life. Each service is tailored to meet the unique needs of our clients, ensuring a seamless and satisfying experience.
                                </p>

                                {/* Image with Cutout Effect */}
                                <div className="relative h-[300px] md:h-[340px]">
                                    {/* Main Image Container with Rounded Corners */}
                                    <div className="relative w-[85%] h-full rounded-2xl overflow-hidden">
                                        {visionPoints.map((point, i) => (
                                            <motion.img
                                                key={i}
                                                src={point.image}
                                                alt={point.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                initial={false}
                                                animate={{
                                                    opacity: activeService === i ? 1 : 0,
                                                    scale: activeService === i ? 1 : 1.05
                                                }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        ))}
                                    </div>
                                    {/* Cutout Elements - Small floating images */}
                                    <div className="absolute -right-4 bottom-8 w-24 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                                        <img
                                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=300&fit=crop"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute right-8 -bottom-4 w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                        <img
                                            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Side - Vision Items (Exact Reference Style) */}
                            <motion.div
                                className="flex flex-col justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {visionPoints.map((point, i) => (
                                    <div
                                        key={i}
                                        className={`py-5 border-b border-gray-100 cursor-pointer transition-all duration-300 ${activeService === i ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                                            }`}
                                        onMouseEnter={() => setActiveService(i)}
                                        onClick={() => setActiveService(i)}
                                    >
                                        <h3
                                            className="text-lg md:text-xl font-bold mb-2 tracking-wide uppercase transition-colors duration-300"
                                            style={{
                                                fontFamily: 'serif',
                                                color: activeService === i ? '#C4A484' : '#1f2937'
                                            }}
                                        >
                                            {point.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {point.desc}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section - Beige Theme */}
                <section className="py-16" style={{ backgroundColor: '#FDF8F3' }}>
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center py-8 px-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C4A484' }}>{stat.number}</div>
                                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3D Spiral Timeline Section */}
                <SpiralTimeline journeyData={journeyData} />

                {/* Curved CTA Card */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[300px] md:h-[350px]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?w=1800" alt="Our Team" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                            <div className="relative z-10 h-full flex items-center">
                                <div className="container mx-auto px-8 md:px-12">
                                    <div className="max-w-lg">
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to Pioneer Your Brand?</h3>
                                        <p className="text-white/80 mb-6 text-sm md:text-base">Join 2,500+ clients who transformed their digital presence with us.</p>
                                        <motion.button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:shadow-xl transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            Start Your Journey →
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default AboutPage;
