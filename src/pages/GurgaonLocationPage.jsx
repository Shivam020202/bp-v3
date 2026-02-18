import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Search,
  Megaphone,
  Share2,
  PenTool,
  Mail,
  BarChart,
  TrendingUp,
  Zap,
  MapPin,
  Phone,
  Clock,
  Building2,
  Users,
  Award,
  Target,
  Rocket,
  ChevronDown,
  Star,
  CheckCircle2,
  Trophy,
  Globe,
  Monitor,
  Smartphone,
  Send,
} from "lucide-react";

// ─── DATA ───────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "01",
    title: "SEO Optimization",
    description:
      "Rank higher on Google with data-driven SEO strategies tailored for businesses in Gurugram and NCR.",
    icon: <Search />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817880/SEO_qymlqf.svg",
    link: "/services/seo-optimization",
  },
  {
    id: "02",
    title: "Paid Advertising",
    description:
      "Maximize ROI with precision-targeted PPC campaigns for the Gurugram market.",
    icon: <Megaphone />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817877/Digital_Promotion_q5zfml.svg",
    link: "/services/paid-advertising",
  },
  {
    id: "03",
    title: "Social Media",
    description:
      "Build a powerful social presence that resonates with Gurugram's digital-savvy audience.",
    icon: <Share2 />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Social_Media_Activity_qmsix9.svg",
    link: "/services/social-media",
  },
  {
    id: "04",
    title: "Content Marketing",
    description:
      "Compelling storytelling that positions your Gurugram business as an industry authority.",
    icon: <PenTool />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817877/Creative_Content_Writer_nrybwy.svg",
    link: "/services/content-marketing",
  },
  {
    id: "05",
    title: "Email Marketing",
    description:
      "Personalized email automation flows that nurture and convert local leads.",
    icon: <Mail />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Chat_Via_Email_nwa7vz.svg",
    link: "/services/email-marketing",
  },
  {
    id: "06",
    title: "AI & Automation",
    description:
      "Leverage cutting-edge AI tools to automate marketing for Gurugram businesses.",
    icon: <BarChart />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/AI_and_Data_Integration_o0cqqm.svg",
    link: "/services/ai-automation",
  },
  {
    id: "07",
    title: "Youtube Marketing",
    description:
      "Increase visibility and engagement with video content for NCR audiences.",
    icon: <TrendingUp />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Video_Learning_nojkh4.svg",
    link: "/services/youtube-marketing",
  },
  {
    id: "08",
    title: "Web Development",
    description:
      "Develop responsive, high-performance websites for Gurugram enterprises.",
    icon: <Zap />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817880/App_Development_jawnsm.svg",
    link: "/services/web-development",
  },
];

const stats = [
  {
    number: "200+",
    label: "Gurugram Clients",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    number: "₹50Cr+",
    label: "Ad Spend Managed",
    icon: <BarChart className="w-5 h-5" />,
  },
  {
    number: "1M+",
    label: "Leads Generated",
    icon: <Users className="w-5 h-5" />,
  },
  {
    number: "15+",
    label: "Startups Scaled to Unicorns",
    icon: <Rocket className="w-5 h-5" />,
  },
];

const whyChooseData = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Local Market Mastery",
    description:
      "We don't just know Gurugram; we live it. From Cyber Hub trends to Sector 29 buzz, our strategies are locally relevant.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Award-Winning Strategy",
    description:
      "Recognized by top industry bodies for delivering campaigns that don't just look good, but perform exceptionally.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Standards, Local Touch",
    description:
      "Bringing international design and tech standards to Gurugram businesses, ensuring you stand out globally.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Revenue-Focused",
    description:
      "We move the needle where it matters. Our campaigns are optimized for conversions, sales, and tangible growth.",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Full-Stack Tech",
    description:
      "In-house developers and AI specialists ensuring your marketing is backed by robust, cutting-edge technology.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-First Approach",
    description:
      "With 80% of local traffic on mobile, we ensure your brand looks and works perfectly on every device.",
  },
];

const faqs = [
  {
    question: "Where is Branding Pioneers' Gurugram office located?",
    answer:
      "Our Gurugram office is located in Sector 32, at the SupremeWork Co-working Space. We're easily accessible via major roads and the metro.",
  },
  {
    question: "What digital marketing services do you offer in Gurugram?",
    answer:
      "We offer a full suite of digital marketing services including SEO, Paid Advertising (Google & Meta Ads), Social Media Marketing, Content Marketing, Email Marketing, YouTube Marketing, Web Development, and AI-powered automation solutions.",
  },
  {
    question:
      "How is Branding Pioneers different from other agencies in Gurugram?",
    answer:
      "We combine data-driven strategies with creative excellence. With 8+ years of experience, 200+ Gurugram clients, and a 98% retention rate, we deliver measurable results. Our local market expertise and dedicated account teams ensure personalized attention.",
  },
  {
    question: "Do you work with startups as well as enterprises in Gurugram?",
    answer:
      "Absolutely! We partner with ambitious brands of all sizes - from early-stage startups in coworking spaces to established enterprises in Cyber Hub. Our strategies are tailored to your stage and budget.",
  },
  {
    question: "Can I visit your Gurugram office for a consultation?",
    answer:
      "Yes, we welcome in-person consultations at our Gurugram office. You can book a free strategy session through our website or call us directly. We also offer virtual consultations for your convenience.",
  },
  {
    question: "What industries do you serve in Gurugram?",
    answer:
      "We serve a wide range of industries including Real Estate, Healthcare, Fintech, E-commerce, Education, Hospitality, FMCG, and Technology. Our diverse portfolio ensures we understand the unique challenges of each sector.",
  },
];

const clientLogosRow1 = [
  {
    name: "Max Home",
    logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580795/max_home-logo_ya130a.png",
    featured: true,
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
    featured: true,
  },
  {
    name: "Aureus",
    logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1769580794/aureus-new-logo_lbyme0.webp",
  },
];

const clientLogosRow2 = [
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
    featured: true,
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

const certifications = [
  {
    name: "Google Partner",
    logo: "https://www.vectorlogo.zone/logos/google/google-ar21.svg",
  },
  {
    name: "Meta Business Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/800px-Meta_Platforms_Inc._logo.svg.png",
  },
  {
    name: "HubSpot Certified",
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg",
  },
  {
    name: "Shopify Partner",
    logo: "https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg",
  },
];

// ─── COMPONENT ──────────────────────────────────────────────────────────────────

const GurgaonLocationPage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const marqueeRow1 = [
    ...clientLogosRow1,
    ...clientLogosRow1,
    ...clientLogosRow1,
    ...clientLogosRow1,
  ];
  const marqueeRow2 = [
    ...clientLogosRow2,
    ...clientLogosRow2,
    ...clientLogosRow2,
    ...clientLogosRow2,
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* ════════════════════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center z-10 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=2000"
            alt="Gurugram Cityscape"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        {/* Animated Grid Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 border border-[#C4A484]/50 rounded-full bg-black/40 backdrop-blur-md font-mono text-xs uppercase tracking-[0.2em] mb-6 text-[#C4A484]"
          >
            <MapPin className="w-3.5 h-3.5" />
            Gurugram, Haryana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.9]"
          >
            DIGITAL{" "}
            <span className="text-stroke-white text-transparent">
              DOMINANCE
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#f0d5ba] to-[#C4A484] italic font-serif">
              IN GURUGRAM.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light mb-10"
          >
            We are the premier digital growth partner for Gurugram's most
            ambitious brands. From Cyber City to Golf Course Road, we turn local
            businesses into market leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group relative flex items-center gap-3 px-8 py-4 text-white rounded-full text-sm font-semibold overflow-hidden shadow-[0_0_30px_rgba(196,164,132,0.3)] hover:shadow-[0_0_40px_rgba(196,164,132,0.5)] transition-shadow"
              style={{ backgroundColor: "#C4A484" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 uppercase tracking-wider font-bold text-xs">
                Bootstrap Your Growth
              </span>
              <ArrowUpRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="tel:09811780937"
              className="flex items-center gap-3 px-8 py-4 border border-white/30 rounded-full text-sm font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call 098117 80937</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-widest text-white/50">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          STATS SECTION (ENHANCED)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-12 -mt-20 z-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100/0 md:divide-gray-100">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="mb-4 p-3 rounded-full bg-[#FAF6F2] text-[#C4A484] group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-black mb-2 tracking-tight">
                    {stat.number}
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Strip */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                Certified Excellence
              </span>
              <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center hover:grayscale-0 transition-all duration-500">
                {certifications.map((cert, idx) => (
                  <img
                    key={idx}
                    src={cert.logo}
                    alt={cert.name}
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          ABOUT GURUGRAM OFFICE
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="w-10 h-[1px] bg-[#C4A484]"></span>
                <span className="text-[#C4A484] font-mono text-xs uppercase tracking-[0.2em]">
                  Our Gurugram HQ
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-8">
                LOCALLY ROOTED, <br />
                <span className="italic font-serif text-gray-400">
                  GLOBALLY RESPECTED.
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Located in the heart of Sector 32, our Gurugram office is more
                than just a workspace—it's an innovation lab. We understand the
                unique pulse of the NCR market, from the corporate corridors of
                Cyber City to the bustling retail hubs of Ambience Mall.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Strategic proximity to major corporate hubs",
                  "In-house production studio for high-quality content",
                  "Dedicated spaces for client workshops & strategy sessions",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A484] shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-bold uppercase tracking-wider hover:text-[#C4A484] hover:border-[#C4A484] transition-colors"
              >
                Plan a Visit <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="space-y-4"
                  initial={{ y: 0 }}
                  whileInView={{ y: -20 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="rounded-2xl overflow-hidden h-64 w-full">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      alt="Office 1"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-40 w-full">
                    <img
                      src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      alt="Office 2"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="space-y-4 mt-8"
                  initial={{ y: 0 }}
                  whileInView={{ y: 20 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="rounded-2xl overflow-hidden h-40 w-full">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      alt="Office 3"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-64 w-full">
                    <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      alt="Office 4"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-2xl z-20"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-center">
                  <span className="block text-3xl font-black text-[#C4A484]">
                    4.9
                  </span>
                  <div className="flex gap-0.5 my-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-3 h-3 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-gray-400">
                    Google Rating
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SERVICES SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-black text-white py-20 md:py-24 font-sans rounded-t-[3rem] relative overflow-hidden">
        {/* Background Noise/Gradient */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C4A484_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C4A484] font-mono text-[12px] uppercase tracking-[0.2em] mb-4 block">
              Comprehensive Solutions
            </span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              EVERYTHING YOU NEED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#f0d5ba] italic font-serif">
                TO SCALE.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <Link to={service.link} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative h-[320px] rounded-2xl overflow-hidden shadow-lg border border-white/10"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-white">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 p-8"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-[#C4A484] border border-white/20">
                    {service.icon}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#C4A484] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C4A484] opacity-80 group-hover:opacity-100 transform translate-y-0 transition-all">
                      Explore Service{" "}
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          WHY CHOOSE US (BENTO GRID STYLE)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#FDF8F3]">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-black">
              WHY GURUGRAM BRANDS <br />
              <span className="text-[#C4A484] italic font-serif">
                CHOOSE US.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {whyChooseData.map((item, idx) => (
              <motion.div
                key={idx}
                className={`group relative bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:border-[#C4A484]/20 transition-all duration-500 overflow-hidden ${idx === 0 || idx === 3 ? "md:col-span-2" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="z-10 relative h-full flex flex-col justify-between">
                  <div className="w-14 h-14 bg-[#F9F5F1] rounded-2xl flex items-center justify-center text-[#C4A484] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#C4A484] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C4A484]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          CLIENTS MARQUEE
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 mb-10 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
            Trusted By 200+ Companies
          </span>
        </div>
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-12 min-w-full px-6"
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...marqueeRow1, ...marqueeRow2].map((client, i) => (
              <img
                key={i}
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
            ))}
            {[...marqueeRow1, ...marqueeRow2].map((client, i) => (
              <img
                key={`dup-${i}`}
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          CONTACT FORM & MAP SECTION (REDESIGNED)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Form */}
            <div>
              <span className="text-[#C4A484] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
                Let's Talk Business
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                READY TO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#f0d5ba]">
                  GROW?
                </span>
              </h2>
              <p className="text-gray-400 mb-10">
                Fill out the form below and our Gurugram team will get back to
                you within 2 hours.
              </p>

              <form
                acceptCharset="UTF-8"
                action="https://app.formester.com/forms/bhMEoU7zL/submissions"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#C4A484] transition-colors"
                  />
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="Last Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#C4A484] transition-colors"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#C4A484] transition-colors"
                />
                <input
                  type="tel"
                  name="Phone Number"
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#C4A484] transition-colors"
                />
                <textarea
                  rows="4"
                  name="Message"
                  placeholder="Tell us about your project goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#C4A484] transition-colors resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#C4A484] text-black font-bold py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Right - Contact Info and Map */}
            <div className="space-y-10">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <Phone className="w-6 h-6 text-[#C4A484] mb-4" />
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">098117 80937</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <Mail className="w-6 h-6 text-[#C4A484] mb-4" />
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm">
                    official@brandingpioneers.com
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden border border-white/10 h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.015123019842!2d77.0423176!3d28.4646146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x6006f6984f18390d!2sSector%2032%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709540000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) contrast(1.2)" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Map"
                />
              </div>

              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#C4A484] mt-1 shrink-0" />
                <span>
                  Ground Floor, SupremeWork Co-working Space, Plot No. 84,
                  Institutional Area, Sector 32, Gurugram, Haryana 122001
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          FAQ SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">FAQ</h2>
            <p className="text-gray-500">
              Common questions about our Gurugram operations.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GurgaonLocationPage;
