import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/about/our-story', label: 'Our Story' },
      { href: '/about/team', label: 'Team' },
      { href: '/careers', label: 'Careers' },
    ],
    services: [
      { href: '/services', label: 'Services' },
      { href: '/services/process-automation', label: 'Process Automation' },
      { href: '/services/workflow-optimization', label: 'Workflow Optimization' },
      { href: '/services/rpa', label: 'RPA' },
    ],
    resources: [
      { href: '/resources', label: 'Resources' },
      { href: '/blog', label: 'Blog' },
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/resources/whitepapers', label: 'Whitepapers' },
    ],
    legal: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
      { href: '/cookie-policy', label: 'Cookie Policy' },
      { href: '/sitemap', label: 'Sitemap' },
    ],
  }

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-40 h-12">
                <Image
                  src="/Color-logo.png"
                  alt="NovaZphere Solutions Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-grey-cool mb-4 text-sm leading-relaxed">
              Breaking Barriers, Building Futures. NovaZphere Solutions provides expert business automation services to help companies streamline operations, reduce costs, and scale efficiently.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/novazphere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-cool hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/novazphere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-cool hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://facebook.com/novazphere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-cool hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-grey-cool hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-grey-cool hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-grey-cool hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-grey-cool hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-navy-medium pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <FiMail className="text-navy-medium flex-shrink-0" size={20} />
              <a
                href="mailto:info@novazphere.com"
                className="text-grey-cool hover:text-white text-sm transition-colors"
              >
                info@novazphere.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FiPhone className="text-navy-medium flex-shrink-0" size={20} />
              <a
                href="tel:+1234567890"
                className="text-grey-cool hover:text-white text-sm transition-colors"
              >
                +1 (234) 567-8900
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FiMapPin className="text-navy-medium flex-shrink-0" size={20} />
              <span className="text-grey-cool text-sm">
                123 Business Ave, Suite 100, City, State 12345
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-medium pt-6 text-center">
          <p className="text-grey-cool text-sm">
            © {currentYear} NovaZphere Solutions LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
