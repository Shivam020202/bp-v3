import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Mock data based on theme
const projects = [
  {
    id: 1,
    title: "AIFilmz",
    category: "AI Video Generation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    stats: "200% ROI",
    link: "https://www.aifilmz.com/",
  },
  {
    id: 2,
    title: "AITelz",
    category: "Call Assisting AI Agent",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    stats: "24/7 CS",
    link: "https://www.aitelz.com/",
  },
  {
    id: 3,
    title: "WACRS",
    category: "Chatbot Assistant",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    stats: "99.9% Acc",
    link: "https://www.wacrs.com/",
  },
];

const AIWorkShowcase = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-row items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
              SELECTED WORKS
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c69563] hover:text-black transition-colors">
            View All <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold tracking-wider">
                  {project.stats}
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-black group-hover:text-[#c69563] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-medium">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWorkShowcase;
