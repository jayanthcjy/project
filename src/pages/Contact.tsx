import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact TechyAutomate
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how AI can transform your business
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">contact@techyautomate.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Office</h4>
                      <p className="text-gray-600">
                        123 AI Innovation Blvd<br />
                        Tech Valley, CA 94016
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Schedule a Consultation</h3>
                <p className="mb-6">
                  Book a free 30-minute consultation with our AI experts to discuss
                  your business needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50"
                >
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready for AI Transformation?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            Start Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}