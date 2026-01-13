import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
                link: "#",
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
                link: "/services/web-development",
              },
              {
                icon: <FaBullhorn />,
                title: "PPC Advertising",
                description: "Maximize ROI with targeted ad campaigns.",
                link: "#",
              },
              {
                icon: <FaChartLine />,
                title: "Analytics & Reporting",
                description: "Data-driven insights for better decisions.",
                link: "#",
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
                link: "#",
              },
              {
                icon: <FaShareAlt />,
                title: "Social Media Marketing",
                description: "Build community and brand awareness.",
                link: "#",
              },
              {
                icon: <FaEnvelope />,
                title: "Email Marketing",
                description: "Personalized campaigns that resonate.",
                link: "#",
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
                link: "#",
              },
              {
                icon: <FaPencilAlt />,
                title: "Logo Design",
                description: "Memorable logos that stand out.",
                link: "#",
              },
              {
                icon: <FaFileAlt />,
                title: "Brand Guidelines",
                description: "Consistent brand across all touchpoints.",
                link: "#",
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
                link: "#",
              },
              {
                icon: <FaVideo />,
                title: "Motion Graphics",
                description: "Bring your brand to life with animation.",
                link: "#",
              },
              {
                icon: <FaShareAlt />,
                title: "Social Media Graphics",
                description: "Eye-catching visuals for social platforms.",
                link: "#",
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
                link: "#",
              },
              {
                icon: <FaBuilding />,
                title: "E-commerce Solutions",
                description: "Powerful online stores that convert.",
                link: "#",
              },
              {
                icon: <FaRocket />,
                title: "Web Applications",
                description: "Custom web apps for your business needs.",
                link: "#",
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
                link: "#",
              },
              {
                icon: <FaChartLine />,
                title: "API Integration",
                description: "Seamless third-party integrations.",
                link: "#",
              },
              {
                icon: <FaLightbulb />,
                title: "Technical Consulting",
                description: "Expert guidance for your tech stack.",
                link: "#",
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 container mx-auto px-6 ${
        isScrolled
          ? "bg-black/30 shadow-md backdrop-blur-sm rounded-full mt-2"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/bp-logo.png"
                alt="Branding Pioneers Logo"
                className="h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isScrolled
                  ? "text-warm-100 hover:text-warm-900 hover:bg-cream-100"
                  : "text-white hover:text-white/80 hover:bg-white/10"
              }`}
            >
              Home
            </Link>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("services")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isScrolled
                    ? "text-warm-100 hover:text-warm-900 hover:bg-cream-100"
                    : "text-white hover:text-white/80 hover:bg-white/10"
                }`}
              >
                Services
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    activeMenu === "services" ? "rotate-180" : ""
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
                                className={`w-full text-left px-3 py-3 rounded-lg transition-all ${
                                  activeServicesCategory === index
                                    ? "bg-white shadow-sm"
                                    : "hover:bg-white/50"
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div
                                    className={`text-lg mt-0.5 ${
                                      activeServicesCategory === index
                                        ? "text-warm-600"
                                        : "text-warm-400"
                                    }`}
                                  >
                                    {category.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div
                                      className={`text-sm font-semibold mb-0.5 ${
                                        activeServicesCategory === index
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
                                  )
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
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isScrolled
                    ? "text-warm-100 hover:text-warm-900 hover:bg-cream-100"
                    : "text-white hover:text-white/80 hover:bg-white/10"
                }`}
              >
                Resources
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    activeMenu === "resources" ? "rotate-180" : ""
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
                                className={`w-full text-left px-3 py-3 rounded-lg transition-all ${
                                  activeCategory === index
                                    ? "bg-white shadow-sm"
                                    : "hover:bg-white/50"
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div
                                    className={`text-lg mt-0.5 ${
                                      activeCategory === index
                                        ? "text-gray-900"
                                        : "text-gray-400"
                                    }`}
                                  >
                                    {category.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div
                                      className={`text-sm font-semibold mb-0.5 ${
                                        activeCategory === index
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
                                  )
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
              to="#"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isScrolled
                  ? "text-warm-100 hover:text-warm-900 hover:bg-cream-100"
                  : "text-white hover:text-white/80 hover:bg-white/10"
              }`}
            >
              Pricing
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={`hidden lg:block px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isScrolled
                  ? "bg-warm-700 text-white hover:bg-warm-800"
                  : "bg-white text-warm-700 hover:bg-white/90"
              }`}
            >
              Request a demo
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-warm-900" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-sm font-medium text-warm-700 hover:bg-cream-100 rounded-lg"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="block px-3 py-2 text-sm font-medium text-warm-700 hover:bg-cream-100 rounded-lg"
                >
                  Platform
                </Link>
                <Link
                  to="/services/web-development"
                  className="block px-3 py-2 text-sm font-medium text-warm-700 hover:bg-cream-100 rounded-lg"
                >
                  Services
                </Link>
                <Link
                  to="#"
                  className="block px-3 py-2 text-sm font-medium text-warm-700 hover:bg-cream-100 rounded-lg"
                >
                  Resources
                </Link>
                <Link
                  to="#"
                  className="block px-3 py-2 text-sm font-medium text-warm-700 hover:bg-cream-100 rounded-lg"
                >
                  Pricing
                </Link>
                <div className="pt-4 space-y-2">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-warm-700 rounded-full text-white px-4 py-2 text-sm font-medium"
                  >
                    Request a demo
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MegaMenuHeader;
