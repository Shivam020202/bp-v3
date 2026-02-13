import { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutCompany = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      // 1. Kinetic Text Animation
      gsap.to(textRef.current, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 2. Parallax Image
      gsap.fromTo(
        imageRef.current,
        { y: -50 },
        {
          y: 50,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      // 3. Content Reveal
      gsap.fromTo(
        contentRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-10 pb-6 overflow-hidden bg-white text-black"
    >
      {/* Background Kinetic Typography */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none select-none">
        <div
          ref={textRef}
          className="whitespace-nowrap text-[15vw] text-[#C4A484]/15 leading-none font-black font-serif tracking-relaxed text-black/5"
        >
          STRATEGY VISION CREATIVE GROWTH FUTURE
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          {/* Left: The Visual Anchor */}
          <div className="w-full lg:w-1/2 relative">
            {/* The "Frame" */}
            <div className="relative aspect-[3/4] sm:aspect-square w-full max-w-xs sm:max-w-md mx-auto">
              {/* Back Element (Outline) */}
              <div className="absolute inset-0 border border-black/10 rounded-full scale-105" />

              {/* Main Image Container */}
              <div
                ref={imageRef}
                className="relative w-full h-full rounded-t-full rounded-b-[200px] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50"
              >
                <img
                  src="/award.png"
                  alt="Visionary"
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 ease-in-out scale-110"
                />

                {/* Overlay Text on Image */}
                <div className="absolute bottom-10 left-0 w-full text-center">
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-mono uppercase tracking-widest text-white/80 border border-black/10">
                    Est. 2016
                  </span>
                </div>
              </div>

              {/* Floating "Badge" Element */}
              {/* <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-[spin_10s_linear_infinite]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[10px] font-bold uppercase tracking-[4px] fill-black">
                    <textPath href="#circlePath">
                      • Digital • Excellence • Innovation •
                    </textPath>
                  </text>
                </svg>
              </div> */}
            </div>
          </div>

          {/* Right: The Content Block */}
          <div
            ref={contentRef}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-4 md:mb-6">
              <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                The Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
                WE MOLD <br />
                <span className="text-transparent bg-clip-text bg-[#C4A484] italic font-serif pr-2 ">
                  CHAOS.
                </span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-10 max-w-lg border-l border-black/10 pl-4 md:pl-6">
              Redefining the digital landscape through bold strategy and
              meticulous design. We don't just build brands; we cultivate
              digital ecosystems that thrive in the noise.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">
                  500+
                </h3>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
                  Projects Shipped
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">
                  98%
                </h3>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
                  Client Retention
                </p>
              </div>
            </div>

            <div>
              <Link to="/contact">
                <button className="group relative flex items-center gap-3 px-8 py-3 bg-[#C4A484] text-white  border border-[#C4A484] hover:bg-white hover:text-black rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="uppercase tracking-widest text-sm font-bold">
                    Know more
                  </span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
