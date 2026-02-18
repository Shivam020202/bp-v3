import { motion } from "framer-motion";
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
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "SEO Optimization",
    description:
      "Rank higher and drive targeted traffic with data-driven keyword strategies.",
    icon: <Search />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817880/SEO_qymlqf.svg",
    link: "/services/seo-optimization",
  },
  {
    id: "02",
    title: "Paid Advertising",
    description:
      "Maximize ROI with precision-targeted PPC and social ad campaigns.",
    icon: <Megaphone />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817877/Digital_Promotion_q5zfml.svg",
    link: "/services/paid-advertising",
  },
  {
    id: "03",
    title: "Social Media",
    description: "Build community and engagement across all major platforms.",
    icon: <Share2 />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Social_Media_Activity_qmsix9.svg",
    link: "/services/social-media",
  },
  {
    id: "04",
    title: "Content Marketing",
    description: "Compelling storytelling that builds authority and trust.",
    icon: <PenTool />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817877/Creative_Content_Writer_nrybwy.svg",
    link: "/services/content-marketing",
  },
  {
    id: "05",
    title: "Email Marketing",
    description:
      "Personalized automation flows that nurture and convert leads.",
    icon: <Mail />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Chat_Via_Email_nwa7vz.svg",
    link: "/services/email-marketing",
  },
  {
    id: "06",
    title: "AI & Automation",
    description: "Automate repetitive tasks with AI-powered tools.",
    icon: <BarChart />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/AI_and_Data_Integration_o0cqqm.svg",
    link: "/services/ai-automation",
  },
  {
    id: "07",
    title: "Youtube Marketing",
    description: "Increase visibility and engagement with video content.",
    icon: <TrendingUp />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Video_Learning_nojkh4.svg",
    link: "/services/youtube-marketing",
  },
  {
    id: "08",
    title: "Web Development",
    description: "Develop responsive and user-friendly websites.",
    icon: <Zap />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817880/App_Development_jawnsm.svg",
    link: "/services/web-development",
  },
];

const ServiceCard = ({ service, idx }) => {
  return (
    <Link
      to={service.link}
      className="block"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.05, duration: 0.4, ease: "backOut" }}
        className="flex flex-col"
      >
        {/* Card Image Container */}
        <div className="group relative w-full aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden block shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          {/* Liquid Crystal Border & Depth Effect */}
          <div className="absolute inset-0 z-40 rounded-[1.5rem] md:rounded-[2rem] border border-white/40 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] ring-1 ring-black/5" />

          {/* Background Image */}
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Persistent Title (Glass Pill) - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex absolute bottom-6 left-0 right-0 justify-center z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 px-4 pointer-events-none">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-xs font-bold text-black/70 shadow-lg shadow-black/10 text-center tracking-wider uppercase">
              {service.title}
            </span>
          </div>

          {/* Hover Overlay (Glassmorphism) */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20" />

          {/* Hover Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center z-30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[#C4A484] shadow-[0_0_15px_rgba(196,164,132,0.4)]">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight text-white font-display drop-shadow-lg">
                {service.title}
              </h3>
              <p className="text-xs text-gray-200 max-w-[200px] mx-auto leading-relaxed drop-shadow-md font-medium">
                {service.description}
              </p>
            </div>

            <div className="absolute bottom-5 right-5">
              <ArrowUpRight className="text-white w-4 h-4 drop-shadow-md" />
            </div>
          </div>
        </div>

        {/* Mobile Title - Below Card */}
        <div className="md:hidden mt-2 flex items-center justify-center gap-2 px-1">
          <span className="text-[#C4A484]">{service.icon}</span>
          <span className="text-[11px] font-bold text-black/80 tracking-wider uppercase text-center leading-tight">
            {service.title}
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-white text-black py-8 md:pb-10 font-sans border-gray-100 ">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header - Compact */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <span className="text-gray-500 font-mono text-[12px] uppercase tracking-[0.2em] mb-2 block">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-none">
              DIGITAL <br className="hidden sm:block" />
              <span className="text-[#C4A484] italic font-serif pr-2">
                MARKETING
              </span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#C4A484] hover:border-[#C4A484] transition-colors">
            View All Services
          </button>
        </div>

        {/* Compact Grid with Liquid Crystal Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
