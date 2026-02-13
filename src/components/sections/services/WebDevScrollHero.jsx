import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WebDevScrollHero = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const contentRef = useRef(null);
    const [isVideoReady, setIsVideoReady] = useState(false);

    useLayoutEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let scrollTriggerInst;
        let gsapContext;

        const resize = () => {
            if (canvas && containerRef.current) {
                canvas.width = containerRef.current.clientWidth;
                canvas.height = containerRef.current.clientHeight;

                if (video.readyState >= 1) {
                    const vw = canvas.width;
                    const vh = canvas.height;
                    const videoRatio = video.videoWidth / video.videoHeight;
                    const canvasRatio = vw / vh;

                    let drawW, drawH, drawX, drawY;

                    if (canvasRatio > videoRatio) {
                        drawW = vw;
                        drawH = vw / videoRatio;
                        drawX = 0;
                        drawY = (vh - drawH) / 2;
                    } else {
                        drawH = vh;
                        drawW = vh * videoRatio;
                        drawX = (vw - drawW) / 2;
                        drawY = 0;
                    }

                    ctx.drawImage(
                        video,
                        0,
                        0,
                        video.videoWidth,
                        video.videoHeight,
                        drawX,
                        drawY,
                        drawW,
                        drawH
                    );
                }
            }
        };
        window.addEventListener("resize", resize);

        const onMetadata = () => {
            setIsVideoReady(true);
            resize();
            setupAnimation();
        };

        const setupAnimation = () => {
            if (!video.duration || isNaN(video.duration)) return;

            if (gsapContext) gsapContext.revert();

            gsapContext = gsap.context(() => {
                const videoState = { currentTime: 0 };
                const tl = gsap.timeline();

                // Video Playback Track
                tl.to(
                    videoState,
                    {
                        currentTime: video.duration - 0.1,
                        duration: 1,
                        ease: "none",
                        onUpdate: () => {
                            if (Math.abs(video.currentTime - videoState.currentTime) > 0.05) {
                                video.currentTime = videoState.currentTime;
                            }
                        },
                    },
                    0
                );

                scrollTriggerInst = ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=250%",
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                    animation: tl,
                    onLeave: () => {
                        // Ensure clean transition to next section
                        ScrollTrigger.refresh();
                    },
                });
            }, containerRef);

            const renderTick = () => {
                if (video.readyState >= 1) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    const vw = canvas.width;
                    const vh = canvas.height;
                    const videoRatio = video.videoWidth / video.videoHeight;
                    const canvasRatio = vw / vh;

                    let drawW, drawH, drawX, drawY;

                    if (canvasRatio > videoRatio) {
                        drawW = vw;
                        drawH = vw / videoRatio;
                        drawX = 0;
                        drawY = (vh - drawH) / 2;
                    } else {
                        drawH = vh;
                        drawW = vh * videoRatio;
                        drawX = (vw - drawW) / 2;
                        drawY = 0;
                    }

                    ctx.drawImage(
                        video,
                        0,
                        0,
                        video.videoWidth,
                        video.videoHeight,
                        drawX,
                        drawY,
                        drawW,
                        drawH
                    );
                }
                animationFrameId = requestAnimationFrame(renderTick);
            };
            renderTick();
        };

        video.preload = "auto";
        if (video.readyState >= 1) {
            onMetadata();
        } else {
            video.addEventListener("loadedmetadata", onMetadata);
        }

        return () => {
            window.removeEventListener("resize", resize);
            video.removeEventListener("loadedmetadata", onMetadata);
            cancelAnimationFrame(animationFrameId);
            if (scrollTriggerInst) scrollTriggerInst.kill();
            if (gsapContext) gsapContext.revert();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-black font-display selection:bg-white/30"
        >
            {/* Source Video (Hidden) */}
            <video
                ref={videoRef}
                className="hidden"
                src="https://res.cloudinary.com/damfndmrm/video/upload/v1769592204/website_n9selk.mp4"
                playsInline
                webkit-playsinline="true"
                preload="auto"
                muted
                crossOrigin="anonymous"
            />

            {/* Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {!isVideoReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <div className="animate-pulse text-white/50 text-xs tracking-[0.3em] font-light">
                            LOADING
                        </div>
                    </div>
                </div>
            )}

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-30 pointer-events-none">
                <span className="text-white text-[10px] uppercase tracking-[0.2em]">
                    Scroll
                </span>
                <ArrowRight className="w-4 h-4 rotate-90 text-white" />
            </div>
        </div>
    );
};

export default WebDevScrollHero;
