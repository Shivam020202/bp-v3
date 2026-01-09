import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import cashFlowAnimation from "../../assets/animations/CashFlow.json";

gsap.registerPlugin(ScrollTrigger);

const OurClients = () => {
  const sectionRef = useRef(null);

  const row1 = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    },
    {
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    },
    {
      name: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    },
    {
      name: "Uber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    },
    {
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    },
  ];

  const row2 = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    },
  ];

  // Quadruple the items to ensure seamless loop on wide screens
  const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Grid Fade Out
      gsap.to(".bg-grid-pattern", {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "center center",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-16 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Decorative Grid */}
      <div
        className="bg-grid-pattern absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      {/* Lighting Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 lg:mb-16">
          <span className="text-blue-600 font-mono text-xs uppercase tracking-[0.3em] mb-4 animate-pulse">
            Global Ecosystem
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-600 tracking-tighter mb-6 leading-[0.9]">
            TRUSTED BY <br />
            <span className="text-black drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)]">
              THE GIANTS
            </span>
          </h2>
          <p className="max-w-xl text-gray-600 text-base md:text-lg font-light">
            We partner with the world's most ambitious brands to define what's
            possible in the digital age.
          </p>
        </div>
      </div>

      {/* Marquee Section - Full Width */}
      <div className="relative flex flex-col gap-6 md:gap-8 rotate-[-2deg] scale-105 origin-center py-4 w-full overflow-hidden">
        {/* Row 1 */}
        <div className="flex w-full">
          <motion.div
            className="flex items-center gap-4 md:gap-6 min-w-full"
            animate={{ x: "-25%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {marqueeRow1.map((client, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center w-[160px] h-[80px] md:w-[200px] md:h-[100px] 
                            bg-white shadow-lg rounded-xl flex-shrink-0
                            border border-gray-100 select-none"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Reverse Direction) */}
        <div className="flex w-full">
          <motion.div
            className="flex items-center gap-4 md:gap-6 min-w-full"
            initial={{ x: "-25%" }}
            animate={{ x: "0%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {marqueeRow2.map((client, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center w-[160px] h-[80px] md:w-[200px] md:h-[100px] 
                            bg-white shadow-lg rounded-xl flex-shrink-0
                            border border-gray-100 select-none"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Bottom Transition Content */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <div className="w-full max-w-[400px]">
            <Lottie animationData={cashFlowAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
