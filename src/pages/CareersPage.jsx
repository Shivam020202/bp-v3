import { motion } from "framer-motion";
import {
    FaHeart,
    FaRocket,
    FaLaptopCode,
    FaUsers,
    FaGraduationCap,
    FaStar,
    FaPaperPlane,
    FaLinkedin,
} from "react-icons/fa";

const CareersPage = () => {
    const perks = [
        { icon: <FaHeart />, title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs" },
        { icon: <FaRocket />, title: "Career Growth", desc: "Clear growth paths and continuous learning opportunities" },
        { icon: <FaLaptopCode />, title: "Remote Flexibility", desc: "Work from anywhere with flexible schedules" },
        { icon: <FaUsers />, title: "Amazing Culture", desc: "Collaborative environment with fun team activities" },
        { icon: <FaGraduationCap />, title: "Learning Budget", desc: "Annual budget for courses and certifications" },
        { icon: <FaStar />, title: "Recognition", desc: "Performance bonuses and employee appreciation" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Team Background */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                        alt="Team working together"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-[1] overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
                        style={{ background: "radial-gradient(circle, #C4A484 0%, transparent 70%)" }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.15, 0.1],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
                        style={{ background: "radial-gradient(circle, #C4A484 0%, transparent 70%)" }}
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.15, 0.1, 0.15],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 pt-10 text-center text-white relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-[0.9]"
                    >
                        BUILD YOUR <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                            CAREER WITH US.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg md:text-md text-gray-200 max-w-2xl mx-auto leading-relaxed font-light mb-6"
                    >
                        Join a team of passionate innovators, creators, and strategists. We're always looking for talented individuals who are ready to make an impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#perks"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-all"
                        >
                            <span>Why Join Us?</span>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us / Perks Section */}
            <section id="perks" className="py-20 bg-[#FDF8F3]">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                            Benefits & Perks
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
                            WHY JOIN <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                                BRANDING PIONEERS?
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {perks.map((perk, idx) => (
                            <motion.div
                                key={idx}
                                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#C4A484]/30 hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-14 h-14 bg-[#FDF8F3] rounded-xl flex items-center justify-center text-[#C4A484] text-2xl mb-5 group-hover:bg-[#C4A484] group-hover:text-white transition-all duration-300">
                                    {perk.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{perk.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "radial-gradient(circle at 2px 2px, #C4A484 1px, transparent 0)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
                            DON'T SEE THE RIGHT FIT?
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            We're always on the lookout for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:careers@brandingpioneers.com"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C4A484] text-white font-semibold rounded-full hover:bg-[#b39474] transition-all hover:scale-105"
                            >
                                <FaPaperPlane />
                                Send Your Resume
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                            >
                                <FaLinkedin />
                                Follow on LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
