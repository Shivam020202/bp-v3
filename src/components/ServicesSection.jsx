import { useState, useEffect, useRef } from 'react';
import { FaPalette, FaCode, FaChartLine, FaVideo, FaArrowRight } from 'react-icons/fa';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      number: '01',
      icon: <FaPalette />,
      title: 'Brand & Design',
      subtitle: 'Visual Identity Excellence',
      description: 'Crafting unforgettable brand experiences through strategic design thinking. We create visual identities that resonate deeply with your audience and stand the test of time.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Systems', 'Print & Digital'],
      color: '#FBD9BF',
      accentColor: '#D4A574'
    },
    {
      number: '02',
      icon: <FaCode />,
      title: 'Web Development',
      subtitle: 'Digital Solutions That Convert',
      description: 'Building powerful, scalable web applications with cutting-edge technology. Transform your vision into interactive experiences that drive real business results.',
      features: ['Custom Development', 'E-commerce', 'Web Apps', 'CMS Integration'],
      color: '#F0CBA8',
      accentColor: '#C69563'
    },
    {
      number: '03',
      icon: <FaChartLine />,
      title: 'Digital Marketing',
      subtitle: 'Growth-Driven Strategies',
      description: 'Data-powered marketing campaigns that maximize your ROI. We combine creativity with analytics to deliver measurable results across all channels.',
      features: ['SEO & Content', 'Paid Advertising', 'Social Media', 'Email Marketing'],
      color: '#E5C4A1',
      accentColor: '#B88552'
    },
    {
      number: '04',
      icon: <FaVideo />,
      title: 'Content & Media',
      subtitle: 'Storytelling That Captivates',
      description: 'Creating compelling content that connects with your audience emotionally. From video production to photography, we bring your brand story to life.',
      features: ['Video Production', 'Photography', 'Animation', 'Copywriting'],
      color: '#D4A574',
      accentColor: '#AA7641'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black py-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${services[activeService].color} 0%, transparent 70%)`,
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${services[activeService].accentColor} 0%, transparent 70%)`,
            animation: 'float 25s ease-in-out infinite reverse',
            animationDelay: '2s'
          }}
        ></div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 217, 191, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 217, 191, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FBD9BF]"></div>
            <span 
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: '#FBD9BF' }}
            >
              Our Expertise
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FBD9BF]"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Crafting Digital
            <span 
              className="block mt-2"
              style={{ 
                background: `linear-gradient(135deg, #FBD9BF 0%, #D4A574 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Excellence
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming brands through innovative solutions and strategic creativity
          </p>
        </div>

        {/* Minimal Filter Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {services.map((service, index) => (
            <button
              key={index}
              className={`group relative cursor-pointer transition-all duration-500 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              onClick={() => setActiveService(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Minimal Card Design */}
              <div 
                className={`relative h-full bg-gradient-to-br from-zinc-900 to-black border rounded-2xl overflow-hidden transition-all duration-500 ${
                  activeService === index ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  borderColor: activeService === index ? service.color : 'rgba(251, 217, 191, 0.1)',
                  boxShadow: activeService === index 
                    ? `0 20px 40px rgba(${parseInt(service.color.slice(1, 3), 16)}, ${parseInt(service.color.slice(3, 5), 16)}, ${parseInt(service.color.slice(5, 7), 16)}, 0.3)`
                    : 'none'
                }}
              >
                {/* Active Indicator */}
                {activeService === index && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, ${service.color} 0%, ${service.accentColor} 100%)`
                    }}
                  ></div>
                )}

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color} 0%, ${service.accentColor} 100%)`
                  }}
                ></div>

                <div className="relative p-6 h-full flex flex-col items-center text-center">
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${service.color}20`,
                      color: service.color
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Number Badge */}
                  <span 
                    className="text-xs font-bold mb-3 opacity-60"
                    style={{ color: service.color }}
                  >
                    {service.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:translate-y-[-2px] transition-transform duration-300">
                    {service.title}
                  </h3>

                  {/* Subtitle - Only shown on hover or active */}
                  <p 
                    className={`text-xs transition-all duration-300 ${
                      activeService === index || hoveredCard === index 
                        ? 'opacity-100 max-h-20' 
                        : 'opacity-0 max-h-0'
                    }`}
                    style={{ color: service.accentColor }}
                  >
                    {service.subtitle}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Service Showcase */}
        <div 
          className={`relative overflow-hidden rounded-3xl border transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(24, 24, 27, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)',
            borderColor: services[activeService].color,
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5 transition-all duration-1000"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${services[activeService].color} 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          ></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left Side - Content with Large Number */}
            <div className="flex flex-col justify-center space-y-6 relative">
              {/* Large Background Number */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <span 
                  className="text-[280px] font-bold leading-none transition-all duration-1000"
                  style={{ 
                    color: services[activeService].color,
                    textShadow: `0 0 80px ${services[activeService].color}40`
                  }}
                >
                  {services[activeService].number}
                </span>
              </div>

              {/* Content on top of number */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${services[activeService].color} 0%, ${services[activeService].accentColor} 100%)`,
                      color: '#000'
                    }}
                  >
                    {services[activeService].icon}
                  </div>
                  <div>
                    <span 
                      className="text-sm font-semibold tracking-wider uppercase transition-colors duration-500"
                      style={{ color: services[activeService].color }}
                    >
                      Featured Service
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-1">
                      {services[activeService].title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {services[activeService].description}
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {services[activeService].features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-300"
                      style={{
                        backgroundColor: `${services[activeService].color}10`,
                        borderColor: `${services[activeService].color}30`,
                        transitionDelay: `${idx * 50}ms`
                      }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: services[activeService].accentColor }}
                      ></div>
                      <span className="text-sm font-medium text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="px-8 py-4 rounded-full font-bold text-black hover:scale-105 transition-all duration-500 shadow-lg flex items-center gap-3 group"
                  style={{
                    background: `linear-gradient(135deg, ${services[activeService].color} 0%, ${services[activeService].accentColor} 100%)`
                  }}
                >
                  Start Your Project
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </div>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="relative">
              <div className="relative aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden">
                {/* Image Container with Gradient Background */}
                <div 
                  className="absolute inset-0 transition-all duration-1000"
                  style={{
                    background: `linear-gradient(135deg, ${services[activeService].color}40 0%, ${services[activeService].accentColor}20 100%)`
                  }}
                >
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* You can replace this with an actual image */}
                    <img 
                      src={`/images/service-${services[activeService].number}.jpg`}
                      alt={services[activeService].title}
                      className="w-full h-full object-cover opacity-80"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.target.style.display = 'none';
                      }}
                    />
                    
                    {/* Decorative Elements if no image */}
                    <div className="absolute inset-0">
                      <div 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 opacity-20"
                        style={{ borderColor: services[activeService].color }}
                      ></div>
                      <div 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 opacity-30 animate-pulse"
                        style={{ 
                          borderColor: services[activeService].accentColor,
                          animationDuration: '3s'
                        }}
                      ></div>
                    </div>

                    {/* Animated Elements */}
                    <div className="absolute inset-0">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-32 h-32 rounded-full border-2 animate-ping opacity-20"
                          style={{
                            borderColor: services[activeService].color,
                            top: `${20 + i * 30}%`,
                            right: `${10 + i * 25}%`,
                            animationDuration: `${3 + i}s`,
                            animationDelay: `${i * 0.5}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(to left, transparent 0%, rgba(0,0,0,0.3) 100%)`
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-3 p-6 border-t" style={{ borderColor: 'rgba(251, 217, 191, 0.1)' }}>
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className="group relative"
                aria-label={`View ${service.title}`}
              >
                <div 
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activeService === index ? 'w-16' : 'w-12'
                  }`}
                  style={{
                    backgroundColor: activeService === index 
                      ? services[index].color 
                      : 'rgba(251, 217, 191, 0.2)'
                  }}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
