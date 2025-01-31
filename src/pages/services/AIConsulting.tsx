import React, { useEffect } from 'react';
import { Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AIConsulting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Lightbulb className="w-16 h-16 mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Consulting</h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              Strategic Guidance for Future-Ready Businesses
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
                Transform your business with tailored AI strategies. We align cutting-edge AI solutions 
                with your unique objectives, ensuring seamless integration and measurable growth. 
                From ideation to execution, our experts guide you every step of the way.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Custom AI roadmaps for your industry',
                    'Risk assessment and ROI analysis',
                    'Vendor-agnostic recommendations',
                    'Ongoing optimization support'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Success Story</h3>
                <p className="text-gray-700">
                  "Helped a retail chain predict demand with 95% accuracy, resulting in 30% 
                  reduction in inventory costs and improved customer satisfaction."
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-6">
                Schedule a consultation with our AI experts and discover how we can help you 
                achieve your business goals.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  Schedule a Consultation
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