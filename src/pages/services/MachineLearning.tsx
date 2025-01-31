import React, { useEffect } from 'react';
import { Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MachineLearning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Cpu className="w-16 h-16 mb-6 text-purple-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Machine Learning</h1>
            <p className="text-xl text-purple-200 max-w-2xl">
              Data-Driven Intelligence for Smarter Decisions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Unlock the full potential of your data with bespoke machine learning models. 
                We design, train, and deploy solutions that transform raw information into 
                predictive power, driving innovation and competitive advantage.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'End-to-end ML pipelines',
                    'Custom algorithms for your needs',
                    'Industry-specific solutions',
                    'Scalable cloud-based models',
                    'Real-time monitoring and retraining'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Success Story</h3>
                <p className="text-gray-700">
                  "Improved customer retention by 35% for a fintech client using predictive 
                  analytics and personalized recommendation systems."
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'PyTorch', 'AWS SageMaker', 'scikit-learn'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white border border-gray-200 text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Build Your ML Solution?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us to discuss how machine learning can solve your business challenges.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                >
                  Build Your Model
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}