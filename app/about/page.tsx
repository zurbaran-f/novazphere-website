import Link from 'next/link'
import { FiArrowRight, FiTarget, FiEye, FiHeart } from 'react-icons/fi'

export const metadata = {
  title: 'About Us | NovaZphere Solutions',
  description: 'Learn about NovaZphere Solutions - our mission, values, and commitment to helping businesses transform through automation.',
}

export default function AboutPage() {
  const values = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: <FiEye className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We stay at the forefront of automation technology, bringing cutting-edge solutions to our clients.',
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Partnership',
      description: 'We build lasting partnerships with our clients, supporting their success every step of the way.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark to-navy-medium text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About NovaZphere Solutions</h1>
          <p className="text-xl text-grey-cool max-w-3xl">
            Breaking Barriers, Building Futures
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-grey-medium space-y-4">
              <p>
                NovaZphere Solutions was founded with a clear vision: to help businesses break
                through operational barriers and build sustainable, automated futures. We recognized
                that many companies struggle with manual, repetitive processes that consume valuable
                time and resources while limiting growth potential.
              </p>
              <p>
                Our team of automation experts brings years of experience in process optimization,
                workflow automation, and custom solution development. We've helped dozens of
                companies across various industries transform their operations, reduce costs, and
                scale efficiently.
              </p>
              <p>
                Today, NovaZphere Solutions stands as a trusted partner for businesses seeking to
                leverage automation technology to gain competitive advantages and drive measurable
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-grey-light">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-12 text-center">
              Our Mission & Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-8 text-center">
                  <div className="text-navy-medium mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-navy-dark mb-3">{value.title}</h3>
                  <p className="text-grey-medium">{value.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy-dark mb-4">Our Mission</h3>
              <p className="text-lg text-grey-medium mb-4">
                To empower businesses with intelligent automation solutions that drive efficiency,
                reduce costs, and enable sustainable growth. We are committed to breaking down
                barriers that prevent companies from reaching their full potential.
              </p>
              <h3 className="text-2xl font-bold text-navy-dark mb-4 mt-8">Our Vision</h3>
              <p className="text-lg text-grey-medium">
                To be the leading provider of business automation services, recognized for our
                innovation, expertise, and unwavering commitment to client success. We envision
                a future where every business can operate at peak efficiency through intelligent
                automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-8 text-center">
              Why Choose NovaZphere Solutions?
            </h2>
            <div className="space-y-6">
              <div className="bg-grey-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-dark mb-2">Proven Expertise</h3>
                <p className="text-grey-medium">
                  Our team brings years of experience in automation, process optimization, and
                  custom solution development across multiple industries.
                </p>
              </div>
              <div className="bg-grey-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-dark mb-2">Custom Solutions</h3>
                <p className="text-grey-medium">
                  We don't believe in one-size-fits-all. Every solution is tailored to your
                  specific business needs, challenges, and goals.
                </p>
              </div>
              <div className="bg-grey-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-dark mb-2">Measurable Results</h3>
                <p className="text-grey-medium">
                  We focus on delivering quantifiable results. Our clients typically see 30% cost
                  reductions and significant efficiency improvements.
                </p>
              </div>
              <div className="bg-grey-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-dark mb-2">Ongoing Support</h3>
                <p className="text-grey-medium">
                  Our partnership doesn't end at implementation. We provide ongoing support,
                  optimization, and updates to ensure your automation continues to deliver value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-dark text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-grey-cool mb-8 max-w-2xl mx-auto">
            Let's discuss how NovaZphere Solutions can help transform your business operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-navy-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-grey-cool transition-colors"
          >
            <span>Contact Us</span>
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
