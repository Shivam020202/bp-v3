import { motion } from "framer-motion";

const ServiceBannerHero = ({
    title,
    titleHighlight,
    subtitle,
    description,
    heroImage,
    stats
}) => {
    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(196,164,132,0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(196,164,132,0.08)_0%,transparent_50%)]" />

                {/* Floating Image */}
                <motion.div
                    className="absolute right-10 top-1/2 -translate-y-1/2 w-1/3 max-w-md opacity-20 md:opacity-40"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 0.4, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img
                        src={heroImage}
                        alt={title}
                        className="w-full h-auto"
                    />
                </motion.div>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/30" />
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
                        {subtitle}
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {title} <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                            {titleHighlight}
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {description}
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
                            Get Started
                        </motion.button>
                        <motion.button
                            className="px-8 py-4 border-2 border-white/40 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Case Studies
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="flex flex-wrap items-center gap-8 md:gap-12 mt-12 pt-8 border-t border-white/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        {stats?.map((stat, index) => (
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

export default ServiceBannerHero;
