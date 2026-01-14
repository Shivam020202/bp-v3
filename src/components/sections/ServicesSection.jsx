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
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768398678/Gemini_Generated_Image_l175udl175udl175_lx6wby.png",
  },
  {
    id: "02",
    title: "Paid Advertising",
    description:
      "Maximize ROI with precision-targeted PPC and social ad campaigns.",
    icon: <Megaphone />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768398673/Gemini_Generated_Image_zbladlzbladlzbla_x0xy90.png",
  },
  {
    id: "03",
    title: "Social Media",
    description: "Build community and engagement across all major platforms.",
    icon: <Share2 />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768398676/Gemini_Generated_Image_8usoog8usoog8uso_pgbdrt.png",
  },
  {
    id: "04",
    title: "Content Marketing",
    description: "Compelling storytelling that builds authority and trust.",
    icon: <PenTool />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768398673/content_eb3vp7.png",
  },
  {
    id: "05",
    title: "Email Marketing",
    description:
      "Personalized automation flows that nurture and convert leads.",
    icon: <Mail />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768398670/email_saa1nd.png",
  },
  {
    id: "06",
    title: "AI & Automation",
    description: "Automate repetitive tasks with AI-powered tools.",
    icon: <BarChart />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768398675/ai_1_pxdzpo.png",
  },
  {
    id: "07",
    title: "Youtube Marketing",
    description: "Increase visibility and engagement with video content.",
    icon: <TrendingUp />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768398670/Gemini_Generated_Image_b0q74db0q74db0q7_voqx5q.png",
  },
  {
    id: "08",
    title: "Web Development",
    description: "Develop responsive and user-friendly websites.",
    icon: <Zap />,
    image:
      "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768398678/Gemini_Generated_Image_s8kj55s8kj55s8kj_y7zgqe.png",
  },
];

const ServiceCard = ({ service, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group relative w-full aspect-square overflow-hidden bg-black"
    >
      {/* Background Image (Always visible, zooms on hover) */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 text-white">
        <div className="absolute top-8 left-8 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white opacity-80 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
          {service.icon}
        </div>

        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-2 leading-tight">
            {service.title}
          </h3>
          <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[90%] leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 delay-100">
          <ArrowUpRight className="text-white w-5 h-5" />
        </div>
      </div>

      {/* Border overlay for cleaner grid lines on dark images */}
      <div className="absolute inset-0 border border-white/10 pointer-events-none" />
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-white text-black py-12 font-sans border-t border-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-blue-600 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
              Our Capabilities
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 italic font-serif pr-2">
                MARKETING.
              </span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
            View All Services
          </button>
        </div>

        {/* 4-Column Grid */}
        <div className="rounded-3xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-200">
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
