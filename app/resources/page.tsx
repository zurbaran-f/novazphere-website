import Link from 'next/link'
import { FiArrowRight, FiFileText, FiBook, FiVideo, FiImage } from 'react-icons/fi'

export const metadata = {
  title: 'Resources | NovaZphere Solutions',
  description: 'Access valuable resources including blog posts, whitepapers, eBooks, webinars, and automation insights.',
}

export default function ResourcesPage() {
  const resources = [
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: 'Blog & Insights',
      description: 'Latest articles on automation trends, best practices, and industry insights.',
      href: '/blog',
      count: '20+ Articles',
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: 'Whitepapers',
      description: 'In-depth guides and research on business automation strategies.',
      href: '/resources/whitepapers',
      count: '5+ Whitepapers',
    },
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: 'Webinars',
      description: 'Recorded and upcoming webinars on automation topics.',
      href: '/resources/webinars',
      count: '10+ Webinars',
    },
    {
      icon: <FiImage className="w-8 h-8" />,
      title: 'Infographics',
      description: 'Visual guides and infographics on automation benefits and processes.',
      href: '/resources/infographics',
      count: '8+ Infographics',
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-navy-dark to-navy-medium text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-grey-cool max-w-3xl">
            Valuable insights, guides, and resources to help you understand automation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="bg-white border border-grey-light rounded-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 block"
              >
                <div className="text-navy-medium mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-navy-dark mb-2">{resource.title}</h3>
                <p className="text-grey-medium text-sm mb-4">{resource.description}</p>
                <div className="text-navy-medium text-sm font-semibold mb-4">{resource.count}</div>
                <span className="text-navy-medium font-semibold flex items-center space-x-2 group text-sm">
                  <span>Explore</span>
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
            Stay Updated
          </h2>
          <p className="text-xl text-grey-medium mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest automation insights and resources.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-navy-medium text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-dark transition-colors"
          >
            <span>Subscribe</span>
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
