import { FaUsers, FaRocket, FaCrown, FaChartLine } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            About Branding Pioneers
          </h2>
          <p className="text-lg text-amber-700/80 max-w-3xl mx-auto">
            We are a creative digital marketing agency dedicated to helping brands achieve excellence through innovative strategies and cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-amber-200/50">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">500+</h3>
            <p className="text-amber-700/70">Happy Clients</p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-amber-200/50">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRocket className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">1000+</h3>
            <p className="text-amber-700/70">Projects Launched</p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-amber-200/50">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCrown className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">50+</h3>
            <p className="text-amber-700/70">Awards Won</p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-amber-200/50">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaChartLine className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">95%</h3>
            <p className="text-amber-700/70">Success Rate</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-amber-900 mb-6">
              Our Mission
            </h3>
            <p className="text-amber-700/80 mb-6 leading-relaxed">
              We believe that every brand has a unique story to tell. Our mission is to help businesses discover their voice and connect with their audience through powerful digital experiences that drive growth and success.
            </p>
            <p className="text-amber-700/80 mb-8 leading-relaxed">
              With a team of experienced professionals, we combine creativity with data-driven insights to deliver results that exceed expectations and transform businesses.
            </p>
            <button className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More About Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200/50">
              <h4 className="font-bold text-amber-900 mb-3">Creative Design</h4>
              <p className="text-sm text-amber-700/70">
                Beautiful, functional designs that capture your brand essence and engage your audience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200/50">
              <h4 className="font-bold text-amber-900 mb-3">Digital Strategy</h4>
              <p className="text-sm text-amber-700/70">
                Data-driven strategies that maximize your ROI and accelerate business growth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200/50">
              <h4 className="font-bold text-amber-900 mb-3">Brand Development</h4>
              <p className="text-sm text-amber-700/70">
                Complete brand identity solutions that establish trust and recognition.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200/50">
              <h4 className="font-bold text-amber-900 mb-3">Performance Marketing</h4>
              <p className="text-sm text-amber-700/70">
                Results-focused campaigns that deliver measurable outcomes and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;