import React, { useEffect } from 'react';
import { Briefcase, ArrowRight, MapPin, Clock, Banknote, GraduationCap } from 'lucide-react';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote (Global)',
      type: 'Full-time',
      salary: '$120k - $180k',
      requirements: [
        '5+ years experience in AI/ML development',
        'Strong background in deep learning frameworks',
        'Experience with NLP and computer vision',
        'Track record of deploying AI models to production'
      ],
      description: 'Lead the development of advanced AI solutions for enterprise clients.'
    },
    {
      title: 'AI Solutions Architect',
      location: 'Hybrid (New York)',
      type: 'Full-time',
      salary: '$140k - $200k',
      requirements: [
        '7+ years of software architecture experience',
        'Deep understanding of AI/ML systems',
        'Strong client communication skills',
        'Experience with cloud platforms (AWS/Azure/GCP)'
      ],
      description: 'Design and implement scalable AI solutions for Fortune 500 companies.'
    },
    {
      title: 'Mid-Level ML Engineer',
      location: 'Remote (US/EU)',
      type: 'Full-time',
      salary: '$90k - $130k',
      requirements: [
        '3+ years ML engineering experience',
        'Strong Python and ML framework knowledge',
        'Experience with model deployment',
        'Good understanding of MLOps'
      ],
      description: 'Develop and deploy machine learning models for various business applications.'
    },
    {
      title: 'Junior AI Developer',
      location: 'Remote (Global)',
      type: 'Full-time',
      salary: '$70k - $90k',
      requirements: [
        'BS/MS in Computer Science or related field',
        'Strong programming skills in Python',
        'Understanding of ML fundamentals',
        'Eager to learn and grow in AI'
      ],
      description: 'Join our team to build and maintain AI applications while learning from experts.'
    },
    {
      title: 'AI Research Intern',
      location: 'Remote',
      type: 'Internship',
      salary: '$30/hour',
      requirements: [
        'Currently pursuing MS/PhD in AI/ML',
        'Strong mathematical background',
        'Research experience in AI/ML',
        'Publication record is a plus'
      ],
      description: 'Work on cutting-edge AI research projects with our R&D team.'
    },
    {
      title: 'AI Graduate Trainee',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      salary: '$60k - $75k',
      requirements: [
        'Recent graduate in CS/AI/ML',
        'Strong fundamentals in programming',
        'Basic understanding of ML concepts',
        'Excellent problem-solving skills'
      ],
      description: 'Start your AI career with our comprehensive training program.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Briefcase className="w-16 h-16 mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              Build the Future of AI with Us
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Join TechyAutomate?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'Work on cutting-edge AI projects that shape industries.'
              },
              {
                title: 'Growth & Learning',
                description: 'Continuous learning with access to advanced training and certifications.'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible schedules and remote-first culture for optimal productivity.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">{job.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                      <Banknote className="w-4 h-4 mr-1" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Requirements
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              'Competitive Salary & Equity',
              'Health & Wellness Benefits',
              'Remote Work Options',
              'Learning Budget',
              'Flexible Time Off',
              'Latest Tech Equipment',
              'Team Retreats',
              'Career Growth Path'
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                <p className="text-gray-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}