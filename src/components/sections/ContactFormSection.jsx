import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactFormSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Text & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-500 font-mono text-[12px] uppercase tracking-[0.2em] mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              Let's Start a <br />
              <span className="text-[#C4A484] italic font-serif pr-2">
                Conversation.
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed max-w-lg">
              Have a project in mind? We'd love to hear about it. Send us a
              message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F9F5F1] rounded-full flex items-center justify-center text-[#C4A484] shrink-0">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F9F5F1] rounded-full flex items-center justify-center text-[#C4A484] shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">Email</h4>
                  <p className="text-gray-600">hello@brandingpioneers.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F9F5F1] rounded-full flex items-center justify-center text-[#C4A484] shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">Headquarters</h4>
                  <p className="text-gray-600">
                    123 Creative Ave, Design District, NY 10012
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F9F9F9] p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-[#1D0F20] transition-colors flex items-center justify-center gap-3 group"
              >
                <span>Send Message</span>
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform text-sm" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
