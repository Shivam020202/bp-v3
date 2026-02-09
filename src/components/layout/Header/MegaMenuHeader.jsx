import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaBook,
  FaCalendar,
  FaFileAlt,
  FaBookOpen,
  FaHeart,
  FaUsers,
  FaChartLine,
  FaDollarSign,
  FaBuilding,
  FaLightbulb,
  FaAward,
  FaBullhorn,
  FaSearch,
  FaPencilAlt,
  FaEnvelope,
  FaShareAlt,
  FaVideo,
  FaPalette,
  FaMobileAlt,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const MegaMenuHeader = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const menuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuEnter = (menuType) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menuType);
    setActiveCategory(0);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  // Resources Menu Structure (similar to Lattice's Library menu)
  const resourcesMenu = {
    categories: [
      {
        id: "library",
        title: "Library",
        subtitle: "Your one-stop shop to learn all things people.",
        icon: <FaBook />,
      },
      {
        id: "customers",
        title: "For customers",
        subtitle: "Helpful resources for the HR leaders using Lattice.",
        icon: <FaUsers />,
      },
      {
        id: "company",
        title: "Company",
        subtitle: "Why we're proud to be Latticians.",
        icon: <FaBuilding />,
      },
    ],
    content: {
      library: {
        sections: [
          {
            title: "POPULAR CONTENT TYPES",
            items: [
              {
                icon: <FaCalendar />,
                title: "Events & Webinars",
                description: "Learn with peers, or watch on demand.",
                link: "#",
              },
              {
                icon: <FaFileAlt />,
                title: "Templates",
                description: "Easy templates for busy HR teams.",
                link: "#",
              },
              {
                icon: <FaBookOpen />,
                title: "Ebooks",
                description: "Leave the library card at home.",
                link: "#",
              },
            ],
          },
          {
            title: "POPULAR CONTENT TOPICS",
            items: [
              {
                icon: <FaHeart />,
                title: "Company Culture",
                description:
                  "Let your values come alive with the right culture.",
                link: "#",
              },
              {
                icon: <FaChartLine />,
                title: "Performance Management",
                description: "Activate the best in your people.",
                link: "#",
              },
              {
                icon: <FaDollarSign />,
                title: "Compensation & Payroll",
                description: "Motivate and reward your people, effectively.",
                link: "#",
              },
            ],
          },
        ],
        featured: {
          title: "The 2026 State of People Strategy Report",
          description: "Your favorite report is finally here.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
        },
      },
      customers: {
        sections: [
          {
            title: "RESOURCES",
            items: [
              {
                icon: <FaLightbulb />,
                title: "Best Practices",
                description: "Learn from the experts.",
                link: "#",
              },
              {
                icon: <FaBook />,
                title: "Documentation",
                description: "Complete guides and tutorials.",
                link: "#",
              },
              {
                icon: <FaCalendar />,
                title: "Upcoming Events",
                description: "Join our community events.",
                link: "#",
              },
            ],
          },
          {
            title: "SUPPORT",
            items: [
              {
                icon: <FaUsers />,
                title: "Customer Success",
                description: "Get help from our team.",
                link: "#",
              },
              {
                icon: <FaFileAlt />,
                title: "Help Center",
                description: "Find answers quickly.",
                link: "#",
              },
            ],
          },
        ],
      },
      company: {
        sections: [
          {
            title: "ABOUT US",
            items: [
              {
                icon: <FaBuilding />,
                title: "Our Story",
                description: "Learn about our journey.",
                link: "#",
              },
              {
                icon: <FaUsers />,
                title: "Team",
                description: "Meet the people behind the brand.",
                link: "#",
              },
              {
                icon: <FaAward />,
                title: "Careers",
                description: "Join our growing team.",
                link: "/careers",
              },
            ],
          },
        ],
      },
    },
  };

  const currentContent =
    resourcesMenu.content[resourcesMenu.categories[activeCategory]?.id] ||
    resourcesMenu.content.library;

  // Services Menu Structure
  const servicesMenu = {
    categories: [
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        subtitle: "Drive growth with data-driven marketing strategies.",
        icon: <FaBullhorn />,
      },
      {
        id: "creative-design",
        title: "Creative & Design",
        subtitle: "Stunning visuals that captivate your audience.",
        icon: <FaPalette />,
      },
      {
        id: "development",
        title: "Web & App Development",
        subtitle: "Build powerful digital experiences.",
        icon: <FaCode />,
      },
    ],
    content: {
      "digital-marketing": {
        sections: [
          {
            title: "SEARCH & ADVERTISING",
            items: [
              {
                icon: <FaSearch />,
                title: "SEO Optimization",
                description: "Rank higher and drive organic traffic.",
                link: "/services/seo-optimization",
              },
              {
                icon: <FaBullhorn />,
                title: "PPC Advertising",
                description: "Maximize ROI with targeted ad campaigns.",
                link: "/services/paid-advertising",
              },
              {
                icon: <FaChartLine />,
                title: "Analytics & Reporting",
                description: "Data-driven insights for better decisions.",
                link: "/services/ai-automation",
              },
            ],
          },
          {
            title: "CONTENT & SOCIAL",
            items: [
              {
                icon: <FaPencilAlt />,
                title: "Content Marketing",
                description: "Engaging content that converts.",
                link: "/services/content-marketing",
              },
              {
                icon: <FaShareAlt />,
                title: "Social Media Marketing",
                description: "Build community and brand awareness.",
                link: "/services/social-media",
              },
              {
                icon: <FaEnvelope />,
                title: "Email Marketing",
                description: "Personalized campaigns that resonate.",
                link: "/services/email-marketing",
              },
            ],
          },
        ],
        featured: {
          title: "Free Digital Marketing Audit",
          description: "Get a comprehensive analysis of your online presence.",
        },
      },
      "creative-design": {
        sections: [
          {
            title: "BRAND IDENTITY",
            items: [
              {
                icon: <FaPalette />,
                title: "Brand Strategy",
                description: "Define your unique brand identity.",
                link: "/services/content-marketing",
              },
              {
                icon: <FaPencilAlt />,
                title: "Logo Design",
                description: "Memorable logos that stand out.",
                link: "/services/content-marketing",
              },
              {
                icon: <FaFileAlt />,
                title: "Brand Guidelines",
                description: "Consistent brand across all touchpoints.",
                link: "/services/content-marketing",
              },
            ],
          },
          {
            title: "DIGITAL DESIGN",
            items: [
              {
                icon: <FaMobileAlt />,
                title: "UI/UX Design",
                description: "Intuitive interfaces users love.",
                link: "/services/web-development",
              },
              {
                icon: <FaVideo />,
                title: "Motion Graphics",
                description: "Bring your brand to life with animation.",
                link: "/services/youtube-marketing",
              },
              {
                icon: <FaShareAlt />,
                title: "Social Media Graphics",
                description: "Eye-catching visuals for social platforms.",
                link: "/services/social-media",
              },
            ],
          },
        ],
        featured: {
          title: "Brand Identity Package",
          description: "Complete branding solution for your business.",
        },
      },
      development: {
        sections: [
          {
            title: "WEB SOLUTIONS",
            items: [
              {
                icon: <FaCode />,
                title: "Website Development",
                description: "Fast, responsive, and SEO-friendly websites.",
                link: "/services/web-development",
              },
              {
                icon: <FaBuilding />,
                title: "E-commerce Solutions",
                description: "Powerful online stores that convert.",
                link: "/services/web-development",
              },
              {
                icon: <FaRocket />,
                title: "Web Applications",
                description: "Custom web apps for your business needs.",
                link: "/services/web-development",
              },
            ],
          },
          {
            title: "MOBILE & MORE",
            items: [
              {
                icon: <FaMobileAlt />,
                title: "Mobile App Development",
                description: "Native and cross-platform mobile apps.",
                link: "/services/web-development",
              },
              {
                icon: <FaChartLine />,
                title: "API Integration",
                description: "Seamless third-party integrations.",
                link: "/services/ai-automation",
              },
              {
                icon: <FaLightbulb />,
                title: "Technical Consulting",
                description: "Expert guidance for your tech stack.",
                link: "/services/ai-automation",
              },
            ],
          },
        ],
        featured: {
          title: "Website Launch Package",
          description: "Everything you need to go live in 30 days.",
        },
      },
    },
  };

  const [activeServicesCategory, setActiveServicesCategory] = useState(0);

  const currentServicesContent =
    servicesMenu.content[servicesMenu.categories[activeServicesCategory]?.id] ||
    servicesMenu.content["digital-marketing"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 container mx-auto ${isScrolled || isContactPage
        ? "bg-white/70 backdrop-blur-sm border-b border-white/10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)] rounded-b-3xl md:rounded-3xl md:mt-2"
        : "bg-white/90 rounded-b-3xl"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1768545326/bp-logo_3_j7upkn.png"
                alt="Branding Pioneers Logo"
                className="h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium border shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border-white/20 bg-white/30 rounded-full transition-colors ${isScrolled || isContactPage
                ? "text-black/70 hover:text-black/80 hover:bg-white/20 "
                : "text-black/70 hover:text-black/80 hover:bg-white/20"
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium border shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border-white/20 bg-white/30 rounded-full transition-colors ${isScrolled || isContactPage
                ? "text-black/70 hover:text-black/80 hover:bg-white/20 "
                : "text-black/70 hover:text-black/80 hover:bg-white/20"
                }`}
            >
              About
            </Link>
            <Link
              to="/services/ai-solutions"
              className={`px-3 py-2 text-sm font-medium border shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border-white/20 bg-white/30 rounded-full transition-colors ${isScrolled || isContactPage
                ? "text-black/70 hover:text-black/80 hover:bg-white/20 "
                : "text-black/70 hover:text-black/80 hover:bg-white/20"
                }`}
            >
              AI Solutions
            </Link>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("services")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium border shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border-white/20 bg-white/30 rounded-full transition-colors ${isScrolled || isContactPage
                  ? "text-black/70 hover:text-black/80 hover:bg-white/20 "
                  : "text-black/70 hover:text-black/80 hover:bg-white/20"
                  }`}
              >
                Services
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${activeMenu === "services" ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Services Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-x-0 top-20 px-4 flex justify-center"
                    onMouseEnter={() => handleMenuEnter("services")}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-6xl">
                      <div className="flex">
                        {/* Left Sidebar - Service Categories */}
                        <div className="w-64 bg-warm-50 border-r border-warm-100 p-4">
                          <div className="space-y-1">
                            {servicesMenu.categories.map((category, index) => (
                              <button
                                key={category.id}
                                onMouseEnter={() =>
                                  setActiveServicesCategory(index)
                                }
                                className={`w-full text-left px-3 py-3 rounded-lg transition-all ${activeServicesCategory === index
                                  ? "bg-white shadow-sm"
                                  : "hover:bg-white/50"
                                  }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div
                                    className={`text-lg mt-0.5 ${activeServicesCategory === index
                                      ? "text-warm-600"
                                      : "text-warm-400"
                                      }`}
                                  >
                                    {category.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div
                                      className={`text-sm font-semibold mb-0.5 ${activeServicesCategory === index
                                        ? "text-warm-900"
                                        : "text-warm-700"
                                        }`}
                                    >
                                      {category.title}
                                    </div>
                                    <div className="text-xs text-warm-600 leading-snug">
                                      {category.subtitle}
                                    </div>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 p-5">
                          <div className="flex gap-6">
                            {/* Service Sections */}
                            <div className="flex-1">
                              <div className="space-y-5">
                                {currentServicesContent.sections?.map(
                                  (section, sIdx) => (
                                    <div key={sIdx}>
                                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                                        {section.title}
                                      </h3>
                                      <div className="space-y-1">
                                        {section.items.map((item, iIdx) => (
                                          <Link
                                            key={iIdx}
                                            to={item.link}
                                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-warm-50 transition-colors group"
                                          >
                                            <div className="text-warm-400 text-sm mt-0.5 group-hover:text-warm-600 transition-colors">
                                              {item.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <div className="text-sm font-medium text-gray-900 mb-0.5 group-hover:text-warm-700">
                                                {item.title}
                                              </div>
                                              <div className="text-xs text-gray-500 leading-snug">
                                                {item.description}
                                              </div>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>

                            {/* Featured Section */}
                            {currentServicesContent.featured && (
                              <div className="w-56">
                                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                                  FEATURED
                                </div>
                                <Link
                                  to="#"
                                  className="block rounded-xl overflow-hidden bg-gradient-to-br from-warm-400 to-warm-500 p-6 hover:shadow-lg transition-shadow group"
                                >
                                  <div className="aspect-[4/3] mb-3 flex items-center justify-center">
                                    <div className="text-center">
                                      <div className="text-white text-4xl mb-3">
                                        🚀
                                      </div>
                                      <div className="text-white font-semibold text-xl mb-1">
                                        Special Offer
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-sm font-semibold text-white mb-1">
                                    {currentServicesContent.featured.title}
                                  </div>
                                  <div className="text-xs text-white/90">
                                    {
                                      currentServicesContent.featured
                                        .description
                                    }
                                  </div>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("resources")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium border shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border-white/20 bg-white/30 rounded-full transition-colors ${isScrolled || isContactPage
                  ? "text-black/70 hover:text-black/80 hover:bg-white/20 "
                  : "text-black/70 hover:text-black/80 hover:bg-white/20"
                  }`}
              >
                Resources
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${activeMenu === "resources" ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMenu === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-x-0 top-20 px-4 flex justify-center"
                    onMouseEnter={() => handleMenuEnter("resources")}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-6xl">
                      <div className="flex">
                        {/* Left Sidebar - Categories */}
                        <div className="w-64 bg-gray-50 border-r border-gray-100 p-4">
                          <div className="space-y-1">
                            {resourcesMenu.categories.map((category, index) => (
                              <button
                                key={category.id}
                                onMouseEnter={() => setActiveCategory(index)}
                                className={`w-full text-left px-3 py-3 rounded-lg transition-all ${activeCategory === index
                                  ? "bg-white shadow-sm"
                                  : "hover:bg-white/50"
                                  }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div
                                    className={`text-lg mt-0.5 ${activeCategory === index
                                      ? "text-gray-900"
                                      : "text-gray-400"
                                      }`}
                                  >
                                    {category.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div
                                      className={`text-sm font-semibold mb-0.5 ${activeCategory === index
                                        ? "text-gray-900"
                                        : "text-gray-600"
                                        }`}
                                    >
                                      {category.title}
                                    </div>
                                    <div className="text-xs text-gray-500 leading-snug">
                                      {category.subtitle}
                                    </div>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 p-5">
                          <div className="flex gap-6">
                            {/* Content Sections */}
                            <div className="flex-1">
                              <div className="space-y-5">
                                {currentContent.sections?.map(
                                  (section, sIdx) => (
                                    <div key={sIdx}>
                                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                                        {section.title}
                                      </h3>
                                      <div className="space-y-1">
                                        {section.items.map((item, iIdx) => (
                                          <Link
                                            key={iIdx}
                                            to={item.link}
                                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                                          >
                                            <div className="text-gray-400 text-sm mt-0.5 group-hover:text-gray-900 transition-colors">
                                              {item.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <div className="text-sm font-medium text-gray-900 mb-0.5 group-hover:text-gray-700">
                                                {item.title}
                                              </div>
                                              <div className="text-xs text-gray-500 leading-snug">
                                                {item.description}
                                              </div>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>

                            {/* Featured Section */}
                            {currentContent.featured && (
                              <div className="w-56">
                                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                                  FEATURED
                                </div>
                                <Link
                                  to="#"
                                  className="block rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-4 hover:shadow-lg transition-shadow group"
                                >
                                  <div className="aspect-[4/3] mb-3 flex items-center justify-center">
                                    <div className="text-center">
                                      <div className="text-gray-900 font-display font-semibold text-2xl mb-1">
                                        State of
                                        <br />
                                        People
                                      </div>
                                      <div className="text-gray-800 font-semibold text-xl mb-1">
                                        Strategy
                                      </div>
                                      <div className="text-gray-600 text-sm font-medium">
                                        2026 Report
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-sm font-semibold text-gray-900 mb-1">
                                    {currentContent.featured.title}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    {currentContent.featured.description}
                                  </div>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/careers"
              className={`px-3 py-2 text-sm font-medium border shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border-white/20 bg-white/30 rounded-full transition-colors ${isScrolled || isContactPage
                ? "text-black/70 hover:text-black/80 hover:bg-white/20 "
                : "text-black/70 hover:text-black/80 hover:bg-white/20"
                }`}
            >
              Career
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              className={`hidden lg:block px-4 py-2 rounded-full text-sm font-medium transition-colors ${isScrolled || isContactPage
                ? "bg-warm-500 text-white hover:bg-warm-800"
                : "bg-white text-warm-700 hover:bg-white/90"
                }`}
            >
              Request a demo
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${isScrolled || isContactPage ? "text-warm-700" : "text-black"
                }`}
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu - Animated & Eye-Catching */}
      <div
        className={`lg:hidden fixed inset-0 z-[100000] transition-all duration-500 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Animated Backdrop */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${isMobileMenuOpen ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sliding Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[420px] transition-transform duration-500 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          style={{
            background:
              "linear-gradient(135deg, #0f0f0f 0%, #1a1510 50%, #0f0f0f 100%)",
          }}
        >
          {/* Decorative Gradient Orbs */}
          <div className="absolute top-20 -left-20 w-40 h-40 bg-gradient-to-r from-[#C69563]/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-40 right-0 w-32 h-32 bg-gradient-to-l from-[#FBD9BF]/20 to-transparent rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Header with Close */}
          <div className="relative z-10 flex items-center justify-between p-6 border-b border-white/10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #D4A574 0%, #C69563 100%)",
                }}
              >
                <FaRocket className="text-lg text-white" />
              </div>
              <span className="text-white font-bold">Menu</span>
            </div>

            {/* Animated Close Button */}
            <button
              className="relative w-11 h-11 rounded-full flex items-center justify-center overflow-hidden group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#C69563] to-[#FBD9BF] opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0.5 bg-[#1a1a1a] rounded-full" />
              <FaTimes className="relative z-10 text-[#FBD9BF] group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="relative z-10 h-[calc(100%-80px)] overflow-y-auto pb-20">
            {/* Main Navigation */}
            <div className="p-6 space-y-1">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Career", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center justify-between py-4 border-b border-white/5 cursor-pointer transition-all duration-300 ${isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                    }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="text-2xl font-bold text-white group-hover:text-[#FBD9BF] transition-colors">
                    {item.name}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C69563]/30 transition-colors">
                    <FaArrowRight className="text-xs text-white/50 group-hover:text-[#FBD9BF]" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Services Section with Tabs */}
            <div className="px-6 mb-6">
              <div
                className={`transition-all duration-500 ${isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
                  }`}
                style={{ transitionDelay: "350ms" }}
              >
                <h3 className="text-xs uppercase tracking-widest text-[#C69563] font-bold mb-4 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#C69563]" />
                  Services
                </h3>

                {/* Horizontal Scrollable Tabs */}
                <div
                  className="flex gap-2 mb-4 overflow-x-auto pb-2 -mx-6 px-6"
                  style={{ scrollbarWidth: "none" }}
                >
                  {servicesMenu.categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveServicesCategory(index)}
                      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeServicesCategory === index
                        ? "bg-gradient-to-r from-[#C69563] to-[#B88552] text-white shadow-lg shadow-[#C69563]/30"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                        }`}
                    >
                      <span className="text-base">{category.icon}</span>
                      <span className="whitespace-nowrap">
                        {category.title.split(" ")[0]}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Service Items Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {servicesMenu.content[
                    servicesMenu.categories[activeServicesCategory]?.id
                  ]?.sections
                    ?.flatMap((s) => s.items)
                    .slice(0, 6)
                    .map((service, idx) => (
                      <Link
                        key={idx}
                        to={service.link || "#"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#C69563]/30 transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C69563]/20 to-transparent flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <span className="text-[#FBD9BF] text-sm">
                            {service.icon}
                          </span>
                        </div>
                        <h4 className="text-white text-xs font-semibold mb-0.5">
                          {service.title}
                        </h4>
                        <p className="text-white/40 text-[10px] line-clamp-1">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* Resources Section */}
            <div className="px-6 mb-6">
              <div
                className={`transition-all duration-500 ${isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
                  }`}
                style={{ transitionDelay: "450ms" }}
              >
                <h3 className="text-xs uppercase tracking-widest text-[#C69563] font-bold mb-4 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#C69563]" />
                  Resources
                </h3>

                {/* Resource Cards */}
                <div className="space-y-2">
                  {resourcesMenu.categories.map((category, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#C69563]/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C69563]/30 to-transparent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-[#FBD9BF]">{category.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-sm font-semibold">
                          {category.title}
                        </h4>
                        <p className="text-white/40 text-xs truncate">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div
              className={`px-6 transition-all duration-500 ${isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
                }`}
              style={{ transitionDelay: "550ms" }}
            >
              <div className="relative p-5 rounded-2xl overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C69563] to-[#8B6F47] opacity-90" />
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E\")",
                  }}
                />

                <div className="relative z-10">
                  <h4 className="text-white font-bold text-lg mb-1">
                    Ready to Transform?
                  </h4>
                  <p className="text-white/80 text-sm mb-4">
                    Let's create something extraordinary together.
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-3 bg-white text-[#8B6F47] rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-colors shadow-lg"
                  >
                    <FaRocket />
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Social Links */}
            <div
              className={`px-6 pt-8 pb-6 transition-all duration-500 ${isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
                }`}
              style={{ transitionDelay: "650ms" }}
            >
              <div className="flex items-center justify-center gap-4">
                {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C69563]/30 transition-colors cursor-pointer group"
                  >
                    <span className="text-[10px] text-white/40 group-hover:text-[#FBD9BF] transition-colors">
                      {social.charAt(0)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-center text-white/20 text-xs mt-4">
                © 2024 Branding Pioneers
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MegaMenuHeader;
