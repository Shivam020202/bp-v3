import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideoHero = () => {
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
        // Use client width/height to match the display size exactly
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;

        if (video.readyState >= 1) {
          // Object-Fit: Cover Logic
          const vw = canvas.width;
          const vh = canvas.height;
          const videoRatio = video.videoWidth / video.videoHeight;
          const canvasRatio = vw / vh;

          let drawW, drawH, drawX, drawY;

          if (canvasRatio > videoRatio) {
            // Canvas is wider -> Fit Width, Crop Height
            drawW = vw;
            drawH = vw / videoRatio;
            drawX = 0;
            drawY = (vh - drawH) / 2;
          } else {
            // Canvas is taller -> Fit Height, Crop Width (Mobile)
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
            drawH,
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

        // 1. Video Playback Track
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
          0,
        );

        // 2. Content Slides Animation
        // We have 3 slides.
        const slides = gsap.utils.toArray(".hero-slide");

        slides.forEach((slide, i) => {
          const elements = slide.querySelectorAll(".anim-child");

          if (i === 0) {
            // Slide 1: Initially Visible
            // Ensure proper initial state for GSAP
            gsap.set(slide, { opacity: 1, pointerEvents: "auto" });
            gsap.set(elements, { opacity: 1, y: 0 });

            // Exit (Fade out and move up)
            tl.to(
              slide,
              {
                opacity: 0,
                y: -50,
                pointerEvents: "none",
                duration: 0.1,
                ease: "power2.in",
              },
              0.25, // Exit starts around 25% of scroll
            );
          } else {
            // Slides 2 & 3: Entrance + Exit
            const startTime = 0.25 + (i - 1) * 0.35; // i=1 -> 0.25, i=2 -> 0.60
            const endTime = startTime + 0.25;

            // Entrance
            tl.fromTo(
              slide,
              { opacity: 0, pointerEvents: "none" },
              {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.05,
                ease: "power1.inOut",
              },
              startTime,
            );

            tl.fromTo(
              elements,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.1,
                stagger: 0.03,
                ease: "power3.out",
              },
              startTime,
            );

            // Exit (Fade out and move up)
            if (i < slides.length - 1) {
              tl.to(
                slide,
                {
                  opacity: 0,
                  y: -50,
                  pointerEvents: "none",
                  duration: 0.1,
                  ease: "power2.in",
                },
                endTime,
              );
            } else {
              // Keep last slide visible
              tl.to(slide, { opacity: 1 }, 0.95);
            }
          }
        });

        scrollTriggerInst = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=350%", // Shorterned scroll distance
          pin: true,
          scrub: 1, // Smoothing
          animation: tl,
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
            drawH,
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
        src="https://res.cloudinary.com/de4kw1t2i/video/upload/v1767871844/output_optimized_fuvpvo.mp4"
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

      {/* Global Overlay/Mask for Readability */}
      {/* This creates a subtle dark gradient at the bottom to make text pop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-0" />

      {/* Content Container */}
      <div ref={contentRef} className="absolute inset-0 z-10">
        {/* Slide 1 - Initially Visible */}
        <div className="hero-slide absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
          <div className="anim-child mb-4 sm:mb-6 px-4 sm:px-6 py-1.5 sm:py-2 border border-white/30 rounded-full backdrop-blur-md bg-white/10">
            <span className="text-[10px] sm:text-sm font-medium text-white tracking-widest uppercase">
              Brand Elevation
            </span>
          </div>
          <h2 className="anim-child text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-4 sm:mb-6 drop-shadow-2xl">
            REDEFINE YOUR <br />{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-white to-[#C4A484] ">
              DIGITAL IDENTITY
            </span>
          </h2>
          <p className="anim-child text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light max-w-2xl mb-6 sm:mb-10 leading-relaxed shadow-black drop-shadow-md px-2">
            We craft immersive digital experiences that resonate with your
            audience and drive meaningful engagement.
          </p>
          <div className="anim-child flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="group relative overflow-hidden flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/50 text-white rounded-full font-medium text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:border-white">
                <span className="relative z-10">Start The Journey</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              </button>
            </Link>
            <a
              href="tel:09811780937"
              className="group relative overflow-hidden flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-2.5 sm:py-3 bg-[#C4A484] border border-[#C4A484] text-black rounded-full font-medium text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:border-white hover:text-black hover:shadow-[0_0_20px_rgba(196,164,132,0.6)]"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
              <span className="relative z-10">098117 80937</span>
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hero-slide absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center opacity-0 pointer-events-none">
          <div className="anim-child mb-4 sm:mb-6 px-4 sm:px-6 py-1.5 sm:py-2 border border-white/30 rounded-full backdrop-blur-md bg-gray-200/10">
            <span className="text-[10px] sm:text-sm font-medium text-white/90 tracking-widest uppercase">
              Strategic Growth
            </span>
          </div>
          <h2 className="anim-child text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-4 sm:mb-6 drop-shadow-2xl">
            DATA DRIVEN <br />{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-white to-[#C4A484]">
              PERFORMANCE
            </span>
          </h2>
          <p className="anim-child text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light max-w-2xl mb-6 sm:mb-10 leading-relaxed drop-shadow-md px-2">
            Unlock the power of analytics. We turn complex data points into
            actionable strategies for exponential growth.
          </p>
          <div className="anim-child flex gap-4">
            <Link to="/contact">
              <button className="group relative overflow-hidden flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-2.5 sm:py-3 bg-[#FFEAD3] text-[#574964] rounded-full font-medium text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,234,211,0.6)] hover:-translate-y-1">
                <span className="relative z-10">View Case Studies</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="hero-slide absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center opacity-0 pointer-events-none">
          <div className="anim-child mb-4 sm:mb-6 px-4 sm:px-6 py-1.5 sm:py-2 border border-white/30 rounded-full backdrop-blur-md bg-white/10">
            <span className="text-[10px] sm:text-sm font-medium text-white tracking-widest uppercase">
              Future Ready
            </span>
          </div>
          <h2 className="anim-child text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-4 sm:mb-6 drop-shadow-2xl">
            DOMINATE THE <br />{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-white to-[#C4A484]">
              FUTURE
            </span>
          </h2>
          <p className="anim-child text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light max-w-2xl mb-6 sm:mb-10 leading-relaxed drop-shadow-md px-2">
            Stay ahead of the curve with our AI-powered marketing stacks
            designed for tomorrow's market leaders.
          </p>
          <div className="anim-child">
            <Link to="/contact">
              <button className="group relative overflow-hidden flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-2.5 sm:py-3 bg-transparent border border-white/60 text-white rounded-full font-medium text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                <span className="relative z-10">Book Consultation</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {!isVideoReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            <div className="animate-pulse text-white/50 text-xs tracking-[0.3em] font-light">
              INITIALIZING
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50 mix-blend-difference pointer-events-none ">
        <span className="text-white text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ArrowRight className="w-4 h-4 rotate-90 text-white" />
      </div>
    </div>
  );
};

export default ScrollVideoHero;
