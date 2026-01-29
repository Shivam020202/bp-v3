import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { projects as allProjectsSource } from "../../../constants/projects";

const PortfolioShowcase = () => {
    // Use first 6 projects from the real data
    const projects = allProjectsSource.slice(0, 6);

    // Duplicate for seamless loop
    const allProjects = [...projects, ...projects];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-6">
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif gap-2">
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
                            <Link
                                key={`${project.id}-${index}`}
                                to={`/portfolio/${project.id}`}
                                className="group block flex-shrink-0"
                            >
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-64 md:w-72 lg:w-80 aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-lg relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioShowcase;
