import { motion } from "framer-motion";
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
  },
  {
    id: "02",
    title: "Paid Advertising",
    description:
      "Maximize ROI with precision-targeted PPC and social ad campaigns.",
    icon: <Megaphone />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817877/Digital_Promotion_q5zfml.svg",
  },
  {
    id: "03",
    title: "Social Media",
    description: "Build community and engagement across all major platforms.",
    icon: <Share2 />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Social_Media_Activity_qmsix9.svg",
  },
  {
    id: "04",
    title: "Content Marketing",
    description: "Compelling storytelling that builds authority and trust.",
    icon: <PenTool />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817877/Creative_Content_Writer_nrybwy.svg",
  },
  {
    id: "05",
    title: "Email Marketing",
    description:
      "Personalized automation flows that nurture and convert leads.",
    icon: <Mail />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Chat_Via_Email_nwa7vz.svg",
  },
  {
    id: "06",
    title: "AI & Automation",
    description: "Automate repetitive tasks with AI-powered tools.",
    icon: <BarChart />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/AI_and_Data_Integration_o0cqqm.svg",
  },
  {
    id: "07",
    title: "Youtube Marketing",
    description: "Increase visibility and engagement with video content.",
    icon: <TrendingUp />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Video_Learning_nojkh4.svg",
  },
  {
    id: "08",
    title: "Web Development",
    description: "Develop responsive and user-friendly websites.",
    icon: <Zap />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817880/App_Development_jawnsm.svg",
  },
];

const ServiceCard = ({ service, idx }) => {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group relative w-full aspect-square overflow-hidden block"
    >
      {/* Background Image (Always visible, zooms on hover) */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Persistent Title (Visible by default, Glass effect title) */}
      {/* Hides on hover when the full content overlay appears */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 px-4">
        <span className="inline-block px-5 py-2.5 bg-black/30 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white shadow-lg text-center truncate w-auto max-w-full hover:bg-black/40 transition-colors">
          {service.title}
        </span>
      </div>

      {/* Hover Overlay with Glassmorphism */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 border border-white/10" />

      {/* Hover Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center z-30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C4A484] shadow-[0_0_15px_rgba(196,164,132,0.3)]">
            {service.icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-white font-display drop-shadow-lg">
            {service.title}
          </h3>
          <p className="text-sm text-gray-200 max-w-[250px] mx-auto leading-relaxed drop-shadow-md">
            {service.description}
          </p>
        </div>

        <div className="absolute bottom-6 right-6">
          <ArrowUpRight className="text-white w-5 h-5 drop-shadow-md" />
        </div>
      </div>

      {/* Border overlay */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none" />
    </motion.a>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-white text-black py-8 md:py-12 font-sans border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12">
          <div>
            <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
              DIGITAL <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-[#C4A484] italic font-serif pr-2">
                MARKETING.
              </span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
            View All Services
          </button>
        </div>

        {/* Grid - 2 columns on mobile, 4 on desktop */}
        <div className="rounded-xl md:rounded-3xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] ">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
