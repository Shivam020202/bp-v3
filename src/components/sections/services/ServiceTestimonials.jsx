import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const ServiceTestimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        { name: "Mr. Amit", role: "Marketing Head, Allora Dental", initials: "MA" },
        { name: "Mr. Nitant", role: "Gynecologist, Aligarh", initials: "MN" },
        { name: "Mrs. Sangeeta Maheswari", role: "Business Owner", initials: "SM" },
        { name: "Dr. Inderjeet Kundu", role: "Founder, Pratham Diagnostic", initials: "IK" },
        { name: "Mr. Raghavendra", role: "Founder, Rad Foods", initials: "MR" },
        { name: "Dr. Amit Saho", role: "Director, Santa Vita Hospital", initials: "AS" },
    ];

    const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-16 bg-[#9F7AEA] relative overflow-hidden" ref={ref}>
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                >
                    <motion.span
                        className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-3"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        Testimonials 💬
                    </motion.span>

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        What Our <span className="text-cream-300">Clients Say</span>
                    </h2>
                </motion.div>

                {/* Testimonial Cards - Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className={`text-center p-4 rounded-xl cursor-pointer transition-all ${activeIndex === index ? "bg-white/20 scale-105" : "bg-white/5 hover:bg-white/10"
                                }`}
                            onClick={() => setActiveIndex(index)}
                            whileHover={{ y: -3 }}
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                                {t.initials}
                            </div>
                            <h4 className="text-white text-xs font-bold truncate">{t.name}</h4>
                            <p className="text-white/60 text-[10px] truncate">{t.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceTestimonials;
