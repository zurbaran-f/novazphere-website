import Link from 'next/link'
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi'

export const metadata = {
  title: 'Blog & Insights | NovaZphere Solutions',
  description: 'Latest articles on business automation, process optimization, and industry insights from NovaZphere Solutions.',
}

export default function BlogPage() {
  const posts = [
    {
      title: 'The Future of Business Automation: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the automation landscape and how they can benefit your business.',
      date: 'January 15, 2024',
      author: 'NovaZphere Team',
      category: 'Automation Trends',
      href: '/blog/future-of-automation-2024',
    },
    {
      title: '5 Signs Your Business Needs Process Automation',
      excerpt: 'Learn to identify when your business is ready for automation and how to get started.',
      date: 'January 10, 2024',
      author: 'NovaZphere Team',
      category: 'Best Practices',
      href: '/blog/signs-you-need-automation',
    },
    {
      title: 'ROI of Automation: Calculating Your Return on Investment',
      excerpt: 'A comprehensive guide to understanding and calculating the ROI of business automation initiatives.',
      date: 'January 5, 2024',
      author: 'NovaZphere Team',
      category: 'Industry Insights',
      href: '/blog/automation-roi-calculator',
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-navy-dark to-navy-medium text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-xl text-grey-cool max-w-3xl">
            Latest articles on automation trends, best practices, and industry insights
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white border border-grey-light rounded-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-navy-medium text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy-dark mb-3">{post.title}</h2>
                  <p className="text-grey-medium mb-4">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-grey-medium mb-4">
                    <div className="flex items-center space-x-1">
                      <FiCalendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiUser size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link
                    href={post.href}
                    className="text-navy-medium font-semibold hover:text-navy-dark flex items-center space-x-2 group"
                  >
                    <span>Read More</span>
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
