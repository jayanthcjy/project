import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Brain, Cpu, Cog, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const servicesRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Scroll to services section if hash is present
  React.useEffect(() => {
    if (location.hash === '#services' && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const services = [
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic guidance to implement AI solutions that align with your business goals.',
      path: '/services/ai-consulting',
      iconColor: 'text-blue-600',
      hoverColor: 'hover:text-blue-500',
      textColor: 'text-blue-600'
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Custom ML models that turn your data into actionable insights.',
      path: '/services/machine-learning',
      iconColor: 'text-purple-600',
      hoverColor: 'hover:text-purple-500',
      textColor: 'text-purple-600'
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions.',
      path: '/services/process-automation',
      iconColor: 'text-emerald-600',
      hoverColor: 'hover:text-emerald-500',
      textColor: 'text-emerald-600'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900 opacity-90" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering Tomorrow with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 mt-4">
                <TypeAnimation
                  sequence={[
                    'Intelligent Automation',
                    2000,
                    'AI Solutions',
                    2000,
                    'Machine Learning',
                    2000,
                    'Process Optimization',
                    2000,
                  ]}
                  speed={50}
                  deletionSpeed={70}
                  repeat={Infinity}
                  className="block"
                />
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with cutting-edge AI solutions that drive innovation,
              efficiency, and growth.
            </p>
            <button 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transformative AI Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how our AI-powered services can revolutionize your business operations
              and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200"
              >
                <service.icon className={`h-12 w-12 ${service.iconColor} mb-6`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.path}
                  className={`inline-flex items-center ${service.textColor} ${service.hoverColor}`}
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our clients say about their experience working with TechyAutomate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CTO, TechCorp',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
                quote:
                  'TechyAutomate transformed our operations with their AI solutions. The results exceeded our expectations.',
              },
              {
                name: 'Michael Chen',
                role: 'CEO, InnovateX',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
                quote:
                  'Their expertise in AI consulting helped us navigate complex challenges and achieve remarkable growth.',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Director of Innovation, FutureTech',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
                quote:
                  'The automation solutions provided by TechyAutomate have significantly improved our efficiency.',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Ahead with AI Insights
            </h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter for the latest updates on AI technology and industry trends.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}