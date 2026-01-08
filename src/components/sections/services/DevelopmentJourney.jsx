import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const DevelopmentJourney = () => {
    const containerRef = useRef(null);
    const planeRef = useRef(null);
    const pathRef = useRef(null);

    const steps = [
        { title: "Discovery", desc: "Research & ideation", emoji: "🔍", color: "#3B82F6" },
        { title: "Strategy", desc: "Planning & roadmap", emoji: "📋", color: "#6366F1" },
        { title: "Design", desc: "UI/UX creation", emoji: "🎨", color: "#8B5CF6" },
        { title: "Development", desc: "Build & code", emoji: "💻", color: "#A855F7" },
        { title: "Testing", desc: "Quality assurance", emoji: "✅", color: "#D946EF" },
        { title: "Launch", desc: "Deploy & scale", emoji: "🚀", color: "#EC4899" },
    ];

    const stopX = [80, 230, 380, 530, 680, 830];
    const pathY = 200;

    useEffect(() => {
        const plane = planeRef.current;
        const path = pathRef.current;
        if (!plane || !path) return;

        const pathLength = path.getTotalLength();
        gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "bottom 30%",
                scrub: 1.5,
            }
        });

        tl.to(path, { strokeDashoffset: 0, duration: 1, ease: "none" }, 0);
        tl.to(plane, {
            motionPath: {
                path: path,
                align: path,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
            },
            duration: 1,
            ease: "none",
        }, 0);

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    const spiralPath = `M 80,${pathY}
        Q 155,${pathY + 65} 230,${pathY}
        Q 305,${pathY - 65} 380,${pathY}
        Q 455,${pathY + 65} 530,${pathY}
        Q 605,${pathY - 65} 680,${pathY}
        Q 755,${pathY + 65} 830,${pathY}`;

    return (
        <section ref={containerRef} className="py-12 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Development Journey</h2>
                    <p className="text-gray-500">Follow each milestone in our proven development process</p>
                </motion.div>

                <div className="relative w-full max-w-6xl mx-auto" style={{ height: "450px" }}>
                    {/* SVG Path */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 910 450" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="50%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#EC4899" />
                            </linearGradient>
                        </defs>

                        <path
                            ref={pathRef}
                            d={spiralPath}
                            fill="none"
                            stroke="url(#pathGrad)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            opacity="0.3"
                        />

                        {/* Stop points on path */}
                        {stopX.map((x, i) => (
                            <motion.circle
                                key={i}
                                cx={x}
                                cy={pathY}
                                r="8"
                                fill={steps[i].color}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                            />
                        ))}
                    </svg>

                    {/* Cards */}
                    {steps.map((step, i) => {
                        const xPercent = (stopX[i] / 910) * 100;
                        const yPercent = (pathY / 450) * 100;
                        const isTop = i % 2 === 0;
                        const cardOffset = 75;

                        return (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{
                                    left: `${xPercent}%`,
                                    top: isTop ? `calc(${yPercent}% - ${cardOffset}px)` : `calc(${yPercent}% + ${cardOffset}px)`,
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 10
                                }}
                                initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.5 }}
                            >
                                <motion.div
                                    className="relative bg-white rounded-2xl p-4 shadow-xl border border-gray-100 text-center"
                                    style={{ width: "130px" }}
                                    whileHover={{
                                        y: isTop ? -8 : 8,
                                        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)"
                                    }}
                                >
                                    {/* Step number badge */}
                                    <div
                                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        {i + 1}
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl"
                                        style={{ backgroundColor: `${step.color}15` }}
                                    >
                                        {step.emoji}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>

                                    {/* Connector line to path dot */}
                                    <div
                                        className="absolute left-1/2 -translate-x-1/2 w-0.5"
                                        style={{
                                            height: `${cardOffset - 60}px`,
                                            backgroundColor: step.color,
                                            top: isTop ? "100%" : "auto",
                                            bottom: isTop ? "auto" : "100%"
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}

                    {/* Animated Plane */}
                    <div
                        ref={planeRef}
                        className="absolute z-30 pointer-events-none"
                        style={{ width: "40px", height: "40px" }}
                    >
                        <motion.div
                            className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-white"
                            animate={{
                                boxShadow: [
                                    "0 4px 20px rgba(59, 130, 246, 0.4)",
                                    "0 4px 30px rgba(139, 92, 246, 0.6)",
                                    "0 4px 20px rgba(59, 130, 246, 0.4)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="text-lg">✈️</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentJourney;
