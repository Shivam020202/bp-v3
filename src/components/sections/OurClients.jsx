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
      name: "Max Home",
      logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/max_home-logo_ya130a.png",
    },
    {
      name: "SCOD",
      logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/scod-favicon_b2d7cp.png",
    },

    {
      name: "IGEHRC",
      logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/IGEHRC-new-logo_ydf3ww.webp",
    },
    {
      name: "LCH Africa",
      logo: "https://lchafrica.com/img/cropped-FINAL-LOGO-svg.png",
    },
    {
      name: "Aureus",
      logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/aureus-new-logo_lbyme0.webp",
    },
  ];

  const row2 = [
    {
      name: "Astrovazar",
      logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/astrovazar_wbf12h.webp",
    },
    {
      name: "Ecovana",
      logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/ecovana-logo_a1r4ct.webp",
    },
    {
      name: "DST",
      logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/dst_k894jm.webp",
    },
    {
      name: "Ivy",
      logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/ivy-new-logo_tnjcme.webp",
    },
    {
      name: "Cloudnine",
      logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/cloudnine-logo_mcocql.webp",
    },
    {
      name: "AIIMS",
      logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580793/aiims_pleq0o.webp",
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
      className="relative w-full py-12 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gray-500/5 blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 lg:mb-16">
          <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
            Global Ecosystem
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-black mb-6">
            TRUSTED BY <br />
            <span className="text-transparent bg-clip-text bg-[#C4A484] italic font-serif pr-2">
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
            {marqueeRow1.map((client, i) => {
              const isFeaturedLogo = ['Max Home', 'LCH Africa'].includes(client.name);
              return (
                <div
                  key={i}
                  className="relative flex items-center justify-center w-[160px] h-[80px] md:w-[200px] md:h-[100px] 
                              bg-white shadow-lg rounded-xl flex-shrink-0
                              border border-gray-100 select-none"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`w-auto object-contain ${client.name === 'Max Home' ? 'h-16 md:h-20' :
                      isFeaturedLogo ? 'h-14 md:h-18' : 'h-6 md:h-8'
                      }`}
                  />
                </div>
              );
            })}
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
            {marqueeRow2.map((client, i) => {
              const isFeaturedLogo = ['DST'].includes(client.name);
              return (
                <div
                  key={i}
                  className="relative flex items-center justify-center w-[160px] h-[80px] md:w-[200px] md:h-[100px] 
                              bg-white shadow-lg rounded-xl flex-shrink-0
                              border border-gray-100 select-none"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`w-auto object-contain ${isFeaturedLogo ? 'h-14 md:h-18' : 'h-6 md:h-8'
                      }`}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* <div className="container mx-auto px-6 relative z-10">
        <div className="mt-12  flex flex-col items-center justify-center">
          <div className="w-full max-w-[400px]">
            <Lottie animationData={cashFlowAnimation} loop={true} />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default OurClients;
