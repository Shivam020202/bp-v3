import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../constants/projects";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendar,
  FaTag,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import StackScroll from "../components/StackScroll";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const galleryRef = useRef(null);
  const resultsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });
  const isGalleryInView = useInView(galleryRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });

  const [openFaqIndex, setOpenFaqIndex] = useState(1); // Default to second FAQ open
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // Get project data from constants based on id
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    // Scroll to top on mount or id change
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-cream-200 flex flex-col items-center justify-center p-4">
        <h1 className="font-display text-4xl font-bold text-warm-900 mb-4">Project Not Found</h1>
        <button
          onClick={() => navigate('/portfolio')}
          className="bg-warm-700 text-white px-8 py-4 rounded-full font-bold hover:bg-warm-800 transition-all shadow-lg"
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-200">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px"
          }}
        />

        {/* Back Button */}
        <motion.button
          className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all"
          onClick={() => navigate('/portfolio')}
          initial={{ opacity: 0, x: -20 }}
          animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
          whileHover={{ x: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft />
          <span>Back to Portfolio</span>
        </motion.button>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Category Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6"
                initial={{ scale: 0 }}
                animate={isHeroInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <FaTag />
                {project.category}
              </motion.div>

              {/* Title */}
              <motion.h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                {project.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-cream-100 mb-8 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                {project.subtitle}
              </motion.p>

              {/* Meta Info */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-6 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-cream-300" />
                  <span>{project.year}</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full" />
                <div>
                  <span className="text-cream-300">Client:</span> {project.client}
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full" />
                <div>
                  <span className="text-cream-300">Duration:</span> {project.duration}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Project Overview - Case Study Style */}
      <section ref={contentRef} className="py-20 bg-gradient-to-br from-warm-900 via-warm-800 to-warm-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral-400 via-warm-500 to-coral-400" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-12 max-w-7xl mx-auto">
            {/* Left Column - Business Challenge & Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isContentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              {/* Business Challenge */}
              <div>
                <h3 className="text-warm-300 text-xs font-bold uppercase tracking-widest mb-4">
                  BUSINESS CHALLENGE
                </h3>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h2>
              </div>

              {/* The Details */}
              <div>
                <h3 className="text-warm-300 text-xs font-bold uppercase tracking-widest mb-6">
                  THE DETAILS
                </h3>
                <div className="space-y-6">
                  <p className="text-cream-100 leading-relaxed">
                    {project.challenge}
                  </p>
                  <p className="text-cream-100 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-warm-600 to-transparent" />

            {/* Right Column - Services & Why Partner */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isContentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              {/* Services */}
              <div>
                <h3 className="text-warm-300 text-xs font-bold uppercase tracking-widest mb-6">
                  SERVICES
                </h3>
                <ul className="space-y-3">
                  {project.tags.map((tag, index) => (
                    <motion.li
                      key={index}
                      className="text-white font-medium flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-coral-400 rounded-full" />
                      {tag}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Why We're Proud to Partner */}
              <div>
                <h3 className="text-warm-300 text-xs font-bold uppercase tracking-widest mb-6">
                  WHY WE'RE PROUD TO PARTNER
                </h3>
                <ul className="space-y-4">
                  {(project.partnershipReasons || [
                    `Innovative brand approach for ${project.client} with ${project.duration} of dedication`,
                    "Adapts to evolving market needs with modern design principles",
                    "Strategic solutions that deliver measurable results and lasting impact"
                  ]).map((reason, index) => (
                    <motion.li
                      key={index}
                      className="text-cream-100 leading-relaxed"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {reason}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Results Metrics Bar */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-warm-800/50 to-warm-700/50 backdrop-blur-sm rounded-2xl p-8 border border-warm-600/30"
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {project.results.slice(0, 3).map((result, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                    {result.metric}
                  </div>
                  <div className="text-warm-300 text-sm font-medium uppercase tracking-wide">
                    {result.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


   
      {/* Image Gallery - GSAP Stack Scroll Effect */}
      <section ref={galleryRef} className="py-20 bg-cream-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 bg-warm-100 text-warm-700 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                <span>📸</span>
                <span>Project Showcase</span>
              </span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-4">
              Visual Journey
            </h2>
            <p className="text-warm-600 text-lg">
              Scroll through the project gallery
            </p>
          </motion.div>

          {/* GSAP Stacking Images */}
          <StackScroll images={project.images} projectTitle={project.title} />
        </div>
      </section>



      {/* Related Work Section */}
      <section className="py-20 bg-cream-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #8b6f47 1px, transparent 1px),
              linear-gradient(to bottom, #8b6f47 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold text-warm-900 mb-12 uppercase tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Related Work
          </motion.h2>

          {/* Auto-scrolling Projects Carousel */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <motion.div
              className="flex gap-6"
              animate={isCarouselPaused ? {} : {
                x: [0, -1956], // 6 items * 320px + 6 gaps * 24px = 1956px
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
              style={{
                width: "max-content",
              }}
            >
              {/* Dynamically get related projects (other projects in same category or just others) */}
              {[...Array(2)].map((_, loopIndex) => (
                <Fragment key={loopIndex}>
                  {projects
                    .filter(p => p.id !== project.id)
                    .slice(0, 6)
                    .map((relatedProject, index) => (
                    <motion.div
                      key={`${loopIndex}-${index}`}
                      className="group relative w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex-shrink-0"
                      initial={loopIndex === 0 ? { opacity: 0, y: 30 } : {}}
                      whileInView={loopIndex === 0 ? { opacity: 1, y: 0 } : {}}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      onClick={() => navigate(`/portfolio/${relatedProject.id}`)}
                    >
                      {/* Image */}
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${relatedProject.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <p className="text-sm font-bold uppercase tracking-wide mb-2 opacity-90">
                          {relatedProject.subtitle}
                        </p>
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                          {relatedProject.title}
                        </h3>

                        {/* Arrow Icon */}
                        <motion.div
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-warm-700 transition-all duration-300"
                          whileHover={{ scale: 1.1, x: 5 }}
                        >
                          <FaArrowRight />
                        </motion.div>
                      </div>

                      {/* Hover Border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300" />
                    </motion.div>
                  ))}
                </Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Side - Title & Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32"
            >
              <div className="mb-6">
                <span className="text-warm-600 font-bold text-sm uppercase tracking-wider">
                  FAQs
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight">
                Frequently ask questions
              </h2>
              <p className="text-warm-600 text-lg mb-8 leading-relaxed">
                Experience intelligent, efficient, and sustainable software designed to drive progress.
              </p>
              <motion.button
                className="group inline-flex items-center gap-3 bg-warm-700 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-warm-800 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact us</span>
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <FaArrowRight className="text-xs" />
                </div>
              </motion.button>
            </motion.div>

            {/* Right Side - FAQ Accordion */}
            <div className="space-y-4">
              {(project.faqs || [
                {
                  number: "001",
                  question: "What features does this software offer?",
                  answer: "Our software provides comprehensive features including advanced analytics, automated workflows, seamless integrations, real-time collaboration tools, and customizable dashboards designed to streamline your business operations."
                },
                {
                  number: "002",
                  question: "How does this solution improve efficiency?",
                  answer: "This solution boosts efficiency by automating tasks, streamlining workflows, and providing data insights that support faster, smarter decision-making."
                },
                {
                  number: "003",
                  question: "What kind of support is provided?",
                  answer: "We offer 24/7 customer support through multiple channels including email, chat, and phone. Our dedicated team provides onboarding assistance, training resources, comprehensive documentation, and ongoing technical support to ensure your success."
                },
                {
                  number: "004",
                  question: "How secure is the data managed by this software?",
                  answer: "We implement industry-leading security measures including end-to-end encryption, regular security audits, compliance with international standards (ISO 27001, GDPR), multi-factor authentication, and automated backup systems to protect your sensitive data."
                },
                {
                  number: "005",
                  question: "Can the software integrate with our existing systems?",
                  answer: "Yes, our software seamlessly integrates with popular platforms and tools through our robust API and pre-built connectors. We support integrations with CRM systems, marketing tools, payment gateways, and custom applications to ensure smooth workflow continuity."
                }
              ]).map((faq, index) => (
                <motion.div
                  key={index}
                  className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index
                      ? "bg-white border-warm-300 shadow-lg"
                      : "bg-cream-100 border-transparent hover:border-warm-200"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-warm-400 font-bold text-sm">
                          {faq.number}
                        </span>
                        <h3 className="font-bold text-warm-900 text-lg md:text-xl group-hover:text-warm-700 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        openFaqIndex === index
                          ? "bg-warm-700 text-white"
                          : "bg-warm-200 text-warm-700"
                      }`}
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openFaqIndex === index ? (
                        <FaMinus className="text-sm" />
                      ) : (
                        <FaPlus className="text-sm" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="pl-12">
                            <p className="text-warm-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-warm-600 text-lg mb-8">
              Let's create something amazing together
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                className="bg-warm-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-warm-800 transition-all shadow-lg flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <FaArrowRight />
              </motion.button>
              <motion.button
                className="bg-cream-200 text-warm-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-300 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio')}
              >
                View More Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;
