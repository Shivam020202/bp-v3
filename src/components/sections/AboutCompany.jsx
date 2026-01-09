import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutCompany = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
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
      className="relative w-full py-16 overflow-hidden bg-white text-black"
    >
      {/* Background Kinetic Typography */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none select-none">
        <div
          ref={textRef}
          className="whitespace-nowrap text-[15vw] leading-none font-black font-serif tracking-tighter text-black/5"
        >
          STRATEGY VISION CREATIVE GROWTH FUTURE
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: The Visual Anchor */}
          <div className="w-full lg:w-1/2 relative">
            {/* The "Frame" */}
            <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto">
              {/* Back Element (Outline) */}
              <div className="absolute inset-0 border border-black/10 rounded-full scale-105" />

              {/* Main Image Container */}
              <div
                ref={imageRef}
                className="relative w-full h-full rounded-t-full rounded-b-[200px] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200"
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                  alt="Visionary"
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 ease-in-out scale-110 grayscale hover:grayscale-0"
                />

                {/* Overlay Text on Image */}
                <div className="absolute bottom-10 left-0 w-full text-center">
                  <span className="inline-block px-4 py-1 bg-black/5 backdrop-blur-md rounded-full text-xs font-mono uppercase tracking-widest text-black/80 border border-black/10">
                    Est. 2024
                  </span>
                </div>
              </div>

              {/* Floating "Badge" Element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 animate-[spin_10s_linear_infinite]">
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
              </div>
            </div>
          </div>

          {/* Right: The Content Block */}
          <div
            ref={contentRef}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-blue-600"></span>
              <span className="text-blue-600 font-mono text-sm tracking-widest uppercase">
                The Philosophy
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8 tracking-tighter text-black">
              WE MOLD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 italic font-serif pr-2">
                CHAOS
              </span>
              INTO <br />
              CLARITY.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg border-l border-black/10 pl-6">
              Redefining the digital landscape through bold strategy and
              meticulous design. We don't just build brands; we cultivate
              digital ecosystems that thrive in the noise.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-3xl font-bold text-black mb-1">500+</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Projects Shipped
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-black mb-1">98%</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Client Retention
                </p>
              </div>
            </div>

            <div>
              <button className="group relative flex items-center gap-3 px-8 py-3 bg-black text-white rounded-none border border-black hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="uppercase tracking-widest text-sm font-bold">
                  Explore Our DNA
                </span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
