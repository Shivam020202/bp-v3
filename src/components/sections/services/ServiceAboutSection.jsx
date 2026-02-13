import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceAboutSection = ({ title, titleHighlight, services }) => {
    const containerRef = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' && window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useLayoutEffect(() => {
        if (!isLargeScreen || !containerRef.current) return;

        let triggers = [];
        let timeoutId;

        timeoutId = setTimeout(() => {
            const cards = containerRef.current?.querySelectorAll('.service-card');
            if (!cards || cards.length === 0) return;

            const totalCards = cards.length;
            const lastCard = cards[totalCards - 1];

            cards.forEach((card, index) => {
                const cardContent = card.querySelector('.service-card-content');
                const isLastCard = index === totalCards - 1;

                const pinTrigger = ScrollTrigger.create({
                    trigger: card,
                    start: 'center center',
                    pin: true,
                    pinSpacing: false,
                    endTrigger: isLastCard ? card : lastCard,
                    end: isLastCard ? 'bottom 35%' : 'bottom 35%',
                    markers: false,
                    invalidateOnRefresh: true,
                });
                triggers.push(pinTrigger);

                if (!isLastCard) {
                    const scaleTween = gsap.to(cardContent, {
                        scale: 0.85,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'center center',
                            end: () => `+=${window.innerHeight}`,
                            scrub: true,
                            markers: false,
                            invalidateOnRefresh: true,
                        }
                    });
                    if (scaleTween.scrollTrigger) triggers.push(scaleTween.scrollTrigger);
                } else {
                    const lastTween = gsap.to(cardContent, {
                        scale: 0.9,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'center center',
                            end: 'bottom 35%',
                            scrub: true,
                            markers: false,
                            invalidateOnRefresh: true,
                        }
                    });
                    if (lastTween.scrollTrigger) triggers.push(lastTween.scrollTrigger);
                }
            });

            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            triggers.forEach(trigger => trigger.kill());
            ScrollTrigger.refresh();
        };
    }, [isLargeScreen]);

    return (
        <section className="relative bg-white overflow-hidden z-10">
            {/* Background Pattern */}
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

            {/* Header */}
            <div className="container mx-auto px-6 pt-24 md:pt-32 pb-8 md:pb-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12">
                    <div>
                        <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                            Our Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] text-black">
                            {title} <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                                {titleHighlight}
                            </span>
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                        View All Services
                    </button>
                </div>
                <p className="text-gray-500 max-w-lg text-sm md:text-base">
                    Scroll down to explore our comprehensive solutions
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
                                            className="absolute inset-0 w-full h-full object-cover object-center"
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
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {service.technologies.slice(0, 3).map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 hover:bg-[#C4A484] hover:text-white hover:border-[#C4A484]"
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
                    className="w-full lg:max-w-[95vw] mx-auto relative z-20 bg-white"
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
                                        <div className="relative h-56 sm:h-64 md:h-80 lg:h-auto lg:min-h-[550px] overflow-hidden bg-[#1a1a2e]">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

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
                                                        className="px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-medium rounded-full border transition-all duration-300 hover:bg-[#C4A484] hover:text-white hover:border-[#C4A484]"
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

export default ServiceAboutSection;
