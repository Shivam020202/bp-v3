import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaArrowRight, FaChartLine } from "react-icons/fa";

const CaseStudies = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeTab, setActiveTab] = useState(0);

    const caseStudies = [
        {
            id: 0,
            name: "AIIMS Geriatrics",
            logo: "🏥",
            tags: ["Video Marketing", "Social Media"],
            stats: [
                { label: "Video Engagement", value: "400%", suffix: "↑" },
                { label: "Social Following", value: "2x", suffix: "Growth" },
                { label: "Consultations", value: "150%", suffix: "↑" },
            ],
        },
        {
            id: 1,
            name: "Apollo Indraprastha",
            logo: "⚕️",
            tags: ["Web Development", "Digital Strategy"],
            stats: [
                { label: "Online Bookings", value: "300%", suffix: "↑" },
                { label: "User Engagement", value: "2.5x", suffix: "Growth" },
                { label: "Page Load", value: "60%", suffix: "Faster" },
            ],
        },
        {
            id: 2,
            name: "Astro Bazzar",
            logo: "✨",
            tags: ["E-commerce", "UI/UX"],
            stats: [
                { label: "Online Sales", value: "250%", suffix: "↑" },
                { label: "Cart Conversion", value: "40%", suffix: "↑" },
                { label: "Retention", value: "65%", suffix: "Rate" },
            ],
        },
        {
            id: 3,
            name: "DST",
            logo: "🔬",
            tags: ["Web Portal", "Data Viz"],
            stats: [
                { label: "Registrations", value: "500%", suffix: "↑" },
                { label: "Grant Apps", value: "3x", suffix: "Growth" },
                { label: "Active Users", value: "85K", suffix: "+" },
            ],
        },
    ];

    const activeCase = caseStudies[activeTab];

    return (
        <section className="py-16 bg-cream-200 relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                >
                    <motion.span
                        className="inline-block bg-cream-300/50 text-warm-700 px-4 py-2 rounded-full text-sm font-bold mb-3"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        Case Studies 📊
                    </motion.span>

                    <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-900">
                        Transforming <span className="text-warm-600">Businesses</span>
                    </h2>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {caseStudies.map((study, index) => (
                        <motion.button
                            key={study.id}
                            onClick={() => setActiveTab(index)}
                            className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === index
                                    ? "bg-warm-700 text-white shadow-lg"
                                    : "bg-white text-warm-700 hover:bg-cream-300 border border-cream-300"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {study.logo} {study.name}
                        </motion.button>
                    ))}
                </div>

                {/* Case Study Card */}
                <motion.div
                    key={activeTab}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="grid md:grid-cols-2">
                        {/* Left - Info */}
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-cream-300 rounded-xl flex items-center justify-center text-2xl">
                                    {activeCase.logo}
                                </div>
                                <h3 className="text-xl font-bold text-warm-900">{activeCase.name}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {activeCase.tags.map((tag, i) => (
                                    <span key={i} className="bg-cream-200 text-warm-600 px-3 py-1 rounded-full text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <motion.button
                                className="flex items-center gap-2 text-warm-600 font-bold text-sm hover:text-warm-800 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                View Full Case Study <FaArrowRight />
                            </motion.button>
                        </div>

                        {/* Right - Stats */}
                        <div className="bg-[#9F7AEA] p-6 text-white">
                            <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                                <FaChartLine /> Key Results
                            </h4>

                            <div className="space-y-3">
                                {activeCase.stats.map((stat, i) => (
                                    <div key={i} className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                                        <span className="text-white/80 text-sm">{stat.label}</span>
                                        <span className="font-bold">{stat.value} {stat.suffix}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudies;
