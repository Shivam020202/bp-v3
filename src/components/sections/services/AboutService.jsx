import { useRef, useEffect, useState } from "react";
import { ArrowRight, Code, Server, ShoppingCart, FileText, Smartphone } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutService = () => {
    const containerRef = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' && window.innerWidth >= 1024);

    const services = [
        {
            id: 1,
            title: "Frontend Development",
            description: "Modern, responsive user interfaces built with React and cutting-edge technologies for exceptional user experiences that captivate and convert visitors into customers.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&auto=format",
            technologies: ["React", "Vue.js", "TypeScript", "Next.js"],
            icon: <Code className="w-6 h-6" />,
            stats: { projects: "120+", satisfaction: "99%" }
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Robust server-side applications, RESTful APIs, and database architecture for scalable web solutions that power your business growth and handle millions of requests.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&auto=format",
            technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
            icon: <Server className="w-6 h-6" />,
            stats: { projects: "85+", satisfaction: "98%" }
        },
        {
            id: 3,
            title: "E-commerce Solutions",
            description: "Custom online stores with shopping carts, payment processing, and inventory management systems designed to maximize conversions and streamline operations.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&auto=format",
            technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
            icon: <ShoppingCart className="w-6 h-6" />,
            stats: { projects: "50+", satisfaction: "100%" }
        },
        {
            id: 4,
            title: "CMS Development",
            description: "Content Management Systems that allow easy content updates and website management, giving you full control over your digital presence without technical expertise.",
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=800&fit=crop&auto=format",
            technologies: ["WordPress", "Strapi", "Contentful", "Sanity"],
            icon: <FileText className="w-6 h-6" />,
            stats: { projects: "95+", satisfaction: "97%" }
        },
        {
            id: 5,
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android, delivering seamless experiences with intuitive UI/UX design and robust backend integration.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&auto=format",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            icon: <Smartphone className="w-6 h-6" />,
            stats: { projects: "60+", satisfaction: "98%" }
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isLargeScreen || !containerRef.current) return;

        const cards = containerRef.current.querySelectorAll('.service-card');
        if (!cards || cards.length === 0) return;

        const totalCards = cards.length;
        const lastCard = cards[totalCards - 1];

        const triggers = [];

        cards.forEach((card, index) => {
            const cardContent = card.querySelector('.service-card-content');
            const isLastCard = index === totalCards - 1;

            // Pin all cards
            const pinTrigger = ScrollTrigger.create({
                trigger: card,
                start: 'top 10%',
                pin: true,
                pinSpacing: false,
                endTrigger: isLastCard ? card : lastCard,
                end: isLastCard ? 'bottom 35%' : 'bottom 35%',
            });
            triggers.push(pinTrigger);

            // Scale down animation for stacked effect (simpler, smoother)
            if (!isLastCard) {
                const scaleTween = gsap.to(cardContent, {
                    scale: 0.85,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 10%',
                        end: () => `+=${window.innerHeight}`,
                        scrub: true,
                    }
                });
                if (scaleTween.scrollTrigger) triggers.push(scaleTween.scrollTrigger);
            } else {
                const lastTween = gsap.to(cardContent, {
                    scale: 0.9,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 10%',
                        end: 'bottom 35%',
                        scrub: true,
                    }
                });
                if (lastTween.scrollTrigger) triggers.push(lastTween.scrollTrigger);
            }
        });

        return () => {
            triggers.forEach(trigger => trigger.kill());
        };
    }, [isLargeScreen]);

    return (
        <section className="relative bg-white overflow-hidden">

            {/* Lightweight CSS Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-[0.04] animate-pulse"
                    style={{ background: 'radial-gradient(circle, #C4A484 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-40 left-10 w-80 h-80 rounded-full opacity-[0.03] animate-pulse"
                    style={{ background: 'radial-gradient(circle, #C4A484 0%, transparent 70%)', animationDelay: '1s' }}
                />
            </div>

            {/* Header - Same style as Home Page */}
            <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-8 md:pb-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12">
                    <div>
                        <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                            Our Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
                            WEB <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                                DEVELOPMENT.
                            </span>
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                        View All Services
                    </button>
                </div>
                <p className="text-gray-500 max-w-lg text-sm md:text-base">
                    Scroll down to explore our comprehensive development solutions
                </p>
            </div>

            {/* Mobile Horizontal Scroll */}
            {!isLargeScreen && (
                <div className="w-full overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
                    <div className="flex gap-4" style={{ width: 'max-content' }}>
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="w-[85vw] flex-shrink-0 snap-center"
                            >
                                <div className="service-card-content bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                                    <div className="relative h-48 sm:h-56 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
                                        <div className="absolute top-3 left-3">
                                            <span className="text-4xl font-black text-white/20">0{index + 1}</span>
                                        </div>
                                        <div className="absolute bottom-3 left-3 flex items-center gap-4">
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-white">{service.stats.projects}</div>
                                                <div className="text-[8px] text-white/70 uppercase">Projects</div>
                                            </div>
                                            <div className="w-px h-6 bg-white/30" />
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-white">{service.stats.satisfaction}</div>
                                                <div className="text-[8px] text-white/70 uppercase">Satisfaction</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div
                                            className="inline-flex items-center w-10 h-10 rounded-xl justify-center mb-3"
                                            style={{ backgroundColor: 'rgba(196,164,132,0.15)' }}
                                        >
                                            <span style={{ color: '#C4A484' }}>{service.icon}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {service.technologies.slice(0, 3).map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 text-xs font-medium rounded-full border"
                                                    style={{ borderColor: '#C4A484', color: '#C4A484' }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <button
                                            className="flex items-center gap-2 px-5 py-2.5 text-white rounded-full font-semibold text-xs"
                                            style={{ backgroundColor: '#C4A484' }}
                                        >
                                            Get Started →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Stacked Cards */}
            {isLargeScreen && (
                <div
                    ref={containerRef}
                    className="w-full lg:max-w-[85vw] mx-auto"
                >
                    <ul className="list-none" style={{ '--numcards': services.length }}>
                        {services.map((service, index) => (
                            <li
                                key={service.id}
                                className="service-card"
                                style={{
                                    '--index': index + 1,
                                    marginBottom: index === services.length - 1 ? '50vh' : '100vh',
                                    zIndex: index + 1,
                                }}
                            >
                                <div
                                    className="service-card-content bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border border-gray-100 will-change-transform"
                                    style={{ transformOrigin: '50% 0%' }}
                                >
                                    <div className="grid lg:grid-cols-2">
                                        {/* Image Side */}
                                        <div className="relative h-56 sm:h-64 md:h-80 lg:h-auto lg:min-h-[550px] overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

                                            {/* Number Badge */}
                                            <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white/20">
                                                    0{index + 1}
                                                </span>
                                            </div>

                                            {/* Stats */}
                                            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-4 md:gap-6">
                                                <div className="text-center">
                                                    <div className="text-xl md:text-2xl font-bold text-white">{service.stats.projects}</div>
                                                    <div className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-wider">Projects</div>
                                                </div>
                                                <div className="w-px h-8 md:h-10 bg-white/30" />
                                                <div className="text-center">
                                                    <div className="text-xl md:text-2xl font-bold text-white">{service.stats.satisfaction}</div>
                                                    <div className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-wider">Satisfaction</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className="p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                                            <div
                                                className="inline-flex items-center gap-2 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl justify-center mb-4 md:mb-6"
                                                style={{ backgroundColor: 'rgba(196,164,132,0.15)' }}
                                            >
                                                <span style={{ color: '#C4A484' }}>{service.icon}</span>
                                            </div>

                                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 md:mb-8">
                                                {service.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                                                {service.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-full border transition-colors hover:bg-[#C4A484] hover:text-white hover:border-[#C4A484]"
                                                        style={{ borderColor: '#C4A484', color: '#C4A484' }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <button
                                                className="group self-start flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 text-white rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:scale-[1.02]"
                                                style={{ backgroundColor: '#C4A484' }}
                                            >
                                                <span>Get Started</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default AboutService;