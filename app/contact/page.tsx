'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark to-navy-medium text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-grey-cool max-w-3xl">
            Let's discuss how we can help transform your business with automation
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy-dark mb-6">Get in Touch</h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <FiCheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-grey-light rounded-lg focus:ring-2 focus:ring-navy-medium focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-grey-light rounded-lg focus:ring-2 focus:ring-navy-medium focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy-dark mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-grey-light rounded-lg focus:ring-2 focus:ring-navy-medium focus:border-transparent outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-grey-light rounded-lg focus:ring-2 focus:ring-navy-medium focus:border-transparent outline-none transition-all"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-navy-dark mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-grey-light rounded-lg focus:ring-2 focus:ring-navy-medium focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="process-automation">Process Automation</option>
                      <option value="workflow-optimization">Workflow Optimization</option>
                      <option value="data-integration">Data Integration</option>
                      <option value="custom-solutions">Custom Solutions</option>
                      <option value="rpa">RPA</option>
                      <option value="system-integration">System Integration</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-grey-light rounded-lg focus:ring-2 focus:ring-navy-medium focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your automation needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy-medium hover:bg-navy-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy-dark mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-medium text-white p-3 rounded-lg">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-dark mb-1">Email</h3>
                    <a
                      href="mailto:info@novazphere.com"
                      className="text-navy-medium hover:text-navy-dark transition-colors"
                    >
                      info@novazphere.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-medium text-white p-3 rounded-lg">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-dark mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-navy-medium hover:text-navy-dark transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-medium text-white p-3 rounded-lg">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-dark mb-1">Address</h3>
                    <p className="text-grey-medium">
                      123 Business Ave, Suite 100<br />
                      City, State 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-grey-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-dark mb-3">Business Hours</h3>
                <div className="space-y-2 text-grey-medium">
                  <p><span className="font-medium text-navy-dark">Monday - Friday:</span> 9:00 AM - 6:00 PM EST</p>
                  <p><span className="font-medium text-navy-dark">Saturday:</span> 10:00 AM - 2:00 PM EST</p>
                  <p><span className="font-medium text-navy-dark">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
