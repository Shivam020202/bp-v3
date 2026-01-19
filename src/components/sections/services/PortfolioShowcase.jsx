import { motion } from "framer-motion";

const PortfolioShowcase = () => {
    const projects = [
        {
            id: 1,
            title: "AIIMS Geriatrics",
            subtitle: "Healthcare Digital Platform",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=600&fit=crop&auto=format",
        },
        {
            id: 2,
            title: "Apollo Indraprastha",
            subtitle: "Web Development",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=600&fit=crop&auto=format",
        },
        {
            id: 3,
            title: "Astro Bazzar",
            subtitle: "E-commerce Platform",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=600&fit=crop&auto=format",
        },
        {
            id: 4,
            title: "MindCare Pro",
            subtitle: "Mental Health App",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=600&fit=crop&auto=format",
        },
        {
            id: 5,
            title: "EduTech Plus",
            subtitle: "Learning Platform",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=600&fit=crop&auto=format",
        },
        {
            id: 6,
            title: "FinanceHub",
            subtitle: "Financial Dashboard",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=600&fit=crop&auto=format",
        },
    ];

    // Duplicate for seamless loop
    const allProjects = [...projects, ...projects];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header - Same as other sections */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                        Our Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-3 text-black">
                        FEATURED <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 italic font-serif gap-2">
                            PORTFOLIO.
                        </span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-lg">
                        Projects delivered with excellence
                    </p>
                </motion.div>

                {/* Scrolling Cards - Contained within max-width */}
                <div className="relative overflow-hidden rounded-2xl">
                    <motion.div
                        className="flex gap-5"
                        animate={{
                            x: ['0%', '-50%'],
                        }}
                        transition={{
                            x: {
                                duration: 50,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                        style={{ width: 'fit-content' }}
                    >
                        {allProjects.map((project, index) => (
                            <motion.a
                                key={`${project.id}-${index}`}
                                href="#"
                                className="group block flex-shrink-0"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-64 md:w-72 lg:w-80 aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-lg relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-1" style={{ fontFamily: 'serif' }}>{project.title}</h3>
                                        <p className="text-white/70 text-sm">{project.subtitle}</p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioShowcase;
