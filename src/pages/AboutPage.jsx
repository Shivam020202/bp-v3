import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const AboutPage = () => {
    const [flippedCard, setFlippedCard] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const leaders = [
        {
            name: "Arush Thapar",
            role: "Managing Partner",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop",
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
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop",
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
            title: "Innovation",
            desc: "Creative solutions ahead of the curve.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
            icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Client Success",
            desc: "Achieving exceptional ROI for partners.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            icon: (
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Data Driven",
            desc: "Advanced analytics for impact.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            icon: (
                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
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
                            Elevating Brands in the<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Stratosphere</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-xl mx-auto">
                            Your vision, our expertise — together we thrive.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Container */}
            <div className="relative z-10">

                {/* Leadership Section - White BG */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <motion.div className="text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Meet Our Leadership</h2>
                            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {leaders.map((leader, i) => (
                                <motion.div
                                    key={i}
                                    className="relative h-[500px] cursor-pointer group"
                                    style={{ perspective: '2000px' }}
                                    onClick={() => setFlippedCard(flippedCard === i ? null : i)}
                                    onMouseEnter={() => setFlippedCard(i)}
                                    onMouseLeave={() => setFlippedCard(null)}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                >
                                    <div
                                        className="w-full h-full transition-all duration-700"
                                        style={{ transformStyle: 'preserve-3d', transform: flippedCard === i ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                                    >
                                        {/* Front */}
                                        <div className="absolute inset-0 rounded-2xl bg-white shadow-xl overflow-hidden border border-gray-100" style={{ backfaceVisibility: 'hidden' }}>
                                            <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                                            <div className="absolute bottom-6 left-6">
                                                <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                                                <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest">{leader.role}</p>
                                            </div>
                                        </div>
                                        {/* Back */}
                                        <div
                                            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 flex flex-col justify-center shadow-2xl"
                                            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                                        >
                                            <div className="text-white/50 mb-6">{leader.icon}</div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                                            <p className="text-blue-300 font-semibold mb-4 uppercase tracking-wider text-xs">{leader.role}</p>
                                            <p className="text-white/80 leading-relaxed">{leader.bio}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vision Section - Clean Light Design */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <motion.div className="text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Vision</h2>
                            <p className="text-gray-500">Guiding principles that drive our success</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {visionPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Icon Circle */}
                                    <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="text-blue-600">{point.icon}</div>
                                    </div>
                                    {/* Number */}
                                    <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">0{i + 1}</span>
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{point.title}</h3>
                                    {/* Description */}
                                    <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section - Gray BG */}
                <section className="py-14 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center p-6 bg-white rounded-2xl shadow-sm"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, type: "spring" }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{stat.number}</div>
                                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Horizontal Journey Section - Light Theme */}
                <section className="relative bg-white overflow-hidden">
                    <div className="container mx-auto px-6 pt-16 pb-8">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Journey</h2>
                            <p className="text-gray-500">From startup to industry leader</p>
                        </motion.div>
                    </div>

                    <div
                        ref={timelineRef}
                        onWheel={handleWheel}
                        className="relative h-[520px] flex items-center overflow-x-auto overflow-y-hidden px-[10vw] gap-16 cursor-grab active:cursor-grabbing pb-8"
                        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Hide scrollbar for webkit */}
                        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

                        {/* Central Line - Subtle blue-gray, behind cards */}
                        <div
                            className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-blue-200"
                            style={{ width: `${journeyData.length * 380 + 200}px`, zIndex: 1 }}
                        />

                        {journeyData.map((item, i) => (
                            <motion.article
                                key={i}
                                className="relative min-w-[300px] max-w-[300px] flex flex-col"
                                style={{ transform: i % 2 === 0 ? 'translateY(-45px)' : 'translateY(45px)', zIndex: 10 }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {/* Dot */}
                                <motion.div
                                    className="absolute w-4 h-4 bg-blue-500 rounded-full left-1/2 -translate-x-1/2 shadow-md"
                                    style={{ top: i % 2 === 0 ? 'calc(100% + 43px)' : '-43px', zIndex: 15 }}
                                    whileHover={{ scale: 1.3 }}
                                />

                                {/* Year Label */}
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 text-blue-600 font-bold text-sm whitespace-nowrap"
                                    style={{ top: i % 2 === 0 ? 'calc(100% + 60px)' : '-60px', zIndex: 15 }}
                                >
                                    {item.year}
                                </div>

                                {/* Card */}
                                <motion.div
                                    className="bg-white border border-gray-200 rounded-2xl p-5 shadow-md cursor-pointer overflow-hidden group hover:shadow-xl hover:border-blue-300 transition-all"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className="w-full h-36 rounded-xl overflow-hidden mb-4">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-blue-600 text-xs font-semibold mb-2">{item.subtitle}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            </motion.article>
                        ))}
                    </div>
                </section>

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

                {/* About Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Branding Pioneers</h2>
                                <p className="text-blue-600 font-semibold text-lg mb-6">Shaping Tomorrow's Technology, Today</p>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>Branding Pioneers started with a bold idea: to bridge the gap between technology and creativity, empowering businesses to thrive in a digital-first world.</p>
                                    <p>At our core, we believe in the power of human-centered design and sustainable technology. Every product we create is tailored to solve real-world challenges.</p>
                                    <p className="text-gray-900 font-medium">Join us in transforming ideas into realities, and together, let's create a future where innovation knows no bounds.</p>
                                </div>
                            </motion.div>
                            <motion.div className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px] md:h-[400px]" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                                    <source src="https://res.cloudinary.com/damfndmrm/video/upload/v1767787523/49949B00-9B30-46C4-Bcac-B91c47930d82_kiwg7n.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <motion.div className="text-center max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's build the future together.</h2>
                            <p className="text-gray-600 mb-8">Transforming ideas into digital milestones with Branding Pioneers.</p>
                            <motion.button className="px-10 py-4 bg-gray-900 text-white rounded-full font-bold shadow-xl hover:bg-gray-800 hover:shadow-2xl transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Get Started Today
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
