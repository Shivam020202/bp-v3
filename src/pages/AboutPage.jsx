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

    const timeline = [
        { year: "2018", title: "The Beginning", desc: "Founded with bold vision" },
        { year: "2019", title: "100+ Team", desc: "Doubled our talented team" },
        { year: "2020", title: "400+ Clients", desc: "Major milestone achieved" },
        { year: "2021", title: "Award-Winning", desc: "Industry recognition earned" },
        { year: "2022", title: "1,000 Clients", desc: "Global expansion" },
        { year: "2023", title: "2,000 Clients", desc: "Record-breaking growth" },
        { year: "2024", title: "2,500+ Clients", desc: "Excellence continues" }
    ];

    return (
        <div ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
            {/* Light Animated Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-white to-blue-50/30" />
                <motion.div
                    className="absolute top-20 right-[5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px]"
                    style={{ y: bgY }}
                />
                <motion.div
                    className="absolute bottom-40 left-[5%] w-[35%] h-[35%] bg-purple-100/30 rounded-full blur-[100px]"
                    style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
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

                {/* Leadership Section */}
                <section className="py-16">
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

                {/* Vision Section */}
                <section className="py-14">
                    <div className="container mx-auto px-6">
                        <motion.div className="text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Vision</h2>
                            <p className="text-blue-600 text-sm font-medium">Leading digital excellence</p>
                        </motion.div>

                        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {visionPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative h-36 rounded-xl overflow-hidden mb-4">
                                        <img src={point.image} alt={point.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute top-3 right-3 w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center">
                                            {point.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{point.title}</h3>
                                    <p className="text-gray-500 text-sm">{point.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 border-y border-gray-100">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</div>
                                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Journey Section - Animated Timeline with Video */}
                <section className="py-16 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <motion.div className="text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Journey</h2>
                            <p className="text-gray-500 text-sm">From startup to industry leader</p>
                        </motion.div>

                        {/* Video + Timeline Layout */}
                        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
                            {/* Video Side */}
                            <motion.div
                                className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px]"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                                    <source src="https://res.cloudinary.com/damfndmrm/video/upload/v1767787523/49949B00-9B30-46C4-Bcac-B91c47930d82_kiwg7n.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold">8+ Years of Excellence</h3>
                                    <p className="text-blue-200 text-sm">Watch our story unfold</p>
                                </div>
                            </motion.div>

                            {/* Timeline Side */}
                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

                                <div className="space-y-6">
                                    {timeline.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="relative pl-12"
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                                        >
                                            {/* Dot */}
                                            <motion.div
                                                className="absolute left-2 top-1 w-5 h-5 rounded-full bg-white border-4 border-blue-500 shadow-lg"
                                                whileHover={{ scale: 1.3 }}
                                            />

                                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-blue-600 font-bold">{item.year}</span>
                                                    <span className="h-px bg-gray-200 flex-1" />
                                                </div>
                                                <h3 className="font-bold text-gray-900">{item.title}</h3>
                                                <p className="text-xs text-gray-500">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '25px 25px' }} />
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's build the future together.</h2>
                            <p className="text-white/80 mb-8 max-w-lg mx-auto text-sm">Transforming ideas into digital milestones with Branding Pioneers.</p>
                            <motion.button
                                className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
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
