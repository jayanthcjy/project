import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CalendarDays, Tag, MessageSquare } from 'lucide-react';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Automating Customer Service with AI Chatbots',
      excerpt: 'Discover how intelligent chatbots are revolutionizing customer interactions while reducing operational costs.',
      category: 'AI Solutions',
      date: 'March 15, 2024',
      readTime: '6 min read'
    },
    {
      id: 2,
      title: 'The Future of Predictive Maintenance in Manufacturing',
      excerpt: 'Explore how machine learning models are predicting equipment failures before they happen.',
      category: 'Industry 4.0',
      date: 'March 12, 2024',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Ethical AI: Building Responsible Machine Learning Models',
      excerpt: 'Understanding the importance of bias detection and ethical considerations in AI development.',
      category: 'AI Ethics',
      date: 'March 10, 2024',
      readTime: '5 min read'
    },
    {
      id: 4,
      title: 'Optimizing Supply Chains with Neural Networks',
      excerpt: 'How deep learning is transforming logistics and inventory management for SMEs.',
      category: 'Supply Chain',
      date: 'March 8, 2024',
      readTime: '7 min read'
    }
  ];

  const categories = [
    'AI Implementation',
    'Machine Learning',
    'Business Automation',
    'Data Analytics',
    'Ethical AI',
    'Case Studies'
  ];

  const recentPosts = [
    'AI in Healthcare: Revolutionizing Patient Care',
    'Building Custom NLP Models for E-commerce',
    'Cost-Benefit Analysis of RPA Implementation'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            TechyAutomate Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights & Innovations in Artificial Intelligence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map(post => (
                  <article key={post.id} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center text-sm text-blue-600 mb-3">
                      <Tag className="h-4 w-4 mr-2" />
                      <span>{post.category}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to="#" className="text-gray-600 hover:text-blue-600">
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                  Recent Posts
                </h3>
                <ul className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <li key={index} className="text-gray-600 hover:text-blue-600">
                      <Link to="#">{post}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Stay Updated with AI Innovations
          </h2>
          <Link
            to="/subscribe"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="mt-8 text-blue-100 text-sm">
            Get cutting-edge AI insights delivered to your inbox • Join 10,000+ industry professionals •
            Never miss an update on AI advancements
          </p>
        </div>
      </section>
    </div>
  );
}