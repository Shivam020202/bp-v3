import { useState, useEffect, useRef } from 'react';

const ClientShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);

  const filters = ['All', 'Technology', 'Media', 'E-commerce', 'Healthcare', 'Education'];

  const clients = [
    { name: 'Realme', category: 'Technology' },
    { name: 'ZeeTV', category: 'Media' },
    { name: 'Dance Plus', category: 'Media' },
    { name: 'Apollo Tyres', category: 'Technology' },
    { name: 'Mojarto', category: 'E-commerce' },
    { name: 'Oda Class', category: 'Education' },
    { name: 'Usha', category: 'Technology' },
    { name: 'Cuckoo Korea', category: 'E-commerce' },
    { name: 'DBC', category: 'Technology' },
    { name: 'NDTV', category: 'Media' },
    { name: 'Sailax Global', category: 'E-commerce' },
    { name: 'Medanta', category: 'Healthcare' },
    { name: 'Artemis Hospital', category: 'Healthcare' },
    { name: 'Telelac', category: 'Healthcare' },
    { name: 'Janani Hospital', category: 'Healthcare' },
    { name: 'Amrita Hospital', category: 'Healthcare' },
    { name: 'Shopify Partner', category: 'E-commerce' },
    { name: 'WordPress', category: 'Technology' },
  ];

  const filteredClients = activeFilter === 'All' 
    ? clients 
    : clients.filter(client => client.category === activeFilter);

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

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm text-gray-400 mb-4 tracking-wider uppercase font-medium">
            Don't just take our word for it
          </p>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hear from those who've
            <br />
            <span className="text-white">Witnessed the Growth!</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white border border-zinc-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Client Grid with Enhanced Borders */}
        <div 
          className={`relative transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Outer Container with Thicker Border */}
          <div className="relative rounded-lg overflow-hidden" style={{
            border: '2px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
          }}>
            {/* Grid Container */}
            <div 
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
            >
              {filteredClients.map((client, index) => {
                const row = Math.floor(index / 6);
                const col = index % 6;
                const isLastInRow = col === 5;
                const totalRows = Math.ceil(filteredClients.length / 6);
                const isLastRow = row === totalRows - 1;

                return (
                  <div
                    key={index}
                    className="group relative aspect-square flex items-center justify-center p-8 bg-black transition-all duration-500 hover:bg-zinc-900/50"
                  >
                    {/* Right Border with Enhanced Fade and Curve Effect */}
                    {!isLastInRow && (
                      <>
                        {/* Main Border Line - Thicker */}
                        <div 
                          className="absolute top-0 right-0 h-full"
                          style={{
                            width: '2px',
                            background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.25) 10%, rgba(255, 255, 255, 0.25) 90%, transparent 100%)',
                            filter: 'blur(0.5px)'
                          }}
                        />
                        {/* Glow Layer for Border */}
                        <div 
                          className="absolute top-0 right-0 h-full"
                          style={{
                            width: '4px',
                            background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.1) 90%, transparent 100%)',
                            filter: 'blur(2px)',
                            transform: 'translateX(1px)'
                          }}
                        />
                      </>
                    )}

                    {/* Bottom Border with Enhanced Fade and Curve Effect */}
                    {!isLastRow && (
                      <>
                        {/* Main Border Line - Thicker */}
                        <div 
                          className="absolute bottom-0 left-0 w-full"
                          style={{
                            height: '2px',
                            background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.25) 10%, rgba(255, 255, 255, 0.25) 90%, transparent 100%)',
                            filter: 'blur(0.5px)'
                          }}
                        />
                        {/* Glow Layer for Border */}
                        <div 
                          className="absolute bottom-0 left-0 w-full"
                          style={{
                            height: '4px',
                            background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.1) 90%, transparent 100%)',
                            filter: 'blur(2px)',
                            transform: 'translateY(1px)'
                          }}
                        />
                      </>
                    )}

                    {/* Enhanced Glowing Intersection Point - Bottom Right */}
                    {!isLastInRow && !isLastRow && (
                      <>
                        {/* Bright Core Glow */}
                        <div 
                          className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 z-10"
                          style={{
                            width: '6px',
                            height: '6px',
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 30%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(1px)',
                            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.4)'
                          }}
                        />
                        {/* Outer Glow Halo */}
                        <div 
                          className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
                          style={{
                            width: '12px',
                            height: '12px',
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 40%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(3px)'
                          }}
                        />
                        {/* Extended Glow */}
                        <div 
                          className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
                          style={{
                            width: '20px',
                            height: '20px',
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
                            borderRadius: '50%',
                            filter: 'blur(4px)'
                          }}
                        />
                      </>
                    )}

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Logo Container - Text-based design */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <div className="text-center group-hover:scale-110 transition-all duration-500">
                        <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center mb-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="text-white font-bold text-lg">
                            {client.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-white text-xs font-medium opacity-50 group-hover:opacity-100 transition-opacity duration-500 leading-tight">
                          {client.name}
                        </span>
                      </div>
                    </div>

                    {/* Tooltip on Hover */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <span className="text-xs text-gray-300 font-medium whitespace-nowrap bg-zinc-900/90 px-3 py-1 rounded-full">
                        {client.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA or Stats */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">1000+</h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-400 text-sm">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
