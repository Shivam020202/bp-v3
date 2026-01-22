import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaHome,
  FaChevronRight
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/de4kw1t2i/video/upload/v1768548652/hf_20260116_072754_a6514d7f-751e-4a41-942f-c2943b1b63ea_l0a1x8.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <Link
                to="/"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
              >
                <FaHome className="text-xs group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Home</span>
              </Link>
              <FaChevronRight className="text-white/50 text-[10px]" />
              <span className="text-sm font-semibold text-white">Contact</span>
            </motion.nav>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[0.9] tracking-tighter"
            >
              Let's Create
              <br />
              Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                Amazing.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Ready to transform your brand? Get in touch with our team and let's discuss how we can help bring your vision to life.
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-[#C4A484] to-[#d4b896] mx-auto mt-8 rounded-full"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-[70vh] right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl" />
      </div>

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24 order-2 lg:order-1"
          >
            {/* Decorative Badge */}
            {/* <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="absolute -top-4 -right-4 lg:top-8 lg:-right-8"
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-blue-100 rounded-full flex items-center justify-center shadow-2xl relative">
                <div className="absolute inset-0 border-4 border-dashed border-blue-600 rounded-full animate-spin-slow opacity-30" />
                <div className="text-center">
                  <div className="text-xs lg:text-sm font-bold text-black uppercase tracking-wider transform -rotate-12">
                    Get In Touch
                  </div>
                  <div className="text-2xl lg:text-3xl">✉️</div>
                </div>
              </div>
            </motion.div> */}

            {/* Main Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's work
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                together!
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let us help you become even greater at what you do.
              <br />
              Fill out the following form and we will get back to you in the next 24 hours.
            </motion.p>

            {/* Contact Info Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Call Us */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-gray-600 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-2">
                      Call Us
                    </h3>
                    <p className="text-black font-semibold text-lg">+11 2158 973027</p>
                    <p className="text-black font-semibold text-lg">+11 4545 996738</p>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-gray-600 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-2">
                      Address
                    </h3>
                    <p className="text-black font-semibold text-lg">
                      2154 Glen Falls Road
                      <br />
                      Plymouth Meeting,
                      <br />
                      Pennsylvania(PA), 19462
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.1292210625143!2d77.03747767601139!3d28.445520792547644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2286cb252607%3A0x5b5af71fbe24d212!2sBranding%20Pioneers%20Digital%20Marketing%20Agency%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1767958272285!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </motion.div>

              {/* Social Media */}
              <motion.div variants={itemVariants}>
                <h3 className="text-gray-600 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {[
                    { icon: FaFacebook, href: "#" },
                    { icon: FaTwitter, href: "#" },
                    { icon: FaInstagram, href: "#" },
                    { icon: FaLinkedin, href: "#" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-black hover:border-black transition-all duration-300 group"
                    >
                      <social.icon className="text-black text-lg group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            {/* Success Message Overlay */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20 border-2 border-blue-600"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <FaCheckCircle className="text-6xl text-blue-600 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              </motion.div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 space-y-6 shadow-lg"
            >
              {/* Form Field 01 - Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-[#f4e7e1] rounded-full flex items-center justify-center text-[#6b5744] font-bold text-sm flex-shrink-0">
                    01
                  </span>
                  <span className="text-black font-semibold">What's your name?</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Type your full name"
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-200 text-[#6b5744] px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-all placeholder:text-gray-400 rounded-t-lg"
                />
              </motion.div>

              {/* Form Field 02 - Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    02
                  </span>
                  <span className="text-black font-semibold">What's your email address?</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-200 text-[#6b5744] px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-all placeholder:text-gray-400 rounded-t-lg"
                />
              </motion.div>

              {/* Form Field 03 - Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    03
                  </span>
                  <span className="text-black font-semibold">What's your phone number?</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 2222 3333444"
                  className="w-full bg-gray-50 border-b-2 border-gray-200 text-[#6b5744] px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-all placeholder:text-gray-400 rounded-t-lg"
                />
              </motion.div>

              {/* Form Field 04 - Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    04
                  </span>
                  <span className="text-black font-semibold">What's your company/organization name?</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Type your company/organization name"
                  className="w-full bg-gray-50 border-b-2 border-gray-200 text-[#6b5744] px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-all placeholder:text-gray-400 rounded-t-lg"
                />
              </motion.div>

              {/* Form Field 05 - Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    05
                  </span>
                  <span className="text-black font-semibold">What services are you looking for?</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-b-2 border-gray-200 text-[#6b5744] px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-all rounded-t-lg appearance-none cursor-pointer"
                >
                  <option value="">Choose from a list here</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="web-design">Web Design & Development</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="packaging">Packaging Design</option>
                  <option value="app-design">App Design</option>
                  <option value="consulting">Consulting</option>
                </select>
              </motion.div>

              {/* Form Field 06 - Budget */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-coral-400/20 rounded-full flex items-center justify-center text-coral-400 font-bold text-sm flex-shrink-0">
                    06
                  </span>
                  <span className="text-cream-50 font-semibold">What have you budgeted for this project?</span>
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-warm-800/30 border-b-2 border-warm-600/50 text-cream-50 px-4 py-3 focus:outline-none focus:border-coral-400 transition-all rounded-t-lg appearance-none cursor-pointer"
                >
                  <option value="">Choose from a list here</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </motion.div> */}

              {/* Form Field 07 - Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    06
                  </span>
                  <span className="text-black font-semibold">Tell us about your project</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please type your project description"
                  rows="5"
                  required
                  className="w-full bg-gray-50 border-2 border-gray-200 text-[#6b5744] px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-all placeholder:text-gray-400 rounded-lg resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-3 text-lg tracking-[0.1em] uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
