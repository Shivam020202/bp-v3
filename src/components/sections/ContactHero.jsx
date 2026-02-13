import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <div className="relative min-h-[70vh] bg-black overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" /> {/* Dark Overlay */}
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center z-10 overflow-hidden">
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-md font-mono text-xs uppercase tracking-[0.2em] mb-6"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[0.9]"
          >
            LET&apos;S CREATE <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
              TOGETHER.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Whether you need branding, web design, or a full marketing campaign,
            we&apos;re here to bring your vision to life.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default ContactHero;
