import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import JourneyTimeline from "../components/sections/JourneyTimeline";

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
        },
        {
            year: "2025",
            title: "Global Expansion",
            subtitle: "International Presence",
            desc: "Expanding our reach across continents, we established partnerships with leading brands worldwide, bringing world-class digital solutions to new markets.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2026",
            title: "The Future is Now",
            subtitle: "AI-Powered Innovation",
            desc: "Pioneering the next era of digital marketing with cutting-edge AI solutions, transforming how brands connect with their audiences.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
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
            {/* Hero Image Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                    alt="Team working together"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80" /> {/* Dark Overlay */}
            </div>

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center z-10 overflow-hidden">
                <div className="container mx-auto px-6 text-center text-white relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-md font-mono text-xs uppercase tracking-[0.2em] mb-6"
                    >
                        About Branding Pioneers
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight"
                    >
                        WHERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484]">INNOVATION</span><br />
                        MEETS IMPACT.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        We are a team of visionaries, strategists, and creators dedicated to transforming brands through digital excellence.
                    </motion.p>
                </div>
            </section>

            {/* Content Container */}
            <div className="relative z-10">

                {/* Who We Are Section - Clean & Animated */}
                <section className="relative py-12 md:py-16 bg-white overflow-hidden">

                    {/* Background Kinetic Typography - Same as Home Page */}
                    <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none select-none">
                        <motion.div
                            className="whitespace-nowrap text-[15vw] leading-none font-black font-serif tracking-tighter text-black/5"
                            animate={{ x: [0, -1500] }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        >
                            BRANDING PIONEERS • BRANDING PIONEERS • BRANDING PIONEERS •
                        </motion.div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">

                            {/* Left - Video with Premium Frame */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: -60, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                {/* Decorative Back Frame */}
                                <motion.div
                                    className="absolute -inset-3 border border-black/10 rounded-3xl"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                />

                                {/* Video Container */}
                                <motion.div
                                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                                    whileHover={{ scale: 1.02, boxShadow: '0 30px 60px -15px rgba(0,0,0,0.2)' }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full aspect-[4/3] object-cover"
                                    >
                                        <source src="https://res.cloudinary.com/damfndmrm/video/upload/v1768472297/bp_upd_1_orndgn.mp4" type="video/mp4" />
                                    </video>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    {/* Year Badge */}
                                    <motion.span
                                        className="absolute bottom-5 left-5 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm font-semibold text-white border border-white/20"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Est. 2018
                                    </motion.span>
                                </motion.div>

                                {/* Spinning Badge - Small */}
                                <motion.div
                                    className="absolute -top-4 -right-4 w-20 h-20 md:w-22 md:h-22"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                                        <defs>
                                            <path id="whoWeAreCircle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                        </defs>
                                        <circle cx="50" cy="50" r="46" fill="white" />
                                        <text className="text-[7px] font-bold uppercase tracking-[2px]" style={{ fill: '#C4A484' }}>
                                            <textPath href="#whoWeAreCircle">• EXCELLENCE • INNOVATION •</textPath>
                                        </text>
                                        <circle cx="50" cy="50" r="16" style={{ fill: '#C4A484' }} />
                                        <text x="50" y="53" textAnchor="middle" className="text-[9px] font-black" fill="white">BP</text>
                                    </svg>
                                </motion.div>
                            </motion.div>

                            {/* Right - Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                {/* Label */}
                                <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                                    Who We Are
                                </span>

                                {/* Heading - Matching Home Page Style */}
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-5">
                                    BUILDING <br className="hidden sm:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                                        BRANDS.
                                    </span>
                                </h2>

                                {/* Description with Animated Border */}
                                <motion.div
                                    className="relative mb-7"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <motion.div
                                        className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full origin-top"
                                        style={{ backgroundColor: '#C4A484' }}
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.6 }}
                                    />
                                    <p className="text-gray-600 leading-relaxed pl-4">
                                        We combine creativity with strategic thinking to help brands discover their unique voice.
                                        Our team crafts compelling narratives that resonate and drive meaningful engagement.
                                    </p>
                                </motion.div>

                                {/* Stats Row - Clean */}
                                <motion.div
                                    className="flex items-center gap-8 mb-7 py-4 border-y border-gray-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {[
                                        { num: '8+', label: 'Years' },
                                        { num: '2,500+', label: 'Clients' },
                                        { num: '100+', label: 'Experts' },
                                        { num: '98%', label: 'Retention' }
                                    ].map((stat, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.55 + idx * 0.08 }}
                                            whileHover={{ scale: 1.08, y: -2 }}
                                            className="cursor-default"
                                        >
                                            <div className="text-2xl font-bold" style={{ color: '#C4A484' }}>{stat.num}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Services - Animated Pills */}
                                <motion.div
                                    className="flex flex-wrap gap-2 mb-7"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {[
                                        'Brand Strategy',
                                        'Visual Identity',
                                        'Web Development',
                                        'SEO Optimization',
                                        'Content Marketing',
                                        'Social Media Growth',
                                        'Motion Graphics',
                                        'Packaging Design'
                                    ].map((service, idx) => (
                                        <motion.span
                                            key={service}
                                            className="px-3 py-1.5 text-xs font-medium rounded-full border text-gray-600 cursor-pointer"
                                            style={{ borderColor: '#C4A484' }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.65 + idx * 0.04, type: "spring", stiffness: 300, damping: 20 }}
                                            whileHover={{
                                                backgroundColor: '#C4A484',
                                                color: 'white',
                                                scale: 1.05,
                                                boxShadow: '0 4px 15px -3px rgba(196,164,132,0.4)'
                                            }}
                                        >
                                            {service}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                {/* Premium CTA Button */}
                                <motion.button
                                    className="group relative flex items-center gap-3 px-8 py-4 text-white rounded-full text-sm font-semibold overflow-hidden"
                                    style={{ backgroundColor: '#C4A484' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.75 }}
                                    whileHover={{ scale: 1.03, boxShadow: '0 20px 40px -12px rgba(196,164,132,0.4)' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Shine Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                        initial={{ x: '-150%' }}
                                        whileHover={{ x: '150%' }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <span className="relative z-10">Explore Our Work</span>
                                    <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Partners/Clients Section */}
                <section className="py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#FDF8F3' }}>
                    <div className="container mx-auto px-6">
                        {/* Header */}
                        <motion.div
                            className="text-center mb-14"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2 leading-[0.9] tracking-tighter">
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
                </section >

                {/* Leadership Section - Meet The Principals */}
                < section className="py-12 md:py-16 bg-white overflow-visible" >
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
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[0.9] mb-4 text-center tracking-tighter" style={{ fontFamily: 'serif' }}>
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
                </section >

                {/* Vision Section - Enhanced with Beige Theme */}
                < section className="py-12 md:py-16 bg-white" >
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                            {/* Left Side - Title, Description, and Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                                    What Drives Us
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-6">
                                    OUR <br className="hidden sm:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                                        VISION.
                                    </span>
                                </h2>
                                <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-md">
                                    At Branding Pioneers, we offer a comprehensive range of services to bring your digital vision to life. Each service is tailored to meet the unique needs of our clients.
                                </p>

                                {/* Image with Cutout Effect */}
                                <div className="relative h-[300px] md:h-[340px]">
                                    {/* Main Image Container with Rounded Corners */}
                                    <div className="relative w-[85%] h-full rounded-2xl overflow-hidden shadow-xl">
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
                                    <motion.div
                                        className="absolute -right-4 bottom-8 w-24 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=300&fit=crop"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="absolute right-8 -bottom-4 w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Right Side - Vision Items with Enhanced Styling */}
                            <motion.div
                                className="flex flex-col justify-center"
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                {visionPoints.map((point, i) => (
                                    <motion.div
                                        key={i}
                                        className={`py-6 border-b border-gray-100 cursor-pointer transition-all duration-400 group`}
                                        onMouseEnter={() => setActiveService(i)}
                                        onClick={() => setActiveService(i)}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ x: 8 }}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Number indicator */}
                                            <motion.div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-all duration-300"
                                                style={{
                                                    backgroundColor: activeService === i ? '#C4A484' : '#E8E0D8'
                                                }}
                                                animate={{
                                                    scale: activeService === i ? 1.1 : 1
                                                }}
                                            >
                                                {String(i + 1).padStart(2, '0')}
                                            </motion.div>

                                            <div className="flex-1">
                                                <h3
                                                    className="text-lg md:text-xl font-bold mb-2 tracking-wide uppercase transition-colors duration-300"
                                                    style={{
                                                        color: activeService === i ? '#C4A484' : '#1f2937'
                                                    }}
                                                >
                                                    {point.title}
                                                </h3>
                                                <motion.p
                                                    className="text-gray-600 text-sm leading-relaxed"
                                                    animate={{
                                                        opacity: activeService === i ? 1 : 0.7
                                                    }}
                                                >
                                                    {point.desc}
                                                </motion.p>
                                            </div>

                                            {/* Arrow indicator */}
                                            <motion.div
                                                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                                                style={{
                                                    backgroundColor: activeService === i ? '#C4A484' : 'transparent',
                                                    border: activeService === i ? 'none' : '1px solid #E8E0D8'
                                                }}
                                                animate={{
                                                    x: activeService === i ? 0 : -5,
                                                    opacity: activeService === i ? 1 : 0.5
                                                }}
                                            >
                                                <svg
                                                    className="w-4 h-4 transition-colors duration-300"
                                                    fill="none"
                                                    stroke={activeService === i ? 'white' : '#C4A484'}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section >

                {/* Stats Section - Compact & Premium Design */}
                < section className="py-6 bg-white" >
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden"
                            style={{ backgroundColor: '#1a1a1a' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: 'radial-gradient(circle at 2px 2px, #C4A484 1px, transparent 0)',
                                    backgroundSize: '32px 32px'
                                }} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        className="relative group py-10 px-6 text-center border-r border-white/10 last:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(4)]:border-r-0"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ backgroundColor: 'rgba(196, 164, 132, 0.1)' }}
                                    >
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#C4A484]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            {/* Number with animated underline */}
                                            <motion.div
                                                className="text-4xl md:text-5xl font-bold mb-1"
                                                style={{ color: '#C4A484' }}
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                {stat.number}
                                            </motion.div>

                                            {/* Decorative line */}
                                            <div className="w-8 h-0.5 mx-auto mb-3 rounded-full transition-all duration-300 group-hover:w-12" style={{ backgroundColor: '#C4A484' }} />

                                            {/* Label */}
                                            <div className="text-xs text-white/70 font-medium uppercase tracking-[0.2em] group-hover:text-white/90 transition-colors">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Accent corners */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-2xl" style={{ borderColor: '#C4A484' }} />
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl" style={{ borderColor: '#C4A484' }} />
                        </motion.div>
                    </div>
                </section >

                {/* 3D Spiral Timeline Section */}
                < JourneyTimeline journeyData={journeyData} />

                {/* Curved CTA Card */}
                < section className="py-12 md:py-16 bg-gray-50" >
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
                </section >


            </div >
        </div >
    );
};

export default AboutPage;
