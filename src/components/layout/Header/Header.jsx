import { useState, useEffect, useRef } from "react";
import {
  FaChevronDown,
  FaBullseye,
  FaChartLine,
  FaSearch,
  FaShare,
  FaEnvelope,
  FaChartBar,
  FaBullhorn,
  FaPencilAlt,
  FaMobile,
  FaShoppingCart,
  FaGlobe,
  FaBars,
  FaTimes,
  FaPalette,
  FaCode,
  FaBolt,
  FaUsers,
  FaBriefcase,
  FaVideo,
  FaCamera,
  FaDesktop,
  FaMicrochip,
  FaDatabase,
  FaCloud,
  FaRocket,
  FaCrown,
  FaMagic,
} from "react-icons/fa";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeCaseTab, setActiveCaseTab] = useState(0);
  const headerRef = useRef(null);
  const menuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuEnter = (menuType) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(menuType);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 400);
  };

  const serviceCategories = [
    {
      icon: <FaPalette />,
      title: "Design & Branding",
      description: "Create memorable visual identities",
      services: [
        {
          icon: <FaBullseye />,
          name: "Brand Strategy",
          description: "Define your brand essence",
        },
        {
          icon: <FaPalette />,
          name: "Logo Design",
          description: "Iconic visual identity",
        },
        {
          icon: <FaPencilAlt />,
          name: "UI/UX Design",
          description: "User-centric experiences",
        },
        {
          icon: <FaDesktop />,
          name: "Web Design",
          description: "Beautiful interfaces",
        },
        {
          icon: <FaMobile />,
          name: "Mobile App Design",
          description: "Touch-optimized design",
        },
        {
          icon: <FaCamera />,
          name: "Photography",
          description: "Professional imagery",
        },
      ],
    },
    {
      icon: <FaCode />,
      title: "Development",
      description: "Build powerful digital solutions",
      services: [
        {
          icon: <FaGlobe />,
          name: "Web Development",
          description: "Custom web solutions",
        },
        {
          icon: <FaMobile />,
          name: "Mobile Apps",
          description: "iOS & Android apps",
        },
        {
          icon: <FaShoppingCart />,
          name: "E-commerce",
          description: "Online stores",
        },
        {
          icon: <FaDatabase />,
          name: "CMS Development",
          description: "Content management",
        },
        {
          icon: <FaCloud />,
          name: "Cloud Solutions",
          description: "Scalable infrastructure",
        },
        {
          icon: <FaCode />,
          name: "Custom Software",
          description: "Tailored applications",
        },
      ],
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "Grow your online presence",
      services: [
        {
          icon: <FaSearch />,
          name: "SEO Optimization",
          description: "Rank higher on Google",
        },
        {
          icon: <FaBullhorn />,
          name: "Google Ads & PPC",
          description: "Paid advertising",
        },
        {
          icon: <FaShare />,
          name: "Social Media Marketing",
          description: "Engage your audience",
        },
        {
          icon: <FaEnvelope />,
          name: "Email Marketing",
          description: "Nurture campaigns",
        },
        {
          icon: <FaChartBar />,
          name: "Analytics & Insights",
          description: "Data-driven decisions",
        },
        {
          icon: <FaBolt />,
          name: "Marketing Automation",
          description: "Workflow optimization",
        },
      ],
    },
    {
      icon: <FaVideo />,
      title: "Content & Media",
      description: "Engage with compelling content",
      services: [
        {
          icon: <FaPencilAlt />,
          name: "Content Writing",
          description: "Compelling copy",
        },
        {
          icon: <FaVideo />,
          name: "Video Production",
          description: "Visual storytelling",
        },
        {
          icon: <FaCamera />,
          name: "Photography",
          description: "Professional shoots",
        },
        {
          icon: <FaMicrochip />,
          name: "Animation & Motion",
          description: "Dynamic visuals",
        },
        {
          icon: <FaBullhorn />,
          name: "Podcast Production",
          description: "Audio content",
        },
        {
          icon: <FaGlobe />,
          name: "Blog Management",
          description: "Content strategy",
        },
      ],
    },
  ];

  const caseStudyCategories = [
    {
      title: "E-commerce",
      icon: <FaShoppingCart />,
      description: "Retail & Online Store Success",
      cases: [
        {
          title: "Fashion Retailer Transformation",
          client: "StyleCo",
          result: "300% Revenue Growth",
          industry: "Fashion",
        },
        {
          title: "Beauty Brand Launch",
          client: "GlowUp",
          result: "150% Sales Increase",
          industry: "Beauty",
        },
        {
          title: "Sports Equipment Store",
          client: "FitGear",
          result: "250% Online Sales",
          industry: "Sports",
        },
        {
          title: "Electronics Marketplace",
          client: "TechHub",
          result: "400% Traffic Growth",
          industry: "Electronics",
        },
        {
          title: "Home Decor Store",
          client: "CozySpace",
          result: "200% Conversion Rate",
          industry: "Home & Living",
        },
        {
          title: "Organic Food Market",
          client: "GreenCart",
          result: "350% Customer Base",
          industry: "Food & Beverage",
        },
      ],
    },
    {
      title: "SaaS & Tech",
      icon: <FaCode />,
      description: "Software & Technology Growth",
      cases: [
        {
          title: "Startup Growth Strategy",
          client: "InnovateTech",
          result: "500% User Growth",
          industry: "SaaS",
        },
        {
          title: "App Store Optimization",
          client: "MobileFirst",
          result: "10x Downloads",
          industry: "Mobile",
        },
        {
          title: "B2B Platform Launch",
          client: "BusinessPro",
          result: "200% Lead Generation",
          industry: "B2B",
        },
        {
          title: "AI Tool Marketing",
          client: "SmartAI",
          result: "300% Brand Awareness",
          industry: "AI",
        },
        {
          title: "Cloud Platform Scaling",
          client: "CloudNine",
          result: "400% Enterprise Clients",
          industry: "Cloud",
        },
        {
          title: "DevOps Tool Launch",
          client: "CodeFlow",
          result: "250% Developer Adoption",
          industry: "Developer Tools",
        },
      ],
    },
    {
      title: "Healthcare",
      icon: <FaUsers />,
      description: "Medical & Wellness Solutions",
      cases: [
        {
          title: "Hospital Digital Transformation",
          client: "MedCenter",
          result: "85% Patient Satisfaction",
          industry: "Healthcare",
        },
        {
          title: "Telehealth Platform",
          client: "CareConnect",
          result: "300% User Adoption",
          industry: "Telehealth",
        },
        {
          title: "Medical Device Launch",
          client: "HealthTech",
          result: "150% Market Share",
          industry: "MedTech",
        },
        {
          title: "Wellness App Success",
          client: "WellBeing",
          result: "2M+ Active Users",
          industry: "Wellness",
        },
        {
          title: "Pharmacy Chain Digital",
          client: "MediQuick",
          result: "180% Online Orders",
          industry: "Pharmacy",
        },
        {
          title: "Mental Health Platform",
          client: "MindCare",
          result: "500K+ Users",
          industry: "Mental Health",
        },
      ],
    },
    {
      title: "Finance",
      icon: <FaChartLine />,
      description: "Financial Services & Fintech",
      cases: [
        {
          title: "Fintech App Growth",
          client: "PaySmart",
          result: "500K+ Downloads",
          industry: "Fintech",
        },
        {
          title: "Investment Platform",
          client: "WealthGrow",
          result: "200% Client Base",
          industry: "Investment",
        },
        {
          title: "Banking Digital Strategy",
          client: "SecureBank",
          result: "90% Digital Adoption",
          industry: "Banking",
        },
        {
          title: "Crypto Exchange Launch",
          client: "CoinTrader",
          result: "1M+ Users",
          industry: "Cryptocurrency",
        },
        {
          title: "Insurance Tech Platform",
          client: "InsureTech",
          result: "300% Policy Sales",
          industry: "Insurance",
        },
        {
          title: "Lending Platform Growth",
          client: "QuickLoan",
          result: "250% Loan Approvals",
          industry: "Lending",
        },
      ],
    },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`w-full z-[9999] transition-all duration-700 ease-out ${
          isScrolled ? "fixed top-0 left-0 " : "absolute top-8 "
        }`}
      >
        <div
          className={`${
            isScrolled
              ? "container mx-auto px-4 py-2"
              : "w-[90%] max-w-6xl mx-auto"
          }`}
        >
          <div
            className={`relative rounded-2xl border shadow-lg backdrop-blur-md overflow-visible transition-all duration-700 ${
              isScrolled
                ? "border-[#FBD9BF]/60 shadow-[#D4A574]/20"
                : "border-[#FBD9BF]/40 shadow-[#D4A574]/30"
            }`}
            style={{
              backgroundColor: isScrolled
                ? "rgba(251, 217, 191, 0.95)"
                : "rgba(251, 217, 191, 0.2)",
            }}
          >
            <div className="relative px-4 sm:px-8 py-4">
              <div className="flex items-center justify-between gap-4 sm:gap-8">
                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                  <div
                    className={`relative p-2 sm:p-2.5 rounded-xl transition-all duration-500 group-hover:scale-110 shadow-lg`}
                    style={{
                      background: isScrolled
                        ? "linear-gradient(135deg, #D4A574 0%, #C69563 100%)"
                        : "linear-gradient(135deg, #C69563 0%, #B88552 100%)",
                    }}
                  >
                    <FaCrown
                      className={`text-lg sm:text-xl ${
                        isScrolled ? "text-[#FBD9BF]" : "text-white"
                      } drop-shadow-lg`}
                    />
                  </div>

                  <div>
                    <h1
                      className={`text-sm sm:text-lg font-bold transition-all duration-500`}
                      style={{
                        color: isScrolled ? "#8B6F47" : "#FFFFFF",
                      }}
                    >
                      Branding Pioneers
                    </h1>
                    <div
                      className={`text-[10px] sm:text-xs font-medium flex items-center gap-1.5`}
                      style={{
                        color: isScrolled ? "#A08060" : "#FBD9BF",
                      }}
                    >
                      <FaRocket className="text-[8px] sm:text-xs" />
                      Digital Excellence
                    </div>
                  </div>
                </div>

                {/* Center Navigation - Desktop Only */}
                <nav className="hidden lg:flex items-center gap-1">
                  <a
                    href="#"
                    className={`group px-5 py-2.5 rounded-full font-semibold transition-all duration-300 relative overflow-hidden`}
                    style={{
                      color: isScrolled ? "#8B6F47" : "#FFFFFF",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #D4A574 0%, #C69563 100%)",
                      }}
                    ></div>
                    <span className="relative z-10 text-sm group-hover:text-white">
                      Home
                    </span>
                  </a>

                  {/* Services Mega Menu */}
                  <div
                    className="relative"
                    onMouseEnter={() => handleMenuEnter("services")}
                    onMouseLeave={handleMenuLeave}
                  >
                    <button
                      className={`group px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 relative overflow-hidden`}
                      style={{
                        color: isScrolled ? "#8B6F47" : "#FFFFFF",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #D4A574 0%, #C69563 100%)",
                        }}
                      ></div>
                      <span className="relative z-10 text-sm group-hover:text-white">
                        Services
                      </span>
                      <FaChevronDown
                        className={`relative z-10 text-xs transition-transform duration-300 group-hover:text-white ${
                          activeMenu === "services" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeMenu === "services" && (
                      <div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-[900px] max-w-[90vw] animate-fadeIn z-[99999]"
                        onMouseEnter={() => handleMenuEnter("services")}
                        onMouseLeave={handleMenuLeave}
                      >
                        <div
                          className="rounded-3xl shadow-2xl border overflow-hidden backdrop-blur-xl"
                          style={{
                            background:
                              "linear-gradient(135deg, #FFFFFF 0%, #FEF5EE 100%)",
                            borderColor: "#FBD9BF",
                          }}
                        >
                          {/* Tabs */}
                          <div
                            className="flex border-b p-2 gap-2"
                            style={{
                              borderColor: "#FBD9BF",
                              backgroundColor: "#FFFFFF",
                            }}
                          >
                            {serviceCategories.map((category, index) => (
                              <button
                                key={index}
                                onMouseEnter={() => setActiveServiceTab(index)}
                                className={`group/tab flex-1 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 relative`}
                                style={{
                                  color:
                                    activeServiceTab === index
                                      ? "#8B6F47"
                                      : "#6B5744",
                                }}
                              >
                                <div
                                  className={`absolute inset-0 transition-opacity duration-300 rounded-xl`}
                                  style={{
                                    backgroundColor: "#FBD9BF",
                                    opacity: activeServiceTab === index ? 1 : 0,
                                  }}
                                ></div>

                                <div className="relative z-10 flex flex-col items-center gap-1.5">
                                  <div className="text-2xl">
                                    {category.icon}
                                  </div>
                                  <span className="text-xs relative">
                                    {category.title}
                                    <span
                                      className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 origin-left ${
                                        activeServiceTab === index
                                          ? "scale-x-100"
                                          : "scale-x-0 group-hover/tab:scale-x-100"
                                      }`}
                                      style={{ backgroundColor: "#C69563" }}
                                    ></span>
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>

                          {/* Content */}
                          <div className="p-8">
                            <div className="mb-6">
                              <h3
                                className="text-2xl font-bold mb-2"
                                style={{ color: "#6B5744" }}
                              >
                                {serviceCategories[activeServiceTab].title}
                              </h3>
                              <p style={{ color: "#8B7355" }}>
                                {
                                  serviceCategories[activeServiceTab]
                                    .description
                                }
                              </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                              {serviceCategories[activeServiceTab].services.map(
                                (service, idx) => (
                                  <a
                                    key={idx}
                                    href="#"
                                    className="group/card p-4 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden bg-white"
                                    style={{
                                      borderColor: "#FBD9BF",
                                    }}
                                  >
                                    <div
                                      className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                                      style={{
                                        backgroundColor:
                                          "rgba(251, 217, 191, 0.3)",
                                      }}
                                    ></div>

                                    <div className="relative z-10">
                                      <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-3 group-hover/card:scale-110 transition-all duration-300 shadow-sm"
                                        style={{
                                          backgroundColor: "#FBD9BF",
                                          color: "#8B6F47",
                                        }}
                                      >
                                        {service.icon}
                                      </div>
                                      <h4
                                        className="font-bold mb-1 relative inline-block"
                                        style={{ color: "#6B5744" }}
                                      >
                                        {service.name}
                                        <span
                                          className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-left"
                                          style={{ backgroundColor: "#C69563" }}
                                        ></span>
                                      </h4>
                                      <p
                                        className="text-xs"
                                        style={{ color: "#8B7355" }}
                                      >
                                        {service.description}
                                      </p>
                                    </div>
                                  </a>
                                )
                              )}
                            </div>

                            <div
                              className="p-6 rounded-2xl flex justify-between items-center border"
                              style={{
                                backgroundColor: "#FBD9BF",
                                borderColor: "#F0CBA8",
                              }}
                            >
                              <div>
                                <p
                                  className="font-bold text-lg mb-1"
                                  style={{ color: "#6B5744" }}
                                >
                                  Ready to get started?
                                </p>
                                <p
                                  className="text-sm"
                                  style={{ color: "#8B6F47" }}
                                >
                                  Let's bring your vision to life
                                </p>
                              </div>
                              <button
                                className="px-6 py-3 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white"
                                style={{
                                  background:
                                    "linear-gradient(135deg, #C69563 0%, #B88552 100%)",
                                }}
                              >
                                Contact Us
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Case Studies Mega Menu */}
                  <div
                    className="relative"
                    onMouseEnter={() => handleMenuEnter("cases")}
                    onMouseLeave={handleMenuLeave}
                  >
                    <button
                      className={`group px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 relative overflow-hidden`}
                      style={{
                        color: isScrolled ? "#8B6F47" : "#FFFFFF",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #D4A574 0%, #C69563 100%)",
                        }}
                      ></div>
                      <span className="relative z-10 text-sm group-hover:text-white">
                        Case Studies
                      </span>
                      <FaChevronDown
                        className={`relative z-10 text-xs transition-transform duration-300 group-hover:text-white ${
                          activeMenu === "cases" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeMenu === "cases" && (
                      <div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-[900px] max-w-[90vw] animate-fadeIn z-[99999]"
                        onMouseEnter={() => handleMenuEnter("cases")}
                        onMouseLeave={handleMenuLeave}
                      >
                        <div
                          className="rounded-3xl shadow-2xl border overflow-hidden backdrop-blur-xl"
                          style={{
                            background:
                              "linear-gradient(135deg, #FFFFFF 0%, #FEF5EE 100%)",
                            borderColor: "#FBD9BF",
                          }}
                        >
                          {/* Tabs */}
                          <div
                            className="flex border-b p-2 gap-2"
                            style={{
                              borderColor: "#FBD9BF",
                              backgroundColor: "#FFFFFF",
                            }}
                          >
                            {caseStudyCategories.map((category, index) => (
                              <button
                                key={index}
                                onMouseEnter={() => setActiveCaseTab(index)}
                                className={`group/tab flex-1 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 relative`}
                                style={{
                                  color:
                                    activeCaseTab === index
                                      ? "#8B6F47"
                                      : "#6B5744",
                                }}
                              >
                                <div
                                  className={`absolute inset-0 transition-opacity duration-300 rounded-xl`}
                                  style={{
                                    backgroundColor: "#FBD9BF",
                                    opacity: activeCaseTab === index ? 1 : 0,
                                  }}
                                ></div>

                                <div className="relative z-10 flex flex-col items-center gap-1.5">
                                  <div className="text-2xl">
                                    {category.icon}
                                  </div>
                                  <span className="text-xs relative">
                                    {category.title}
                                    <span
                                      className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 origin-left ${
                                        activeCaseTab === index
                                          ? "scale-x-100"
                                          : "scale-x-0 group-hover/tab:scale-x-100"
                                      }`}
                                      style={{ backgroundColor: "#C69563" }}
                                    ></span>
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>

                          {/* Content */}
                          <div className="p-8">
                            <div className="mb-6">
                              <h3
                                className="text-2xl font-bold mb-2"
                                style={{ color: "#6B5744" }}
                              >
                                {caseStudyCategories[activeCaseTab].title}
                              </h3>
                              <p style={{ color: "#8B7355" }}>
                                {caseStudyCategories[activeCaseTab].description}
                              </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                              {caseStudyCategories[activeCaseTab].cases.map(
                                (caseStudy, idx) => (
                                  <a
                                    key={idx}
                                    href="#"
                                    className="group/card p-4 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden bg-white"
                                    style={{
                                      borderColor: "#FBD9BF",
                                    }}
                                  >
                                    <div
                                      className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                                      style={{
                                        backgroundColor:
                                          "rgba(251, 217, 191, 0.3)",
                                      }}
                                    ></div>

                                    <div className="relative z-10">
                                      <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-3 group-hover/card:scale-110 transition-all duration-300 shadow-sm"
                                        style={{
                                          backgroundColor: "#FBD9BF",
                                          color: "#8B6F47",
                                        }}
                                      >
                                        {
                                          caseStudyCategories[activeCaseTab]
                                            .icon
                                        }
                                      </div>
                                      <h4
                                        className="font-bold mb-1 text-sm relative inline-block"
                                        style={{ color: "#6B5744" }}
                                      >
                                        {caseStudy.title}
                                        <span
                                          className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-left"
                                          style={{ backgroundColor: "#C69563" }}
                                        ></span>
                                      </h4>
                                      <div
                                        className="flex items-center gap-2 text-xs mb-2"
                                        style={{ color: "#8B7355" }}
                                      >
                                        <FaBriefcase className="text-xs" />
                                        <span>{caseStudy.client}</span>
                                      </div>
                                      {/* <div 
                                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold text-white"
                                      style={{
                                        background: 'linear-gradient(135deg, #C69563 0%, #B88552 100%)'
                                      }}
                                    >
                                      <FaChartLine className="text-xs" />
                                      {caseStudy.result}
                                    </div> */}
                                    </div>
                                  </a>
                                )
                              )}
                            </div>

                            <div
                              className="p-6 rounded-2xl flex justify-between items-center border"
                              style={{
                                backgroundColor: "#FBD9BF",
                                borderColor: "#F0CBA8",
                              }}
                            >
                              <div>
                                <p
                                  className="font-bold text-lg mb-1"
                                  style={{ color: "#6B5744" }}
                                >
                                  Explore more success stories
                                </p>
                                <p
                                  className="text-sm"
                                  style={{ color: "#8B6F47" }}
                                >
                                  See how we've helped businesses grow
                                </p>
                              </div>
                              <button
                                className="px-6 py-3 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white"
                                style={{
                                  background:
                                    "linear-gradient(135deg, #C69563 0%, #B88552 100%)",
                                }}
                              >
                                View All Cases
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <a
                    href="#"
                    className={`group px-5 py-2.5 rounded-full font-semibold transition-all duration-300 relative overflow-hidden`}
                    style={{
                      color: isScrolled ? "#8B6F47" : "#FFFFFF",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #D4A574 0%, #C69563 100%)",
                      }}
                    ></div>
                    <span className="relative z-10 text-sm group-hover:text-white">
                      About
                    </span>
                  </a>

                  <a
                    href="#"
                    className={`group px-5 py-2.5 rounded-full font-semibold transition-all duration-300 relative overflow-hidden`}
                    style={{
                      color: isScrolled ? "#8B6F47" : "#FFFFFF",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #D4A574 0%, #C69563 100%)",
                      }}
                    ></div>
                    <span className="relative z-10 text-sm group-hover:text-white">
                      Blog
                    </span>
                  </a>

                  <a
                    href="#"
                    className={`group px-5 py-2.5 rounded-full font-semibold transition-all duration-300 relative overflow-hidden`}
                    style={{
                      color: isScrolled ? "#8B6F47" : "#FFFFFF",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #D4A574 0%, #C69563 100%)",
                      }}
                    ></div>
                    <span className="relative z-10 text-sm group-hover:text-white">
                      Contact
                    </span>
                  </a>
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                  <button
                    className="relative group px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 font-bold text-xs sm:text-sm hover:scale-110 overflow-hidden text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #C69563 0%, #B88552 100%)",
                      boxShadow: "0 10px 25px rgba(198, 149, 99, 0.3)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, #B88552 0%, #AA7641 100%)",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <span className="relative z-10 flex items-center gap-2">
                      <FaRocket className="group-hover:rotate-45 transition-transform duration-500" />
                      Get Started
                      <FaMagic className="group-hover:rotate-180 transition-transform duration-500" />
                    </span>
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className={`lg:hidden p-2 rounded-xl transition-all duration-300`}
                  style={{
                    color: isScrolled ? "#8B6F47" : "#FFFFFF",
                  }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="text-xl" />
                  ) : (
                    <FaBars className="text-xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div
                className="lg:hidden border-t px-4 sm:px-6 py-6 rounded-b-3xl animate-slideDown max-h-[80vh] overflow-y-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #FBD9BF 0%, #F5D4B8 100%)",
                  borderColor: "#F0CBA8",
                }}
              >
                <nav className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="font-semibold py-2 px-4 rounded-lg transition"
                    style={{ color: "#6B5744" }}
                  >
                    Home
                  </a>

                  {/* Mobile Services */}
                  <div>
                    <h4
                      className="font-bold mb-3 text-sm px-4"
                      style={{ color: "#6B5744" }}
                    >
                      Services
                    </h4>
                    <div className="space-y-2">
                      {serviceCategories.map((category, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg border p-3 transition-colors duration-300"
                          style={{ borderColor: "#FBD9BF" }}
                        >
                          <h5
                            className="font-semibold text-sm mb-2 flex items-center gap-2"
                            style={{ color: "#6B5744" }}
                          >
                            <span className="text-lg">{category.icon}</span>
                            {category.title}
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                            {category.services.map((service, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="block text-xs py-1.5 px-2 rounded transition-all duration-300"
                                style={{ color: "#8B6F47" }}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-sm">
                                    {service.icon}
                                  </span>
                                  <span>{service.name}</span>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Case Studies */}
                  <div>
                    <h4
                      className="font-bold mb-3 text-sm px-4"
                      style={{ color: "#6B5744" }}
                    >
                      Case Studies
                    </h4>
                    <div className="space-y-2">
                      {caseStudyCategories.map((category, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg border p-3 transition-colors duration-300"
                          style={{ borderColor: "#FBD9BF" }}
                        >
                          <h5
                            className="font-semibold text-sm mb-2 flex items-center gap-2"
                            style={{ color: "#6B5744" }}
                          >
                            <span className="text-lg">{category.icon}</span>
                            {category.title}
                          </h5>
                          <div className="grid grid-cols-1 gap-2 pl-7">
                            {category.cases
                              .slice(0, 3)
                              .map((caseStudy, idx) => (
                                <a
                                  key={idx}
                                  href="#"
                                  className="block text-xs py-2 px-2 rounded transition-all duration-300"
                                  style={{ color: "#8B6F47" }}
                                >
                                  <div className="flex items-start gap-2">
                                    <FaBriefcase className="text-xs mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-semibold">
                                        {caseStudy.title}
                                      </div>
                                      <div
                                        className="text-[10px] mt-0.5"
                                        style={{ color: "#A08060" }}
                                      >
                                        {caseStudy.result}
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="border-t pt-4 space-y-2"
                    style={{ borderColor: "#F0CBA8" }}
                  >
                    <a
                      href="#"
                      className="block font-semibold py-2 px-4 rounded-lg"
                      style={{ color: "#6B5744" }}
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="block font-semibold py-2 px-4 rounded-lg"
                      style={{ color: "#6B5744" }}
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="block font-semibold py-2 px-4 rounded-lg"
                      style={{ color: "#6B5744" }}
                    >
                      Contact
                    </a>
                  </div>

                  <button
                    className="px-6 py-3 rounded-full font-bold transition mt-4 w-full text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #C69563 0%, #B88552 100%)",
                    }}
                  >
                    Get Started
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 80vh;
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
