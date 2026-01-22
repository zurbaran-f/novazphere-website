import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'NovaZphere Solutions | Business Automation Services',
  description: 'Transform your business operations with NovaZphere Solutions\' expert automation services. Reduce costs by 30% and improve efficiency. Request a free consultation today.',
  keywords: 'business automation, process automation, workflow optimization, RPA, robotic process automation, business automation services',
  authors: [{ name: 'NovaZphere Solutions' }],
  openGraph: {
    title: 'NovaZphere Solutions | Business Automation Services',
    description: 'Transform your business operations with expert automation services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
