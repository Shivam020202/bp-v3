import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "#",
      label: "Instagram",
      color: "hover:bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <FaTwitter />,
      href: "#",
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      icon: <FaLinkedinIn />,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaBehance />,
      href: "#",
      label: "Behance",
      color: "hover:bg-blue-500",
    },
    {
      icon: <FaDribbble />,
      href: "#",
      label: "Dribbble",
      color: "hover:bg-pink-500",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Brand Strategy", href: "#" },
    { name: "Visual Identity", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Social Media", href: "#" },
    { name: "Content Creation", href: "#" },
  ];

  return (
    <footer className="relative bg-warm-900 text-cream-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-warm-800/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cream-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative w-full h-16 text-cream-200"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-display text-3xl font-bold text-cream-300 mb-2">
                Branding Pioneers
              </h3>
              <p className="text-cream-100/70 font-funky">
                Where creativity meets connection ✨
              </p>
            </div>
            <p className="text-cream-100/60 mb-6 leading-relaxed">
              We&apos;re not your typical agency. We&apos;re a bunch of creative
              folks who genuinely care about making your brand shine. Let&apos;s
              create something amazing together!
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-warm-800 flex items-center justify-center text-cream-300 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-funky font-bold text-lg text-cream-300 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-cream-300 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream-100/70 hover:text-cream-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-cream-300 transition-all duration-300 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-funky font-bold text-lg text-cream-300 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-cream-300 rounded-full" />
              What We Do
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-cream-100/70 hover:text-cream-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-cream-300 transition-all duration-300 rounded-full" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-funky font-bold text-lg text-cream-300 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-cream-300 rounded-full" />
              Say Hello! 👋
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@brandingpioneers.com"
                  className="flex items-center gap-3 text-cream-100/70 hover:text-cream-300 transition-colors duration-300 group"
                >
                  <span className="w-10 h-10 rounded-xl bg-warm-800 flex items-center justify-center text-cream-300 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope />
                  </span>
                  <span>hello@brandingpioneers.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-cream-100/70 hover:text-cream-300 transition-colors duration-300 group"
                >
                  <span className="w-10 h-10 rounded-xl bg-warm-800 flex items-center justify-center text-cream-300 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone />
                  </span>
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-cream-100/70">
                  <span className="w-10 h-10 rounded-xl bg-warm-800 flex items-center justify-center text-cream-300">
                    <FaMapMarkerAlt />
                  </span>
                  <span>Creative Lane, Design City</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-warm-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cream-100/60 text-sm flex items-center gap-2">
            © 2024 Branding Pioneers. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-coral-400" />
            </motion.span>
            and lots of coffee ☕
          </p>

          <div className="flex items-center gap-6 text-sm text-cream-100/60">
            <a
              href="#"
              className="hover:text-cream-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-cream-300 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-cream-300 text-warm-900 flex items-center justify-center hover:bg-cream-400 transition-colors duration-300 shadow-lg"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
