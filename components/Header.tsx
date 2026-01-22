'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    {
      href: '/services',
      label: 'Services',
      submenu: [
        { href: '/services/process-automation', label: 'Process Automation' },
        { href: '/services/workflow-optimization', label: 'Workflow Optimization' },
        { href: '/services/data-integration', label: 'Data Integration' },
        { href: '/services/custom-solutions', label: 'Custom Solutions' },
        { href: '/services/rpa', label: 'RPA' },
      ],
    },
    {
      href: '/solutions',
      label: 'Solutions',
      submenu: [
        { href: '/solutions/manufacturing', label: 'Manufacturing' },
        { href: '/solutions/ecommerce', label: 'E-commerce' },
        { href: '/solutions/healthcare', label: 'Healthcare' },
        { href: '/solutions/professional-services', label: 'Professional Services' },
      ],
    },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-dark shadow-lg'
          : 'bg-white shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-40 h-12 md:w-48 md:h-14">
              <Image
                src="/Color-logo.png"
                alt="NovaZphere Solutions Logo"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? 'text-white hover:text-grey-cool' : 'text-navy-dark hover:text-navy-medium'
                  }`}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-navy-dark hover:bg-grey-light hover:text-navy-medium transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-navy-medium hover:bg-navy-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-white' : 'text-navy-dark'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-grey-light">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 font-medium ${
                      isScrolled ? 'text-white' : 'text-navy-dark'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block py-1 text-sm ${
                            isScrolled ? 'text-grey-cool' : 'text-grey-medium'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-navy-medium text-white px-6 py-2.5 rounded-lg font-semibold text-sm text-center mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
