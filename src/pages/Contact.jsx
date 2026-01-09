import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle
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
    <div className="min-h-screen bg-gradient-to-br from-warm-900 via-warm-800 to-warm-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-coral-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-warm-500 rounded-full blur-3xl" />
      </div>

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24 order-2 lg:order-1"
          >
            {/* Decorative Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="absolute -top-4 -right-4 lg:top-8 lg:-right-8"
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-cream-100 rounded-full flex items-center justify-center shadow-2xl relative">
                <div className="absolute inset-0 border-4 border-dashed border-warm-700 rounded-full animate-spin-slow opacity-30" />
                <div className="text-center">
                  <div className="text-xs lg:text-sm font-bold text-warm-800 uppercase tracking-wider transform -rotate-12">
                    Get In Touch
                  </div>
                  <div className="text-2xl lg:text-3xl">✉️</div>
                </div>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's work
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-300 via-coral-400 to-coral-500">
                together!
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-cream-200 text-lg md:text-xl mb-12 leading-relaxed"
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
                className="bg-warm-700/30 backdrop-blur-sm border border-warm-600/30 rounded-2xl p-6 hover:bg-warm-700/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-coral-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-warm-200 text-sm font-bold uppercase tracking-wide mb-2">
                      Call Us
                    </h3>
                    <p className="text-cream-50 font-semibold text-lg">+11 2158 973027</p>
                    <p className="text-cream-50 font-semibold text-lg">+11 4545 996738</p>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                variants={itemVariants}
                className="bg-warm-700/30 backdrop-blur-sm border border-warm-600/30 rounded-2xl p-6 hover:bg-warm-700/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-coral-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-warm-200 text-sm font-bold uppercase tracking-wide mb-2">
                      Address
                    </h3>
                    <p className="text-cream-50 font-semibold text-lg">
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
                className="bg-warm-700/30 backdrop-blur-sm border border-warm-600/30 rounded-2xl overflow-hidden hover:bg-warm-700/40 transition-all duration-300"
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
                <h3 className="text-warm-200 text-sm font-bold uppercase tracking-wide mb-4">
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
                      className="w-12 h-12 bg-warm-700/30 backdrop-blur-sm border border-warm-600/30 rounded-xl flex items-center justify-center hover:bg-coral-400 hover:border-coral-400 transition-all duration-300"
                    >
                      <social.icon className="text-cream-50 text-lg" />
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
                className="absolute inset-0 bg-warm-700/95 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <FaCheckCircle className="text-6xl text-coral-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-cream-50 mb-2">Thank You!</h3>
                  <p className="text-cream-200">We'll get back to you within 24 hours.</p>
                </div>
              </motion.div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-warm-700/20 backdrop-blur-sm border border-warm-600/30 rounded-3xl p-8 md:p-10 space-y-6"
            >
              {/* Form Field 01 - Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-coral-400/20 rounded-full flex items-center justify-center text-coral-400 font-bold text-sm flex-shrink-0">
                    01
                  </span>
                  <span className="text-cream-50 font-semibold">What's your name?</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Type your full name"
                  required
                  className="w-full bg-warm-800/30 border-b-2 border-warm-600/50 text-cream-50 px-4 py-3 focus:outline-none focus:border-coral-400 transition-all placeholder:text-warm-400 rounded-t-lg"
                />
              </motion.div>

              {/* Form Field 02 - Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-coral-400/20 rounded-full flex items-center justify-center text-coral-400 font-bold text-sm flex-shrink-0">
                    02
                  </span>
                  <span className="text-cream-50 font-semibold">What's your email address?</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="w-full bg-warm-800/30 border-b-2 border-warm-600/50 text-cream-50 px-4 py-3 focus:outline-none focus:border-coral-400 transition-all placeholder:text-warm-400 rounded-t-lg"
                />
              </motion.div>

              {/* Form Field 03 - Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-coral-400/20 rounded-full flex items-center justify-center text-coral-400 font-bold text-sm flex-shrink-0">
                    03
                  </span>
                  <span className="text-cream-50 font-semibold">What's your phone number?</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 2222 3333444"
                  className="w-full bg-warm-800/30 border-b-2 border-warm-600/50 text-cream-50 px-4 py-3 focus:outline-none focus:border-coral-400 transition-all placeholder:text-warm-400 rounded-t-lg"
                />
              </motion.div>

              {/* Form Field 04 - Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-coral-400/20 rounded-full flex items-center justify-center text-coral-400 font-bold text-sm flex-shrink-0">
                    04
                  </span>
                  <span className="text-cream-50 font-semibold">What's your company/organization name?</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Type your company/organization name"
                  className="w-full bg-warm-800/30 border-b-2 border-warm-600/50 text-cream-50 px-4 py-3 focus:outline-none focus:border-coral-400 transition-all placeholder:text-warm-400 rounded-t-lg"
                />
              </motion.div>

              {/* Form Field 05 - Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-coral-400/20 rounded-full flex items-center justify-center text-coral-400 font-bold text-sm flex-shrink-0">
                    05
                  </span>
                  <span className="text-cream-50 font-semibold">What services are you looking for?</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-warm-800/30 border-b-2 border-warm-600/50 text-cream-50 px-4 py-3 focus:outline-none focus:border-coral-400 transition-all rounded-t-lg appearance-none cursor-pointer"
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
                  <span className="w-10 h-10 bg-coral-400/20 rounded-full flex items-center justify-center text-coral-400 font-bold text-sm flex-shrink-0">
                    07
                  </span>
                  <span className="text-cream-50 font-semibold">Tell us about your project</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please type your project description"
                  rows="5"
                  required
                  className="w-full bg-warm-800/30 border-2 border-warm-600/50 text-cream-50 px-4 py-3 focus:outline-none focus:border-coral-400 transition-all placeholder:text-warm-400 rounded-lg resize-none"
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
                  className="w-full bg-gradient-to-r from-coral-400 to-coral-500 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
