import Link from 'next/link'
import { FiArrowRight, FiTrendingUp, FiDollarSign, FiClock } from 'react-icons/fi'

export const metadata = {
  title: 'Case Studies | NovaZphere Solutions',
  description: 'Explore success stories from businesses that transformed their operations with NovaZphere automation solutions.',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Manufacturing Company Reduces Costs by 35%',
      industry: 'Manufacturing',
      challenge: 'Manual data entry and inventory management consuming 20+ hours weekly',
      solution: 'Automated inventory tracking and data synchronization',
      results: [
        '35% reduction in operational costs',
        '80% reduction in manual data entry time',
        '99.9% accuracy in inventory tracking',
      ],
      metrics: { cost: '35%', time: '80%', accuracy: '99.9%' },
    },
    {
      title: 'E-commerce Business Scales 3x Without Additional Staff',
      industry: 'E-commerce',
      challenge: 'Order processing bottlenecks limiting growth potential',
      solution: 'End-to-end order processing automation',
      results: [
        '3x order processing capacity',
        'Zero additional staff required',
        '50% faster order fulfillment',
      ],
      metrics: { capacity: '3x', staff: '0', speed: '50%' },
    },
    {
      title: 'Healthcare Provider Improves Patient Experience',
      industry: 'Healthcare',
      challenge: 'Administrative tasks reducing time for patient care',
      solution: 'Automated appointment scheduling and records management',
      results: [
        '40% reduction in administrative time',
        '95% patient satisfaction score',
        '30% increase in appointment capacity',
      ],
      metrics: { time: '40%', satisfaction: '95%', capacity: '30%' },
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-navy-dark to-navy-medium text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-grey-cool max-w-3xl">
            Real results from businesses that transformed their operations
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white border border-grey-light rounded-lg p-8 lg:p-12 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <span className="inline-block bg-navy-medium text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-navy-dark mb-6">{study.title}</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-dark mb-2">The Challenge</h3>
                    <p className="text-grey-medium">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-dark mb-2">Our Solution</h3>
                    <p className="text-grey-medium">{study.solution}</p>
                  </div>
                </div>

                <div className="bg-grey-light rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-navy-dark mb-4">Key Results</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    {Object.entries(study.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold text-navy-medium mb-1">{value}</div>
                        <div className="text-sm text-grey-medium capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {study.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-start space-x-2 text-grey-medium">
                        <FiTrendingUp className="text-navy-medium flex-shrink-0 mt-1" size={16} />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-xl text-grey-cool mb-8 max-w-2xl mx-auto">
            Let's discuss how automation can transform your business operations.
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
