import Link from 'next/link'
import { FiArrowRight, FiFactory, FiShoppingCart, FiHeart, FiBriefcase, FiPackage } from 'react-icons/fi'

export const metadata = {
  title: 'Industry Solutions | NovaZphere Solutions',
  description: 'Industry-specific automation solutions for manufacturing, e-commerce, healthcare, professional services, and retail.',
}

export default function SolutionsPage() {
  const industries = [
    {
      icon: <FiFactory className="w-10 h-10" />,
      title: 'Manufacturing',
      description: 'Optimize production processes, inventory management, and supply chain operations.',
      href: '/solutions/manufacturing',
    },
    {
      icon: <FiShoppingCart className="w-10 h-10" />,
      title: 'E-commerce',
      description: 'Automate order processing, inventory updates, and customer service workflows.',
      href: '/solutions/ecommerce',
    },
    {
      icon: <FiHeart className="w-10 h-10" />,
      title: 'Healthcare',
      description: 'Streamline patient records, appointment scheduling, and administrative processes.',
      href: '/solutions/healthcare',
    },
    {
      icon: <FiBriefcase className="w-10 h-10" />,
      title: 'Professional Services',
      description: 'Automate client onboarding, billing, and project management workflows.',
      href: '/solutions/professional-services',
    },
    {
      icon: <FiPackage className="w-10 h-10" />,
      title: 'Retail',
      description: 'Optimize inventory, pricing, and customer engagement processes.',
      href: '/solutions/retail',
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-navy-dark to-navy-medium text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industry Solutions</h1>
          <p className="text-xl text-grey-cool max-w-3xl">
            Tailored automation solutions designed for your specific industry
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={industry.href}
                className="bg-white border border-grey-light rounded-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 block"
              >
                <div className="text-navy-medium mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-semibold text-navy-dark mb-3">{industry.title}</h3>
                <p className="text-grey-medium mb-4">{industry.description}</p>
                <span className="text-navy-medium font-semibold flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-grey-light">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-grey-medium mb-8 max-w-2xl mx-auto">
            We work with businesses across all industries. Contact us to discuss custom solutions for your sector.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-navy-medium text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-dark transition-colors"
          >
            <span>Contact Us</span>
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
