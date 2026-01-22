import Link from 'next/link'
import { FiArrowRight, FiCheckCircle, FiZap } from 'react-icons/fi'

export const metadata = {
  title: 'Process Automation Services | NovaZphere Solutions',
  description: 'Automate repetitive business processes to reduce costs, eliminate errors, and improve efficiency. Expert process automation services.',
}

export default function ProcessAutomationPage() {
  const benefits = [
    'Reduce manual work by up to 80%',
    'Eliminate human error and improve accuracy',
    'Process tasks 24/7 without breaks',
    'Scale operations without hiring',
    'Improve compliance and audit trails',
    'Free up employees for strategic work',
  ]

  const processes = [
    'Data entry and validation',
    'Invoice processing',
    'Report generation',
    'Email and communication workflows',
    'Document management',
    'Customer onboarding',
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-navy-dark to-navy-medium text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Process Automation</h1>
          <p className="text-xl text-grey-cool max-w-3xl">
            Automate repetitive tasks and eliminate manual errors with intelligent automation solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-grey-medium mb-6">
                Process automation transforms how your business operates by eliminating repetitive,
                time-consuming manual tasks. Our automation solutions handle routine processes
                with precision and consistency, allowing your team to focus on strategic initiatives
                that drive growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-navy-dark mb-4">Key Benefits</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FiCheckCircle className="text-navy-medium flex-shrink-0 mt-1" size={20} />
                      <span className="text-grey-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-dark mb-4">Common Processes We Automate</h2>
                <ul className="space-y-3">
                  {processes.map((process, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FiZap className="text-navy-medium flex-shrink-0 mt-1" size={20} />
                      <span className="text-grey-medium">{process}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-grey-light rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-navy-dark mb-4">Our Approach</h2>
              <div className="space-y-4 text-grey-medium">
                <p>
                  We begin by analyzing your current processes to identify automation opportunities.
                  Our team designs custom automation solutions that integrate seamlessly with your
                  existing systems and workflows.
                </p>
                <p>
                  Throughout implementation, we ensure minimal disruption to your operations while
                  delivering measurable improvements in efficiency and cost reduction.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-navy-medium text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-dark transition-colors"
              >
                <span>Get Started</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
