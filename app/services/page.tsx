import Link from 'next/link'
import { FiArrowRight, FiZap, FiTrendingUp, FiDatabase, FiSettings, FiCpu, FiLink } from 'react-icons/fi'

export const metadata = {
  title: 'Business Automation Services | NovaZphere Solutions',
  description: 'Comprehensive business automation services including process automation, workflow optimization, RPA, and custom solutions.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: <FiZap className="w-10 h-10" />,
      title: 'Process Automation',
      description: 'Automate repetitive, rule-based processes to eliminate manual work, reduce errors, and improve efficiency.',
      href: '/services/process-automation',
      features: ['Task automation', 'Error reduction', 'Time savings', 'Cost optimization'],
    },
    {
      icon: <FiTrendingUp className="w-10 h-10" />,
      title: 'Workflow Optimization',
      description: 'Analyze and optimize your business workflows to eliminate bottlenecks and improve overall productivity.',
      href: '/services/workflow-optimization',
      features: ['Bottleneck identification', 'Process redesign', 'Efficiency improvements', 'Performance metrics'],
    },
    {
      icon: <FiDatabase className="w-10 h-10" />,
      title: 'Data Integration',
      description: 'Seamlessly connect disparate systems and data sources to create a unified, automated data ecosystem.',
      href: '/services/data-integration',
      features: ['System integration', 'Data synchronization', 'API development', 'Real-time updates'],
    },
    {
      icon: <FiSettings className="w-10 h-10" />,
      title: 'Custom Automation Solutions',
      description: 'Tailored automation solutions designed specifically for your unique business requirements and challenges.',
      href: '/services/custom-solutions',
      features: ['Custom development', 'Tailored solutions', 'Scalable architecture', 'Ongoing support'],
    },
    {
      icon: <FiCpu className="w-10 h-10" />,
      title: 'RPA (Robotic Process Automation)',
      description: 'Deploy software robots to handle repetitive tasks, freeing your team for strategic, high-value work.',
      href: '/services/rpa',
      features: ['Bot deployment', 'Task automation', '24/7 operations', 'ROI tracking'],
    },
    {
      icon: <FiLink className="w-10 h-10" />,
      title: 'System Integration',
      description: 'Connect your existing systems and applications to create a cohesive, automated technology ecosystem.',
      href: '/services/system-integration',
      features: ['API integration', 'Legacy system connection', 'Cloud integration', 'Data flow optimization'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark to-navy-medium text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-grey-cool max-w-3xl">
            Comprehensive automation solutions designed to transform your business operations
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-grey-light rounded-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-navy-medium mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-navy-dark mb-3">{service.title}</h3>
                <p className="text-grey-medium mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-2 text-sm text-grey-medium">
                      <span className="text-navy-medium mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="text-navy-medium font-semibold hover:text-navy-dark flex items-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-grey-light">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-8 text-center">
              Our Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understand your needs' },
                { step: '02', title: 'Strategy', desc: 'Design the solution' },
                { step: '03', title: 'Implementation', desc: 'Build and deploy' },
                { step: '04', title: 'Optimization', desc: 'Monitor and improve' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-navy-medium mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold text-navy-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-grey-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-xl text-grey-cool mb-8 max-w-2xl mx-auto">
            Let's discuss which automation services are right for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-navy-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-grey-cool transition-colors"
          >
            <span>Get Started</span>
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
