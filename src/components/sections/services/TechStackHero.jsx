import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStackHero = ({ videoUrl }) => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isVideoReady, setIsVideoReady] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useLayoutEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;

        if (!video || !section || isMobile) return;

        let scrollTriggerInst;

        const setupScrollVideo = () => {
            if (!video.duration || isNaN(video.duration)) return;

            setIsVideoReady(true);

            scrollTriggerInst = ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "+=200%",
                pin: true,
                pinSpacing: true,
                scrub: 0.5,
                onUpdate: (self) => {
                    // Bidirectional video control based on scroll progress
                    const targetTime = self.progress * (video.duration - 0.1);
                    video.currentTime = targetTime;
                },
            });
        };

        video.addEventListener('loadedmetadata', setupScrollVideo);

        // If already loaded
        if (video.readyState >= 1) {
            setupScrollVideo();
        }

        return () => {
            video.removeEventListener('loadedmetadata', setupScrollVideo);
            if (scrollTriggerInst) {
                scrollTriggerInst.kill();
            }
        };
    }, [isMobile]);

    return (
        <>
            <section
                ref={sectionRef}
                className="relative w-full overflow-hidden bg-black"
                style={{
                    height: isMobile ? '60vh' : '100vh',
                    minHeight: isMobile ? '400px' : '600px',
                }}
            >
                {/* Video Background */}
                {videoUrl && (
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay={isMobile}
                        loop={isMobile}
                    >
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                )}

                {/* Fallback if no video */}
                {!videoUrl && (
                    <div className="absolute inset-0 bg-gray-900" />
                )}

                {/* Loading state */}
                {!isVideoReady && !isMobile && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                        <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    </div>
                )}
            </section>
        </>
    );
};

export default TechStackHero;
