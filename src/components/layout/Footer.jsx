import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Linkedin,
  Dribbble,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Star,
  ArrowUp,
  Clock,
  Globe,
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const spotlightOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 0.8]);
  const spotlightY = useTransform(scrollYProgress, [0.4, 1], [200, 0]);
  const spotlightScale = useTransform(scrollYProgress, [0.4, 1], [0.8, 1.2]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "SEO Optimization", link: "/services/seo-optimization" },
    { name: "Paid Advertising", link: "/services/paid-advertising" },
    { name: "Social Media Marketing", link: "/services/social-media" },
    { name: "Content Marketing", link: "/services/content-marketing" },
    { name: "Email Marketing", link: "/services/email-marketing" },
    { name: "YouTube Marketing", link: "/services/youtube-marketing" },
    { name: "AI & Automation", link: "/services/ai-automation" },
    { name: "Web Development", link: "/services/web-development" },
  ];

  const indianCities = [
    "Gurgaon",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Noida",
    "Chandigarh",
    "Lucknow",
    "Indore",
    "Kochi",
    "Surat",
    "Nagpur",
    "Patna",
    "Bhopal",
    "Visakhapatnam",
  ];

  const globalCities = [
    "New York",
    "London",
    "Dubai",
    "Singapore",
    "Toronto",
    "Sydney",
    "Berlin",
    "Paris",
    "Tokyo",
    "Hong Kong",
    "Los Angeles",
    "Chicago",
    "Melbourne",
    "Amsterdam",
    "Barcelona",
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-[#050505] text-stone-400 relative overflow-hidden border-t border-white/5 font-sans"
    >
      {/* Dynamic Rising Spotlight */}
      <motion.div
        style={{
          opacity: spotlightOpacity,
          y: spotlightY,
          scale: spotlightScale,
          x: "-50%",
        }}
        className="absolute bottom-[-10%] left-1/2 w-[120%] h-[600px] pointer-events-none z-0 mix-blend-screen"
      >
        <div className="w-full h-full bg-gradient-to-t from-purple-800/30 via-blue-800/20 to-transparent blur-[120px]" />
        {/* Animated Core */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-t from-indigo-600/20 to-transparent blur-[80px]"
        />
      </motion.div>

      {/* Massive CTA Section */}
      <div className="container relative z-10 mx-auto px-6 py-6 border-b border-white/5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]"
            >
              LET&apos;S{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-amber-200">
                TALK.
              </span>
            </motion.h2>
            <p className="mt-6 text-lg text-stone-500 max-w-2xl mx-auto lg:mx-0 font-medium">
              Ready to scale? We have the team, the tools, and the talent.
            </p>
          </div>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full bg-orange-50 text-black hover:bg-white transition-colors duration-300 shrink-0"
            >
              <ArrowUpRight className="w-10 h-10 md:w-14 md:h-14 group-hover:rotate-45 transition-transform duration-300 stroke-[1.5]" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="container relative z-10 mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Reviews */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div>
              <img
                src="/bp-logo.png"
                alt="Branding Pioneers"
                className="h-12 w-auto mb-6 object-contain"
              />
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                Redefining digital excellence with data-driven strategies and
                creative innovation.
              </p>
            </div>

            {/* Ratings Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-xs">
              {/* Google */}
              <div className="col-span-2 bg-stone-900/50 p-3 rounded-lg border border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Google</span>
                  <span className="text-[10px] text-stone-500">Reviews</span>
                </div>
                <div className="text-right">
                  <div className="flex text-yellow-500/90 mb-0.5">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <span className="text-white font-bold text-xs">5.0/5</span>
                </div>
              </div>
              {/* Justdial */}
              <div className="bg-stone-900/50 p-3 rounded-lg border border-white/5">
                <span className="text-orange-200 font-bold text-xs block mb-1">
                  Justdial
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-sm">4.1</span>
                  <span className="text-[10px] text-stone-500">
                    (150 votes)
                  </span>
                </div>
              </div>
              {/* AmbitionBox */}
              <div className="bg-stone-900/50 p-3 rounded-lg border border-white/5">
                <span className="text-emerald-200 font-bold text-xs block mb-1">
                  AmbitionBox
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-sm">4.4</span>
                  <span className="text-[10px] text-stone-500">(76 votes)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {[Instagram, Twitter, Linkedin, Dribbble].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-stone-900 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-stone-400"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services & Address */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-orange-200 pl-3">
                Expertise
              </h4>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.name}>
                    <Link
                      to={s.link}
                      className="text-sm hover:text-orange-100 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-stone-700 group-hover:bg-orange-200 transition-colors" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-orange-200 pl-3">
                Contact
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-200 mt-1 shrink-0" />
                  <p className="leading-relaxed">
                    <span className="text-white block font-medium mb-1">
                      Headquarters
                    </span>
                    Ground Floor, SupremeWork Co-working Space, Plot No. 84, Institutional Area, Sector 32, Gurugram, Haryana 122001
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-200 shrink-0" />
                  <a
                    href="tel:+919811780937"
                    className="hover:text-white transition-colors"
                  >
                    +91 9811780937
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-200 shrink-0" />
                  <a
                    href="mailto:official@brandingpioneers.com"
                    className="hover:text-white transition-colors"
                  >
                    official@brandingpioneers.com
                  </a>
                </div>
                {/* <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                  <Clock className="w-4 h-4 text-stone-600 mt-0.5 shrink-0" />
                  <div className="text-xs text-stone-500">
                    <p>
                      <span className="text-stone-400">Mon-Thu:</span> 10am -
                      7pm
                    </p>
                    <p>
                      <span className="text-stone-400">Fri-Sat:</span> 10am -
                      7pm
                    </p>
                    <p>
                      <span className="text-stone-400">Sun:</span> Closed
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Column 3: The Locations Box */}
          <div className="lg:col-span-6 bg-[#0a0a0a] rounded-xl border border-white/5 p-6 md:p-8 flex flex-col h-full">
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>

            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest flex items-center justify-between">
              <span>Presence</span>
              <Globe className="w-4 h-4 text-stone-600" />
            </h4>

            <div className="flex-1 overflow-hidden flex flex-col gap-6">
              {/* India Section */}
              <div>
                <span className="text-xs font-bold text-orange-200/80 uppercase tracking-wider mb-3 block">
                  Top Cities in India
                </span>
                <div className="h-32 overflow-y-auto no-scrollbar pr-2">
                  <div className="flex flex-wrap gap-x-1 gap-y-2">
                    {indianCities.map((city, i) =>
                      city === "Gurgaon" ? (
                        <Link
                          key={i}
                          to="/locations/gurugram"
                          className="text-[11px] text-stone-500 hover:text-white transition-colors duration-200 px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 whitespace-nowrap"
                        >
                          Best digital marketing agency in {city}
                        </Link>
                      ) : (
                        <a
                          key={i}
                          href="#"
                          className="text-[11px] text-stone-500 hover:text-white transition-colors duration-200 px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 whitespace-nowrap"
                        >
                          Best digital marketing agency in {city}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-white/5 w-full" />

              {/* Global Section */}
              <div>
                <span className="text-xs font-bold text-blue-200/80 uppercase tracking-wider mb-3 block">
                  Global Network
                </span>
                <div className="h-28 overflow-y-auto no-scrollbar pr-2">
                  <div className="flex flex-wrap gap-x-1 gap-y-2">
                    {globalCities.map((city, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-[11px] text-stone-500 hover:text-white transition-colors duration-200 px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 whitespace-nowrap"
                      >
                        Best digital marketing agency in {city}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-stone-600 font-medium">
          <div className="flex items-center gap-6">
            <span>© 2026 Branding Pioneers</span>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Sitemap
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            Top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
