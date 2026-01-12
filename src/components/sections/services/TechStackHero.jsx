import { useEffect, useRef, useState } from "react";

const TechStackHero = ({ videoUrl }) => {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleScroll = () => {
            if (!sectionRef.current || isMobile) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const progress = Math.min(Math.max(-rect.top / (window.innerHeight * 0.5), 0), 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, [isMobile]);

    return (
        <>
            {/* Hero Section - Responsive height */}
            <section
                ref={sectionRef}
                className={`relative w-full overflow-hidden ${isMobile ? '' : 'sticky top-0'}`}
                style={{
                    height: isMobile ? '60vh' : '100vh',
                    minHeight: isMobile ? '400px' : '600px',
                    transform: isMobile ? 'none' : `scale(${1 - scrollProgress * 0.1}) translateY(${scrollProgress * -50}px)`,
                    opacity: isMobile ? 1 : 1 - scrollProgress * 0.3,
                    borderRadius: isMobile ? '0' : `${scrollProgress * 24}px`,
                    transformOrigin: 'center top',
                    zIndex: 1
                }}
            >
                {/* Video Background */}
                {videoUrl && (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            borderRadius: isMobile ? '0' : `${scrollProgress * 24}px`
                        }}
                    >
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                )}

                {/* Fallback if no video */}
                {!videoUrl && (
                    <div
                        className="absolute inset-0 bg-gray-900"
                        style={{ borderRadius: isMobile ? '0' : `${scrollProgress * 24}px` }}
                    />
                )}

                {/* Dark overlay */}
                <div
                    className="absolute inset-0 bg-black transition-opacity duration-100"
                    style={{
                        opacity: isMobile ? 0.2 : scrollProgress * 0.4,
                        borderRadius: isMobile ? '0' : `${scrollProgress * 24}px`
                    }}
                />

                {/* Bottom Gradient - helps blend into next section on mobile */}
                {isMobile && (
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" />
                )}
            </section>

            {/* Spacer only needed on desktop for scroll effect */}
            {!isMobile && <div className="h-screen" style={{ marginTop: '-100vh' }} />}
        </>
    );
};

export default TechStackHero;
