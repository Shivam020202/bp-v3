import { motion } from "framer-motion";

const bannerImage = "https://res.cloudinary.com/damfndmrm/image/upload/v1769690584/web-banner_xf8njq.png";

const WebDevBannerHero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={bannerImage}
                    alt="Web Development Services"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-32">
                <div className="max-w-3xl">
                    {/* Label */}
                    <motion.span
                        className="text-white/70 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4 md:mb-6 block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Our Services
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        WEB <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                            DEVELOPMENT.
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Building powerful, scalable, and beautiful digital experiences that drive results and elevate your brand.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.button
                            className="px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#C4A484] hover:text-white transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Project
                        </motion.button>
                        <motion.button
                            className="px-8 py-4 border-2 border-white/40 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Portfolio
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="flex flex-wrap items-center gap-8 md:gap-12 mt-12 pt-8 border-t border-white/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        {[
                            { value: "150+", label: "Projects Delivered" },
                            { value: "98%", label: "Client Satisfaction" },
                            { value: "24/7", label: "Support Available" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center md:text-left">
                                <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                                <div className="text-white/60 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>


            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WebDevBannerHero;
