import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PortfolioShowcase = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const projects = [
        {
            id: 1,
            title: "AIIMS Geriatrics",
            subtitle: "Healthcare Digital Transformation",
            image: "https://picsum.photos/seed/aiims/600/800",
        },
        {
            id: 2,
            title: "Apollo Indraprastha",
            subtitle: "Web Development & Digital Strategy",
            image: "https://picsum.photos/seed/apollo/600/800",
        },
        {
            id: 3,
            title: "Astro Bazzar",
            subtitle: "E-commerce Platform Development",
            image: "https://picsum.photos/seed/astro/600/800",
        },
    ];

    return (
        <section ref={ref} className="py-12 relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header - Left Aligned, Smaller */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Portfolio
                    </h2>
                    <p className="text-sm text-gray-500">
                        Featured projects we've delivered
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href="#"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1 }}
                            className="group block"
                        >
                            {/* Project Card with Image */}
                            <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-md relative">
                                {/* Project Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback gradient if image fails */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 hidden items-center justify-center"
                                >
                                    <span className="text-4xl">💻</span>
                                </div>

                                {/* Overlay with content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                                {/* Content overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        {project.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-white/70 text-xs mb-3">
                                        {project.subtitle}
                                    </p>

                                    {/* Link */}
                                    <span className="inline-block text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                                        View Project →
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioShowcase;
