import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi'

export default function Home() {
  const services = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Streamline repetitive tasks and eliminate manual errors with intelligent automation solutions.',
      href: '/services/process-automation',
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Workflow Optimization',
      description: 'Optimize your business workflows to improve efficiency and reduce operational costs.',
      href: '/services/workflow-optimization',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Custom Solutions',
      description: 'Tailored automation solutions designed specifically for your business needs and challenges.',
      href: '/services/custom-solutions',
    },
  ]

  const benefits = [
    'Reduce operational costs by up to 30%',
    'Improve accuracy and eliminate human error',
    'Scale operations without proportional cost increases',
    'Free up team members for strategic work',
    'Gain better insights into business performance',
    'Faster time-to-market for new initiatives',
  ]

  const stats = [
    { number: '30%', label: 'Average Cost Reduction' },
    { number: '50+', label: 'Successful Projects' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Automated Operations' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-navy-darker text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-grey-cool to-white">
                Intelligent Automation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-grey-cool mb-8 leading-relaxed">
              Break barriers and build your future with NovaZphere Solutions. We help businesses
              streamline operations, reduce costs by 30%, and scale efficiently through expert
              automation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-navy-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-grey-cool transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Request Free Consultation</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-dark transition-colors flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-grey-light">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-navy-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-grey-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Our Automation Services
            </h2>
            <p className="text-lg text-grey-medium max-w-2xl mx-auto">
              Comprehensive automation solutions designed to transform your business operations
              and drive measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-grey-light rounded-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-navy-medium mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-navy-dark mb-3">{service.title}</h3>
                <p className="text-grey-medium mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-navy-medium font-semibold hover:text-navy-dark flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 bg-navy-medium text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-dark transition-colors"
            >
              <span>View All Services</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-grey-light to-grey-cool">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">
                Why Choose Business Automation?
              </h2>
              <p className="text-lg text-grey-medium mb-8">
                Automation isn&apos;t just about technology—it&apos;s about transforming your business
                to operate more efficiently, accurately, and profitably.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <FiCheckCircle className="text-navy-medium flex-shrink-0 mt-1" size={24} />
                    <span className="text-navy-darkest">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-navy-dark mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-grey-medium mb-6">
                  Schedule a free consultation to discover how automation can transform your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-navy-medium text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-dark transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Build Your Automated Future
          </h2>
          <p className="text-xl text-grey-cool mb-8 max-w-2xl mx-auto">
            Join leading companies that have transformed their operations with NovaZphere Solutions.
            Get started today with a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-navy-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-grey-cool transition-colors shadow-lg"
          >
            <span>Get Started Today</span>
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
