import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Heart, Rocket } from 'lucide-react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About TechyAutomate
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your AI Partner for Smarter, Scalable Growth
          </p>
        </div>
      </section>

      {/* Who We Are & Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                TechyAutomate is a forward-thinking AI solutions startup on a mission to empower 
                small and medium businesses with affordable, cutting-edge automation. Born from a 
                passion for democratizing technology, we bridge the gap between complex AI innovation 
                and the everyday challenges faced by growing companies.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                The seeds of TechyAutomate were planted when our founders recognized a glaring gap: 
                while AI reshaped industries, SMEs were often left behind due to costly, overly 
                technical solutions. We set out to change that.
              </p>
              <p className="text-gray-600">
                As a new-generation AI partner, we focus on simplicity, agility, and results. 
                We don't just build tools—we craft tailored strategies that align with your budget, 
                team size, and ambitions. Whether you're automating workflows or unlocking data 
                insights, we're here to make AI work for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose TechyAutomate?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            As a startup ourselves, we understand the hustle. Here's why SMEs trust us:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Built for Lean Teams',
                desc: 'Our solutions integrate seamlessly, require minimal training, and scale as you grow.'
              },
              {
                icon: Shield,
                title: 'No Legacy, Just Innovation',
                desc: 'Unburdened by outdated systems, we leverage the latest AI frameworks.'
              },
              {
                icon: Heart,
                title: 'Your Goals, Our Blueprint',
                desc: 'We start by listening, ensuring every solution aligns with your unique needs.'
              },
              {
                icon: Rocket,
                title: 'Transparent & Ethical',
                desc: 'We prioritize data security, explainable AI, and pricing with no hidden fees.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <item.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Agility Over Bureaucracy',
                desc: 'Move fast, adapt faster. We design solutions that evolve with your business.'
              },
              {
                title: 'Empathy-Driven Technology',
                desc: 'We solve real problems, not just push products.'
              },
              {
                title: 'Collaborative Success',
                desc: 'Your wins are our wins. We measure success by the value we create for you.'
              },
              {
                title: 'Fearless Innovation',
                desc: `Pioneering AI that's accessible, not intimidating.`
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Client Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'E-commerce',
                impact: 'Boosted sales by 40% with AI-driven inventory forecasting.'
              },
              {
                industry: 'Healthcare',
                impact: 'Reduced patient wait times by 60% using smart scheduling bots.'
              },
              {
                industry: 'Logistics',
                impact: 'Slashed fuel costs by 25% through route optimization AI.'
              }
            ].map((case_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">{case_.industry}</h3>
                <p className="text-gray-600">{case_.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your AI Journey?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="mt-8 text-blue-100 text-sm">
            Proudly serving ambitious SMEs across industries • Committed to ethical AI practices • 
            Designed with ❤️ for businesses that dare to innovate
          </p>
        </div>
      </section>
    </div>
  );
}